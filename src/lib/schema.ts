import { SITE } from "./site";

/**
 * Review status gates how a page presents its credibility.
 *
 * - "draft" / "pending-review": incomplete or clinical content held for
 *   review. Renders the in-review notice; carries NO reviewer byline.
 * - "sourced": full educational content built from cited primary sources
 *   (IASP, NIH, WHO, Cochrane, peer-reviewed literature) that makes no
 *   individualized clinical recommendation. Publishes with an HONEST byline
 *   ("written from primary sources — independent medical review pending"),
 *   never a fabricated "reviewed by" credit.
 * - "reviewed": a named credentialed reviewer has signed off. ONLY then may a
 *   reviewer byline appear. See CONTENT-TEMPLATE.md.
 *
 * Clinical guidance (condition/treatment/opioid pages) stays held until
 * reviewer credentials are confirmed.
 */
export type ReviewStatus = "draft" | "pending-review" | "sourced" | "reviewed";

export type Reviewer = {
  name: string;
  credentials: string; // e.g. "MD, board-certified in Pain Medicine (ABA)"
  reviewedAt: string; // ISO date
};

export type PageMeta = {
  slug: string;
  title: string;
  description: string;
  status: ReviewStatus;
  reviewer?: Reviewer;
  lastUpdated: string; // ISO date
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
  };
}

export function medicalWebPageJsonLd(meta: {
  title: string;
  description: string;
  path: string;
  lastUpdated: string;
  reviewer?: Reviewer;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: meta.title,
    description: meta.description,
    url: `${SITE.url}${meta.path}`,
    dateModified: meta.lastUpdated,
    ...(meta.reviewer
      ? {
          reviewedBy: {
            "@type": "Person",
            name: meta.reviewer.name,
            description: meta.reviewer.credentials,
          },
          lastReviewed: meta.reviewer.reviewedAt,
        }
      : {}),
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
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
