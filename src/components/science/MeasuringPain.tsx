import Link from "next/link";
import { Figure, H2, P } from "./Figure";
import { FIG } from "@/lib/fig";

const FACES = [
  { val: 0, cx: 50, accent: FIG.nerve, mouth: "M41 102 Q50 112 59 102" },
  { val: 2.5, cx: 190, accent: FIG.nerveBright, mouth: "M181 103 Q190 109 199 103" },
  { val: 5, cx: 330, accent: FIG.muted, mouth: "M321 105 L339 105" },
  { val: 7.5, cx: 470, accent: FIG.signal, mouth: "M461 108 Q470 102 479 108" },
  { val: 10, cx: 610, accent: FIG.signalDark, mouth: "M601 110 Q610 100 619 110" },
];

function ScaleFigure() {
  const ticks = Array.from({ length: 11 }, (_, i) => i);
  return (
    <Figure caption="The 0-to-10 numeric scale, paired with faces. Quick and useful — but a single number is only the beginning of the story.">
      <svg
        role="img"
        aria-labelledby="scale-title scale-desc"
        viewBox="0 0 660 225"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="scale-title">The 0 to 10 pain rating scale</title>
        <desc id="scale-desc">
          A colored bar numbered 0 to 10 from &ldquo;no pain&rdquo; to
          &ldquo;worst pain imaginable,&rdquo; with faces above ranging from calm
          to distressed.
        </desc>
        <defs>
          <linearGradient id="painscale" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={FIG.nerveBright} />
            <stop offset="0.55" stopColor={FIG.signalBright} />
            <stop offset="1" stopColor={FIG.signal} />
          </linearGradient>
        </defs>

        {/* faces */}
        {FACES.map((f) => (
          <g key={f.val}>
            <circle cx={f.cx} cy="96" r="20" fill={FIG.white} stroke={f.accent} strokeWidth="2" />
            <circle cx={f.cx - 7} cy="90" r="1.8" fill={FIG.text} />
            <circle cx={f.cx + 7} cy="90" r="1.8" fill={FIG.text} />
            <path d={f.mouth} fill="none" stroke={f.accent} strokeWidth="2" strokeLinecap="round" />
          </g>
        ))}

        {/* scale bar */}
        <rect x="50" y="150" width="560" height="16" rx="8" fill="url(#painscale)" />
        {ticks.map((i) => {
          const x = 50 + i * 56;
          return (
            <g key={i}>
              <line x1={x} y1="150" x2={x} y2="166" stroke={FIG.white} strokeWidth="1" />
              <text x={x} y="186" textAnchor="middle" fontSize="13" fontWeight="600" fill={FIG.textMid}>
                {i}
              </text>
            </g>
          );
        })}
        <text x="50" y="208" textAnchor="start" fontSize="12.5" fill={FIG.muted}>No pain</text>
        <text x="610" y="208" textAnchor="end" fontSize="12.5" fill={FIG.muted}>Worst imaginable</text>
      </svg>
    </Figure>
  );
}

/** Historical artifact, drawn as one: the 1947 dol scale, muted and retired. */
function DolFigure() {
  const DOL_W = 52;
  const X0 = 46;
  const x = (d: number) => X0 + d * DOL_W;
  const jnds: number[] = [];
  for (let d = 0.5; d <= 10; d += 1) jnds.push(d);
  const evens = [0, 2, 4, 6, 8, 10];
  return (
    <Figure caption="The dol scale of 1947 — one dol = two just-noticeable differences of pain, topping out at 10.5. Other laboratories couldn't reproduce it, and no unit of pain has entered practice since.">
      <svg
        role="img"
        aria-labelledby="dol-title dol-desc"
        viewBox="0 0 660 196"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="dol-title">The dol scale, 1947 — a retired unit of pain</title>
        <desc id="dol-desc">
          A historical scale from 0 to 10.5 dols with a small tick at every
          half-dol, a bracket showing that one dol equals two just-noticeable
          differences, a marker near 8 dols where the heat stimulus began to
          damage skin, and a note that the unit was never adopted.
        </desc>

        <text x={X0} y="39" fontSize="12.5" fontWeight="600" fill={FIG.textMid}>
          The dol, 1947
        </text>
        <g>
          <rect x="520" y="22" width="118" height="26" rx="6" fill="none" stroke={FIG.faint} strokeWidth="1.2" strokeDasharray="4 4" />
          <text x="579" y="39" textAnchor="middle" fontSize="11" letterSpacing="0.08em" fill={FIG.muted}>
            NEVER ADOPTED
          </text>
        </g>

        {/* one dol = two JNDs bracket */}
        <g stroke={FIG.textMid} strokeWidth="1.3" fill="none">
          <path d={`M${x(1)} 92 v-6 h${DOL_W} v6`} />
          <line x1={x(1.5)} y1="86" x2={x(1.5)} y2="92" />
        </g>
        <text x={x(1.5)} y="74" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          1 dol = 2 just-noticeable differences
        </text>

        {/* ~8 dols: the stimulus starts damaging skin */}
        <line x1={x(8)} y1="62" x2={x(8)} y2="110" stroke={FIG.signalDark} strokeWidth="1.5" strokeDasharray="3 4" />
        <text x={x(8)} y="54" textAnchor="middle" fontSize="12" fill={FIG.signalText}>
          ≈ 8 dols — skin damage begins
        </text>

        {/* the scale bar */}
        <rect x={x(0)} y="110" width={10.5 * DOL_W} height="12" rx="6" fill={FIG.soft} stroke={FIG.line} strokeWidth="1" />
        {jnds.map((d) => (
          <line key={d} x1={x(d)} y1="122" x2={x(d)} y2="127" stroke={FIG.faint} strokeWidth="1" />
        ))}
        {evens.map((d) => (
          <g key={d}>
            <line x1={x(d)} y1="122" x2={x(d)} y2="132" stroke={FIG.muted} strokeWidth="1.3" />
            <text x={x(d)} y="150" textAnchor="middle" fontSize="12" fontWeight="600" fill={FIG.textMid}>
              {d}
            </text>
          </g>
        ))}
        <text x={x(10.5) + 8} y="120" fontSize="11" fill={FIG.muted}>
          10.5
        </text>

        <text x={X0} y="178" fontSize="12" fill={FIG.muted}>
          first flicker of pain
        </text>
        <text x="638" y="178" textAnchor="end" fontSize="12" fill={FIG.muted}>
          the most a person could bear
        </text>
      </svg>
    </Figure>
  );
}

const PEOPLE = [
  {
    label: "Person A",
    origin: 40,
    accent: FIG.signalDark,
    meters: [
      { name: "Sleep", pct: 0.25 },
      { name: "Mood", pct: 0.3 },
      { name: "Daily activities", pct: 0.2 },
    ],
  },
  {
    label: "Person B",
    origin: 400,
    accent: FIG.nerve,
    meters: [
      { name: "Sleep", pct: 0.7 },
      { name: "Mood", pct: 0.65 },
      { name: "Daily activities", pct: 0.6 },
    ],
  },
];

function BeyondNumberFigure() {
  return (
    <Figure caption="Two people both report a 7 — but the number hides how differently pain is shaping their days.">
      <svg
        role="img"
        aria-labelledby="beyond-title beyond-desc"
        viewBox="0 0 720 290"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="beyond-title">Same pain number, different lives</title>
        <desc id="beyond-desc">
          Two people each rate their pain 7 out of 10, but their sleep, mood, and
          daily-activity meters differ markedly.
        </desc>

        <line x1="360" y1="40" x2="360" y2="266" stroke={FIG.soft} strokeWidth="1.5" />

        {PEOPLE.map((p) => {
          const cx = p.origin + 130;
          return (
            <g key={p.label}>
              <text x={cx} y="96" textAnchor="middle" fontSize="66" fontWeight="800" fill={FIG.ink}>
                7
              </text>
              <text x={cx} y="122" textAnchor="middle" fontSize="14" fontWeight="600" fill={FIG.muted}>
                {p.label} · rates pain 7/10
              </text>
              {p.meters.map((m, i) => {
                const y = 158 + i * 40;
                const x = p.origin + 20;
                return (
                  <g key={m.name}>
                    <text x={x} y={y} fontSize="12.5" fill={FIG.textMid}>
                      {m.name}
                    </text>
                    <rect x={x} y={y + 8} width="220" height="10" rx="5" fill={FIG.soft} />
                    <rect x={x} y={y + 8} width={220 * m.pct} height="10" rx="5" fill={p.accent} />
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

export default function MeasuringPain() {
  return (
    <div>
      <ScaleFigure />

      <P>
        &ldquo;On a scale of zero to ten, how bad is your pain?&rdquo; Almost
        everyone who has seen a clinician has been asked it. The number is
        genuinely useful — but pain is one of the hardest things in medicine to
        measure, and knowing why helps you describe yours far better.
      </P>

      <H2 id="subjective">Pain is subjective — and that is the point</H2>
      <P>
        There is no blood test, scan, or &ldquo;painometer&rdquo; that reads out
        how much something hurts. Pain is a personal experience, and the person
        in pain is the only one who has direct access to it. The world&rsquo;s
        pain scientists build this right into their definition: a person&rsquo;s
        report of their own pain{" "}
        <strong>should be respected</strong>. Your account is not a soft
        substitute for &ldquo;real&rdquo; data — for pain, it{" "}
        <em>is</em> the data.
      </P>

      <H2 id="the-dol">The unit of pain that almost was</H2>
      <P>
        Science did try to give pain a unit. In the 1940s a Cornell team —
        James Hardy, Harold Wolff and Helen Goodell — built an instrument
        called the <strong>dolorimeter</strong>: a lamp that focused a precise
        dose of radiant heat onto a small patch of skin, usually the forehead,
        blackened with ink so that every complexion absorbed the same energy.
        Turning the heat up in careful steps, they counted twenty-one
        &ldquo;just noticeable differences&rdquo; between the first flicker of
        pain and the most a person could bear.
      </P>
      <P>
        Two of those steps made one <strong>dol</strong> — from{" "}
        <em>dolor</em>, the Latin word for pain — and the result was a scale
        from 0 to 10.5 dols. It was a serious, careful piece of science: at
        roughly 8 dols the heat was intense enough to start damaging skin,
        which tells you how far the method was willing to go in search of a
        number.
      </P>
      <DolFigure />
      <P>
        It didn&rsquo;t hold. Other laboratories couldn&rsquo;t reproduce the
        results, and in the 1950s the anesthesiologist Henry Beecher — who had
        treated soldiers on World War II battlefields and seen badly wounded
        men report strikingly little pain — put his finger on the deeper
        problem: how much something hurts depends on{" "}
        <strong>what the pain means to the person</strong>. A lamp can be
        calibrated. Meaning can&rsquo;t.
      </P>
      <P>
        So there is no unit of pain — no dol, no degree, no decibel — and that
        failure is this whole page in miniature. Pain isn&rsquo;t a stimulus;
        it&rsquo;s an experience the brain assembles, shaped by{" "}
        <Link
          href="/understanding-pain/pain-and-emotion"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          attention, emotion and context
        </Link>
        . Medicine stopped trying to build a better lamp and started asking
        better questions — which is exactly what the tools below are.
      </P>

      <H2 id="tools">The tools clinicians use</H2>
      <P>
        Because pain can&rsquo;t be measured directly, clinicians use rating
        tools to capture it and — most usefully — to track how it changes:
      </P>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>The 0-to-10 numeric scale</strong> — fast, needs no props,
            and works over the phone. The everyday workhorse.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Faces scales</strong> — a row of expressions, well suited to
            young children and to anyone who has trouble with numbers or words.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Questionnaires</strong> — tools like the McGill Pain
            Questionnaire and the Brief Pain Inventory go further, asking about
            the <em>quality</em> of pain and how much it interferes with your
            life.
          </span>
        </li>
      </ul>

      <H2 id="why-imperfect">Why a single number falls short</H2>
      <BeyondNumberFigure />
      <P>
        The trouble with one number is that it flattens something with many
        dimensions. A &ldquo;7&rdquo; says nothing about whether the pain
        burns or aches, whether it is constant or comes in waves, or whether it
        is keeping you from sleeping, working, or picking up your kids. And it is
        not comparable between people: your 7 and someone else&rsquo;s 7 are not
        the same measurement. What a number{" "}
        <em>is</em> good for is tracking <strong>your own</strong> pain over
        time.
      </P>

      <H2 id="describe-better">How to describe your pain better</H2>
      <P>
        You can give your care team far more to work with than a score. When you
        describe your pain, try to include:
      </P>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Quality</strong> — burning, aching, stabbing, throbbing,
            electric? The words point toward the{" "}
            <Link
              href="/understanding-pain/types-of-pain"
              className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
            >
              type of pain
            </Link>
            .
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Pattern and triggers</strong> — constant or in flares? What
            makes it better or worse?
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Function</strong> — what does it stop you from doing? This is
            often the most useful thing you can report.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Sleep and mood</strong> — these both feed back into pain, so
            they are part of the picture, not a distraction from it.
          </span>
        </li>
      </ul>
      <P>
        A simple pain diary over a week or two — numbers plus a few of these
        notes — can turn a vague impression into something you and your clinician
        can actually act on.
      </P>
    </div>
  );
}
