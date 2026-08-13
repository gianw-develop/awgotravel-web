import stripeService from "@/lib/checkout-v2/stripeService";
import webhookHandlers from "@/lib/checkout-v2/checkoutWebhookHandler";
import supabaseService from "@/lib/checkout-v2/supabaseService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const { stripe } = stripeService;
const { handleCheckoutSessionPaid, handleCheckoutSessionExpired, handlePaymentIntentProcessing, handleChargeRefunded, handleDispute } = webhookHandlers;
const { recordWebhookEvent, releaseWebhookEvent } = supabaseService;

export async function POST(request) {
  const signature = request.headers.get("stripe-signature");
  let event;
  try { event = stripe.webhooks.constructEvent(Buffer.from(await request.arrayBuffer()), signature, process.env.STRIPE_WEBHOOK_SECRET); }
  catch (error) { console.error(`[webhook] Signature verification failed: ${error.message}`); return new Response("Invalid webhook signature", { status: 400 }); }
  let acquired = false;
  try {
    acquired = await recordWebhookEvent(event);
    if (!acquired) return Response.json({ received: true, duplicate: true });
    let result = { ignored: true };
    switch (event.type) {
      case "checkout.session.completed":
      case "checkout.session.async_payment_succeeded": result = await handleCheckoutSessionPaid(event.data.object, stripe); break;
      case "checkout.session.expired": result = await handleCheckoutSessionExpired(event.data.object); break;
      case "payment_intent.processing": result = await handlePaymentIntentProcessing(event.data.object); break;
      case "charge.refunded": result = await handleChargeRefunded(event.data.object); break;
      case "charge.dispute.created":
      case "charge.dispute.updated":
      case "charge.dispute.closed": result = await handleDispute(event.data.object); break;
      default: break;
    }
    return Response.json({ received: true, event: event.type, result });
  } catch (error) {
    if (acquired) await releaseWebhookEvent(event.id);
    console.error(`[webhook] ${event.type} failed: ${error.message}`);
    return Response.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
