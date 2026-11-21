import type { MetadataRoute } from "next";
import { site, ROUTES } from "@/lib/site";

// Every route's <title> suffix and footer links changed on 2026-11-21, so all
// routes share that date. When a single page changes later, add it to
// LAST_MODIFIED with its own date so search engines see an accurate <lastmod>.
const SITEWIDE_UPDATE = "2026-11-21";

const LAST_MODIFIED: Partial<Record<(typeof ROUTES)[number], string>> = {};

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(LAST_MODIFIED[path] ?? SITEWIDE_UPDATE),
    changeFrequency: "monthly" as const,
  }));
}
