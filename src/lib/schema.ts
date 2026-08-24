import { SITE } from "./site";

/**
 * Review status gates clinical content. Pages with status !== "reviewed"
 * must render the pending-review notice and must NOT carry a reviewer byline.
 *
 * Clinical content HOLD: per launch decision, no clinical claims publish
 * until council reviewer credentials are confirmed. Hub pages ship as
 * structural/navigational content only.
 */
export type ReviewStatus = "draft" | "pending-review" | "reviewed";

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
