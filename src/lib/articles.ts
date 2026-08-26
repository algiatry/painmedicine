import type { Article } from "./understanding";
import { ARTICLES as UNDERSTANDING_ARTICLES } from "./understanding";
import { FUTURE_ARTICLES } from "./future";

/**
 * All hub-spoke articles across the site, aggregated for the shared
 * [hub]/[article] route (generateStaticParams, metadata, rendering).
 * Add a new content module's array here to publish its pages.
 */
export const ALL_ARTICLES: Article[] = [
  ...UNDERSTANDING_ARTICLES,
  ...FUTURE_ARTICLES,
];

export function getArticle(hub: string, slug: string): Article | undefined {
  return ALL_ARTICLES.find((a) => a.hub === hub && a.slug === slug);
}
