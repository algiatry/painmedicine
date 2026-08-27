import Link from "next/link";
import { Figure, H2, P, anim } from "./Figure";
import { FIG } from "@/lib/fig";

function PathwayFigure() {
  return (
    <Figure
      animate
      caption="Placebo analgesia is a real neural event: expectation engages the brain's descending pain-control system, releasing the body's own opioids and damping pain signals as far down as the spinal cord. Block those opioids with naloxone, and much of the relief disappears."
    >
      <svg
        role="img"
        aria-labelledby="pathway-title pathway-desc"
        viewBox="0 0 680 320"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="pathway-title">How expectation becomes pain relief</title>
        <desc id="pathway-desc">
          A three-step vertical pathway: expectation of relief in the cortex,
          the brainstem&rsquo;s pain-control hub releasing the body&rsquo;s own
          opioids, and reduced pain signaling in the spinal cord. A side note
          marks that naloxone blocks the effect.
        </desc>
        <defs>
          <marker
            id="path-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill={FIG.nerve} />
          </marker>
        </defs>

        {/* step 1 */}
        <g className="fig-rise" style={anim(0)}>
          <rect x="90" y="28" width="290" height="62" rx="14" fill={FIG.nerveGround} stroke={FIG.nerve} strokeWidth="1.8" />
          <text x="235" y="54" textAnchor="middle" fontSize="14.5" fontWeight="700" fill={FIG.ink}>
            Expectation of relief
          </text>
          <text x="235" y="74" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            context, ritual, trust — the cortex
          </text>
        </g>

        {/* step 2 */}
        <g className="fig-rise" style={anim(0.6)}>
          <rect x="90" y="128" width="290" height="62" rx="14" fill={FIG.nerveGround} stroke={FIG.nerve} strokeWidth="1.8" />
          <text x="235" y="154" textAnchor="middle" fontSize="14.5" fontWeight="700" fill={FIG.ink}>
            The brainstem&rsquo;s pain-control hub
          </text>
          <text x="235" y="174" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            releases the body&rsquo;s own opioids
          </text>
        </g>

        {/* step 3 */}
        <g className="fig-rise" style={anim(1.2)}>
          <rect x="90" y="228" width="290" height="62" rx="14" fill={FIG.nerveGround} stroke={FIG.nerve} strokeWidth="1.8" />
          <text x="235" y="254" textAnchor="middle" fontSize="14.5" fontWeight="700" fill={FIG.ink}>
            Less pain signal gets through
          </text>
          <text x="235" y="274" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            measured down to the spinal cord
          </text>
        </g>

        <g fill="none" stroke={FIG.nerve} strokeWidth="3" markerEnd="url(#path-arrow)">
          <line x1="235" y1="94" x2="235" y2="122" className="fig-draw fig-fade" style={anim(0.45, 34)} />
          <line x1="235" y1="194" x2="235" y2="222" className="fig-draw fig-fade" style={anim(1.05, 34)} />
        </g>

        {/* naloxone note — the blocking evidence arrives last */}
        <g className="fig-fade" style={anim(1.9)}>
          <line
            x1="430"
            y1="159"
            x2="384"
            y2="159"
            stroke={FIG.caution}
            strokeWidth="2.5"
            strokeDasharray="6 5"
            strokeLinecap="round"
          />
          <rect x="436" y="120" width="210" height="78" rx="12" fill={FIG.cautionGround} stroke={FIG.cautionEdge} strokeWidth="1.5" />
          <text x="541" y="146" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.cautionText}>
            The naloxone test
          </text>
          <text x="541" y="166" textAnchor="middle" fontSize="12" fill={FIG.cautionTextDark}>
            block the body&rsquo;s opioids,
          </text>
          <text x="541" y="183" textAnchor="middle" fontSize="12" fill={FIG.cautionTextDark}>
            and placebo relief fades
          </text>
        </g>
      </svg>
    </Figure>
  );
}

const TRIAL_BARS = [
  { label: "Placebo, honestly labeled", sub: "added to usual care", pct: 30, accent: FIG.nerve },
  { label: "Usual care alone", sub: "the comparison group", pct: 9, accent: FIG.faint },
];

function OpenLabelFigure() {
  return (
    <Figure caption="Open-label placebo in chronic low back pain (randomized trial, 83 completers, 3 weeks): pain fell ~30% with an honestly-labeled placebo added to usual care, vs ~9% with usual care alone. A small, short trial — but nobody was deceived.">
      <svg
        role="img"
        aria-labelledby="olp-title olp-desc"
        viewBox="0 0 680 220"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="olp-title">Honest placebo vs. usual care in chronic low back pain</title>
        <desc id="olp-desc">
          Bar chart: pain reduction of about 30 percent with open-label placebo
          plus usual care, versus about 9 percent with usual care alone.
        </desc>

        {TRIAL_BARS.map((b, i) => {
          const y = 48 + i * 74;
          const w = 460 * (b.pct / 35);
          return (
            <g key={b.label}>
              <text x="40" y={y - 10} fontSize="13.5" fontWeight="700" fill={FIG.ink}>
                {b.label}
              </text>
              <text x="40" y={y + 42} fontSize="12" fill={FIG.muted}>
                {b.sub}
              </text>
              <rect x="40" y={y} width="560" height="26" rx="13" fill={FIG.soft} />
              <rect x="40" y={y} width={w} height="26" rx="13" fill={b.accent} />
              <text
                x={40 + w + 14}
                y={y + 18}
                fontSize="14"
                fontWeight="700"
                fill={FIG.text}
              >
                ~{b.pct}% pain reduction
              </text>
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}

export default function ThePlaceboEffect() {
  return (
    <div>
      <P>
        &ldquo;Placebo&rdquo; may be the most misunderstood word in medicine.
        In everyday use it means <em>fake</em> — and if a placebo helped you,
        the implication goes, your problem must not have been real. Pain
        science says almost exactly the opposite. The placebo effect in pain is
        one of the best-documented phenomena in neuroscience, and what it
        actually demonstrates is that your brain owns a working pharmacy.
      </P>

      <H2 id="block-it">Relief you can block with a drug</H2>
      <PathwayFigure />
      <P>
        The pivotal experiment is nearly fifty years old. In 1978, researchers
        studied patients recovering from dental surgery and found that placebo
        pain relief could be undone by <strong>naloxone</strong> — a drug whose
        only job is to block opioid receptors. If blocking the body&rsquo;s
        opioid system erases the relief, the relief was running on the
        body&rsquo;s <em>own</em> opioids. Imagination has no receptor to
        block.
      </P>
      <P>
        Modern imaging filled in the pathway. Expecting relief engages the
        brain&rsquo;s descending pain-control system — the same
        &ldquo;volume control&rdquo; described in{" "}
        <Link
          href="/understanding-pain/pain-and-emotion"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          pain and emotion
        </Link>{" "}
        — and brain scans show pain-processing regions genuinely quieting down.
        In 2009, researchers imaging the spinal cord itself watched placebo
        treatment reduce pain-related activity in the cord&rsquo;s dorsal horn:
        the signal was being damped at the earliest stage of the central
        nervous system, long before &ldquo;believing&rdquo; could plausibly
        intervene.
      </P>
      <P>
        One aside the word &ldquo;opioid&rdquo; should always carry, even when
        it refers to the brain&rsquo;s own chemistry: if you or someone you
        love is struggling with opioid or other substance use, the SAMHSA
        National Helpline is free, confidential, and open 24/7 at{" "}
        <strong>1-800-662-HELP (4357)</strong>.
      </P>

      <H2 id="honest-placebo">It can work even when you know</H2>
      <OpenLabelFigure />
      <P>
        The strangest finding in the field may be the most reassuring. In{" "}
        <strong>open-label</strong> trials, patients are told, plainly, that
        they are receiving an inert pill — and some still improve. In
        irritable bowel syndrome, 59% of patients on honestly-labeled placebo
        reported adequate relief versus 35% with no treatment. In chronic low
        back pain, adding an openly-labeled placebo to usual care roughly
        tripled the pain reduction patients reported. These are small, short
        trials measuring self-reported symptoms, and they deserve that caveat —
        but they suggest something important: the ritual of care, expectation,
        and a trusted explanation carry real therapeutic weight. Deception was
        never the active ingredient.
      </P>

      <H2 id="nocebo">The evil twin: nocebo</H2>
      <P>
        Expectation cuts both ways. When people expect harm, they experience
        harm — the <strong>nocebo</strong> effect. The cleanest demonstration
        came from the COVID-19 vaccine trials: across twelve randomized trials
        with more than 45,000 participants, about{" "}
        <strong>35% of people who received only saline</strong> reported
        &ldquo;systemic side effects&rdquo; like headache and fatigue after
        their first dose. Comparing arms, researchers estimated that nocebo
        responses accounted for roughly three-quarters of such side effects
        reported after a first real dose. None of those symptoms were
        imaginary — headaches from expectation still ache. The lesson is that
        what you are told, and what you brace for, measurably shapes what your
        body produces.
      </P>

      <H2 id="limits">What it can and cannot do</H2>
      <P>
        Honesty about scope matters, because the placebo effect attracts hype
        in both directions. Across hundreds of trials, placebo effects show up
        reliably for <strong>self-reported symptoms</strong> — pain and nausea
        above all — and the average effects are modest, not miraculous. For
        objective disease outcomes, they show essentially nothing: placebos do
        not shrink tumors, heal fractures, or clear infections. Expectation has
        its hands on the nervous system&rsquo;s dials, and pain happens to be
        the most dial-controlled experience the body produces. That is exactly
        why the effect is strongest there — and why it stops at the border of
        symptom and disease.
      </P>
      <P>
        The effect is strong enough to complicate science itself. In US
        clinical trials of nerve-pain drugs, placebo responses have climbed
        steadily for decades — by 2013, placebo arms were averaging ~30% pain
        reduction — making it genuinely harder for new drugs to prove their
        worth. An effect powerful enough to challenge the pharmaceutical
        industry is not &ldquo;nothing.&rdquo;
      </P>

      <H2 id="real-care">What this means in real care</H2>
      <P>
        Medical ethics is clear that a clinician should not slip you a placebo
        without your knowledge — the AMA&rsquo;s code requires your cooperation
        and consent, because trust is itself part of the medicine. The research
        frontier is instead the honest version: open-label placebos, and care
        that deliberately harnesses expectation alongside real treatment —
        clear explanations, credible plans, a clinician you trust.
      </P>
      <P>
        And if you have ever responded to a placebo, or wondered whether your
        relief &ldquo;counts,&rdquo; keep the naloxone experiment in mind. A
        placebo response is your descending pain-control system doing its job.
        It is not evidence your pain was fake — it is evidence your brain&rsquo;s
        own pain-relief machinery, the very system pain medicine works to
        recruit, is switched on and listening.
      </P>
    </div>
  );
}
