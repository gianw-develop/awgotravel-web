export const dynamic = "force-dynamic";
export function GET() {
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY || "";
  return publishableKey ? Response.json({ publishableKey }) : Response.json({ error: "Stripe publishable key is not configured" }, { status: 503 });
}
