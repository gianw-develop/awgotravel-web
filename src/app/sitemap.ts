import type { MetadataRoute } from "next";

const routes = ["", "/about", "/destinations", "/services", "/contact", "/privacy", "/terms", "/refund-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-13");
  return routes.map((route) => ({
    url: `https://www.awgotravel.com${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7,
  }));
}