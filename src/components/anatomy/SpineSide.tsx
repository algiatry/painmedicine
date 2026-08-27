import { ANATOMY } from "./marks";

/**
 * Lateral (side) view of the spine with its natural S-curve, person facing
 * left. Renders as a <g> in a nominal 200x440 space. Vertebrae are grouped
 * into regions that can be highlighted, and a lumbar disc can be shown
 * bulging toward the nerve — the low-back / sciatica story.
 */

export const SPINE_W = 200;
export const SPINE_H = 440;

type Region = "cervical" | "thoracic" | "lumbar" | "sacrum";

type Vertebra = {
  region: Region;
  x: number; // center x
  y: number; // top y
  w: number;
  h: number;
  gap: number; // disc space below
};

const SEGMENTS: { region: Region; n: number; w: number; h: number; gap: number }[] = [
  { region: "cervical", n: 7, w: 19, h: 9, gap: 3.5 },
  { region: "thoracic", n: 12, w: 29, h: 11, gap: 4 },
  { region: "lumbar", n: 5, w: 38, h: 16, gap: 7 },
];

// Anterior = smaller x (facing left). Control points trace the real curve:
// cervical lordosis (anterior), thoracic kyphosis (posterior), lumbar
// lordosis (anterior), sacrum swinging posterior again.
const CURVE: [number, number][] = [
  [0, -3],
  [0.12, -9],
  [0.3, 4],
  [0.45, 12],
  [0.62, 4],
  [0.78, -10],
  [0.9, -5],
  [1, 4],
];

function curveOffset(t: number): number {
  for (let i = 1; i < CURVE.length; i++) {
    if (t <= CURVE[i][0]) {
      const [t0, v0] = CURVE[i - 1];
      const [t1, v1] = CURVE[i];
      const f = (t - t0) / (t1 - t0);
      // smoothstep between control points keeps the column from kinking
      const s = f * f * (3 - 2 * f);
      return v0 + (v1 - v0) * s;
    }
  }
  return CURVE[CURVE.length - 1][1];
}

const VERTEBRAE: Vertebra[] = (() => {
  const total = SEGMENTS.reduce((s, seg) => s + seg.n, 0);
  const out: Vertebra[] = [];
  let y = 18;
  let i = 0;
  for (const seg of SEGMENTS) {
    for (let k = 0; k < seg.n; k++) {
      const t = i / (total + 2);
      out.push({ region: seg.region, x: 96 + curveOffset(t), y, w: seg.w, h: seg.h, gap: seg.gap });
      y += seg.h + seg.gap;
      i++;
    }
  }
  return out;
})();

const LUMBAR = VERTEBRAE.filter((v) => v.region === "lumbar");
const SACRUM_TOP = LUMBAR[LUMBAR.length - 1];

const LABELS: { region: Region; text: string; sub: string }[] = [
  { region: "cervical", text: "Cervical", sub: "C1–C7 · neck" },
  { region: "thoracic", text: "Thoracic", sub: "T1–T12 · mid-back" },
  { region: "lumbar", text: "Lumbar", sub: "L1–L5 · low back" },
];

export function SpineSide({
  highlight,
  bulgeAt,
  labels = false,
}: {
  /** Tint one region's vertebrae teal. */
  highlight?: Region;
  /** Show a bulging lumbar disc (1 = below L1 … 4 = below L4) pressing on the nerve. */
  bulgeAt?: 1 | 2 | 3 | 4;
  labels?: boolean;
}) {
  const bulge = bulgeAt !== undefined ? LUMBAR[bulgeAt - 1] : undefined;

  return (
    <g>
      {/* discs */}
      {VERTEBRAE.slice(0, -1).map((v, i) => {
        const next = VERTEBRAE[i + 1];
        const cy = v.y + v.h + v.gap / 2;
        const isBulge = bulge !== undefined && v === bulge;
        return (
          <g key={`d${i}`}>
            <ellipse
              cx={(v.x + next.x) / 2}
              cy={cy}
              rx={(v.w + next.w) / 4 + (isBulge ? 1 : -1)}
              ry={Math.max(v.gap / 2 + 1, 2.5)}
              fill={isBulge ? "#fde68a" : ANATOMY.soft}
              stroke={isBulge ? ANATOMY.signalDark : "none"}
              strokeWidth={isBulge ? 1.5 : 0}
            />
            {isBulge && (
              <>
                {/* the bulge, protruding backward toward the nerve */}
                <ellipse
                  cx={(v.x + next.x) / 2 + (v.w + next.w) / 4 + 5}
                  cy={cy}
                  rx={6.5}
                  ry={4}
                  fill="#fde68a"
                  stroke={ANATOMY.signalDark}
                  strokeWidth={1.5}
                />
              </>
            )}
          </g>
        );
      })}

      {/* the spinal canal / nerve line running behind the vertebral bodies */}
      <path
        d={`M${VERTEBRAE[0].x + VERTEBRAE[0].w / 2 + 8} ${VERTEBRAE[0].y} ${VERTEBRAE.map(
          (v) => `L${v.x + v.w / 2 + 8} ${v.y + v.h / 2}`,
        ).join(" ")} L${SACRUM_TOP.x + 26} ${SACRUM_TOP.y + 58}`}
        fill="none"
        stroke={ANATOMY.nerve}
        strokeWidth={2.5}
        strokeOpacity={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* vertebral bodies */}
      {VERTEBRAE.map((v, i) => {
        const hot = highlight === v.region;
        return (
          <rect
            key={`v${i}`}
            x={v.x - v.w / 2}
            y={v.y}
            width={v.w}
            height={v.h}
            rx={Math.min(4, v.h / 2.6)}
            fill={hot ? ANATOMY.highlight : ANATOMY.bone}
            stroke={hot ? ANATOMY.nerve : ANATOMY.outline}
            strokeWidth={hot ? 2 : 1.5}
          />
        );
      })}

      {/* sacrum wedge */}
      <path
        d={`M${SACRUM_TOP.x - 17} ${SACRUM_TOP.y + SACRUM_TOP.h + 6} L${SACRUM_TOP.x + 17} ${
          SACRUM_TOP.y + SACRUM_TOP.h + 6
        } L${SACRUM_TOP.x + 30} ${SACRUM_TOP.y + SACRUM_TOP.h + 60} L${SACRUM_TOP.x + 12} ${
          SACRUM_TOP.y + SACRUM_TOP.h + 64
        } Z`}
        fill={highlight === "sacrum" ? ANATOMY.highlight : ANATOMY.bone}
        stroke={highlight === "sacrum" ? ANATOMY.nerve : ANATOMY.outline}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />

      {labels &&
        LABELS.map((l) => {
          const vs = VERTEBRAE.filter((v) => v.region === l.region);
          const midY = (vs[0].y + vs[vs.length - 1].y + vs[vs.length - 1].h) / 2;
          return (
            <g key={l.region} textAnchor="start">
              <text x={146} y={midY} fontSize={13} fontWeight={600} fill="#334155">
                {l.text}
              </text>
              <text x={146} y={midY + 16} fontSize={11.5} fill="#64748b">
                {l.sub}
              </text>
            </g>
          );
        })}
    </g>
  );
}
