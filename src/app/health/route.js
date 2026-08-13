export const dynamic = "force-dynamic";
export function GET() { return Response.json({ status: "ok", version: "checkout-v2", liveCheckoutEnabled: process.env.ALLOW_LIVE_CHECKOUT === "true" }); }
