import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import { SynovialJoint } from "../anatomy/SynovialJoint";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — one word, three joints: healthy, osteoarthritis, inflammatory.
 * First page use of the SynovialJoint anatomy component, side by side.
 */
function JointsFigure() {
  const panels = [
    {
      x: 12,
      state: "healthy" as const,
      name: "Healthy",
      note: "smooth cartilage, quiet lining",
    },
    {
      x: 240,
      state: "osteoarthritis" as const,
      name: "Osteoarthritis",
      note: "thinned cartilage, remodeled bone",
    },
    {
      x: 468,
      state: "inflamed" as const,
      name: "Inflammatory arthritis",
      note: "the immune system attacks the lining",
    },
  ];
  return (
    <Figure caption="One word, two diseases. Osteoarthritis is the joint's own tissues changing — cartilage thinning, bone remodeling, a narrowed space. Inflammatory arthritis is different in kind: the immune system inflames the synovial lining itself (amber).">
      <svg
        role="img"
        aria-labelledby="joints-title joints-desc"
        viewBox="0 0 680 280"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="joints-title">Healthy joint, osteoarthritis, and inflammatory arthritis</title>
        <desc id="joints-desc">
          Three joint cross-sections side by side. The healthy joint has thick
          cartilage caps and a wide space. The osteoarthritic joint shows
          thinned cartilage and a narrowed space. The inflamed joint shows a
          thickened amber synovial lining under immune attack.
        </desc>

        {panels.map((p) => (
          <g key={p.state}>
            <g transform={`translate(${p.x} 16) scale(0.62)`}>
              <SynovialJoint state={p.state} />
            </g>
            <text x={p.x + 99} y="234" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
              {p.name}
            </text>
            <text x={p.x + 99} y="253" textAnchor="middle" fontSize="11.5" fill={FIG.textMid}>
              {p.note}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — which pattern is yours: mechanical pain rises with the day's
 * use; inflammatory pain is worst on waking and eases with movement.
 */
function PatternsFigure() {
  return (
    <Figure caption="The day tells the diagnosis. Mechanical (osteoarthritis) pain builds with use and eases with rest, after brief morning stiffness. Inflammatory pain is worst on waking — stiffness lasting an hour or more — and improves as the day moves. The second pattern deserves a prompt appointment.">
      <svg
        role="img"
        aria-labelledby="pat-title pat-desc"
        viewBox="0 0 680 280"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="pat-title">Mechanical vs. inflammatory pain through the day</title>
        <desc id="pat-desc">
          Two panels with morning-to-evening time axes. Left, the mechanical
          pattern: pain starts low after brief stiffness and climbs through
          the day with activity. Right, the inflammatory pattern: pain and
          stiffness are highest on waking and ease with movement through the
          day.
        </desc>

        <line x1="340" y1="36" x2="340" y2="244" stroke={FIG.soft} strokeWidth="1.5" />

        {/* mechanical panel */}
        <text x="170" y="54" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
          The mechanical pattern
        </text>
        <text x="170" y="73" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          osteoarthritis — pain follows use
        </text>
        <line x1="46" y1="200" x2="296" y2="200" stroke={FIG.faint} strokeWidth="1.5" />
        <path
          d="M46 188 C70 184 84 178 110 172 C160 158 220 138 296 116"
          fill="none"
          stroke={FIG.signalDark}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <text x="46" y="222" fontSize="11" fill={FIG.muted}>morning</text>
        <text x="296" y="222" textAnchor="end" fontSize="11" fill={FIG.muted}>evening</text>
        <text x="171" y="244" textAnchor="middle" fontSize="11.5" fill={FIG.signalText}>
          stiffness: minutes — eases with rest
        </text>

        {/* inflammatory panel */}
        <text x="510" y="54" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
          The inflammatory pattern
        </text>
        <text x="510" y="73" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          rheumatoid &amp; kin — worst on waking
        </text>
        <line x1="386" y1="200" x2="636" y2="200" stroke={FIG.faint} strokeWidth="1.5" />
        <path
          d="M386 112 C420 118 448 134 484 152 C540 176 590 186 636 190"
          fill="none"
          stroke={FIG.signalDark}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <text x="386" y="222" fontSize="11" fill={FIG.muted}>morning</text>
        <text x="636" y="222" textAnchor="end" fontSize="11" fill={FIG.muted}>evening</text>
        <text x="511" y="244" textAnchor="middle" fontSize="11.5" fill={FIG.signalText}>
          stiffness: an hour or more — eases with movement
        </text>
      </svg>
    </Figure>
  );
}

export default function ArthritisPain() {
  return (
    <div>
      <P>
        &ldquo;Arthritis&rdquo; is one of medicine&rsquo;s most misleading
        words — a single label stretched across more than a hundred joint
        conditions with different causes, different urgencies, and different
        treatments. For a person in pain, nearly everything worth knowing
        comes down to one distinction. <strong>Osteoarthritis</strong>, by
        far the most common, is a disease of the joint&rsquo;s own tissues.{" "}
        <strong>Inflammatory arthritis</strong> — rheumatoid arthritis,
        psoriatic arthritis, gout — is the immune system attacking the
        joint. One is managed over years; the other is, at its outset, a
        race. This page is about learning which story your joints are
        telling.
      </P>

      <H2 id="two-diseases">One word, two diseases</H2>
      <JointsFigure />
      <P>
        A healthy joint is a beautifully engineered bearing: bone ends
        capped in smooth cartilage, wrapped in a capsule whose thin lining —
        the synovium — makes the lubricating fluid. In{" "}
        <strong>osteoarthritis</strong>, that whole system changes:
        cartilage thins, the bone beneath remodels and grows spurs, and the
        lining runs a low-grade inflammation. Note what that is <em>not</em>:
        the old &ldquo;wear and tear&rdquo; story of a tread wearing out.
        Joints are living tissue that responds to load, and osteoarthritis
        is an active disease process — which is precisely why sensible
        loading helps rather than harms, as we&rsquo;ll get to. In{" "}
        <strong>inflammatory arthritis</strong> the primary event is
        different in kind: the immune system targets the synovium itself,
        swelling it into an aggressive tissue that can erode cartilage and
        bone from within. Rheumatoid arthritis is the flagship; psoriatic
        arthritis travels with skin disease; gout is its own drama — urate
        crystals precipitating in a joint and igniting one of the most
        painful acute inflammations in medicine, classically overnight in a
        big toe.
      </P>

      <H2 id="patterns">Which pattern is yours?</H2>
      <PatternsFigure />
      <P>
        The clock does surprisingly good diagnostic work. Mechanical,
        osteoarthritic pain <strong>follows use</strong>: stiffest for a few
        minutes after rest, better once moving, worse after the day&rsquo;s
        accumulated load, eased by putting the joint up. Inflammatory pain
        runs the opposite schedule: <strong>worst on waking</strong>, with
        morning stiffness lasting an hour or more, joints that are visibly
        swollen and warm, improvement with movement — and often a systemic
        shadow of fatigue and feeling unwell, because the immune system is
        running hot everywhere. Distribution helps too: osteoarthritis
        favors knees, hips, the base of the thumb, and the finger ends;
        rheumatoid classically takes the knuckles and wrists{" "}
        <em>symmetrically</em>. No pattern is perfect, but if the right-hand
        panel above reads like your mornings, that is information with a
        deadline attached.
      </P>

      <H2 id="xray-paradox">The X-ray paradox</H2>
      <P>
        Arthritis is where imaging honesty matters as much as anywhere on
        this site. Studies comparing knee X-rays with knee pain find the
        two <strong>discordant in both directions</strong> — plenty of
        rough-looking joints that feel fine, plenty of painful joints with
        modest films. Structure is one input into pain, not a verdict; the
        nervous system, sleep, mood, and a joint&rsquo;s inflammatory state
        all set the volume, and in long-standing arthritis a{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          sensitized pain system
        </Link>{" "}
        can join the original disease. The practical upshot cuts both ways:
        an alarming report does not doom you to the pain it seems to
        predict, and a clean film does not mean your pain is imaginary or
        untreatable.
      </P>

      <H2 id="window">The window of opportunity</H2>
      <P>
        Here is why the mechanical-versus-inflammatory question carries
        urgency. Untreated rheumatoid arthritis damages joints early — and
        modern rheumatology has learned that starting{" "}
        <strong>disease-modifying treatment promptly</strong>, then
        adjusting it until the inflammation is actually suppressed, prevents
        most of the destruction that once defined the disease. The
        deformities older generations associate with rheumatoid arthritis
        have become largely a story of the pre-treatment era. That
        transformation only works for people who get through the door in
        months, not years — which is exactly what the inflammatory pattern
        above is for. Swollen, warm, symmetric small joints with long
        morning stiffness are not a wait-and-see situation.
      </P>

      <H2 id="treatment">How arthritis pain is treated today</H2>
      <P>
        For <strong>osteoarthritis</strong>, the guideline hierarchy
        surprises almost everyone: the most strongly recommended treatment
        is <strong>exercise</strong> — strengthening the muscles that
        cushion the joint, with weight management close behind for knees and
        hips. Movement nourishes cartilage rather than grinding it; the
        soreness of starting is adaptation, not damage. Around that core:
        topical anti-inflammatories first for knees and hands (relief where
        the risks stay local), oral NSAIDs in sensible courses, steroid
        injections for flares — honest about their short-term horizon — and
        braces, canes, and activity tweaks that quietly earn their keep.
        Opioids are specifically discouraged in the guidelines. And when a
        joint is truly end-stage, <strong>replacement</strong> is among the
        most effective operations in all of surgery — a genuine finish line,
        best timed with your surgeon.
      </P>
      <P>
        For <strong>inflammatory arthritis</strong>, the deepest pain
        relief is not a painkiller at all: it is turning off the
        inflammation. Methotrexate and the biologic revolution that
        followed — TNF blockers and their successors — treat the disease,
        and the pain follows it down; anti-inflammatories bridge flares
        while the disease-modifiers take hold. <strong>Gout</strong> is the
        happiest version of this logic: flares are quenched with
        anti-inflammatory treatment, and daily urate-lowering therapy can
        make future flares — and the joint damage of untreated gout —
        essentially preventable. Which medications, in which order, is
        rheumatology&rsquo;s craft and your clinician&rsquo;s call; the
        principle to hold onto is that in inflammatory disease,{" "}
        <em>the disease is the target</em>.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        Inflammatory arthritis already had its revolution; osteoarthritis is
        still waiting for one. The field&rsquo;s open hunt is a{" "}
        <strong>disease-modifying osteoarthritis drug</strong> — something
        that changes the joint&rsquo;s trajectory rather than muting its
        signal — with candidates aimed at cartilage biology and at the
        nerve-growth-factor pathway in trials now. The{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pipeline tracker
        </Link>{" "}
        follows them, and the{" "}
        <Link href="/future-of-pain-medicine/biologics-and-gene-therapy" className={link}>
          biologics story
        </Link>{" "}
        explains why the last attempt at that pathway taught the field so
        much.
      </P>

      <H2 id="specialist">When to bring in a specialist</H2>
      <P>
        The inflammatory pattern buys a prompt <strong>rheumatology</strong>{" "}
        referral — that is the specialty that owns the window of
        opportunity. For osteoarthritis that keeps hurting despite
        exercise-first care, or arthritis pain that has outgrown its joint,{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain medicine
        </Link>{" "}
        adds the next layer: injections done with imaging guidance,
        radiofrequency options for selected joints, and treatment of the
        sensitized pain system itself.{" "}
        <Link href="/find-help" className={link}>
          Finding pain care near you
        </Link>{" "}
        explains how to navigate both doors.
      </P>
    </div>
  );
}
