import { FIG } from "@/lib/fig";

/**
 * The homepage hero figure — the site's signature motif drawn poster-size:
 * a signal starts at the periphery, travels the nerve, passes the spinal
 * gate, and reaches the brain — which sends control back DOWN the same
 * pathway. One idea in one glance: pain is a signal the nervous system
 * processes, and the system has a dial.
 *
 * Same legend as every article figure (lib/fig.ts): amber = the signal,
 * teal = the nervous system, slate = chrome. The draw animation reuses the
 * hero `.signal-draw` / `.signal-rest-dot` classes in globals.css, which
 * exist only behind prefers-reduced-motion — the no-motion state is the
 * finished figure.
 */
export default function HeroPathway({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 340"
      className={className}
      role="img"
      aria-labelledby="hero-pathway-title hero-pathway-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="hero-pathway-title">
        The pain pathway: signal, gate, brain
      </title>
      <desc id="hero-pathway-desc">
        A pain signal starts at the body, travels along a nerve to the spinal
        gate, and up to the brain — which sends control signals back down and
        can turn the signal down.
      </desc>

      {/* the ascending pathway: periphery → gate → brain */}
      <path
        d="M98 255 H258 M286 255 C 360 255, 400 190, 438 128"
        fill="none"
        stroke={FIG.nerve}
        strokeWidth="4"
        strokeLinecap="round"
        className="signal-draw"
      />

      {/* signal pulses riding the nerve */}
      <circle cx="140" cy="255" r="5" fill={FIG.signal} className="signal-rest-dot" />
      <circle cx="196" cy="255" r="5" fill={FIG.signal} className="signal-rest-dot" />
      <circle cx="330" cy="248" r="5" fill={FIG.signal} className="signal-rest-dot" />
      <circle cx="404" cy="177" r="5" fill={FIG.signal} className="signal-rest-dot" />

      {/* where it starts — the site's pain-site motif: concentric amber rings */}
      <g>
        <circle cx="70" cy="255" r="24" fill="none" stroke={FIG.signal} strokeOpacity="0.25" strokeWidth="2" />
        <circle cx="70" cy="255" r="15" fill="none" stroke={FIG.signal} strokeOpacity="0.55" strokeWidth="2" />
        <circle cx="70" cy="255" r="7" fill={FIG.signal} />
        {/* stimulus spark */}
        <path
          d="M70 206 l-8 18 h10 l-7 18 20 -23 h-11 z"
          fill={FIG.signal}
          stroke={FIG.signalDark}
          strokeWidth="1"
        />
      </g>

      {/* the spinal gate */}
      <g>
        <rect x="260" y="237" width="24" height="36" rx="5" fill={FIG.nerveTint} stroke={FIG.nerve} strokeWidth="2.5" />
        <line x1="272" y1="237" x2="272" y2="273" stroke={FIG.nerve} strokeWidth="2" />
      </g>

      {/* the brain */}
      <g>
        <path
          d="M450 88 C 442 68, 470 54, 490 62 C 506 52, 534 62, 532 82 C 546 88, 544 112, 526 116 C 520 132, 494 134, 486 122 C 466 130, 444 112, 450 88 Z"
          fill={FIG.nerveTint}
          stroke={FIG.nerveDark}
          strokeWidth="2.5"
        />
        <path
          d="M474 80 c 10 -6, 16 4, 26 -2 M468 96 c 12 6, 22 -4, 34 2 M504 74 c 6 8, 2 16, 8 22"
          fill="none"
          stroke={FIG.nerveDark}
          strokeWidth="1.5"
        />
      </g>

      {/* descending control — the brain reaches back down to the gate */}
      <path
        d="M452 138 C 402 192, 336 216, 286 234"
        fill="none"
        stroke={FIG.nerveDark}
        strokeWidth="2.5"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
      <path d="M290 230 l-12 6 12 4 -3 -5 z" fill={FIG.nerveDark} />

      {/* labels — the whole lesson in three lines */}
      <g fontSize="14" fill={FIG.text} textAnchor="middle">
        <text x="70" y="303" fontWeight="600">The signal starts</text>
        <text x="272" y="303" fontWeight="600">The gate filters it</text>
        <text x="272" y="321" fill={FIG.muted}>on the way up</text>
        <text x="460" y="303" fontWeight="600">The brain builds the pain</text>
        <text x="460" y="321" fill={FIG.muted}>— and can turn it down</text>
      </g>
    </svg>
  );
}
