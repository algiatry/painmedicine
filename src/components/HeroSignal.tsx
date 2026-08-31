import { BRAND } from "@/lib/brand";
import { FIG } from "@/lib/fig";

/**
 * The brand mark, given room to breathe: a damped waveform settling to rest.
 * Purely decorative (aria-hidden); the draw animation lives in globals.css
 * behind prefers-reduced-motion.
 */
const W = 560;
const H = 340;
const X0 = 24;
const X1 = 536;
const MID = 186;
const AMP = 118;

function y(x: number): number {
  const t = x - X0;
  return MID - AMP * Math.exp(-t / 205) * Math.sin(t / 26);
}

const STEP = 4;
const POINTS: string[] = [];
for (let x = X0; x <= X1; x += STEP) {
  POINTS.push(`${x},${y(x).toFixed(1)}`);
}
const END_Y = y(X1);

/** Faint vertical time ticks behind the wave. */
const TICKS = [116, 208, 300, 392, 484];

export default function HeroSignal({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "strip";
}) {
  const viewBox = variant === "strip" ? `0 110 ${W} 140` : `0 0 ${W} ${H}`;
  const strokeId = `hero-signal-stroke-${variant}`;
  const glowId = `hero-signal-glow-${variant}`;

  return (
    <svg
      viewBox={viewBox}
      className={className}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Same amber→teal story as the desktop HeroFigure: the pain signal
            (amber) settling into the nervous system's control (teal). */}
        <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={FIG.signal} />
          <stop offset="0.28" stopColor={FIG.signalDark} />
          <stop offset="0.58" stopColor={BRAND.teal} />
          <stop offset="1" stopColor="#2dd4bf" />
        </linearGradient>
        <radialGradient id={glowId} cx="0.72" cy="0.42" r="0.75">
          <stop offset="0" stopColor={BRAND.teal} stopOpacity="0.07" />
          <stop offset="1" stopColor={BRAND.teal} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width={W} height={H} fill={`url(#${glowId})`} />

      {TICKS.map((x) => (
        <line
          key={x}
          x1={x}
          y1={40}
          x2={x}
          y2={H - 40}
          stroke="#0f766e"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      ))}

      {/* Baseline: where the signal comes to rest. */}
      <line
        x1={X0}
        y1={MID}
        x2={X1}
        y2={MID}
        stroke="#64748b"
        strokeOpacity="0.28"
        strokeWidth="1.5"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />

      <polyline
        points={POINTS.join(" ")}
        fill="none"
        stroke={`url(#${strokeId})`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="signal-draw"
      />

      <circle
        cx={X1}
        cy={END_Y.toFixed(1)}
        r="7"
        fill="#2dd4bf"
        fillOpacity="0.25"
        className="signal-rest-dot"
      />
      <circle
        cx={X1}
        cy={END_Y.toFixed(1)}
        r="3.5"
        fill={BRAND.teal}
        className="signal-rest-dot"
      />
    </svg>
  );
}
