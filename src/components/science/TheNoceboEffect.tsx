import Link from "next/link";
import { Figure, H2, P, anim } from "./Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — the mirror of the placebo pathway: expectation of harm runs
 * through anxiety and a different chemical (cholecystokinin) to turn the
 * pain signal UP. The blocking experiment (proglumide) sits where the
 * naloxone test sits on the placebo page — the same argument, inverted.
 */
function MirrorPathwayFigure() {
  return (
    <Figure
      animate
      caption="Nocebo hyperalgesia has its own chemistry. Expecting harm raises anxiety, which recruits cholecystokinin (CCK), a brain chemical that amplifies pain signaling. Block CCK with proglumide and the extra pain disappears — while the anxiety itself does not. The relief system and the alarm system are different circuits."
    >
      <svg
        role="img"
        aria-labelledby="nocebo-path-title nocebo-path-desc"
        viewBox="0 0 680 320"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="nocebo-path-title">How expecting harm becomes more pain</title>
        <desc id="nocebo-path-desc">
          A three-step vertical pathway: expectation of harm in the cortex,
          anxiety recruiting the brain chemical cholecystokinin, and amplified
          pain signaling. A side note marks that the drug proglumide blocks the
          extra pain.
        </desc>
        <defs>
          <marker
            id="nocebo-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill={FIG.signalDark} />
          </marker>
        </defs>

        <g className="fig-rise" style={anim(0)}>
          <rect x="90" y="28" width="290" height="62" rx="14" fill={FIG.signalGround} stroke={FIG.signalDark} strokeWidth="1.8" />
          <text x="235" y="54" textAnchor="middle" fontSize="14.5" fontWeight="700" fill={FIG.ink}>
            Expectation of harm
          </text>
          <text x="235" y="74" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            warnings, labels, a bad past experience
          </text>
        </g>

        <g className="fig-rise" style={anim(0.6)}>
          <rect x="90" y="128" width="290" height="62" rx="14" fill={FIG.signalGround} stroke={FIG.signalDark} strokeWidth="1.8" />
          <text x="235" y="154" textAnchor="middle" fontSize="14.5" fontWeight="700" fill={FIG.ink}>
            Anxiety recruits CCK
          </text>
          <text x="235" y="174" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            a brain chemical that turns pain up
          </text>
        </g>

        <g className="fig-rise" style={anim(1.2)}>
          <rect x="90" y="228" width="290" height="62" rx="14" fill={FIG.signalGround} stroke={FIG.signalDark} strokeWidth="1.8" />
          <text x="235" y="254" textAnchor="middle" fontSize="14.5" fontWeight="700" fill={FIG.ink}>
            More pain signal gets through
          </text>
          <text x="235" y="274" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            the same stimulus, felt as worse
          </text>
        </g>

        <g fill="none" stroke={FIG.signalDark} strokeWidth="3" markerEnd="url(#nocebo-arrow)">
          <line x1="235" y1="94" x2="235" y2="122" className="fig-draw fig-fade" style={anim(0.45, 34)} />
          <line x1="235" y1="194" x2="235" y2="222" className="fig-draw fig-fade" style={anim(1.05, 34)} />
        </g>

        <g className="fig-fade" style={anim(1.9)}>
          <line x1="430" y1="159" x2="384" y2="159" stroke={FIG.caution} strokeWidth="2.5" strokeDasharray="6 5" strokeLinecap="round" />
          <rect x="436" y="120" width="210" height="78" rx="12" fill={FIG.cautionGround} stroke={FIG.cautionEdge} strokeWidth="1.5" />
          <text x="541" y="146" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.cautionText}>
            The proglumide test
          </text>
          <text x="541" y="166" textAnchor="middle" fontSize="12" fill={FIG.cautionTextDark}>
            block CCK, and the extra
          </text>
          <text x="541" y="183" textAnchor="middle" fontSize="12" fill={FIG.cautionTextDark}>
            pain vanishes
          </text>
        </g>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — Bingel 2011: one opioid infusion, three expectations. The
 * drug never changed; what people were told did.
 */
const EXPECT_BARS = [
  { label: "Told nothing", sub: "the drug's baseline effect", pct: 50, accent: FIG.nerve, note: "baseline relief" },
  { label: "Told relief was starting", sub: "positive expectation", pct: 100, accent: FIG.nerveDark, note: "relief roughly doubled" },
  { label: "Told the drug had stopped", sub: "negative expectation", pct: 0, accent: FIG.signalDark, note: "no relief: same drug, same dose" },
];

function ExpectationFigure() {
  return (
    <Figure caption="Healthy volunteers received a steady infusion of the opioid remifentanil during heat pain (Bingel 2011). When told the drug was flowing, pain relief roughly doubled. When told it had been switched off, while it was still flowing, relief vanished entirely. Brain scans matched: the negative expectation engaged the hippocampus and the relief disappeared from pain-processing regions.">
      <svg
        role="img"
        aria-labelledby="expect-title expect-desc"
        viewBox="0 0 680 270"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="expect-title">The same opioid dose under three expectations</title>
        <desc id="expect-desc">
          Bar chart: relative pain relief from an unchanged opioid infusion,
          baseline when told nothing, about doubled with positive expectation,
          and none with negative expectation.
        </desc>
        {EXPECT_BARS.map((b, i) => {
          const y = 48 + i * 74;
          const w = Math.max(6, 400 * (b.pct / 100));
          return (
            <g key={b.label}>
              <text x="40" y={y - 10} fontSize="13.5" fontWeight="700" fill={FIG.ink}>
                {b.label}
              </text>
              <text x="40" y={y + 42} fontSize="12" fill={FIG.muted}>
                {b.sub}
              </text>
              <rect x="40" y={y} width="400" height="26" rx="13" fill={FIG.soft} />
              <rect x="40" y={y} width={w} height="26" rx="13" fill={b.accent} />
              <text x="454" y={y + 18} fontSize="13.5" fontWeight="700" fill={FIG.text}>
                {b.note}
              </text>
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}

/**
 * Figure 3 — SAMSON: the nocebo ratio. Symptom intensity on statin, on
 * placebo, and on no tablet, from the same people over a year.
 */
const SAMSON = [
  { label: "No tablet", score: 8.0, accent: FIG.faint },
  { label: "Placebo tablet", score: 15.4, accent: FIG.signal },
  { label: "Statin tablet", score: 16.3, accent: FIG.signalDark },
];

function SamsonFigure() {
  return (
    <Figure caption="The SAMSON trial: 60 people who had quit statins because of side effects each spent months on a statin, months on placebo, and months on no tablet, in random order, rating symptoms daily. Placebo months felt almost exactly as bad as statin months. About 90% of the symptom burden was present on an inert tablet, the trial's 'nocebo ratio' of 0.90.">
      <svg
        role="img"
        aria-labelledby="samson-title samson-desc"
        viewBox="0 0 680 250"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="samson-title">Symptom intensity on no tablet, placebo, and statin</title>
        <desc id="samson-desc">
          Three bars of mean symptom score: 8 with no tablet, 15.4 on placebo,
          16.3 on statin. Placebo and statin bars are nearly the same height.
        </desc>
        {SAMSON.map((b, i) => {
          const x = 90 + i * 190;
          const h = 150 * (b.score / 20);
          const y = 190 - h;
          return (
            <g key={b.label}>
              <rect x={x} y="40" width="120" height="150" rx="10" fill={FIG.ground} />
              <rect x={x} y={y} width="120" height={h} rx="10" fill={b.accent} />
              <text x={x + 60} y={y - 10} textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
                {b.score.toFixed(1)}
              </text>
              <text x={x + 60} y="216" textAnchor="middle" fontSize="13.5" fontWeight="700" fill={FIG.text}>
                {b.label}
              </text>
            </g>
          );
        })}
        <text x="40" y="26" fontSize="12" fill={FIG.muted}>
          mean monthly symptom score (0–100 scale), Howard 2021
        </text>
        <path d="M280 70 H460" stroke={FIG.line} strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="370" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.signalTextDark}>
          no significant difference
        </text>
      </svg>
    </Figure>
  );
}

export default function TheNoceboEffect() {
  return (
    <div>
      <P>
        If the placebo effect is the brain&rsquo;s pharmacy dispensing relief,
        the <strong>nocebo effect</strong> is the same pharmacy dispensing the
        opposite. Expect a treatment to hurt, and it hurts more. Expect a side
        effect, and you are far more likely to get it. The symptoms are not
        imagined and not chosen. They are the nervous system doing exactly what
        it was told to brace for. For anyone living with pain, nocebo is worth
        understanding for a practical reason: it is one of the few pain
        amplifiers that changes when the information around you changes.
      </P>

      <H2 id="what-it-is">Expectation, running in reverse</H2>
      <P>
        &ldquo;Nocebo&rdquo; is Latin for <em>I shall harm</em>, coined as the
        mirror image of placebo, <em>I shall please</em>. The mechanism is the
        same machinery described on the{" "}
        <Link href="/understanding-pain/the-placebo-effect" className={link}>
          placebo effect
        </Link>{" "}
        page, pointed the other way: context, words, and prior experience set
        an expectation, and the brain adjusts what it produces to match. The
        difference is which chemistry it reaches for. Placebo relief runs on
        the body&rsquo;s own opioids and can be blocked by naloxone. Nocebo
        pain runs partly on anxiety and a different messenger,{" "}
        <strong>cholecystokinin</strong>, and can be blocked by a drug that
        targets it.
      </P>
      <MirrorPathwayFigure />
      <P>
        That blocking experiment is the reason nocebo is treated as biology
        rather than attitude. In 1997, researchers gave post-surgical patients
        an inert injection while telling them it would increase their pain. It
        did. Adding proglumide, which blocks cholecystokinin, to the same
        injection erased the extra pain, even though the patients&rsquo; anxiety
        stayed. The alarm and the pain it triggers can be separated
        chemically, which means the pain was a chemical event.
      </P>

      <H2 id="same-drug">The same drug, three different results</H2>
      <ExpectationFigure />
      <P>
        The most striking demonstration involved a real, powerful painkiller.
        In a 2011 imaging study, healthy volunteers received a steady infusion
        of the opioid remifentanil while a heat stimulus was applied to the
        leg. The dose never changed. When they were told relief was beginning,
        their pain relief roughly doubled. When they were told the infusion had
        been stopped, while it was in fact still running, the relief disappeared
        completely. A fully active opioid, at a working dose, was cancelled out
        by a sentence.
      </P>
      <P>
        Since the word opioid appears here, one line it should always travel
        with: if you or someone you love is struggling with opioid or other
        substance use, the SAMHSA National Helpline is free, confidential, and
        open 24/7 at <strong>1-800-662-HELP (4357)</strong>.
      </P>

      <H2 id="side-effects">Side effects you were warned about</H2>
      <P>
        Nocebo does its most visible work in side effects. Three trials show
        the shape of it:
      </P>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
          <span>
            <strong>The finasteride study (2007).</strong> Men prescribed the
            same drug for an enlarged prostate were split by what they were
            told. Those specifically warned about sexual side effects reported
            them nearly three times as often as those who were not: 43.6%
            versus 15.3%. Same pill, same dose, different sentence.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
          <span>
            <strong>The COVID-19 vaccine trials.</strong> Across twelve
            randomized trials, about 35% of people who received only saline
            reported systemic side effects such as headache and fatigue after
            the first dose. Researchers estimated nocebo accounted for roughly
            three-quarters of such symptoms reported after a real first dose.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
          <span>
            <strong>The SAMSON statin trial (2020).</strong> People who had
            abandoned statins because of intolerable side effects tried statin,
            placebo, and no tablet in alternating months, blind to which was
            which. Placebo months were nearly as symptomatic as statin months.
          </span>
        </li>
      </ul>
      <SamsonFigure />
      <P>
        SAMSON is the one to sit with. Half the participants restarted a statin
        after seeing their own data. Their symptoms had been real every single
        day; what changed was their understanding of where the symptoms came
        from. A muscle ache produced by expectation aches exactly like a muscle
        ache produced by a molecule. The body does not label the source.
      </P>

      <H2 id="words">Words at the bedside</H2>
      <P>
        The most humbling evidence is also the simplest. In a 2010 trial,
        women receiving an epidural before childbirth heard one of two scripts
        during the numbing injection. One group was told, roughly, &ldquo;We
        are going to numb the area and you will be comfortable.&rdquo; The
        other was told, &ldquo;You are going to feel a big bee sting; this is
        the worst part.&rdquo; Same needle, same anesthetic, same clinicians.
        The bee-sting group rated the injection at a median of 5 out of 10.
        The reassured group rated it 3. A well-meant warning added two points
        of pain to a procedure that was otherwise identical.
      </P>
      <P>
        This is not an argument for hiding risks. Informed consent is a
        patient&rsquo;s right, and a 2018 expert consensus on placebo and
        nocebo effects is explicit that the answer is <em>framing</em>, not
        omission: leading with what most people experience, stating side
        effects as the minority events they usually are, and avoiding the
        vivid, catastrophic language that the nervous system is so good at
        rehearsing. &ldquo;About 9 in 10 people tolerate this well&rdquo; and
        &ldquo;1 in 10 get nausea&rdquo; are the same fact, and they do not
        produce the same body.
      </P>

      <H2 id="chronic-pain">Why this matters when pain persists</H2>
      <P>
        For people with{" "}
        <Link href="/understanding-pain/acute-vs-chronic-pain" className={link}>
          long-term pain
        </Link>
        , nocebo is rarely a single dramatic event. It is a background hum.
        A scan report full of alarming words. A relative&rsquo;s story about
        someone whose back &ldquo;went out&rdquo; and never came back. A
        clinician who said &ldquo;the worst spine I&rsquo;ve seen this
        year.&rdquo; Each one sets an expectation, and the pain system, whose
        job is to protect you from anticipated threat, turns the gain up to
        match. The{" "}
        <Link href="/understanding-pain/pain-and-emotion" className={link}>
          fear-avoidance loop
        </Link>{" "}
        is nocebo playing out over months: expecting movement to harm makes
        movement hurt, which confirms the expectation.
      </P>
      <P>
        The same mechanism is also why generic substitutions, brand changes,
        and pharmacy switches so often seem to &ldquo;stop working.&rdquo;
        Research on labeling shows that a new box, a different color, or a
        lower price tag can raise reported side effects and lower reported
        benefit with no change in the molecule. Nothing about that reaction is
        foolish. It is the brain weighting every available cue, exactly as it
        does with placebo.
      </P>

      <H2 id="what-helps">What you can do with this</H2>
      <P>
        Knowing about nocebo does not switch it off, any more than knowing
        about optical illusions makes them vanish. But a few things measurably
        help, and all of them are about information rather than willpower:
      </P>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Ask for the denominator.</strong> When a side effect is
            mentioned, ask how many people out of 100 get it. Rare things
            stated as rare are far less potent than rare things stated as
            possibilities.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Ask what the scan words mean.</strong> &ldquo;Degenerative
            changes&rdquo; and &ldquo;disc bulge&rdquo; are common in pain-free
            people. The{" "}
            <Link href="/conditions/low-back-pain" className={link}>
              low back pain
            </Link>{" "}
            guide covers what imaging does and does not show.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Name it when you notice it.</strong> Telling your clinician
            &ldquo;I read a lot of frightening things about this drug&rdquo; is
            useful clinical information. It lets them frame the plan, and it
            lets you both watch for expectation-driven symptoms with curiosity
            rather than alarm.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Treat a symptom as data, not a verdict.</strong> SAMSON
            participants changed course only after seeing their own numbers.
            A symptom diary during a medication change, shared with your
            physician, is a small version of the same experiment.
          </span>
        </li>
      </ul>
      <P>
        None of this makes nocebo symptoms less real. That is the whole point.
        A pain system sensitive enough to double an opioid&rsquo;s effect or
        cancel it with a sentence is not a weak system or a suggestible mind.
        It is a protective system working at full capacity, and it responds to
        the story it is given. Changing the story is a legitimate part of pain
        medicine.
      </P>
    </div>
  );
}
