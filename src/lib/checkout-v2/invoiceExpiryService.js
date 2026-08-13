/* eslint-disable @typescript-eslint/no-require-imports */
const { stripe } = require("./stripeService");
const { listExpiredPaymentPreorders, updatePreorderStatus } = require("./supabaseService");

async function expireOpenSessions(now = new Date()) {
  const preorders = await listExpiredPaymentPreorders(now.toISOString());
  const results = [];
  for (const preorder of preorders) {
    try {
      const session = await stripe.checkout.sessions.retrieve(preorder.stripe_checkout_session_id);
      if (session.status === "open") await stripe.checkout.sessions.expire(session.id);
      if (session.payment_status !== "paid") await updatePreorderStatus(preorder.id, "abandoned", { expired_at: now.toISOString() });
      results.push({ preorderId: preorder.id, sessionId: session.id, status: "expired" });
    } catch (error) {
      results.push({ preorderId: preorder.id, sessionId: preorder.stripe_checkout_session_id, status: "failed", error: error.message });
    }
  }
  return results;
}

module.exports = { expireOpenSessions };
