import supabaseService from "@/lib/checkout-v2/supabaseService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const { listPreorders } = supabaseService;

export async function GET(request) {
  const supplied = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || request.headers.get("x-admin-token");
  if (!process.env.ADMIN_TOKEN || supplied !== process.env.ADMIN_TOKEN) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try { return Response.json({ orders: await listPreorders(Number(new URL(request.url).searchParams.get("limit") || 100)) }); }
  catch (error) { return Response.json({ error: error.message }, { status: 500 }); }
}
