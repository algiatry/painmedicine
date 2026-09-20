/**
 * Reviewer registry – the people behind every "Medically reviewed by" line.
 *
 * A page may claim `status: "reviewed"` ONLY when its `review.reviewer` slug
 * resolves to an entry here (content-lint enforces this). The entry is the
 * public profile rendered at /reviewers/[slug] and emitted as Person JSON-LD
 * (`reviewedBy`) on every page the reviewer has signed off.
 *
 * Nothing below is fabricated: the array stays empty until a credentialed
 * reviewer has completed the attestation in CONTENT-INTAKE.md §6 and
 * consented to publication. Fill in every field from their own attestation
 * and verification (NPI / ABMS lookup – REVIEWER-BRIEF.md "Before you engage").
 */

export type Reviewer = {
  /** URL slug, e.g. "jane-doe". */
  slug: string;
  /** Full name as it should appear in bylines. */
  name: string;
  /** Post-nominal credential line, published verbatim from the attestation. */
  credentials: string;
  /** One-line role summary for cards, e.g. "Pain medicine physician, Austin, TX". */
  headline: string;
  /** Short third-person bio, one paragraph per string. */
  bio: string[];
  /** Board certifications, e.g. "Pain Medicine (ABA), 2014". */
  boards: string[];
  /** Current affiliations, e.g. "Attending, ___ Health System". */
  affiliations?: string[];
  /**
   * Public identity records – NPI registry, ABMS Certification Matters,
   * institutional page, ORCID, LinkedIn. Emitted as schema.org `sameAs`.
   */
  sameAs: string[];
  /** 10-digit National Provider Identifier (public record). */
  npi?: string;
  /** Verbatim conflict-of-interest / disclosure statement. */
  disclosures: string;
  /** Optional headshot under /public, e.g. "/reviewers/jane-doe.jpg". */
  photo?: string;
  /** ISO date the reviewer joined the editorial board. */
  joinedAt: string;
};

export const REVIEWERS: Reviewer[] = [];

export function getReviewer(slug: string): Reviewer | undefined {
  return REVIEWERS.find((r) => r.slug === slug);
}

/**
 * Re-review policy, mirrored by content-lint's cadence check: fast-moving
 * future-of-pain-medicine pages quarterly, everything else annually.
 */
export function defaultReviewDue(hub: string, reviewedAt: string): string {
  const d = new Date(reviewedAt + "T00:00:00Z");
  if (hub === "future-of-pain-medicine") d.setUTCMonth(d.getUTCMonth() + 3);
  else d.setUTCFullYear(d.getUTCFullYear() + 1);
  return d.toISOString().slice(0, 10);
}
