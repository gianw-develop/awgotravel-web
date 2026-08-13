/* eslint-disable @typescript-eslint/no-require-imports */
const { stripe, findOrCreateStripeCustomer } = require("./stripeService");
const { chooseExactCombination, nearbySupportedAmounts } = require("./preorderAlgorithm");
const { createPreorder, getUsedPreorderHashes, updatePreorderCustomer, updatePreorderPayment, updatePreorderStatus } = require("./supabaseService");

const MIN_AMOUNT_CENTS = Number(process.env.MIN_CHECKOUT_AMOUNT_CENTS || 500);
const MAX_AMOUNT_CENTS = Number(process.env.MAX_CHECKOUT_AMOUNT_CENTS || 20000);
const PAYMENT_TTL_MINUTES = Number(process.env.CHECKOUT_TTL_MINUTES || 30);
const ACCEPTANCE_VERSION = process.env.ACCEPTANCE_VERSION || "work-approval-v2";
const ACCEPTANCE_TEXT = "I confirm that the agreed work was presented to me, that I approved it, and that I authorize this payment.";
const CATALOG_VERSION = "awgotravel-checkout-v1";

function paymentExpiryUnix(ttlMinutes = PAYMENT_TTL_MINUTES, nowMs = Date.now()) {
  return Math.floor(nowMs / 1000) + Math.max(Number(ttlMinutes) || 30, 30) * 60;
}

function assertUniqueCheckoutItems(items) {
  const priceIds = items.map((item) => item.stripePriceId);
  if (!items.length || items.some((item) => item.quantity !== 1) || new Set(priceIds).size !== priceIds.length) {
    throw new Error("Checkout blocked: every service must be unique with quantity 1");
  }
}

function validateCheckoutRequest(input) {
  const amountCents = Math.round(Number(input.amount) * 100);
  const name = String(input.name || "").trim();
  const email = String(input.email || "").trim().toLowerCase();
  const invalid = (message) => { const error = new Error(message); error.code = "INVALID_REQUEST"; throw error; };
  if (!Number.isFinite(amountCents) || amountCents < MIN_AMOUNT_CENTS || amountCents > MAX_AMOUNT_CENTS) invalid(`Amount must be between $${MIN_AMOUNT_CENTS / 100} and $${MAX_AMOUNT_CENTS / 100}`);
  if (Math.round(amountCents) !== amountCents) invalid("Amount has invalid precision");
  if (name.length < 2 || name.length > 120) invalid("A valid full name is required");
  if (!/^\S+@\S+\.\S+$/.test(email)) invalid("A valid email is required");
  if (input.termsAccepted !== true) invalid("Terms must be accepted");
  if (input.workApproved !== true) invalid("Work approval and payment authorization are required");
  return { amountCents, name, email };
}

function resolvePublicBaseUrl(requestContext = {}, env = process.env) {
  const raw = env.PUBLIC_BASE_URL || requestContext.baseUrl;
  const live = String(env.STRIPE_SECRET_KEY || "").startsWith("sk_live_");
  if (!raw) {
    if (live) throw new Error("PUBLIC_BASE_URL is required when Stripe Live is enabled");
    return "http://localhost:3000";
  }
  const baseUrl = new URL(String(raw)).origin;
  if (live && !baseUrl.startsWith("https://")) throw new Error("PUBLIC_BASE_URL must use HTTPS when Stripe Live is enabled");
  return baseUrl;
}

function buildTransactionMetadata({ preorder, selected, amountCents }) {
  const names = selected.items.map((item) => String(item.name || item.id || item.stripePriceId));
  return {
    preorder_id: preorder.id,
    catalog_version: CATALOG_VERSION,
    service_count: String(selected.items.length),
    service_names: names.join(", ").slice(0, 500),
    combination_hash: selected.hash,
    amount_cents: String(amountCents),
    currency: "usd",
    price_ids: selected.items.map((item) => item.stripePriceId).join(",").slice(0, 500),
    ...Object.fromEntries(names.map((name, index) => [`service_${index + 1}`, name.slice(0, 500)])),
  };
}

async function createSessionForPreorder({ customer, preorder, selected, expiresAt, policyVersion, amountCents, baseUrl }, stripeClient = stripe) {
  const metadata = buildTransactionMetadata({ preorder, selected, amountCents });
  const session = await stripeClient.checkout.sessions.create({
    mode: "payment",
    ui_mode: "elements",
    managed_payments: { enabled: false },
    customer: customer.id,
    line_items: selected.items.map((item) => ({ price: item.stripePriceId, quantity: 1 })),
    invoice_creation: { enabled: true },
    payment_intent_data: { description: `Services: ${metadata.service_names}`, metadata },
    metadata: { ...metadata, policy_version: policyVersion, expires_at: String(expiresAt), system_model: "checkout-v2-session-elements" },
    return_url: `${baseUrl}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
    expires_at: expiresAt,
  }, { idempotencyKey: `preorder-session-${preorder.id}` });
  if (!session.client_secret) throw new Error(`Stripe Checkout Session ${session.id} has no client secret`);
  if (session.amount_total !== null && session.amount_total !== amountCents) throw new Error(`Stripe Checkout Session ${session.id} has the wrong total`);
  return session;
}

async function createCheckout(input, requestContext = {}) {
  const live = String(process.env.STRIPE_SECRET_KEY || "").startsWith("sk_live_");
  if (live && process.env.ALLOW_LIVE_CHECKOUT !== "true") throw new Error("Live Checkout is disabled until final approval");
  const { amountCents, name, email } = validateCheckoutRequest(input);
  const selected = chooseExactCombination(amountCents, await getUsedPreorderHashes(amountCents), 5);
  if (!selected) {
    const error = new Error("This amount is not available"); error.code = "UNSUPPORTED_AMOUNT";
    error.suggestions = nearbySupportedAmounts(amountCents).map((value) => value / 100); throw error;
  }
  assertUniqueCheckoutItems(selected.items);
  const policyVersion = process.env.POLICY_VERSION || "2026-08-10";
  const preorder = await createPreorder({ customerEmail: email, customerName: name, stripeCustomerId: null, amountCents, currency: "usd", lineItems: selected.items, combinationHash: selected.hash, policyVersion, acceptanceVersion: ACCEPTANCE_VERSION, acceptanceText: ACCEPTANCE_TEXT, acceptedAt: new Date().toISOString(), customerIp: requestContext.ip || null, userAgent: requestContext.userAgent || null });
  try {
    const customer = await findOrCreateStripeCustomer({ email, name, phone: null });
    await updatePreorderCustomer(preorder.id, customer.id);
    const baseUrl = resolvePublicBaseUrl(requestContext);
    const expiresAt = paymentExpiryUnix();
    const session = await createSessionForPreorder({ customer, preorder, selected, expiresAt, policyVersion, amountCents, baseUrl });
    const checkoutPath = `/pay/checkout?session_id=${encodeURIComponent(session.id)}`;
    await updatePreorderPayment(preorder.id, { stripeCheckoutSessionId: session.id, paymentUrl: `${baseUrl}${checkoutPath}`, expiresAt: new Date(expiresAt * 1000).toISOString() });
    return { preorderId: preorder.id, checkoutPath, stripeCheckoutSessionId: session.id, expiresAt, amountCents };
  } catch (error) {
    await updatePreorderStatus(preorder.id, "setup_failed", { failure_reason: String(error.message || error).slice(0, 500) });
    throw error;
  }
}

module.exports = { createCheckout, createSessionForPreorder, validateCheckoutRequest, assertUniqueCheckoutItems, resolvePublicBaseUrl, paymentExpiryUnix, buildTransactionMetadata, ACCEPTANCE_VERSION, ACCEPTANCE_TEXT };
