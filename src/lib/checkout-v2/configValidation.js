/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-unused-vars */
const { FIXED_PRODUCTS } = require("./catalog");

function modeFromKey(value, prefix) {
  const key = String(value || "");
  if (key.startsWith(`${prefix}_live_`)) return "live";
  if (key.startsWith(`${prefix}_test_`)) return "test";
  return null;
}

function validateCatalog(products = FIXED_PRODUCTS) {
  const errors = [];
  if (products.length !== 37) errors.push(`Catalog must contain 37 products; found ${products.length}`);
  const names = products.map((item) => item.name);
  const priceIds = products.map((item) => item.stripePriceId);
  if (new Set(names).size !== names.length) errors.push("Catalog product names must be unique");
  if (new Set(priceIds).size !== priceIds.length) errors.push("Catalog Price IDs must be unique");
  if (products.some((item) => !item.name || !Number.isFinite(item.price) || item.price <= 0)) {
    errors.push("Every catalog item requires a name and positive price");
  }
  if (products.some((item) => !String(item.stripePriceId || "").startsWith("price_"))) {
    errors.push("Every catalog item requires a Stripe Price ID");
  }
  return errors;
}

function validateRuntimeConfig(env = process.env, products = FIXED_PRODUCTS) {
  const errors = [];
  const warnings = [];
  const secretMode = modeFromKey(env.STRIPE_SECRET_KEY, "sk");
  const publishableMode = modeFromKey(env.STRIPE_PUBLISHABLE_KEY, "pk");

  if (!secretMode) errors.push("STRIPE_SECRET_KEY is missing or invalid");
  if (!publishableMode) errors.push("STRIPE_PUBLISHABLE_KEY is missing or invalid");
  if (secretMode && publishableMode && secretMode !== publishableMode) {
    errors.push("Stripe secret and publishable keys use different modes");
  }
  if (!String(env.STRIPE_WEBHOOK_SECRET || "").startsWith("whsec_")) {
    errors.push("STRIPE_WEBHOOK_SECRET is missing or invalid");
  }
  if (!/^https:\/\/.+\.supabase\.co\/?$/.test(String(env.SUPABASE_URL || ""))) {
    errors.push("SUPABASE_URL is missing or invalid");
  }
  if (String(env.SUPABASE_SERVICE_ROLE_KEY || "").length < 20) {
    errors.push("SUPABASE_SERVICE_ROLE_KEY is missing or invalid");
  }
  if (String(env.ADMIN_TOKEN || "").length < 32) errors.push("ADMIN_TOKEN must contain at least 32 characters");
  if (String(env.CRON_SECRET || "").length < 16) errors.push("CRON_SECRET must contain at least 16 characters");
  try {
    const publicUrl = new URL(String(env.PUBLIC_BASE_URL || ""));
    if (secretMode === "live" && publicUrl.protocol !== "https:") errors.push("Live PUBLIC_BASE_URL must use HTTPS");
  } catch (_error) {
    errors.push("PUBLIC_BASE_URL is missing or invalid");
  }
  if (secretMode === "live" && env.ALLOW_LIVE_CHECKOUT !== "true") {
    warnings.push("Live credentials detected but Checkout remains blocked");
  }
  errors.push(...validateCatalog(products));
  return { ok: errors.length === 0, mode: secretMode, errors, warnings };
}

module.exports = { modeFromKey, validateCatalog, validateRuntimeConfig };
