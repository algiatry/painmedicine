import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { HUBS } from "@/lib/hubs";
import { ALL_ARTICLES } from "@/lib/articles";
import { REVIEWERS } from "@/lib/reviewers";

/**
 * Static routes. lastModified is the last commit that touched the page file
 * (2026-10-13). Bump the date when that copy changes — do not stamp build time.
 */
const STATIC_PAGES: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-10-13" },
  { path: "/about", lastModified: "2026-10-13" },
  { path: "/medical-disclaimer", lastModified: "2026-10-13" },
  { path: "/find-help", lastModified: "2026-10-13" },
  { path: "/glossary", lastModified: "2026-10-13" },
  { path: "/reviewers", lastModified: "2026-10-13" },
  { path: "/privacy", lastModified: "2026-10-13" },
  { path: "/terms", lastModified: "2026-10-13" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PAGES.map((page) => ({
    url: `${SITE.url}${page.path}`,
    lastModified: new Date(page.lastModified),
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

  const reviewerEntries = REVIEWERS.map((r) => ({
    url: `${SITE.url}/reviewers/${r.slug}`,
    lastModified: new Date(r.joinedAt),
    changeFrequency: "monthly" as const,
  }));

  return [...staticEntries, ...hubEntries, ...articleEntries, ...reviewerEntries];
}
