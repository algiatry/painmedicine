/**
 * Figure tokens — the single source of truth for every color used in the
 * hand-drawn SVG figures (science/, future/, specialty/ bodies).
 *
 * The legend, site-wide:
 *   teal  = the nervous system, healthy structure, "the system"
 *   amber = the pain signal, pathology, "the thing being felt"
 *   slate = anatomy, chrome, and text
 *   red   = caution/blocking notes only (e.g. the naloxone test) — never
 *           for pain itself; alarm reds are deliberately avoided
 *
 * The indigo/violet/cyan accents are the pipeline tracker's modality palette
 * (biologic / gene therapy / device); keep them in sync with
 * MODALITY_COLOR in lib/pipeline.ts.
 *
 * The anatomy library (components/anatomy/marks.tsx) draws its ANATOMY
 * palette from the same values.
 */

export const FIG = {
  // teal — nervous system
  nerve: "#0d9488",
  nerveDark: "#0f766e",
  nerveBright: "#14b8a6",
  nerveTint: "#ccfbf1",
  nerveGround: "#f0fdfa",

  // amber — the signal
  signal: "#f59e0b",
  signalDark: "#d97706",
  signalBright: "#fbbf24",
  signalTint: "#fef3c7",
  signalGround: "#fffbeb",
  signalText: "#b45309",
  signalTextDark: "#92400e",

  // slate — anatomy, chrome, text
  ink: "#0f172a",
  text: "#334155",
  textMid: "#475569",
  muted: "#64748b",
  faint: "#94a3b8",
  line: "#cbd5e1",
  soft: "#e2e8f0",
  ground: "#f1f5f9",
  paper: "#f8fafc",
  white: "#ffffff",

  // red — caution/blocking notes only
  caution: "#dc2626",
  cautionGround: "#fef2f2",
  cautionEdge: "#fca5a5",
  cautionText: "#991b1b",
  cautionTextDark: "#7f1d1d",

  // pipeline modality accents
  indigo: "#4f46e5",
  indigoText: "#3730a3",
  indigoTint: "#e0e7ff",
  violet: "#7c3aed",
  violetText: "#5b21b6",
  violetTint: "#ede9fe",
  cyan: "#0891b2",
  cyanText: "#155e75",
  cyanTint: "#cffafe",
} as const;
