import type { ReactNode } from "react";
import { ANATOMY, SiteMarker } from "./marks";

/**
 * Head in profile, facing left — the canvas for migraine and headache
 * figures. Renders as a <g> in a nominal 240x280 space with addressable
 * anchors for the classic pain sites.
 */

export const HEAD_W = 240;
export const HEAD_H = 280;

const ANCHORS = {
  temple: [104, 96],
  orbit: [78, 110],
  crown: [136, 30],
  occiput: [206, 116],
  neckTop: [186, 210],
  jaw: [104, 170],
  sinus: [76, 134],
} as const;

export type HeadAnchor = keyof typeof ANCHORS;

export function HeadProfile({
  marks = [],
  children,
}: {
  marks?: { at: HeadAnchor; size?: "sm" | "md" }[];
  children?: ReactNode;
}) {
  return (
    <g>
      {/* skull + face profile */}
      <path
        d="M120 14
           C 74 20 52 62 56 96
           C 58 108 64 112 62 120
           C 58 128 52 132 54 138
           L 62 142
           C 60 148 62 150 66 152
           C 62 156 62 160 68 162
           C 74 166 86 166 96 162
           C 108 158 116 162 122 172
           C 130 186 146 196 164 198
           L 172 232
           L 216 232
           C 210 208 208 190 212 168
           C 224 146 228 118 222 90
           C 214 46 172 8 120 14 Z"
        fill={ANATOMY.fill}
        stroke={ANATOMY.outline}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {/* ear */}
      <path
        d="M148 120 C 140 114 132 120 134 132 C 136 144 146 148 152 142"
        fill="none"
        stroke={ANATOMY.outline}
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* brow hint */}
      <path
        d="M66 98 C 74 94 82 94 88 96"
        fill="none"
        stroke={ANATOMY.outline}
        strokeWidth={2}
        strokeLinecap="round"
      />
      {children}
      {marks.map((m) => {
        const [x, y] = ANCHORS[m.at];
        return <SiteMarker key={m.at} x={x} y={y} size={m.size} />;
      })}
    </g>
  );
}
