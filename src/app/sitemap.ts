import type { MetadataRoute } from "next";
import { site, ROUTES } from "@/lib/site";

const LAST_MODIFIED: Partial<Record<(typeof ROUTES)[number], string>> = {
  "/": "2026-09-07",
  "/open-vs-enclosed-motorcycle-transport": "2026-09-08",
  "/motorcycle-shipping": "2026-09-07",
  "/atv-shipping": "2026-09-07",
  "/utv-shipping": "2026-09-07",
  "/trike-shipping": "2026-09-07",
  "/motorcycle-shipping-cost": "2026-09-07",
  "/prepare-motorcycle-for-shipping": "2026-09-08",
  "/motorcycle-shipping-faq": "2026-09-07",
  "/motorcycle-shipping-buyers-guide": "2026-09-08",
  "/door-to-door-vs-depot-motorcycle-transport": "2026-09-10",
  "/non-running-motorcycle-shipping": "2026-09-10",
  "/classic-custom-restored-motorcycle-shipping": "2026-09-10",
  "/motorcycle-shipping-after-online-purchase-auction": "2026-09-10",
  "/cross-country-motorcycle-shipping": "2026-09-11",
  "/motorcycle-shipping-insurance": "2026-09-11",
  "/how-it-works": "2026-09-07",
  "/about": "2026-09-08",
  "/recent-transports": "2026-09-09",
  "/recent-transports/1974-suzuki-gt750-corinth-to-glendale": "2026-09-09",
  "/recent-transports/honda-vfr-st-louis-to-new-york": "2026-09-11",
  "/quote": "2026-09-07",
  "/privacy": "2026-09-07",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(LAST_MODIFIED[path] ?? "2026-08-31"),
    changeFrequency: "monthly" as const,
  }));
}
