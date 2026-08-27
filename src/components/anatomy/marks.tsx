/**
 * Shared marks for the anatomy library.
 *
 * The site's visual language for "where it hurts" is concentric amber rings
 * around a point — established by the conditions hub icon and the article
 * emblems. SiteMarker is that motif at figure scale.
 */

const AMBER = "#f59e0b";

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

/** Palette shared by every anatomy component. */
export const ANATOMY = {
  outline: "#94a3b8", // slate — anatomy outlines
  fill: "#f1f5f9", // slate-100 — anatomy fill
  limb: "#cbd5e1", // slate-300 — limb capsule inner
  bone: "#f8fafc",
  soft: "#e2e8f0", // slate-200 — discs, soft tissue
  nerve: "#0d9488", // teal — nervous system
  nerveDark: "#0f766e",
  cartilage: "#14b8a6",
  highlight: "#ccfbf1", // teal-100 — highlighted structures
  signal: "#f59e0b", // amber — the pain signal / sites
  signalDark: "#d97706",
} as const;
