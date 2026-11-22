import type { Metadata } from "next";
import { SITE } from "./site";

/**
 * Static Open Graph fields shared by every page and the root layout.
 *
 * Next.js merges metadata **shallowly**: a page that exports its own
 * `openGraph` object *replaces* the layout's wholesale rather than extending
 * it (see node_modules/next/dist/docs/.../generate-metadata.md, "Merging").
 * So any page that needs a per-page og:url has to re-supply these base fields;
 * `pageMetadata` below does that, and the layout spreads the same constant,
 * keeping one source of truth.
 *
 * og:title / og:description are intentionally omitted: with no openGraph.title
 * set anywhere, Next auto-fills them from each page's resolved title and
 * description.
 */
export const OG_BASE = {
  type: "website",
  locale: "en_US",
  siteName: SITE.shortName,
} as const;

/**
 * Per-page metadata helper.
 *
 * Sets the canonical URL and mirrors it into `og:url` while preserving the
 * shared Open Graph base. `title` / `description` are optional — omit them to
 * inherit the root layout's defaults (used by the homepage).
 */
export function pageMetadata(opts: {
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const { title, description, path } = opts;
  return {
    ...(title !== undefined ? { title } : {}),
    ...(description !== undefined ? { description } : {}),
    alternates: { canonical: path },
    openGraph: { ...OG_BASE, url: path },
  };
}
