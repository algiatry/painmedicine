import Link from "next/link";
import TrustBadge from "@/components/TrustBadge";
import type { PageReview, ReviewStatus } from "@/lib/schema";
import { defaultReviewDue, getReviewer } from "@/lib/reviewers";

/**
 * Credibility line for a page. Renders one of three things, matched to the
 * page's review status – and never fabricates a review that did not happen:
 *
 * 1. A reviewer credit – ONLY when status is "reviewed" AND the review record
 *    resolves to a profile in the reviewer registry. The name links to the
 *    reviewer's public profile; the next-review date and an optional
 *    "what changed" note render alongside.
 * 2. A plain "sourced" notice – full content built from primary sources,
 *    independent medical review still pending. No credit claimed.
 * 3. The in-review notice – orientation-only pages held for review.
 *
 * See CONTENT-TEMPLATE.md for the gating rules.
 */
export default function ReviewByline({
  status,
  review,
  lastUpdated,
  hub,
  referencesHref,
}: {
  status: ReviewStatus;
  review?: PageReview;
  lastUpdated: string;
  /** Owning hub slug – sets the default re-review cadence. */
  hub?: string;
  referencesHref?: string;
}) {
  const profile = review ? getReviewer(review.reviewer) : undefined;

  if (review && profile && status === "reviewed") {
    const due = review.reviewDue ?? defaultReviewDue(hub ?? "", review.reviewedAt);
    return (
      <div data-review-state="reviewed" className="review-panel space-y-1 text-sm text-note-ink">
        <p>
          <TrustBadge tone="reviewed"><strong>Medically reviewed by</strong>{" "}
          <Link
            href={`/reviewers/${profile.slug}`}
            className="font-medium text-body underline decoration-brand/40 underline-offset-2 hover:text-brand"
          >
            {profile.name}, {profile.credentials}
          </Link></TrustBadge>{" "}
          on <time dateTime={review.reviewedAt}>{formatDate(review.reviewedAt)}</time>
        </p>
        {review.note && <p className="text-muted">In review: {review.note}</p>}
        <p>
          <TrustBadge>Last updated <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time></TrustBadge> · Next review by <time dateTime={due}>{formatDate(due)}</time>
        </p>
      </div>
    );
  }

  if (status === "sourced") {
    return (
      <div data-review-state="sourced" className="review-panel space-y-1 text-sm text-muted">
        <p>
          <TrustBadge><strong>Not yet medically reviewed.</strong></TrustBadge>{" "}
          Written from the{" "}
          {referencesHref ? (
            <a href={referencesHref} className="font-medium text-brand-strong underline underline-offset-2">
              primary sources cited below
            </a>
          ) : "primary sources cited below"}; independent clinician
          review is pending. Educational information, not medical advice.
        </p>
        <p><TrustBadge>Last updated <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time></TrustBadge></p>
      </div>
    );
  }

  return (
    <div data-review-state="in-review" className="review-panel space-y-1 text-sm text-caution-ink">
      <p className="text-sm text-caution-ink">
        <TrustBadge><strong>In editorial review.</strong></TrustBadge> This page is being prepared with
        our medical review board and currently provides general orientation
        only. Detailed clinical content publishes after physician review.
      </p>
    </div>
  );
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
