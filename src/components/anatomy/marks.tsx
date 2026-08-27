/**
 * Shared marks for the anatomy library.
 *
 * The site's visual language for "where it hurts" is concentric amber rings
 * around a point — established by the conditions hub icon and the article
 * emblems. SiteMarker is that motif at figure scale.
 */

import { FIG } from "@/lib/fig";

const AMBER = FIG.signal;

export function SiteMarker({
  x,
  y,
  size = "md",
}: {
  x: number;
  y: number;
  /** sm = one ring (widespread/tender points), md = two rings (a focal site). */
  size?: "sm" | "md";
}) {
  const r = size === "sm" ? 7 : 11;
  return (
    <g>
      <circle cx={x} cy={y} r={size === "sm" ? 2.4 : 3.2} fill={AMBER} />
      <circle
        cx={x}
        cy={y}
        r={r}
        fill="none"
        stroke={AMBER}
        strokeWidth={2}
        strokeOpacity={0.8}
      />
      {size === "md" && (
        <circle
          cx={x}
          cy={y}
          r={r * 1.75}
          fill="none"
          stroke={AMBER}
          strokeWidth={2}
          strokeOpacity={0.4}
        />
      )}
    </g>
  );
}

/** Palette shared by every anatomy component — drawn from the FIG tokens. */
export const ANATOMY = {
  outline: FIG.faint, // slate — anatomy outlines
  fill: FIG.ground, // slate-100 — anatomy fill
  limb: FIG.line, // slate-300 — limb capsule inner
  bone: FIG.paper,
  soft: FIG.soft, // slate-200 — discs, soft tissue
  nerve: FIG.nerve, // teal — nervous system
  nerveDark: FIG.nerveDark,
  cartilage: FIG.nerveBright,
  highlight: FIG.nerveTint, // teal-100 — highlighted structures
  signal: FIG.signal, // amber — the pain signal / sites
  signalDark: FIG.signalDark,
} as const;
