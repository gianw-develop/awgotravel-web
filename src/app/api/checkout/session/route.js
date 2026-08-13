import checkoutService from "@/lib/checkout-v2/checkoutService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const { createCheckout } = checkoutService;

export async function POST(request) {
  try {
    const result = await createCheckout(await request.json(), {
      ip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
      userAgent: request.headers.get("user-agent") || null,
      baseUrl: new URL(request.url).origin,
    });
    return Response.json(result, { status: 201 });
  } catch (error) {
    const status = error.code === "UNSUPPORTED_AMOUNT" ? 422 : error.code === "INVALID_REQUEST" ? 400 : 500;
    return Response.json({ error: status === 500 ? "Unable to prepare payment" : error.message, code: error.code || "INTERNAL_ERROR", suggestions: error.suggestions || [] }, { status });
  }
}
