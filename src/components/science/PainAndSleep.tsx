import Link from "next/link";
import { Figure, H2, P } from "./Figure";

function CycleFigure() {
  return (
    <Figure caption="The pain-sleep cycle runs in both directions — but not equally. In prospective studies, poor sleep predicts future pain more strongly than pain predicts poor sleep.">
      <svg
        role="img"
        aria-labelledby="cycle-title cycle-desc"
        viewBox="0 0 680 250"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="cycle-title">The pain and sleep cycle</title>
        <desc id="cycle-desc">
          Two boxes labeled &ldquo;a bad night&rdquo; and &ldquo;a worse pain
          day&rdquo; joined by two curved arrows. The arrow from bad night to
          worse pain day is thicker, marked as the stronger direction.
        </desc>
        <defs>
          <marker
            id="arrow-strong"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="#d97706" />
          </marker>
          <marker
            id="arrow-weak"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="#64748b" />
          </marker>
        </defs>

        {/* a bad night */}
        <rect x="30" y="90" width="180" height="70" rx="14" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
        <path
          d="M132 111 a17 17 0 1 0 4 24 a14 14 0 0 1 -4 -24 z"
          fill="#475569"
        />
        <text x="120" y="150" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          A bad night
        </text>

        {/* a worse pain day */}
        <rect x="470" y="90" width="180" height="70" rx="14" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" />
        <g stroke="#d97706" strokeWidth="2.2" strokeLinecap="round">
          <line x1="548" y1="106" x2="556" y2="122" />
          <line x1="560" y1="102" x2="560" y2="120" />
          <line x1="572" y1="106" x2="564" y2="122" />
        </g>
        <text x="560" y="150" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
          A worse pain day
        </text>

        {/* strong arrow: sleep -> pain (top) */}
        <path
          d="M215 95 Q340 30 465 95"
          fill="none"
          stroke="#d97706"
          strokeWidth="5"
          strokeLinecap="round"
          markerEnd="url(#arrow-strong)"
        />
        <text x="340" y="36" textAnchor="middle" fontSize="13" fontWeight="700" fill="#b45309">
          The stronger direction
        </text>
        <text x="340" y="54" textAnchor="middle" fontSize="12" fill="#92400e">
          poor sleep predicts future pain
        </text>

        {/* weak arrow: pain -> sleep (bottom) */}
        <path
          d="M465 158 Q340 222 215 158"
          fill="none"
          stroke="#64748b"
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd="url(#arrow-weak)"
        />
        <text x="340" y="230" textAnchor="middle" fontSize="12" fill="#64748b">
          pain disturbs sleep
        </text>
      </svg>
    </Figure>
  );
}

const CONSOLE = [
  {
    label: "Rested",
    origin: 40,
    accent: "#0d9488",
    meters: [
      { name: "Pain amplifier (sensory cortex)", pct: 0.4, warn: false },
      { name: "Built-in pain brakes", pct: 0.75, warn: false },
      { name: "Pain-inhibits-pain reflex", pct: 0.7, warn: false },
    ],
  },
  {
    label: "After a sleepless night",
    origin: 400,
    accent: "#d97706",
    meters: [
      { name: "Pain amplifier (sensory cortex)", pct: 0.85, warn: true },
      { name: "Built-in pain brakes", pct: 0.3, warn: false },
      { name: "Pain-inhibits-pain reflex", pct: 0.1, warn: false },
    ],
  },
];

function ConsoleFigure() {
  return (
    <Figure caption="What one night of sleep loss does to the pain system: the cortical 'amplifier' turns up while the brain's dampening circuits and the pain-inhibits-pain reflex turn down (Krause 2019; Staffe 2019).">
      <svg
        role="img"
        aria-labelledby="console-title console-desc"
        viewBox="0 0 720 240"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="console-title">The pain system, rested vs. sleep-deprived</title>
        <desc id="console-desc">
          Two panels of three meters. Rested: amplifier moderate, pain brakes
          and pain-inhibits-pain reflex high. After a sleepless night: amplifier
          high, brakes low, reflex nearly off.
        </desc>

        <line x1="360" y1="30" x2="360" y2="220" stroke="#e2e8f0" strokeWidth="1.5" />

        {CONSOLE.map((p) => {
          const cx = p.origin + 130;
          return (
            <g key={p.label}>
              <text x={cx} y="46" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
                {p.label}
              </text>
              {p.meters.map((m, i) => {
                const y = 84 + i * 48;
                const x = p.origin + 20;
                return (
                  <g key={m.name}>
                    <text x={x} y={y} fontSize="12.5" fill="#475569">
                      {m.name}
                    </text>
                    <rect x={x} y={y + 8} width="220" height="10" rx="5" fill="#e2e8f0" />
                    <rect
                      x={x}
                      y={y + 8}
                      width={220 * m.pct}
                      height="10"
                      rx="5"
                      fill={m.warn ? "#dc2626" : p.accent}
                    />
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}

export default function PainAndSleep() {
  return (
    <div>
      <CycleFigure />

      <P>
        Anyone who lives with pain knows the loop: pain makes it hard to sleep,
        and after a rough night everything hurts more. For a long time medicine
        treated the sleep half of that loop as collateral damage — something to
        fix after the pain was fixed. The research of the last two decades has
        turned that picture around.
      </P>

      <H2 id="both-ways">A two-way street — with a heavier lane</H2>
      <P>
        The relationship genuinely runs in both directions. But when researchers
        follow people over months and years, the two directions are not equal:
        in a landmark review of the longitudinal evidence, sleep problems
        predicted the development and worsening of chronic pain{" "}
        <strong>more strongly and more consistently</strong> than pain predicted
        sleep problems. Of nine studies that tested both directions, six found
        the sleep-to-pain path was the stronger one.
      </P>
      <P>
        That asymmetry matters, and it is quietly hopeful. If sleep were only a
        casualty of pain, there would be nothing to do but wait for the pain to
        improve. Instead, sleep is upstream — a lever that you and your care
        team can actually pull.
      </P>

      <H2 id="one-night">What a single night does</H2>
      <ConsoleFigure />
      <P>
        You do not need months of insomnia to feel the effect. In a brain-imaging
        study at UC Berkeley, healthy adults kept awake for one night became
        measurably more sensitive to heat pain. Their scans showed why: activity
        in the brain&rsquo;s pain-sensing cortex was{" "}
        <strong>amplified</strong>, while the deeper regions that normally
        evaluate and dampen pain signals — the thalamus, the insula, and the
        brain&rsquo;s reward circuitry — went <strong>quiet</strong>. The alarm
        got louder at the same moment the volume control failed.
      </P>
      <P>
        The same research team followed people&rsquo;s ordinary nights with a
        diary study and found the everyday version of the effect: night-to-night
        dips in <strong>sleep quality</strong> predicted next-day increases in
        pain. How <em>well</em> you slept mattered more than how long.
      </P>

      <H2 id="the-brakes">Sleep loss switches off the brakes</H2>
      <P>
        Your nervous system has a built-in pain-dampening reflex: when one part
        of the body is in pain, the brain can suppress pain signals from
        elsewhere. Researchers call it conditioned pain modulation, and it is one
        of the systems described in{" "}
        <Link
          href="/understanding-pain/how-pain-works"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          how pain works
        </Link>
        . After 24 hours without sleep, that reflex essentially{" "}
        <strong>stops working</strong> — in one experiment it was abolished
        outright, while &ldquo;wind-up&rdquo; (pain building on repeated
        stimulation) got easier to trigger.
      </P>
      <P>
        The <em>kind</em> of sleep you lose matters too. In an earlier
        experiment, sleep broken by repeated forced awakenings knocked out the
        same pain-inhibition system and increased spontaneous pain — while sleep
        that was merely shortened by the same amount did not. And in a small
        early study, disrupting only deep slow-wave sleep for three nights
        lowered pain thresholds by about a quarter and produced the kind of
        widespread tenderness seen in fibromyalgia. Deep, unbroken sleep appears
        to be when the pain system resets.
      </P>

      <H2 id="how-common">If this is you, you have company</H2>
      <P>
        Sleep problems are not a side note in chronic pain — they are close to
        universal. A meta-analysis across thousands of patients found that
        roughly <strong>three out of four</strong> people with chronic
        non-cancer pain have clinically significant sleep disturbance, and
        reviews put sleep complaints at 67&ndash;88% across chronic pain
        disorders. If your pain and your sleep are wrecking each other, you are
        not doing something wrong. You are experiencing one of the most
        well-documented cycles in pain science.
      </P>

      <H2 id="what-helps">What the evidence says helps</H2>
      <P>
        Because sleep sits upstream of pain, treating the sleep problem directly
        has become part of modern pain care. The best-studied approach is{" "}
        <strong>cognitive behavioral therapy for insomnia (CBT-I)</strong> — a
        structured, non-drug program that retrains sleep habits and the racing
        thoughts that fuel insomnia. In people with chronic pain, meta-analyses
        show it reliably and durably improves sleep and mood; its direct effect
        on pain intensity is more modest on average. That is worth hearing
        honestly: better sleep does not make pain disappear on its own. It
        restores the conditions the pain system needs to regulate itself, and
        it gives you back the nights.
      </P>
      <P>
        Basic sleep habits — consistent times, a dark and cool room, caution
        with late caffeine and screens — are laid out well in the NIH&rsquo;s
        patient guides. If pain is what keeps waking you, or you suspect a sleep
        disorder such as sleep apnea, raise it directly with your clinician:
        sleep is a legitimate treatment target in its own right, not a
        complaint to apologize for.
      </P>
    </div>
  );
}
