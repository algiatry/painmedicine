import { FIG } from "@/lib/fig";

/**
 * The homepage hero figure — the brand's settling signal, drawn poster-size,
 * carrying two stories in one shape:
 *
 *   Brand:      Pain          →  Understanding    →  Options
 *   Mechanism:  the signal    →  the spinal gate  →  the brain (which can
 *               fires             filters it          turn it down)
 *
 * A damped waveform starts as a big AMBER spike (the pain signal, per the
 * site-wide FIG legend) and resolves into a TEAL rest — the nervous system
 * bringing it under control. The shape is the same settling signal as the
 * logo/favicon (lib/brand.ts), so every visit reinforces the mark. Three
 * quiet glyphs on the baseline carry the mechanism without competing with
 * the wave.
 *
 * The wave draws itself once via the shared `.signal-draw` class (globals.css,
 * behind prefers-reduced-motion); the glyphs, pulses and descending-control
 * arrow fade in after via `.signal-rest-dot`. No-motion / SSR = finished figure.
 */

const VB_W = 560;
const VB_H = 360;
const X0 = 70;
const X1 = 500;
const MID = 150;
const AMP = 104;

/** Damped sine: agitated at the periphery, settling to rest at the brain. */
function wy(x: number): number {
  const t = x - X0;
  return MID - AMP * Math.exp(-t / 150) * Math.sin(t / 24);
}

const POINTS: string[] = [];
for (let x = X0; x <= X1; x += 3) POINTS.push(`${x},${wy(x).toFixed(1)}`);
const REST_Y = wy(X1);

/** The three beats, left → right. */
const B1 = 90; // the signal starts (body)
const B2 = 285; // the spinal gate
const B3 = 480; // the brain

const TICKS = [116, 208, 300, 392, 470];
const PULSES = [100, 140, 182]; // signal pulses riding the first spike

export default function HeroFigure({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className={className}
      role="img"
      aria-labelledby="hero-fig-title hero-fig-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="hero-fig-title">
        From pain to understanding to options
      </title>
      <desc id="hero-fig-desc">
        A pain signal fires at the body, is filtered at the spinal gate, and
        reaches the brain, which sends control back down the pathway — the
        signal settling from an agitated spike to rest, mirroring the path from
        pain to understanding to your options.
      </desc>

      <defs>
        <linearGradient id="hero-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={FIG.signal} />
          <stop offset="0.28" stopColor={FIG.signalDark} />
          <stop offset="0.55" stopColor={FIG.nerve} />
          <stop offset="1" stopColor={FIG.nerveDark} />
        </linearGradient>
      </defs>

      {/* faint time ticks behind the wave */}
      {TICKS.map((x) => (
        <line
          key={x}
          x1={x}
          y1={70}
          x2={x}
          y2={215}
          stroke={FIG.nerveDark}
          strokeOpacity="0.07"
          strokeWidth="1"
        />
      ))}

      {/* baseline: where the signal comes to rest */}
      <line
        x1={X0}
        y1={MID}
        x2={X1 + 8}
        y2={MID}
        stroke={FIG.faint}
        strokeOpacity="0.5"
        strokeWidth="1.5"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />

      {/* descending control — the brain reaches back down the pathway */}
      <g className="signal-rest-dot">
        <path
          d={`M462 ${(REST_Y - 26).toFixed(1)} C 430 92, 372 92, 336 118`}
          fill="none"
          stroke={FIG.nerve}
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeDasharray="2 7"
          strokeLinecap="round"
        />
        <path d="M336 118 l9 -3 -1 8 z" fill={FIG.nerve} fillOpacity="0.7" />
      </g>

      {/* the settling signal — the brand mark, poster-size */}
      <polyline
        points={POINTS.join(" ")}
        fill="none"
        stroke="url(#hero-wave)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="signal-draw"
      />

      {/* signal pulses riding the first spike */}
      {PULSES.map((x) => (
        <circle
          key={x}
          cx={x}
          cy={wy(x).toFixed(1)}
          r="4.5"
          fill={FIG.signal}
          className="signal-rest-dot"
        />
      ))}

      {/* rest dot = options */}
      <g className="signal-rest-dot">
        <circle cx={X1} cy={REST_Y.toFixed(1)} r="8" fill={FIG.nerveBright} fillOpacity="0.22" />
        <circle cx={X1} cy={REST_Y.toFixed(1)} r="4.5" fill={FIG.nerveDark} />
      </g>

      {/* baseline glyphs — the mechanism, quiet under the wave */}
      {/* the signal starts: concentric amber rings (the site's pain-site motif) */}
      <g>
        <circle cx={B1} cy={215} r="17" fill="none" stroke={FIG.signal} strokeOpacity="0.25" strokeWidth="2" />
        <circle cx={B1} cy={215} r="10.5" fill="none" stroke={FIG.signal} strokeOpacity="0.55" strokeWidth="2" />
        <circle cx={B1} cy={215} r="5" fill={FIG.signal} />
      </g>
      {/* the spinal gate */}
      <g>
        <rect x={B2 - 11} y={200} width="22" height="30" rx="5" fill={FIG.nerveTint} stroke={FIG.nerve} strokeWidth="2.4" />
        <line x1={B2} y1={200} x2={B2} y2={230} stroke={FIG.nerve} strokeWidth="2" />
      </g>
      {/* the brain: two hemispheres, central fissure, gyri, brainstem */}
      <g transform={`translate(${B3 - 21},${214 - 20})`}>
        <path
          d="M21 3 C13 2 7 7 7 13 C2 15 1 22 5 26 C5 32 12 35 18 32 C19 35 24 35 25 32 C31 35 38 31 37 25 C41 22 40 15 35 13 C35 7 29 2 21 3 Z"
          fill={FIG.nerveTint}
          stroke={FIG.nerveDark}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M21 4 C19 10 23 12 21 17 C19 22 23 26 21 32" fill="none" stroke={FIG.nerveDark} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 14 C13 14 13 19 9 21" fill="none" stroke={FIG.nerveDark} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M8 25 C12 25 14 28 13 30" fill="none" stroke={FIG.nerveDark} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M34 14 C29 14 29 19 33 21" fill="none" stroke={FIG.nerveDark} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M34 25 C30 25 28 28 29 30" fill="none" stroke={FIG.nerveDark} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M21 32 q0 5 -3 7" fill="none" stroke={FIG.nerveDark} strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* beat labels: brand word (large) + mechanism (small) */}
      <g textAnchor="middle">
        <text x={B1} y={300} fontSize="19" fontWeight="700" fill={FIG.signalDark} letterSpacing="-0.3">Pain</text>
        <text x={B1} y={322} fontSize="13" fill={FIG.muted}>the signal fires</text>
        <text x={B2} y={300} fontSize="19" fontWeight="700" fill={FIG.ink} letterSpacing="-0.3">Understanding</text>
        <text x={B2} y={322} fontSize="13" fill={FIG.muted}>the gate filters it</text>
        <text x={B3} y={300} fontSize="19" fontWeight="700" fill={FIG.nerveDark} letterSpacing="-0.3">Options</text>
        <text x={B3} y={322} fontSize="13" fill={FIG.muted}>the brain can turn it down</text>
      </g>
    </svg>
  );
}
