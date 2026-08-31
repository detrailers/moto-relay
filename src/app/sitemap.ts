import type { MetadataRoute } from "next";
import { site, ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
  }));
}
