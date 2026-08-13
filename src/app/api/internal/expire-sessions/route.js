import invoiceExpiryService from "@/lib/checkout-v2/invoiceExpiryService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const { expireOpenSessions } = invoiceExpiryService;

export async function POST(request) {
  if (!process.env.CRON_SECRET || request.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const results = await expireOpenSessions();
    return Response.json({ processed: results.length, results });
  } catch (error) {
    console.error(`[session-expiry] ${error.message}`);
    return Response.json({ error: "Checkout Session expiration failed" }, { status: 500 });
  }
}
