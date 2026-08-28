/**
 * Signature emblems — one small figure per article, distilled from that
 * article's main diagram. Drawn in the site figure legend: teal = nervous
 * system / structure, amber = the pain signal, slate = neutral anatomy.
 *
 * Stored as raw inner-SVG markup (48×48 viewBox) so one definition serves
 * three surfaces: inline thumbnails (ArticleEmblem), index lists, and the
 * per-article share cards (data-URI via emblemSvg / emblemDataUri).
 */

export const EMBLEM_VIEWBOX = "0 0 48 48";

const T = "#0f766e"; // teal — structure
const A = "#f59e0b"; // amber — the signal
const S = "#94a3b8"; // slate — neutral

const g = (inner: string, strokeWidth = 2.6) =>
  `<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}">${inner}</g>`;

export const EMBLEMS: Record<string, string> = {
  // ——— Understanding pain ———

  // Signal → spinal gate → brain.
  "how-pain-works": g(
    `<path stroke="${A}" d="M4 41l6.5-8 4 5 6-10"/>` +
      `<path stroke="${T}" d="M25.5 17.5v6.5M25.5 30.5v6.5"/>` +
      `<path stroke="${S}" d="M28 25c4-2.5 6.5-5 8.5-8" stroke-dasharray="1 4.5" stroke-width="2.2"/>` +
      `<circle stroke="${T}" cx="38" cy="11.5" r="7"/>` +
      `<circle cx="38" cy="11.5" r="2.2" fill="${A}" stroke-width="0"/>`,
  ),

  // Three signatures: sharp spike, jagged burst, rolling wave.
  "types-of-pain": g(
    `<path stroke="${A}" d="M6 11h11l3.5-6 3.5 6h18"/>` +
      `<path stroke="${T}" d="M6 25h8l2.5-5 2.5 9 2.5-8 2.5 7 2.5-5H42"/>` +
      `<path stroke="${S}" d="M6 39c4-5 8-5 12 0s8 5 12 0 8-5 12 0"/>`,
  ),

  // One sharp spike that resolves vs. a wave that keeps going past the mark.
  "acute-vs-chronic-pain": g(
    `<path stroke="${A}" d="M5 32h5l4-19 4 19"/>` +
      `<path stroke="${S}" d="M25 10v28" stroke-dasharray="1.5 5" stroke-width="2"/>` +
      `<path stroke="${T}" d="M18 32c3-4 5-4 8 0s5 4 8 0 5-4 9 0"/>`,
  ),

  // A 0–10 gauge with the marker sitting at seven.
  "measuring-pain": g(
    `<path stroke="${S}" d="M6 30h36" stroke-width="3.4"/>` +
      `<path stroke="${T}" d="M6 30h25" stroke-width="3.4"/>` +
      `<path stroke="${S}" d="M6 21.5v4M15 21.5v4M24 21.5v4M33 21.5v4M42 21.5v4" stroke-width="2"/>` +
      `<circle cx="31" cy="30" r="4.5" fill="#ffffff" stroke="${A}"/>`,
  ),

  // The cycle running both ways around the night.
  "pain-and-sleep": g(
    `<path stroke="${T}" d="M29.5 13a11.5 11.5 0 1 0 5.5 18.5A13.5 13.5 0 0 1 29.5 13z"/>` +
      `<path stroke="${A}" d="M28.5 4.5A20 20 0 0 1 43.5 24"/>` +
      `<path stroke="${A}" d="M41.3 20.6l2.2 3.4 2.2-3.4" fill="none"/>` +
      `<path stroke="${S}" d="M19.5 43.5A20 20 0 0 1 4.5 24"/>` +
      `<path stroke="${S}" d="M6.7 27.4L4.5 24l-2.2 3.4" fill="none"/>`,
  ),

  // Two circles; the lived experience is the overlap.
  "pain-and-emotion": g(
    `<circle stroke="${T}" cx="18.5" cy="24" r="10.5"/>` +
      `<circle stroke="${S}" cx="29.5" cy="24" r="10.5"/>` +
      `<circle cx="24" cy="24" r="2.6" fill="${A}" stroke-width="0"/>`,
  ),

  // An empty capsule that still radiates.
  "the-placebo-effect": g(
    `<rect stroke="${T}" x="19" y="10" width="10" height="28" rx="5" stroke-dasharray="4 3.5" transform="rotate(45 24 24)"/>` +
      `<path stroke="${A}" d="M24 4.5v4M38 8l-2.7 2.7M43.5 24h-4M10 8l2.7 2.7M4.5 24h4" stroke-width="2.2"/>`,
  ),

  // ——— The future ———

  // Stages narrowing toward the one that gets through.
  pipeline: g(
    `<path stroke="${T}" d="M8 11l9 13-9 13"/>` +
      `<path stroke="${T}" d="M20 15l6.5 9-6.5 9" stroke-opacity="0.72"/>` +
      `<path stroke="${T}" d="M31 18.5l4 5.5-4 5.5" stroke-opacity="0.45"/>` +
      `<circle cx="41.5" cy="24" r="3.2" fill="${A}" stroke-width="0"/>`,
  ),

  // A device speaking to the nerve in pulses.
  neuromodulation: g(
    `<path stroke="${T}" d="M15 5c-3.5 13-3.5 25 0 38"/>` +
      `<rect stroke="${T}" x="31" y="17" width="9" height="14" rx="2.5"/>` +
      `<path stroke="${A}" d="M28 20.5a6 6 0 0 0 0 7" stroke-width="2.2"/>` +
      `<path stroke="${A}" d="M23.5 17a11 11 0 0 0 0 14" stroke-width="2.2"/>`,
  ),

  // An antibody reaching for its targets.
  "biologics-and-gene-therapy": g(
    `<path stroke="${T}" d="M24 43V26M24 26L14.5 13M24 26l9.5-13"/>` +
      `<path stroke="${T}" d="M11 15.5l7-5M37 15.5l-7-5" stroke-width="2.2"/>` +
      `<circle cx="11" cy="7.5" r="2.4" fill="${A}" stroke-width="0"/>` +
      `<circle cx="37" cy="7.5" r="2.4" fill="${A}" stroke-width="0"/>`,
  ),

  // Three settings, tuned to one person.
  "precision-pain-medicine": g(
    `<path stroke="${S}" d="M13 9v30M24 9v30M35 9v30" stroke-width="2.2"/>` +
      `<circle cx="13" cy="29" r="3.6" fill="#ffffff" stroke="${T}"/>` +
      `<circle cx="24" cy="15.5" r="3.6" fill="#ffffff" stroke="${A}"/>` +
      `<circle cx="35" cy="23" r="3.6" fill="#ffffff" stroke="${T}"/>`,
  ),

  // The network inside the person.
  "mind-and-brain": g(
    `<circle stroke="${T}" cx="24" cy="18" r="11"/>` +
      `<path stroke="${S}" d="M9 43a15.5 15.5 0 0 1 30 0"/>` +
      `<path stroke="${S}" d="M20 20.5l4.5-7 4 5.5" stroke-width="1.8"/>` +
      `<circle cx="20" cy="20.5" r="2" fill="${A}" stroke-width="0"/>` +
      `<circle cx="24.5" cy="13.5" r="2" fill="${A}" stroke-width="0"/>` +
      `<circle cx="28.5" cy="19" r="2" fill="${A}" stroke-width="0"/>`,
  ),

  // ——— The specialty ———

  // The board and the tassel.
  "how-pain-physicians-train": g(
    `<path stroke="${T}" d="M24 8L42 16 24 24 6 16z"/>` +
      `<path stroke="${T}" d="M14.5 20.5v7c0 3 19 3 19 0v-7"/>` +
      `<path stroke="${A}" d="M42 16v9" stroke-width="2.2"/>` +
      `<circle cx="42" cy="27.5" r="1.9" fill="${A}" stroke-width="0"/>`,
  ),

  // One patient's care, held by several hands.
  "the-pain-team": g(
    `<circle stroke="${T}" cx="24" cy="15" r="5.5"/>` +
      `<path stroke="${T}" d="M14.5 36a9.5 9.5 0 0 1 19 0"/>` +
      `<circle stroke="${S}" cx="8.5" cy="20" r="4"/>` +
      `<path stroke="${S}" d="M1.5 38a7 7 0 0 1 11.5-5.3"/>` +
      `<circle stroke="${S}" cx="39.5" cy="20" r="4"/>` +
      `<path stroke="${S}" d="M46.5 38a7 7 0 0 0-11.5-5.3"/>`,
  ),

  // The intake, with everything on the list covered.
  "your-first-visit": g(
    `<rect stroke="${T}" x="11" y="8" width="26" height="34" rx="3.5"/>` +
      `<path stroke="${T}" d="M19 8v-2.5h10V8"/>` +
      `<path stroke="${S}" d="M17 19h9M17 25h14" stroke-width="2.2"/>` +
      `<path stroke="${A}" d="M17 33l3.5 3.5 6.5-7.5"/>`,
  ),

  // Two roads; one is signposted and verified.
  "pain-clinics-vs-pain-medicine": g(
    `<path stroke="${T}" d="M8 41c6-4 8.5-9 10.5-15S24 14 32 11.5"/>` +
      `<path stroke="${T}" d="M27.5 10.5l6-1-1 6"/>` +
      `<path stroke="${S}" d="M18.5 26c5 2.5 11 4 19 4.5" stroke-dasharray="4 4" stroke-width="2.2"/>` +
      `<circle cx="24" cy="17.5" r="2.2" fill="${A}" stroke-width="0"/>`,
  ),

  // ——— Pain treatments today ———

  // The leaf, its midrib splitting to a receptor dot — plant meets pathway.
  kratom: g(
    `<path stroke="${T}" d="M24 5C13.5 9 10.5 19 24 27.5 37.5 19 34.5 9 24 5z"/>` +
      `<path stroke="${T}" d="M24 7v18.5" stroke-width="2"/>` +
      `<path stroke="${S}" d="M24 27.5v6c0 4 -4 5.5 -8 6.5M24 33.5c0 4 4 5.5 8 6.5" stroke-width="2.2"/>` +
      `<circle cx="13" cy="42" r="2.4" fill="${A}" stroke-width="0"/>` +
      `<circle stroke="${A}" cx="35" cy="41" r="3.6" stroke-width="2.2"/>`,
  ),

  // Capsule and tablet over the signal wave they quiet — many tools, one map.
  "medications-for-pain": g(
    `<rect stroke="${T}" x="6" y="10" width="22" height="11" rx="5.5" transform="rotate(-24 17 15.5)"/>` +
      `<path stroke="${T}" d="M12.5 20.4 L21.5 16.4" stroke-width="2.2"/>` +
      `<circle stroke="${S}" cx="35" cy="15" r="7.5"/>` +
      `<path stroke="${S}" d="M29.5 15h11" stroke-width="2"/>` +
      `<path stroke="${A}" d="M5 38c3.5-6 7-6 10.5 0s7 6 10.5 0 7-6 10.5 0" stroke-width="2.4"/>`,
  ),

  // ——— Pain conditions ———

  // A lumbar stack — three vertebrae over the sacrum, the signal at the low
  // segment where most back pain lives.
  "low-back-pain": g(
    `<rect stroke="${T}" x="16" y="4" width="16" height="8" rx="3"/>` +
      `<rect stroke="${T}" x="16" y="17" width="16" height="8" rx="3"/>` +
      `<rect stroke="${T}" x="16" y="30" width="16" height="8" rx="3"/>` +
      `<path stroke="${S}" d="M17 43h14" stroke-width="2.2"/>` +
      `<circle cx="37.5" cy="34" r="2.6" fill="${A}" stroke-width="0"/>` +
      `<circle stroke="${A}" cx="37.5" cy="34" r="6.5" stroke-width="2.2"/>`,
  ),

  // A nerve fiber losing its insulation left to right — solid, then dashed,
  // sparking at the damaged end.
  "neuropathic-pain": g(
    `<path stroke="${T}" d="M4 26h16"/>` +
      `<path stroke="${T}" d="M23 26h17" stroke-dasharray="4.5 4"/>` +
      `<g stroke="${A}" stroke-width="2.2">` +
      `<path d="M31 18l3-6M37 17l1-5M42 20l4-4"/>` +
      `<path d="M31 34l3 6M37 35l1 5M42 32l4 4"/>` +
      `</g>`,
  ),

  // A joint in cross-section — two bone ends, a narrowed gap, the signal
  // at the joint line.
  "arthritis-pain": g(
    `<path stroke="${T}" d="M14 4h20l-3 12c-2 5 -12 5 -14 0z"/>` +
      `<path stroke="${T}" d="M14 44h20l-3 -12c-2 -5 -12 -5 -14 0z"/>` +
      `<path stroke="${S}" d="M12 24h11" stroke-width="2.2"/>` +
      `<circle cx="38" cy="24" r="2.2" fill="${A}" stroke-width="0"/>` +
      `<circle stroke="${A}" cx="38" cy="24" r="5.8" stroke-width="2.2"/>`,
  ),

  // Shelter over the signal — care carried alongside, not after.
  "cancer-pain": g(
    `<path stroke="${T}" d="M6 22C8 12 15 6 24 6s16 6 18 16"/>` +
      `<path stroke="${T}" d="M24 6v5" stroke-width="2.2"/>` +
      `<circle cx="24" cy="30" r="2.4" fill="${A}" stroke-width="0"/>` +
      `<circle stroke="${A}" cx="24" cy="30" r="6.5" stroke-width="2.2"/>` +
      `<path stroke="${S}" d="M10 42c4-4 8-4 14 0s10 4 14 0" stroke-width="2.2"/>`,
  ),

  // Widespread: pain rings scattered both sides, above and below the line.
  fibromyalgia: g(
    `<path stroke="${S}" d="M6 24h36" stroke-dasharray="1.5 5" stroke-width="2"/>` +
      `<circle stroke="${A}" cx="13" cy="11" r="5" stroke-width="2.2"/>` +
      `<circle stroke="${A}" cx="33" cy="14" r="5" stroke-width="2.2"/>` +
      `<circle stroke="${A}" cx="17" cy="37" r="5" stroke-width="2.2"/>` +
      `<circle stroke="${A}" cx="37" cy="34" r="5" stroke-width="2.2"/>` +
      `<circle cx="25" cy="24" r="2.4" fill="${T}" stroke-width="0"/>`,
  ),

  // The aura's zigzag crescent beside the temple's pain rings.
  migraine: g(
    `<circle cx="16" cy="24" r="2.4" fill="${A}" stroke-width="0"/>` +
      `<circle stroke="${A}" cx="16" cy="24" r="6.5" stroke-width="2.2"/>` +
      `<path stroke="${T}" d="M33 6l-6 8 7 5-7 8 7 5-6 8"/>` +
      `<path stroke="${S}" d="M16 8C9 12 5 18 5 24s4 12 11 16" stroke-width="2.2"/>`,
  ),

  // The nerve's line down the leg — pinched at the top, radiating below.
  sciatica: g(
    `<circle cx="17" cy="9" r="2.4" fill="${A}" stroke-width="0"/>` +
      `<circle stroke="${A}" cx="17" cy="9" r="6" stroke-width="2.2"/>` +
      `<path stroke="${T}" d="M17 15c0 7 6 9 6 15s-4 8-4 13"/>` +
      `<path stroke="${S}" d="M28 20l4-4M31 29h5M28 38l4 4" stroke-width="2.2"/>`,
  ),
};

/** Full standalone SVG document for a slug (share cards, tooling). */
export function emblemSvg(slug: string, size = 48): string | null {
  const inner = EMBLEMS[slug];
  if (!inner) return null;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${EMBLEM_VIEWBOX}">${inner}</svg>`;
}

export function emblemDataUri(slug: string, size = 48): string | null {
  const svg = emblemSvg(slug, size);
  return svg ? `data:image/svg+xml,${encodeURIComponent(svg)}` : null;
}
