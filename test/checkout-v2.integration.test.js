/* eslint-disable @typescript-eslint/no-require-imports */
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

process.env.STRIPE_SECRET_KEY ||= "sk_test_configured";
process.env.SUPABASE_URL ||= "https://example.supabase.co";
process.env.SUPABASE_SERVICE_ROLE_KEY ||= "server-secret-placeholder-value";

const root = path.resolve(__dirname, "..");
const runtime = path.join(root, "src", "lib", "checkout-v2");
const paymentAssets = path.join(root, "public", "checkout-v2");
const { FIXED_PRODUCTS } = require(path.join(runtime, "catalog"));
const { chooseExactCombination } = require(path.join(runtime, "preorderAlgorithm"));
const { createSessionForPreorder, validateCheckoutRequest, ACCEPTANCE_TEXT, ACCEPTANCE_VERSION } = require(path.join(runtime, "checkoutService"));

test("approved catalog contains 37 unique owned products and prices on the exact ladder", () => {
  assert.equal(FIXED_PRODUCTS.length, 37);
  assert.equal(new Set(FIXED_PRODUCTS.map((item) => item.name)).size, 37);
  assert.equal(new Set(FIXED_PRODUCTS.map((item) => item.stripeProductId)).size, 37);
  assert.equal(new Set(FIXED_PRODUCTS.map((item) => item.stripePriceId)).size, 37);
  const counts = Object.fromEntries([...new Set(FIXED_PRODUCTS.map((item) => item.price))].map((price) => [price, FIXED_PRODUCTS.filter((item) => item.price === price).length]));
  assert.deepEqual(counts, {
    6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1,
    16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1,
    26: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1, 33: 1, 34: 1, 35: 1,
    43: 1, 44: 1, 45: 1, 46: 1, 47: 1, 48: 1, 49: 1,
  });
  assert.ok(FIXED_PRODUCTS.every((item) => item.taxCode === "txcd_20060048"));
});

test("$195 uses a balanced five-service combination from the microservice ladder", () => {
  const selected = chooseExactCombination(19500, [], 5);
  assert.ok(selected);
  assert.equal(selected.items.length, 5);
  assert.equal(selected.items.reduce((sum, item) => sum + item.unitAmountCents, 0), 19500);
  assert.ok(selected.items.every((item) => item.unitAmountCents >= 600 && item.unitAmountCents <= 4900));
  assert.equal(new Set(selected.items.map((item) => item.stripePriceId)).size, 5);
});

test("checkout request enforces both independent acceptances", () => {
  assert.throws(() => validateCheckoutRequest({ amount: 50, name: "Test User", email: "test@example.com", termsAccepted: false, workApproved: true }), /Terms/);
  assert.throws(() => validateCheckoutRequest({ amount: 50, name: "Test User", email: "test@example.com", termsAccepted: true, workApproved: false }), /Work approval/);
  assert.equal(ACCEPTANCE_VERSION, "work-approval-v2");
  assert.match(ACCEPTANCE_TEXT, /authorize this payment/);
});

test("Checkout Session contract uses Elements, exact lines, invoice creation, and no manual payment methods", async () => {
  let captured;
  const mockStripe = { checkout: { sessions: { create: async (payload) => { captured = payload; return { id: "cs_test_contract", client_secret: "cs_secret_contract", amount_total: 5000 }; } } } };
  const selected = chooseExactCombination(5000, [], 5);
  await createSessionForPreorder({ customer: { id: "cus_contract" }, preorder: { id: "preorder-contract" }, selected, expiresAt: Math.floor(Date.now() / 1000) + 1800, policyVersion: "2026-08-13", amountCents: 5000, baseUrl: "https://www.awgotravel.com" }, mockStripe);
  assert.equal(captured.mode, "payment");
  assert.equal(captured.ui_mode, "elements");
  assert.deepEqual(captured.managed_payments, { enabled: false });
  assert.deepEqual(captured.invoice_creation, { enabled: true });
  assert.equal(captured.line_items.length, selected.items.length);
  assert.ok(captured.line_items.every((item) => item.quantity === 1));
  assert.equal(captured.payment_method_types, undefined);
  assert.equal(captured.payment_method_options, undefined);
  assert.equal(captured.payment_method_configuration, undefined);
  assert.equal(captured.invoice_creation.invoice_data, undefined);
  assert.match(captured.return_url, /^https:\/\/www\.awgotravel\.com\/pay\/success/);
});

test("payment pages preserve the approved Stripe-style flow and policies", () => {
  const pay = fs.readFileSync(path.join(paymentAssets, "pay.html"), "utf8");
  const checkout = fs.readFileSync(path.join(paymentAssets, "checkout.html"), "utf8");
  const success = fs.readFileSync(path.join(paymentAssets, "success.html"), "utf8");
  assert.match(pay, /AW Go Travel/);
  assert.match(pay, /0,00 US\$/);
  assert.match(pay, /Pay with Cash App/);
  assert.match(pay, /A QR code will appear/);
  assert.match(pay, /Powered by <b>stripe<\/b>/);
  assert.match(pay, /initCheckoutElementsSdk/);
  assert.match(pay, /id="terms"/);
  assert.match(pay, /id="work-approved"/);
  assert.match(pay, /<details class="consent-details">/);
  assert.match(pay, /href="\/terms"/);
  assert.match(pay, /href="\/privacy"/);
  assert.match(pay, /href="\/refund-policy"/);
  assert.match(checkout, /theme:'stripe'/);
  assert.doesNotMatch(checkout, /theme\s*:\s*['"]night/i);
  assert.match(checkout, /initCheckoutElementsSdk/);
  assert.match(success, /\/api\/checkout\/status/);
});

test("schema, webhook, scheduler endpoint, and rewrites are present", () => {
  const schema = fs.readFileSync(path.join(root, "supabase", "migrations", "20260813120000_checkout_v2.sql"), "utf8");
  const webhook = fs.readFileSync(path.join(root, "src", "app", "api", "stripe", "webhook", "route.js"), "utf8");
  const expiry = fs.readFileSync(path.join(root, "src", "app", "api", "internal", "expire-sessions", "route.js"), "utf8");
  const config = fs.readFileSync(path.join(root, "next.config.ts"), "utf8");
  for (const table of ["preorders", "order_evidence", "disputes", "webhook_events"]) assert.match(schema, new RegExp(`create table if not exists ${table}`));
  for (const event of ["checkout.session.completed", "checkout.session.async_payment_succeeded", "checkout.session.expired", "payment_intent.processing", "charge.refunded", "charge.dispute.created", "charge.dispute.updated", "charge.dispute.closed"]) assert.match(webhook, new RegExp(event.replaceAll(".", "\\.")));
  assert.match(expiry, /Bearer/);
  for (const route of ["/pay", "/pay/checkout", "/pay/success"]) assert.match(config, new RegExp(route.replaceAll("/", "\\/")));
});
