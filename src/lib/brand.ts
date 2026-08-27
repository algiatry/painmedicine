/**
 * Pain Medicine brand tokens and the settling-signal mark.
 *
 * The mark is a damped waveform: large oscillation → smaller oscillation →
 * rest. It is not a heartbeat / QRS complex. Keep this path in sync with
 * `scripts/render-brand-assets.py`.
 */

export const BRAND = {
  teal: "#0f766e",
  tealDark: "#115e59",
  ink: "#0f172a",
  muted: "#475569",
  paper: "#f4f8f7",
  white: "#ffffff",
} as const;

/** Polyline in 32×32 tile space. Stroke 2.6, round caps/joins. */
export const SIGNAL_POINTS = [
  [5.2, 17.0],
  [9.0, 7.0],
  [13.2, 24.6],
  [17.4, 12.2],
  [20.8, 19.6],
  [23.8, 17.0],
  [27.6, 17.0],
] as const;

export const SIGNAL_PATH = SIGNAL_POINTS.map(([x, y], i) =>
  `${i === 0 ? "M" : "L"}${x} ${y}`,
).join(" ");

export const MARK_RADIUS = 8;
export const MARK_STROKE = 2.6;

/** Cropped to the stroke, not the 32×32 tile. Used in chrome lockups. */
export const SIGNAL_VIEWBOX = "3.5 5.2 25.6 21.2";
