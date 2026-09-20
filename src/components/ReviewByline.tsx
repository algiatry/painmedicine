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
 * 2. An honest "sourced" line – full content built from primary sources,
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
      <div className="flex flex-col gap-1 border-l-2 border-teal-600 pl-4 text-sm text-slate-500">
        <p>
          Medically reviewed by{" "}
          <Link
            href={`/reviewers/${profile.slug}`}
            className="font-medium text-slate-700 underline decoration-teal-600/40 underline-offset-2 hover:text-teal-700"
          >
            {profile.name}, {profile.credentials}
          </Link>{" "}
          on {formatDate(review.reviewedAt)}
        </p>
        {review.note && <p className="text-slate-600">In review: {review.note}</p>}
        <p>
          Last updated {formatDate(lastUpdated)} · Next review by {formatDate(due)}
        </p>
      </div>
    );
  }

  if (status === "sourced") {
    return (
      <div className="flex flex-col gap-1 border-l-2 border-teal-600 pl-4 text-sm text-slate-500">
        <p>
          <span className="font-medium text-slate-700">
            Written from primary sources.
          </span>{" "}
          Built from the cited references below – independent medical review is
          pending. Educational information, not medical advice.
        </p>
        <p>Last updated {formatDate(lastUpdated)}</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3">
      <p className="text-sm text-amber-900">
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
