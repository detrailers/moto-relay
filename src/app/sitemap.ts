import type { MetadataRoute } from "next";
import { site, ROUTES } from "@/lib/site";

const LAST_MODIFIED: Partial<Record<(typeof ROUTES)[number], string>> = {
  "/motorcycle-shipping": "2026-09-07",
  "/atv-shipping": "2026-09-07",
  "/utv-shipping": "2026-09-07",
  "/trike-shipping": "2026-09-07",
  "/motorcycle-shipping-cost": "2026-09-07",
  "/door-to-door-vs-depot-motorcycle-transport": "2026-09-07",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(LAST_MODIFIED[path] ?? "2026-08-31"),
    changeFrequency: "monthly" as const,
  }));
}
