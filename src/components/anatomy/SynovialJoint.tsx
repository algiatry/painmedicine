import { ANATOMY } from "./marks";

/**
 * Generic synovial joint in cross-section — two bone ends, cartilage caps,
 * capsule and synovium. Renders as a <g> in a nominal 320x300 space.
 * States: healthy, osteoarthritis (thinned cartilage, narrowed space,
 * osteophyte spurs), inflamed (thickened amber synovium).
 */

export const JOINT_W = 320;
export const JOINT_H = 300;

export function SynovialJoint({
  state = "healthy",
}: {
  state?: "healthy" | "osteoarthritis" | "inflamed";
}) {
  const oa = state === "osteoarthritis";
  const inflamed = state === "inflamed";

  // half-gap between the two cartilage surfaces at the midline y=150
  const gap = oa ? 10 : 22;
  const cartW = oa ? 3 : 8;

  const upperY = 150 - gap;
  const lowerY = 150 + gap;

  return (
    <g>
      {/* capsule */}
      <rect
        x={74}
        y={82}
        width={172}
        height={136}
        rx={46}
        fill="#ffffff"
        stroke={ANATOMY.outline}
        strokeWidth={2}
      />
      {/* synovium lining */}
      <rect
        x={82}
        y={90}
        width={156}
        height={120}
        rx={40}
        fill="none"
        stroke={inflamed ? ANATOMY.signal : ANATOMY.soft}
        strokeWidth={inflamed ? 5 : 2.5}
        strokeOpacity={inflamed ? 0.75 : 1}
      />

      {/* upper bone: shaft + condyle */}
      <path
        d="M132 8 L188 8 L196 76 C196 100 176 112 160 112 C144 112 124 100 124 76 Z"
        fill={ANATOMY.bone}
        stroke={ANATOMY.outline}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <ellipse cx={160} cy={upperY - cartW - 16} rx={62} ry={26} fill={ANATOMY.bone} stroke={ANATOMY.outline} strokeWidth={2} />

      {/* lower bone: condyle + shaft */}
      <ellipse cx={160} cy={lowerY + cartW + 16} rx={62} ry={26} fill={ANATOMY.bone} stroke={ANATOMY.outline} strokeWidth={2} />
      <path
        d="M132 292 L188 292 L196 224 C196 200 176 188 160 188 C144 188 124 200 124 224 Z"
        fill={ANATOMY.bone}
        stroke={ANATOMY.outline}
        strokeWidth={2}
        strokeLinejoin="round"
      />

      {/* cartilage caps on the facing surfaces */}
      <path
        d={`M104 ${upperY - 12} Q160 ${upperY + 10} 216 ${upperY - 12}`}
        fill="none"
        stroke={ANATOMY.cartilage}
        strokeWidth={cartW}
        strokeLinecap="round"
        strokeDasharray={oa ? "14 9" : "none"}
      />
      <path
        d={`M104 ${lowerY + 12} Q160 ${lowerY - 10} 216 ${lowerY + 12}`}
        fill="none"
        stroke={ANATOMY.cartilage}
        strokeWidth={cartW}
        strokeLinecap="round"
        strokeDasharray={oa ? "12 11" : "none"}
      />

      {/* osteophyte spurs at the joint margins */}
      {oa && (
        <g fill={ANATOMY.bone} stroke={ANATOMY.signalDark} strokeWidth={1.5} strokeLinejoin="round">
          <path d={`M100 ${upperY - 18} l-13 9 12 5 z`} />
          <path d={`M220 ${upperY - 18} l13 9 -12 5 z`} />
          <path d={`M100 ${lowerY + 18} l-13 -9 12 -5 z`} />
          <path d={`M220 ${lowerY + 18} l13 -9 -12 -5 z`} />
        </g>
      )}
    </g>
  );
}
