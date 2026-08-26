import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { HUBS } from "@/lib/hubs";
import { ALL_ARTICLES } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = ["", "/about", "/medical-disclaimer"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
  }));

  const hubEntries = HUBS.map((h) => ({
    url: `${SITE.url}/${h.slug}`,
    lastModified: new Date(h.lastUpdated),
    changeFrequency: "weekly" as const,
  }));

  const articleEntries = ALL_ARTICLES.map((a) => ({
    url: `${SITE.url}/${a.hub}/${a.slug}`,
    lastModified: new Date(a.lastUpdated),
    changeFrequency: "monthly" as const,
  }));

  return [...staticEntries, ...hubEntries, ...articleEntries];
}
