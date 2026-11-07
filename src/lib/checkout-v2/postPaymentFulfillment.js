/* eslint-disable @typescript-eslint/no-require-imports */
const { chooseExactCombination } = require("./preorderAlgorithm");
const { FIXED_PRODUCTS } = require("./catalog");
const { upsertPaymentLinkOrder, getPreorderByCheckoutSessionId } = require("./supabaseService");

const MIN_AMOUNT_CENTS = 500;
const MAX_AMOUNT_CENTS = 20000;
const SYSTEM_MODEL = "payment-link-postpay-v1";

function assertEligiblePaymentLinkSession(session, allowedPaymentLinkIds = []) {
  const paymentLinkId = typeof session.payment_link === "string" ? session.payment_link : session.payment_link?.id;
  if (!paymentLinkId || !allowedPaymentLinkIds.includes(paymentLinkId)) {
    const error = new Error("Checkout Session does not belong to an approved permanent Payment Link");
    error.code = "UNAPPROVED_PAYMENT_LINK";
    throw error;
  }
  if (session.payment_status !== "paid") return false;
  if (session.currency !== "usd") throw new Error("Only USD Payment Link sessions are supported");
  return true;
}

function validatePostPaymentAmount(amountCents) {
  return Number.isInteger(amountCents)
    && amountCents >= MIN_AMOUNT_CENTS
    && amountCents <= MAX_AMOUNT_CENTS;
}

async function originalPaidLine(session, stripe) {
  const pi = await stripe.paymentIntents.retrieve(
    typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent.id,
    { expand: ["latest_charge"] }
  );
  const charge = pi.latest_charge;
  if (!charge || typeof charge !== "object" || !charge.paid) throw new Error("Cannot verify original charge");
  if (charge.refunded || charge.amount_refunded > 0) return null;
  if (pi.amount_received !== session.amount_total || pi.currency !== "usd") throw new Error("Original payment does not match session");
  const lines = await stripe.checkout.sessions.listLineItems(session.id, { limit: 2 });
  const line = lines.data[0];
  if (lines.has_more || lines.data.length !== 1 || line.quantity !== 1 || line.amount_total !== session.amount_total || line.amount_subtotal !== line.amount_total || !line.price?.product) throw new Error("Cannot reconcile original Payment Link line");
  const product = typeof line.price.product === "string" ? line.price.product : line.price.product.id;
  return { hash: "original:" + session.id, items: [{ name: line.description, product, unitAmountCents: line.amount_total, stripePriceId: line.price.id }] };
}

async function createAndAttachDetailedInvoice({ session, selected, stripe }) {
  const customer = typeof session.customer === "string" ? session.customer : session.customer?.id;
  const paymentIntent = typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id;
  if (!customer || !paymentIntent) throw new Error("Paid session requires Customer and PaymentIntent");
  const metadata = {
    system_model: SYSTEM_MODEL,
    checkout_session_id: session.id,
    payment_intent_id: paymentIntent,
    combination_hash: selected.hash,
  };
  const invoice = await stripe.invoices.create(
    { customer, collection_method: "charge_automatically", auto_advance: false, metadata },
    { idempotencyKey: `postpay-invoice-${session.id}` },
  );
  for (const item of selected.items) {
    await stripe.invoiceItems.create(
      { customer, invoice: invoice.id, ...(item.product ? { price_data: { currency: "usd", product: item.product, unit_amount: item.unitAmountCents } } : { pricing: { price: item.stripePriceId } }), quantity: 1, metadata },
      { idempotencyKey: `postpay-item-${session.id}-${item.stripePriceId}` },
    );
  }
  const finalized = await stripe.invoices.finalizeInvoice(invoice.id, {}, { idempotencyKey: `postpay-finalize-${session.id}` });
  await stripe.invoices.attachPayment(finalized.id, { payment_intent: paymentIntent }, { idempotencyKey: `postpay-attach-${session.id}` });
  const paidInvoice = await stripe.invoices.retrieve(finalized.id);
  if (paidInvoice.status !== "paid" || paidInvoice.amount_remaining !== 0) {
    throw new Error(`Detailed Invoice ${paidInvoice.id} was not fully credited by the original payment`);
  }
  return paidInvoice;
}

async function fulfillPaidPaymentLinkSession(session, stripe, options = {}) {
  const persist = options.persist || upsertPaymentLinkOrder;
  if (!assertEligiblePaymentLinkSession(session, options.allowedPaymentLinkIds || [])) return { ignored: true };
  if (!validatePostPaymentAmount(session.amount_total)) {
    throw new Error("Paid amount outside approved range; requires review without refund");
  }
  let selected;
  if (session.amount_total % 100 !== 0) {
    const existing = await (options.lookup || getPreorderByCheckoutSessionId)(session.id);
    if (existing?.stripe_invoice_id) return { status: existing.status, invoice: { id: existing.stripe_invoice_id } };
    selected = await originalPaidLine(session, stripe);
    if (!selected) return { ignored: true, reason: "already_refunded" };
  } else {
    selected = chooseExactCombination(session.amount_total, options.usedHashes || [], 5, options.products || FIXED_PRODUCTS);
  }
  if (!selected) throw new Error(`Approved catalog cannot represent ${session.amount_total} cents`);
  await persist(session, { status: "allocating", line_items: selected.items, combination_hash: selected.hash });
  const invoice = await createAndAttachDetailedInvoice({ session, selected, stripe });
  await persist(session, { status: "delivery_pending", line_items: selected.items, combination_hash: selected.hash, stripe_invoice_id: invoice.id });
  return { status: "delivery_pending", invoice, selected };
}

module.exports = {
  MIN_AMOUNT_CENTS,
  MAX_AMOUNT_CENTS,
  SYSTEM_MODEL,
  assertEligiblePaymentLinkSession,
  validatePostPaymentAmount,
  createAndAttachDetailedInvoice,
  fulfillPaidPaymentLinkSession,
};
