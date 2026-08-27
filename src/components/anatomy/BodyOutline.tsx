import type { ReactNode } from "react";
import { ANATOMY, SiteMarker } from "./marks";

/**
 * Schematic human figure, front or back view, drawn in the site's figure
 * legend. Renders as a <g> in a nominal 220x460 space — position it inside
 * your figure's <svg> with a transform, and address pain sites by anchor
 * name so condition pages stay consistent.
 */

export const BODY_W = 220;
export const BODY_H = 460;

const SHARED_ANCHORS = {
  head: [110, 40],
  neck: [110, 74],
  shoulderL: [76, 100],
  shoulderR: [144, 100],
  elbowL: [58, 170],
  elbowR: [162, 170],
  handL: [46, 252],
  handR: [174, 252],
  hipL: [93, 228],
  hipR: [127, 228],
  kneeL: [88, 324],
  kneeR: [132, 324],
  ankleL: [85, 412],
  ankleR: [135, 412],
  footL: [82, 432],
  footR: [138, 432],
} as const;

const FRONT_ANCHORS = {
  ...SHARED_ANCHORS,
  chest: [110, 132],
  abdomen: [110, 184],
} as const;

const BACK_ANCHORS = {
  ...SHARED_ANCHORS,
  upperBack: [110, 128],
  lowBack: [110, 196],
  gluteL: [95, 240],
  gluteR: [125, 240],
} as const;

export type FrontAnchor = keyof typeof FRONT_ANCHORS;
export type BackAnchor = keyof typeof BACK_ANCHORS;

type Mark<A extends string> = { at: A; size?: "sm" | "md" };

function Limb({ d, width }: { d: string; width: number }) {
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke={ANATOMY.outline}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        fill="none"
        stroke={ANATOMY.fill}
        strokeWidth={width - 4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

function Silhouette() {
  return (
    <>
      {/* arms + legs first, so the torso overlaps the joints */}
      <Limb d="M77 100 L58 170 L48 240" width={16} />
      <Limb d="M143 100 L162 170 L172 240" width={16} />
      <Limb d="M93 230 L88 324 L85 414" width={19} />
      <Limb d="M127 230 L132 324 L135 414" width={19} />

      <ellipse cx={46} cy={253} rx={9.5} ry={11} fill={ANATOMY.fill} stroke={ANATOMY.outline} strokeWidth={2} />
      <ellipse cx={174} cy={253} rx={9.5} ry={11} fill={ANATOMY.fill} stroke={ANATOMY.outline} strokeWidth={2} />
      <ellipse cx={82} cy={431} rx={13} ry={8} fill={ANATOMY.fill} stroke={ANATOMY.outline} strokeWidth={2} />
      <ellipse cx={138} cy={431} rx={13} ry={8} fill={ANATOMY.fill} stroke={ANATOMY.outline} strokeWidth={2} />

      <rect x={100} y={56} width={20} height={38} rx={8} fill={ANATOMY.fill} stroke={ANATOMY.outline} strokeWidth={2} />
      <circle cx={110} cy={40} r={26} fill={ANATOMY.fill} stroke={ANATOMY.outline} strokeWidth={2} />

      {/* torso */}
      <path
        d="M78 90 C70 94 66 102 65 114 L68 168 C69 190 74 210 80 222 C90 230 130 230 140 222 C146 210 151 190 152 168 L155 114 C154 102 150 94 142 90 C122 82 98 82 78 90 Z"
        fill={ANATOMY.fill}
        stroke={ANATOMY.outline}
        strokeWidth={2}
      />
    </>
  );
}

/** The sciatic path: low back, through the buttock, down the back of the leg. */
function SciaticOverlay({ side }: { side: "left" | "right" }) {
  const d =
    side === "right"
      ? "M116 198 C124 212 128 224 128 242 L132 324 L135 410"
      : "M104 198 C96 212 92 224 92 242 L88 324 L85 410";
  return (
    <path
      d={d}
      fill="none"
      stroke={ANATOMY.nerve}
      strokeWidth={3.5}
      strokeLinecap="round"
    />
  );
}

export function BodyFront({
  marks = [],
  children,
}: {
  marks?: Mark<FrontAnchor>[];
  /** Extra overlays in the same 220x460 space. */
  children?: ReactNode;
}) {
  return (
    <g>
      <Silhouette />
      {children}
      {marks.map((m) => {
        const [x, y] = FRONT_ANCHORS[m.at];
        return <SiteMarker key={m.at} x={x} y={y} size={m.size} />;
      })}
    </g>
  );
}

export function BodyBack({
  marks = [],
  sciatic,
  children,
}: {
  marks?: Mark<BackAnchor>[];
  /** Draw the sciatic nerve path down one leg (teal). */
  sciatic?: "left" | "right";
  children?: ReactNode;
}) {
  return (
    <g>
      <Silhouette />
      {sciatic && <SciaticOverlay side={sciatic} />}
      {children}
      {marks.map((m) => {
        const [x, y] = BACK_ANCHORS[m.at];
        return <SiteMarker key={m.at} x={x} y={y} size={m.size} />;
      })}
    </g>
  );
}
