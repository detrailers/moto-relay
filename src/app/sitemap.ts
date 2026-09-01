import type { MetadataRoute } from "next";
import { site, ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-08-31"),
    changeFrequency: "monthly" as const,
  }));
}
