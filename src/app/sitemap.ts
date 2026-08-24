import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { HUBS } from "@/lib/hubs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/medical-disclaimer"];
  const hubPaths = HUBS.map((h) => `/${h.slug}`);
  return [...staticPaths, ...hubPaths].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));
}
