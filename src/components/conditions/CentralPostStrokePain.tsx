import Link from "next/link";
import { Figure, H2, P, anim } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — the pain pathway with the injury inside it. The
 * spinothalamic tract carries pain and temperature from body to thalamus
 * to cortex; a stroke anywhere along it can produce central pain. The
 * thalamus is the classic site.
 */
function PathwayLesionFigure() {
  return (
    <Figure
      animate
      caption="Central post-stroke pain is pain from an injury inside the pain pathway itself. Signals for pain and temperature travel from the body up the spinothalamic tract to the thalamus, the brain's relay, and on to the cortex. A stroke that damages any part of that line — the thalamus is the classic site — leaves a system that generates pain without input from the body."
    >
      <svg
        role="img"
        aria-labelledby="cpsp-path-title cpsp-path-desc"
        viewBox="0 0 680 340"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="cpsp-path-title">Where the injury sits in central post-stroke pain</title>
        <desc id="cpsp-path-desc">
          A vertical pathway from the body at the bottom, up the spinal cord,
          to the thalamus, to the cortex at the top. A stroke lesion is marked
          on the thalamus, and the affected half of the body below is shaded.
        </desc>
        <defs>
          <marker id="cpsp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill={FIG.nerve} />
          </marker>
        </defs>

        {/* stations */}
        {[
          ["Cortex", "where pain is felt", 40],
          ["Thalamus", "the relay — classic stroke site", 128],
          ["Spinal cord", "the spinothalamic tract", 216],
          ["Body", "skin, muscle, the affected side", 296],
        ].map(([t, s, y], i) => (
          <g key={String(t)} className="fig-rise" style={anim(0.15 * (3 - i))}>
            <rect x="200" y={Number(y) - 22} width="280" height="46" rx="12" fill={i === 1 ? FIG.signalGround : FIG.nerveGround} stroke={i === 1 ? FIG.signalDark : FIG.nerve} strokeWidth="1.6" />
            <text x="340" y={Number(y) - 2} textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
              {t}
            </text>
            <text x="340" y={Number(y) + 15} textAnchor="middle" fontSize="12" fill={FIG.textMid}>
              {s}
            </text>
          </g>
        ))}
        {/* ascending arrows */}
        <g fill="none" stroke={FIG.nerve} strokeWidth="3" markerEnd="url(#cpsp-arrow)">
          <line x1="340" y1="272" x2="340" y2="242" className="fig-draw fig-fade" style={anim(0.4, 34)} />
          <line x1="340" y1="192" x2="340" y2="154" className="fig-draw fig-fade" style={anim(0.7, 40)} />
          <line x1="340" y1="104" x2="340" y2="66" className="fig-draw fig-fade" style={anim(1.0, 40)} />
        </g>
        {/* the lesion */}
        <g className="fig-fade" style={anim(1.4)}>
          <circle cx="470" cy="128" r="13" fill={FIG.cautionGround} stroke={FIG.caution} strokeWidth="2.5" />
          <path d="M463 121 l14 14 M477 121 l-14 14" stroke={FIG.caution} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="490" y1="128" x2="520" y2="128" stroke={FIG.caution} strokeWidth="2" strokeDasharray="5 4" />
          <text x="526" y="124" fontSize="12.5" fontWeight="700" fill={FIG.cautionText}>
            the stroke
          </text>
          <text x="526" y="140" fontSize="11.5" fill={FIG.cautionTextDark}>
            injury inside the pathway
          </text>
        </g>
        {/* affected side note */}
        <g className="fig-fade" style={anim(1.8)}>
          <rect x="40" y="250" width="140" height="70" rx="10" fill={FIG.signalGround} stroke={FIG.signalTint} />
          <text x="110" y="276" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={FIG.signalTextDark}>
            one side of the body
          </text>
          <text x="110" y="294" textAnchor="middle" fontSize="11.5" fill={FIG.signalTextDark}>
            opposite the stroke,
          </text>
          <text x="110" y="309" textAnchor="middle" fontSize="11.5" fill={FIG.signalTextDark}>
            where sensation changed
          </text>
        </g>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — the delay. CPSP usually arrives weeks to months after the
 * stroke, which is why it is so often missed. Liampas 2020 pooled onset.
 */
const ONSET = [
  { label: "Within the first month", pct: 31, accent: FIG.signal },
  { label: "Between 1 month and 1 year", pct: 41, accent: FIG.signalDark },
  { label: "After the first year", pct: 28, accent: FIG.faint },
];

function OnsetFigure() {
  return (
    <Figure caption="When central post-stroke pain begins, pooled from a 2020 meta-analysis. Only about a third of cases start in the first month; most arrive later, often after rehabilitation has ended and after the person has stopped expecting anything new from the stroke. The delay is a large part of why it goes unrecognized.">
      <svg
        role="img"
        aria-labelledby="onset-title onset-desc"
        viewBox="0 0 680 220"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="onset-title">When central post-stroke pain begins</title>
        <desc id="onset-desc">
          Three horizontal bars: about 31 percent of cases begin within the
          first month, about 41 percent between one month and one year, and
          the remainder after the first year.
        </desc>
        {ONSET.map((b, i) => {
          const y = 40 + i * 58;
          const w = 480 * (b.pct / 50);
          return (
            <g key={b.label}>
              <text x="40" y={y - 8} fontSize="13.5" fontWeight="700" fill={FIG.ink}>
                {b.label}
              </text>
              <rect x="40" y={y} width="480" height="22" rx="11" fill={FIG.soft} />
              <rect x="40" y={y} width={w} height="22" rx="11" fill={b.accent} />
              <text x={40 + w + 12} y={y + 16} fontSize="13.5" fontWeight="700" fill={FIG.text}>
                ~{b.pct}%
              </text>
            </g>
          );
        })}
        <text x="40" y="208" fontSize="11.5" fill={FIG.muted}>
          Liampas et al. 2020, pooled onset timing; remainder estimated from the two reported windows
        </text>
      </svg>
    </Figure>
  );
}

export default function CentralPostStrokePain() {
  return (
    <div>
      <P>
        Most pain after a stroke is not this. Shoulders stiffen, muscles
        spasm, joints ache from altered movement. <strong>Central
        post-stroke pain</strong> is different and rarer: pain produced by the
        stroke&rsquo;s damage to the brain&rsquo;s own pain pathways, felt on
        the side of the body the stroke affected, in the same territory where
        sensation changed. It affects roughly 1 in 10 stroke survivors, often
        begins months after the stroke, and is frequently missed because
        nobody, including the patient, is expecting the stroke to produce
        something new.
      </P>

      <H2 id="what-it-is">Pain from inside the pathway</H2>
      <PathwayLesionFigure />
      <P>
        Pain and temperature signals travel from the body up a dedicated
        tract in the spinal cord to the thalamus, the brain&rsquo;s relay
        station, and on to the cortex. A stroke that damages any part of that
        line can leave a pain system that fires without input, or that
        misreads ordinary input as pain. The condition was first described in
        1906 by Dejerine and Roussy as &ldquo;thalamic syndrome,&rdquo; and
        the thalamus remains the classic site: a 2012 lesion-mapping study
        found that strokes touching a specific border zone within it carried
        a particularly high risk. But strokes in the brainstem, and elsewhere
        along the tract, produce the same picture.
      </P>
      <P>
        What it feels like is distinctive. A constant burning, aching, or
        pricking, sometimes with lancing jolts, in the affected arm, leg, face,
        or an entire half of the body. Sensation in the same area is altered,
        commonly with a striking sensitivity to cold. And in most people,
        touch or temperature that should be harmless is painful:{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>
          allodynia
        </Link>
        , the hallmark of nerve-generated pain. A 1995 Danish study that
        followed stroke patients for a year found the condition in 8%, nearly
        all of whom had this evoked pain to touch or cold.
      </P>

      <H2 id="the-delay">The delay</H2>
      <OnsetFigure />
      <P>
        A 2020 meta-analysis pooled the available studies and found central
        pain in about 11% of stroke survivors overall, rising above 50% in
        those whose strokes had caused sensory loss or hit the thalamus. Only
        a third of cases began in the first month. Most started between one
        month and a year, and some later still. By then, follow-up visits are
        spaced out, rehabilitation has often ended, and a new burning pain is
        easy to attribute to a shoulder, a hip, or &ldquo;just part of the
        stroke.&rdquo; The clue is the map: central pain follows the
        territory of sensory change, not a joint or a muscle.
      </P>

      <H2 id="why-it-hurts">Why it hurts</H2>
      <P>
        The best-supported explanation is disinhibition. The pain pathway is
        normally kept in check by parallel systems, including the descending
        controls described in{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          how pain works
        </Link>
        . A stroke that removes part of that balance leaves surviving
        circuits firing unopposed, and the thalamus and cortex begin to
        generate the sensation of pain on their own. Cold sensitivity, the
        particular signature of this condition, fits the idea that the
        stroke has knocked out one lane of the temperature system and left
        its partner shouting. This is why the pain does not respond to
        treatments aimed at the arm or the leg. The problem is upstream.
      </P>

      <H2 id="treatment">What treatment looks like today</H2>
      <P>
        Honest framing first: central post-stroke pain is among the harder
        pains to treat, and the trials are small. What they show, described
        rather than prescribed:
      </P>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Tricyclic antidepressants.</strong> Amitriptyline was the
            first drug shown to help, in a small 1989 trial, and remains a
            first-line option in the major guidelines for central neuropathic
            pain, with the usual cautions about side effects in older adults
            and after stroke.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Lamotrigine.</strong> A 2001 randomized trial found a
            modest but real reduction in daily pain, with 44% of patients
            responding. Slow titration is required for safety, which the
            prescriber will explain.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Gabapentinoids.</strong> The largest trial in the
            condition, pregabalin in 2011, did not beat placebo on its main
            pain measure, though sleep, anxiety, and overall status improved.
            Guidelines still list the class because of its record in other
            central pain, an honest example of extrapolated evidence.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Serotonin-norepinephrine reuptake inhibitors.</strong>{" "}
            Duloxetine and related drugs are guideline first-line options for
            neuropathic pain generally and are commonly used here, with less
            direct trial evidence.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Brain stimulation, for refractory cases.</strong> Repetitive
            transcranial magnetic stimulation of the motor cortex has
            reasonable evidence for short-term relief in central pain, and
            implanted motor cortex stimulation is used in specialist centers
            when everything else has failed. Both are covered in{" "}
            <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
              neuromodulation
            </Link>
            .
          </span>
        </li>
      </ul>
      <P>
        Opioids have a poor record in central pain and are not recommended as
        ongoing treatment. If you or someone you love is struggling with
        opioid or other substance use, the SAMHSA National Helpline is free,
        confidential, and open 24/7 at <strong>1-800-662-HELP (4357)</strong>.
      </P>
      <P>
        Alongside medication, the same principles that help every persistent
        pain apply: protecting sleep, staying as active as the stroke allows,
        and understanding the mechanism, because a burning arm that you know
        is the brain misfiring is easier to live with than one you fear is a
        second stroke arriving.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        Lesion mapping is turning into prediction: studies now identify which
        stroke locations carry the highest risk, which opens the door to
        watching for the condition before it appears rather than years after.
        Non-invasive brain stimulation is being refined for exactly this
        indication, and the{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pipeline
        </Link>{" "}
        of new neuropathic pain drugs, aimed at sodium channels and other
        targets, is being tested in central pain as well as peripheral.
      </P>

      <H2 id="specialist">When to seek specialist care</H2>
      <P>
        Any new or worsening symptom after a stroke deserves a call to the
        stroke team, because the first job is always to rule out a new event.
        Once that is done, a new burning, aching, or cold-sensitive pain on
        the affected side that follows the area of sensory change should be
        named as possible central post-stroke pain and treated as such. A
        neurologist, a physiatrist (rehabilitation physician), or a{" "}
        <Link href="/find-help" className={link}>
          pain medicine physician
        </Link>{" "}
        with neuropathic pain experience is the right specialist. Bring the
        map: where the pain is, where sensation changed, and when it started
        relative to the stroke. Those three facts make the diagnosis.
      </P>
    </div>
  );
}
