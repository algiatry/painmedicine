import { SITE } from "./site";
import { getReviewer, type Reviewer } from "./reviewers";

/**
 * Review status gates how a page presents its credibility.
 *
 * - "draft" / "pending-review": incomplete or clinical content held for
 *   review. Renders the in-review notice; carries NO reviewer byline.
 * - "sourced": full educational content built from cited primary sources
 *   (IASP, NIH, WHO, Cochrane, peer-reviewed literature) that makes no
 *   individualized clinical recommendation. Publishes with an HONEST byline
 *   ("not yet medically reviewed – written from primary sources"),
 *   never a fabricated "reviewed by" credit.
 * - "reviewed": a named credentialed reviewer has signed off. ONLY then may a
 *   reviewer byline appear. See CONTENT-TEMPLATE.md.
 *
 * Clinical guidance (condition/treatment/opioid pages) stays held until
 * reviewer credentials are confirmed.
 */
export type ReviewStatus = "draft" | "pending-review" | "sourced" | "reviewed";

/**
 * A page's review record. `reviewer` is a slug into REVIEWERS
 * (src/lib/reviewers.ts) – the profile owns the name and credentials so a
 * byline can never drift from the verified record.
 */
export type PageReview = {
  reviewer: string;
  /** ISO date of sign-off. */
  reviewedAt: string;
  /** ISO date the next review is due; defaults to policy (see reviewers.ts). */
  reviewDue?: string;
  /** Public, one-sentence "what changed in review" note. */
  note?: string;
};

export type PageMeta = {
  slug: string;
  title: string;
  /** Optional <title>-only override for query capture; the H1 stays `title`. */
  seoTitle?: string;
  description: string;
  status: ReviewStatus;
  review?: PageReview;
  lastUpdated: string; // ISO date
};

/**
 * WebSite node. Declares the canonical site name (and a shorter
 * alternateName) so search engines have an explicit name to show for the
 * site, links the site to its publishing Organization, and advertises the
 * on-site search via a SearchAction (the Google sitelinks search box). The
 * target is the server-rendered /search?q= results page.
 */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: `${SITE.url}/icon-512.png`,
    image: `${SITE.url}/opengraph-image`,
  };
}

export function medicalWebPageJsonLd(meta: {
  title: string;
  description: string;
  path: string;
  lastUpdated: string;
  review?: PageReview;
}) {
  const profile = meta.review ? getReviewer(meta.review.reviewer) : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: meta.title,
    description: meta.description,
    url: `${SITE.url}${meta.path}`,
    dateModified: meta.lastUpdated,
    ...(meta.review && profile
      ? {
          reviewedBy: personJsonLd(profile),
          lastReviewed: meta.review.reviewedAt,
        }
      : {}),
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/icon-512.png`,
    },
  };
}

/** schema.org Person for a reviewer profile (reviewedBy + /reviewers/[slug]). */
export function personJsonLd(r: Reviewer) {
  return {
    "@type": "Person",
    "@id": `${SITE.url}/reviewers/${r.slug}#person`,
    name: r.name,
    honorificSuffix: r.credentials,
    jobTitle: r.headline,
    description: r.bio[0],
    url: `${SITE.url}/reviewers/${r.slug}`,
    ...(r.photo ? { image: `${SITE.url}${r.photo}` } : {}),
    ...(r.affiliations?.length
      ? { affiliation: r.affiliations.map((name) => ({ "@type": "Organization", name })) }
      : {}),
    ...(r.npi
      ? {
          identifier: {
            "@type": "PropertyValue",
            propertyID: "NPI",
            value: r.npi,
          },
        }
      : {}),
    sameAs: r.sameAs,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
