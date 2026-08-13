import supabaseService from "@/lib/checkout-v2/supabaseService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const { markDelivered } = supabaseService;

export async function POST(request, context) {
  const supplied = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || request.headers.get("x-admin-token");
  if (!process.env.ADMIN_TOKEN || supplied !== process.env.ADMIN_TOKEN) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const method = String(body.method || "").trim();
  const evidenceReference = String(body.evidenceReference || "").trim();
  if (!method || !evidenceReference) return Response.json({ error: "Delivery method and evidence reference are required" }, { status: 400 });
  try {
    const { id } = await context.params;
    const order = await markDelivered(id, { method, evidenceReference, note: String(body.note || "").trim(), deliveredBy: "admin" });
    return Response.json({ order });
  } catch (error) { return Response.json({ error: error.message }, { status: error.code === "INVALID_ORDER_STATE" ? 409 : 500 }); }
}
