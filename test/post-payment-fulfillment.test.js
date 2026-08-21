/* eslint-disable @typescript-eslint/no-require-imports */
const test = require("node:test");
const assert = require("node:assert/strict");
const { FIXED_PRODUCTS } = require("../src/lib/checkout-v2/catalog");
const { chooseExactCombination } = require("../src/lib/checkout-v2/preorderAlgorithm");
const { validatePostPaymentAmount, fulfillPaidPaymentLinkSession } = require("../src/lib/checkout-v2/postPaymentFulfillment");

test("the 37-service travel ladder represents every whole USD amount from $6-$200", () => {
  assert.equal(FIXED_PRODUCTS.length, 37);
  for (let amount = 6; amount <= 200; amount += 1) {
    assert.ok(chooseExactCombination(amount * 100, [], 5), `missing $${amount}`);
  }
});

test("post-payment validation rejects cents and out-of-range totals", () => {
  assert.equal(validatePostPaymentAmount(600), true);
  assert.equal(validatePostPaymentAmount(20000), true);
  assert.equal(validatePostPaymentAmount(601), false);
  assert.equal(validatePostPaymentAmount(500), false);
});

test("an approved paid link attaches its original payment to the itemized invoice", async () => {
  const attached = [];
  const stripe = {
    invoices: {
      create: async () => ({ id: "in_1" }),
      finalizeInvoice: async () => ({ id: "in_1" }),
      attachPayment: async (id, body) => attached.push([id, body]),
      retrieve: async () => ({ id: "in_1", status: "paid", amount_remaining: 0 }),
    },
    invoiceItems: { create: async () => ({ id: "ii_1" }) },
  };
  const persisted = [];
  const session = { id: "cs_1", payment_link: "plink_ok", payment_status: "paid", currency: "usd", amount_total: 8000, customer: "cus_1", payment_intent: "pi_1", created: 1 };
  const result = await fulfillPaidPaymentLinkSession(session, stripe, { allowedPaymentLinkIds: ["plink_ok"], persist: async (_session, fields) => persisted.push(fields) });
  assert.equal(result.status, "delivery_pending");
  assert.deepEqual(attached, [["in_1", { payment_intent: "pi_1" }]]);
  assert.equal(persisted.at(-1).stripe_invoice_id, "in_1");
});
