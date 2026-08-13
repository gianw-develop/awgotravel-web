import stripeService from "@/lib/checkout-v2/stripeService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const { stripe } = stripeService;

export async function GET(request) {
  const sessionId = new URL(request.url).searchParams.get("session_id") || "";
  if (!sessionId.startsWith("cs_")) return Response.json({ error: "Invalid Checkout Session" }, { status: 400 });
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paymentStatus = session.payment_status === "paid" ? "paid" : session.status === "expired" ? "expired" : "incomplete";
    return Response.json({ status: session.status, paymentStatus, amountTotal: session.amount_total, currency: session.currency, expiresAt: session.expires_at });
  } catch { return Response.json({ error: "Checkout Session not found" }, { status: 404 }); }
}
