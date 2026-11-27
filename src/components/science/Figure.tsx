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
  label,
  scrollLabel,
}: {
  caption: string;
  children: ReactNode;
  /** Play this figure's choreography (fig-* classes) when scrolled into view. */
  animate?: boolean;
  /** Optional short lead, set in teal before the caption (e.g. "Figure 1"). */
  label?: string;
  /** Label a wide figure that requires keyboard scrolling. */
  scrollLabel?: string;
}) {
  return (
    <figure className="my-8 lg:-mx-12">
      <div
        className="figure-plate overflow-x-auto rounded-xl border p-4 sm:p-6"
        role={scrollLabel ? "region" : undefined}
        aria-label={scrollLabel}
        tabIndex={scrollLabel ? 0 : undefined}
      >
        {animate ? <AnimateOnView>{children}</AnimateOnView> : children}
      </div>
      <figcaption className="mt-3 flex gap-2.5 text-sm leading-relaxed text-subtle">
        <span
          aria-hidden="true"
          className="mt-[0.4em] h-3 w-0.5 shrink-0 rounded-full bg-brand/70"
        />
        <span>
          {label ? (
            <span className="font-semibold text-brand">
              {label}.{" "}
            </span>
          ) : null}
          {caption}
        </span>
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
      className="mt-12 scroll-mt-24 text-2xl sm:text-[1.75rem] font-bold tracking-tight text-ink"
    >
      {children}
    </h2>
  );
}

/** Body paragraph shared by the explainer bodies. */
export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-body">{children}</p>;
}

/**
 * "Key takeaways" summary box — the three or four things a reader should leave
 * with. Placed at the top of an article (under the lead) it gives skimmers an
 * anchor and sets expectations before the long read.
 */
export function KeyTakeaways({ items }: { items: ReactNode[] }) {
  return (
    <aside
      aria-label="Key takeaways"
      className="my-8 rounded-2xl border border-brand/15 bg-gradient-to-b from-paper to-background p-6 shadow-card sm:p-7"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-brand">
        Key takeaways
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-body">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="mt-1 size-4 shrink-0 text-brand"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/**
 * Pull-quote — a single sentence lifted out of the flow to give the eye a
 * resting point and carry the page's one load-bearing idea. The teal rule and
 * larger type echo the brand without shouting.
 */
export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <figure className="my-10">
      <blockquote className="border-l-4 border-brand pl-5 text-xl font-medium leading-snug text-ink sm:pl-6 sm:text-2xl">
        {children}
      </blockquote>
    </figure>
  );
}

const CALLOUT_TONES = {
  note: {
    wrap: "border-brand/20 bg-note",
    label: "text-brand-strong",
  },
  caution: {
    wrap: "border-caution-line bg-caution",
    label: "text-caution-ink",
  },
} as const;

/**
 * Inline callout for an aside the reader shouldn't miss — a "note" (teal, the
 * system) or a "caution" (amber, the signal), matching the site-wide figure
 * legend. Keeps emphasis consistent instead of ad-hoc bold runs.
 */
export function Callout({
  title,
  tone = "note",
  children,
}: {
  title?: string;
  tone?: keyof typeof CALLOUT_TONES;
  children: ReactNode;
}) {
  const t = CALLOUT_TONES[tone];
  return (
    <aside
      className={`my-7 rounded-xl border px-5 py-4 text-body ${t.wrap}`}
    >
      {title && (
        <p className={`text-sm font-semibold ${t.label}`}>{title}</p>
      )}
      <div className={title ? "mt-1.5" : undefined}>{children}</div>
    </aside>
  );
}
