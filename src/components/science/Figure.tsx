import type { CSSProperties, ReactNode } from "react";
import AnimateOnView from "./AnimateOnView";

/**
 * Shared wrapper for the original SVG figures used across the
 * Understanding Pain explainers. Keeps the frame, scroll behavior, and
 * caption styling consistent, and keeps wide diagrams from forcing the
 * page body to scroll horizontally.
 */
export function Figure({
  caption,
  children,
  animate = false,
}: {
  caption: string;
  children: ReactNode;
  /** Play this figure's choreography (fig-* classes) when scrolled into view. */
  animate?: boolean;
}) {
  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-paper/60 p-4 sm:p-6">
        {animate ? <AnimateOnView>{children}</AnimateOnView> : children}
      </div>
      <figcaption className="mt-2.5 text-sm text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}

/**
 * Inline style for a choreographed element: stagger delay in seconds and,
 * for `.fig-draw` strokes, a dash length safely >= the true path length.
 */
export function anim(delay: number, len?: number): CSSProperties {
  return {
    "--fd": `${delay}s`,
    // px units required: stroke-dashoffset rejects unitless custom-property
    // values (computes to 0), even though stroke-dasharray accepts them.
    ...(len !== undefined ? { "--len": `${len}px` } : {}),
  } as CSSProperties;
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
