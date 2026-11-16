import Link from "next/link";
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
}: {
  status: ReviewStatus;
  review?: PageReview;
  lastUpdated: string;
  /** Owning hub slug – sets the default re-review cadence. */
  hub?: string;
}) {
  const profile = review ? getReviewer(review.reviewer) : undefined;

  if (review && profile && status === "reviewed") {
    const due = review.reviewDue ?? defaultReviewDue(hub ?? "", review.reviewedAt);
    return (
      <div className="flex flex-col gap-1 border-l-2 border-brand pl-4 text-sm text-subtle">
        <p>
          Medically reviewed by{" "}
          <Link
            href={`/reviewers/${profile.slug}`}
            className="font-medium text-body underline decoration-brand/40 underline-offset-2 hover:text-brand"
          >
            {profile.name}, {profile.credentials}
          </Link>{" "}
          on {formatDate(review.reviewedAt)}
        </p>
        {review.note && <p className="text-muted">In review: {review.note}</p>}
        <p>
          Last updated {formatDate(lastUpdated)} · Next review by {formatDate(due)}
        </p>
      </div>
    );
  }

  if (status === "sourced") {
    return (
      <div className="flex flex-col gap-1 rounded-lg border border-line bg-paper px-4 py-3 text-sm text-muted">
        <p>
          <span className="font-semibold text-ink">
            Not yet medically reviewed.
          </span>{" "}
          Written from the primary sources cited below; independent clinician
          review is pending. Educational information, not medical advice.
        </p>
        <p className="text-subtle">Last updated {formatDate(lastUpdated)}</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-caution-line bg-caution px-4 py-3">
      <p className="text-sm text-caution-ink">
        <strong>In editorial review.</strong> This page is being prepared with
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
