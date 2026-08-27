import type { ReactNode } from "react";

/**
 * Shared wrapper for the original SVG figures used across the
 * Understanding Pain explainers. Keeps the frame, scroll behavior, and
 * caption styling consistent, and keeps wide diagrams from forcing the
 * page body to scroll horizontally.
 */
export function Figure({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-gradient-to-b from-paper/80 to-slate-50 p-4 shadow-card sm:p-6">
        {children}
      </div>
      <figcaption className="mt-2.5 border-l-2 border-teal-600/50 pl-3 text-sm text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Section heading shared by the explainer bodies. */
export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900"
    >
      {children}
    </h2>
  );
}

/** Body paragraph shared by the explainer bodies. */
export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-slate-700">{children}</p>;
}
