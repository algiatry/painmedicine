import type { Reviewer, ReviewStatus } from "@/lib/schema";

/**
 * Credibility line for a page. Renders one of three things, matched to the
 * page's review status — and never fabricates a review that did not happen:
 *
 * 1. A reviewer credit — ONLY when a named credentialed reviewer object is
 *    present (status "reviewed").
 * 2. An honest "sourced" line — full content built from primary sources,
 *    independent medical review still pending. No credit claimed.
 * 3. The in-review notice — orientation-only pages held for review.
 *
 * See CONTENT-TEMPLATE.md for the gating rules.
 */
export default function ReviewByline({
  status,
  reviewer,
  lastUpdated,
}: {
  status: ReviewStatus;
  reviewer?: Reviewer;
  lastUpdated: string;
}) {
  if (reviewer && status === "reviewed") {
    return (
      <p className="text-sm text-slate-500">
        Medically reviewed by{" "}
        <span className="font-medium text-slate-700">
          {reviewer.name}, {reviewer.credentials}
        </span>{" "}
        on {formatDate(reviewer.reviewedAt)} · Last updated{" "}
        {formatDate(lastUpdated)}
      </p>
    );
  }

  if (status === "sourced") {
    return (
      <div className="flex flex-col gap-1 border-l-2 border-teal-600 pl-4 text-sm text-slate-500">
        <p>
          <span className="font-medium text-slate-700">
            Written from primary sources.
          </span>{" "}
          Built from the cited references below — independent medical review is
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

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
