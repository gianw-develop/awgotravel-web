/* eslint-disable @typescript-eslint/no-require-imports */
const test = require("node:test");
const assert = require("node:assert/strict");
const { FIXED_PRODUCTS } = require("../src/lib/checkout-v2/catalog");
const { chooseExactCombination } = require("../src/lib/checkout-v2/preorderAlgorithm");
const { validatePostPaymentAmount, fulfillPaidPaymentLinkSession } = require("../src/lib/checkout-v2/postPaymentFulfillment");

test("the 37-service travel ladder represents every whole USD amount from $5-$200", () => {
  assert.equal(FIXED_PRODUCTS.length, 37);
  for (let amount = 5; amount <= 200; amount += 1) {
    assert.ok(chooseExactCombination(amount * 100, [], 5), `missing $${amount}`);
  }
});

test("post-payment validation accepts cents and rejects out-of-range totals", () => {
  assert.equal(validatePostPaymentAmount(600), true);
  assert.equal(validatePostPaymentAmount(20000), true);
  assert.equal(validatePostPaymentAmount(601), true);
  assert.equal(validatePostPaymentAmount(500), true);
  assert.equal(validatePostPaymentAmount(499), false);
});

test("an approved paid link attaches its original payment to the itemized invoice", async () => {
  const attached = [];
  const invoiceItems = [];
  const stripe = {
    invoices: {
      create: async () => ({ id: "in_1" }),
      finalizeInvoice: async () => ({ id: "in_1" }),
      attachPayment: async (id, body) => attached.push([id, body]),
      retrieve: async () => ({ id: "in_1", status: "paid", amount_remaining: 0 }),
    },
    invoiceItems: { create: async (body) => { invoiceItems.push(body); return { id: "ii_1" }; } },
  };
  const persisted = [];
  const session = { id: "cs_1", payment_link: "plink_ok", payment_status: "paid", currency: "usd", amount_total: 8000, customer: "cus_1", payment_intent: "pi_1", created: 1 };
  const result = await fulfillPaidPaymentLinkSession(session, stripe, { allowedPaymentLinkIds: ["plink_ok"], persist: async (_session, fields) => persisted.push(fields) });
  assert.equal(result.status, "delivery_pending");
  assert.match(invoiceItems[0].pricing.price, /^price_/);
  assert.equal("price" in invoiceItems[0], false);
  assert.deepEqual(attached, [["in_1", { payment_intent: "pi_1" }]]);
  assert.equal(persisted.at(-1).stripe_invoice_id, "in_1");
});
for (const total of [501,1580,2010,19999]) test("cent payment retained and invoiced exactly: " + total, async () => {
  const session = { id: "cs_cent", payment_link: "plink_test", payment_status: "paid", currency: "usd", amount_total: total, customer: "cus_test", payment_intent: "pi_test" };
  let stored, attached = 0, items = 0, refunded = false;
  const stripe = {
    paymentIntents: { retrieve: async () => ({ latest_charge: { paid: true, refunded, amount_refunded: refunded ? total : 0 }, amount_received: total, currency: "usd" }) },
    checkout: { sessions: { listLineItems: async () => ({ data: [{ price: { product: "prod_original", id: "price_open" }, description: "Original service", quantity: 1, amount_total: total, amount_subtotal: total }] }) } },
    invoices: { create: async () => ({ id: "in_test" }), finalizeInvoice: async () => ({ id: "in_test" }), attachPayment: async (_, p) => { assert.equal(p.payment_intent, "pi_test"); attached++; }, retrieve: async () => ({ id: "in_test", status: "paid", amount_remaining: 0 }) },
    invoiceItems: { create: async (p) => { assert.deepEqual(p.price_data, { currency: "usd", product: "prod_original", unit_amount: total }); items++; } }
  };
  const options = { allowedPaymentLinkIds: ["plink_test"], persist: async (_, p) => { stored = p; }, lookup: async () => stored };
  await fulfillPaidPaymentLinkSession(session, stripe, options);
  await fulfillPaidPaymentLinkSession(session, stripe, options);
  assert.equal(attached, 1); assert.equal(items, 1);
  stored = null; refunded = true;
  assert.equal((await fulfillPaidPaymentLinkSession(session, stripe, options)).ignored, true);
  assert.equal(items, 1);
});
