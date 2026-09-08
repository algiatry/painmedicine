import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import { HeadProfile, HEAD_W, HEAD_H } from "../anatomy/HeadProfile";
import { SiteMarker } from "../anatomy/marks";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — where TMD hurts: the joint in front of the ear, and the two
 * chewing muscles that account for most of the pain. HeadProfile's jaw
 * and temple anchors, plus a masseter/temporalis overlay via children.
 */
function JawMapFigure() {
  const ox = 40;
  const oy = 20;
  return (
    <Figure caption="Three places a 'jaw problem' can live. The joint itself sits just in front of the ear. The masseter (cheek) and temporalis (temple) muscles do the chewing and clenching — and in most people with TMD, the muscles are the main source of pain, not the joint.">
      <svg
        role="img"
        aria-labelledby="tmj-map-title tmj-map-desc"
        viewBox={`0 0 680 ${HEAD_H + 40}`}
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="tmj-map-title">Where temporomandibular pain comes from</title>
        <desc id="tmj-map-desc">
          A head in profile with the jaw joint marked in front of the ear, the
          masseter muscle shaded over the cheek, and the temporalis muscle
          fanning over the temple. Labels name each.
        </desc>
        <g transform={`translate(${ox} ${oy})`}>
          <HeadProfile>
            {/* temporalis fan */}
            <path
              d="M96 60 C 120 40 160 44 176 70 C 170 90 150 104 136 120 L 132 120 C 126 100 112 84 96 60 Z"
              fill={FIG.nerveTint}
              stroke={FIG.nerve}
              strokeWidth="1.5"
              opacity="0.85"
            />
            {/* masseter */}
            <path
              d="M120 126 L 150 130 L 146 178 L 118 172 Z"
              fill={FIG.nerveTint}
              stroke={FIG.nerve}
              strokeWidth="1.5"
              opacity="0.9"
            />
            {/* joint: condyle in the fossa, just in front of the ear */}
            <circle cx="126" cy="124" r="6" fill={FIG.white} stroke={FIG.ink} strokeWidth="1.5" />
            <SiteMarker x={126} y={124} size="md" />
          </HeadProfile>
        </g>
        <g fontSize="14" fontWeight="700" fill={FIG.ink}>
          <text x={HEAD_W + 120} y="70">Temporalis</text>
          <text x={HEAD_W + 120} y="132">The joint (TMJ)</text>
          <text x={HEAD_W + 120} y="200">Masseter</text>
        </g>
        <g fontSize="12.5" fill={FIG.muted}>
          <text x={HEAD_W + 120} y="88">temple muscle — clenching, headache</text>
          <text x={HEAD_W + 120} y="150">condyle, disc, and fossa in front of the ear</text>
          <text x={HEAD_W + 120} y="218">cheek muscle — chewing, tension</text>
        </g>
        <g stroke={FIG.line} strokeWidth="1.5" fill="none">
          <path d={`M${HEAD_W + 112} 66 L ${ox + 150} ${oy + 70}`} />
          <path d={`M${HEAD_W + 112} 128 L ${ox + 138} ${oy + 124}`} />
          <path d={`M${HEAD_W + 112} 196 L ${ox + 148} ${oy + 156}`} />
        </g>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — the click is not the problem. Disc displacement with
 * reduction (the click) is common and usually painless; pain tracks with
 * muscles, sensitization, sleep and stress far more than with the disc.
 */
function ClickFigure() {
  return (
    <Figure caption="A clicking jaw usually means the cushioning disc slips forward and pops back as the mouth opens — 'disc displacement with reduction.' It is common, often lifelong, and by itself usually painless. Pain is a separate question, and it tracks with muscle overload, sleep, and a sensitized pain system more than with the click.">
      <svg
        role="img"
        aria-labelledby="click-title click-desc"
        viewBox="0 0 680 230"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="click-title">The click and the pain are different things</title>
        <desc id="click-desc">
          Two panels. Left: a jaw joint with the disc slipped forward,
          labeled the click, common and usually painless. Right: the same
          joint surrounded by muscle, sleep and stress cues, labeled the pain,
          which has different drivers.
        </desc>
        {/* left panel — the click */}
        <rect x="24" y="24" width="300" height="180" rx="14" fill={FIG.ground} />
        <text x="174" y="52" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
          The click
        </text>
        {/* fossa */}
        <path d="M120 110 C 140 80 200 80 220 110" fill="none" stroke={FIG.ink} strokeWidth="3" strokeLinecap="round" />
        {/* condyle */}
        <circle cx="170" cy="126" r="22" fill={FIG.white} stroke={FIG.ink} strokeWidth="2.5" />
        {/* disc slipped forward */}
        <path d="M118 104 C 130 92 152 92 160 102" fill="none" stroke={FIG.signalDark} strokeWidth="6" strokeLinecap="round" />
        <path d="M126 122 l -14 -10" stroke={FIG.signalDark} strokeWidth="2" strokeLinecap="round" />
        <text x="174" y="176" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
          disc slips forward, pops back on opening
        </text>
        <text x="174" y="194" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={FIG.nerveDark}>
          common · usually painless
        </text>

        {/* right panel — the pain */}
        <rect x="356" y="24" width="300" height="180" rx="14" fill={FIG.signalGround} stroke={FIG.signalTint} />
        <text x="506" y="52" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
          The pain
        </text>
        <circle cx="506" cy="120" r="18" fill={FIG.white} stroke={FIG.ink} strokeWidth="2.5" />
        <SiteMarker x={506} y={120} size="sm" />
        {[
          ["muscle overload", 420, 92],
          ["poor sleep", 592, 92],
          ["stress & clenching", 420, 156],
          ["sensitized system", 592, 156],
        ].map(([label, x, y]) => (
          <g key={String(label)}>
            <line x1={Number(x)} y1={Number(y)} x2="506" y2="120" stroke={FIG.signal} strokeWidth="1.5" strokeDasharray="3 3" />
            <text x={Number(x)} y={Number(y) - 8} textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.signalTextDark}>
              {label}
            </text>
          </g>
        ))}
        <text x="506" y="194" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={FIG.signalTextDark}>
          different drivers · different treatment
        </text>
      </svg>
    </Figure>
  );
}

export default function TmjDisorders() {
  return (
    <div>
      <P>
        The temporomandibular joints are the two hinges just in front of your
        ears that let the jaw open, close, and slide. &ldquo;TMJ&rdquo; is
        the joint; <strong>temporomandibular disorders (TMD)</strong> is the
        family of pain and movement problems that involve the joint, the
        chewing muscles, or both. It is one of the most common chronic pain
        conditions of the face. A 2020 National Academies report estimated
        about 1 in 20 US adults, more than 11 million people, live with it,
        roughly twice as many women as men.
      </P>

      <H2 id="three-places">Three places it can hurt</H2>
      <JawMapFigure />
      <P>
        The modern diagnostic system (the DC/TMD, 2014) sorts TMD into three
        overlapping groups: <strong>muscle pain</strong> in the masseter and
        temporalis, <strong>joint pain</strong> in the TMJ itself, and{" "}
        <strong>headache attributed to TMD</strong>, a temple headache that
        the jaw muscles reproduce. Muscle pain is by far the most common. It
        feels like a dull ache in the cheek or temple, worse with chewing,
        yawning, or first thing in the morning after a night of clenching,
        and it often radiates to the ear, so people frequently see an ear
        specialist first.
      </P>
      <P>
        Joint pain tends to be sharper and more localized, right in front of
        the ear, and may come with limited opening or a feeling of catching.
        The three groups often coexist, and the treatment plan depends on
        which is doing the work.
      </P>

      <H2 id="the-click">The click is not the problem</H2>
      <ClickFigure />
      <P>
        A clicking or popping jaw worries people more than almost any other
        symptom, and it deserves reassurance. The joint contains a small
        cushioning disc. In many people the disc sits slightly forward and
        snaps back into place as the mouth opens: that is the click. Called
        &ldquo;disc displacement with reduction,&rdquo; it is common in the
        general population, often lifelong, and usually painless. A click
        without pain or locking does not need treatment, and the National
        Academies report was pointed about the harm done by treating
        harmless clicks with irreversible procedures.
      </P>
      <P>
        Pain is a separate question. The OPPERA studies, the largest
        long-term research program on TMD, followed thousands of pain-free
        adults and watched about 4% per year develop the condition. What
        predicted it was not the anatomy of their joints. It was prior pain
        elsewhere in the body, worsening sleep, psychological distress, and
        a pain system already turned up, the same{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          nociplastic
        </Link>{" "}
        pattern seen in fibromyalgia and tension-type headache. About 1 in 5
        people reported jaw symptoms each year, but most never met the clinical
        definition; the researchers called this a &ldquo;symptom iceberg.&rdquo;
      </P>

      <H2 id="why-it-hurts">Why it hurts</H2>
      <P>
        The chewing muscles are among the strongest in the body for their
        size, and they work constantly: chewing, speaking, swallowing, and
        the clenching many people do without knowing it, especially during
        sleep and concentration. A muscle held tense for hours becomes sore
        the way any overworked muscle does. Add poor sleep, which lowers pain
        thresholds throughout the body, and a stressful stretch of life, and
        the muscles do not get their recovery window. The same OPPERA data
        showed that painful TMD overlaps heavily with{" "}
        <Link href="/conditions/migraine" className={link}>
          migraine
        </Link>
        ,{" "}
        <Link href="/conditions/fibromyalgia" className={link}>
          fibromyalgia
        </Link>
        , irritable bowel, and low back pain. For many people, the jaw is
        where a body-wide tendency toward pain happens to show up.
      </P>
      <P>
        True joint disease, such as osteoarthritis of the TMJ or an
        inflammatory arthritis, does occur and can be seen on imaging. But
        imaging findings in the jaw carry the same caveat as everywhere else
        in pain medicine: many people with abnormal-looking joints have no
        pain, and many with severe pain have normal-looking joints.
      </P>

      <H2 id="treatment">What treatment looks like today</H2>
      <P>
        Nearly every authoritative source, from the National Institute of
        Dental and Craniofacial Research to the National Academies, says the
        same thing: start with the least invasive, most reversible options,
        because most TMD improves with them and because the irreversible
        options have a poor track record. The described ladder:
      </P>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Self-management first.</strong> Softer foods during a
            flare, avoiding gum and wide yawns, heat on the muscles, gentle
            jaw stretches, and learning to notice and release daytime
            clenching (&ldquo;lips together, teeth apart&rdquo;). This is the
            evidence-supported foundation, not a consolation prize.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Physical therapy and behavioral care.</strong> Exercises,
            manual therapy, and cognitive behavioral approaches for the stress
            and sleep contributors have good support, particularly for
            muscle-predominant TMD. See{" "}
            <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
              physical and behavioral therapies
            </Link>
            .
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Oral appliances.</strong> A stabilization splint worn at
            night can reduce muscle pain in some people. Its role is to unload
            the muscles, not to reposition the jaw; appliances designed to
            permanently move the bite are a different and unproven thing.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Medications.</strong> Short courses of anti-inflammatory
            drugs for flares, and for persistent pain the same
            nervous-system-targeting classes used elsewhere, described in{" "}
            <Link href="/treatments/medications-for-pain" className={link}>
              medications for pain
            </Link>
            .
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Joint procedures, rarely.</strong> Flushing the joint
            (arthrocentesis) or arthroscopy is reserved for a locked or
            arthritic joint that has not responded. Open joint surgery and
            grinding teeth to change the bite are last resorts at most, and
            the National Academies specifically warned against them as routine
            care.
          </span>
        </li>
      </ul>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        The National Academies report called for TMD to be treated as a
        whole-person chronic pain condition rather than a dental problem,
        with care that crosses dentistry, pain medicine, physical therapy,
        and behavioral health. Research is following the OPPERA lead: TMD as
        an early, visible marker of a sensitized pain system, which means the
        brain-targeted approaches described in{" "}
        <Link href="/future-of-pain-medicine/mind-and-brain" className={link}>
          mind and brain
        </Link>{" "}
        are being tested here too.
      </P>

      <H2 id="specialist">When to seek specialist care</H2>
      <P>
        Most jaw pain settles with self-care over weeks. See a clinician
        sooner if the jaw locks open or closed, if you cannot open wide enough
        to eat, if pain is worsening rather than fluctuating, or if there is
        swelling, fever, or a change in how your teeth fit together. Those
        can signal a joint problem that benefits from early attention. If
        pain has lasted more than three months, ask about an orofacial pain
        specialist, a recognized dental specialty, or a{" "}
        <Link href="/find-help" className={link}>
          pain medicine physician
        </Link>
        . And if a proposed treatment is irreversible, ask what the
        reversible alternatives are first.
      </P>
    </div>
  );
}
