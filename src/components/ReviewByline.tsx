import type { Reviewer } from "@/lib/schema";

/**
 * Byline for clinical pages. Renders EITHER a reviewer credit (when the page
 * has passed council medical review) OR a pending-review notice.
 * Clinical claims must not ship on pages without a reviewer — see
 * CONTENT-TEMPLATE.md.
 */
export default function ReviewByline({
  reviewer,
  lastUpdated,
}: {
  reviewer?: Reviewer;
  lastUpdated: string;
}) {
  if (reviewer) {
    return (
      <p className="text-sm text-slate-500">
        Medically reviewed by{" "}
        <span className="font-medium text-slate-700">
          {reviewer.name}, {reviewer.credentials}
        </span>{" "}
        on {formatDate(reviewer.reviewedAt)} · Last updated {formatDate(lastUpdated)}
      </p>
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
