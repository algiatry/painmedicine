import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — the pain-generator map: a stylized lumbar segment with every
 * structure that can plausibly generate low back pain marked in amber.
 */
function GeneratorsFigure() {
  const vertebrae = [60, 150, 240];
  const discs = [118, 208];
  return (
    <Figure caption="The lower back's candidate pain generators. Any of these structures can hurt — and in most episodes, no single one can be confidently blamed.">
      <svg
        role="img"
        aria-labelledby="gen-title gen-desc"
        viewBox="0 0 680 400"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="gen-title">What can hurt in the lower back</title>
        <desc id="gen-desc">
          A stylized stack of three vertebrae, discs, facet joints, exiting
          nerve roots, supporting muscle, and the sacrum below. Amber markers
          flag each structure that can generate pain: muscles and ligaments,
          discs, facet joints, nerve roots, and the sacroiliac joints.
        </desc>

        {/* paraspinal muscle band */}
        <rect x="128" y="62" width="26" height="252" rx="13" fill={FIG.soft} stroke={FIG.faint} strokeWidth="1.5" />

        {/* vertebral bodies */}
        {vertebrae.map((y) => (
          <rect key={y} x="195" y={y} width="110" height="52" rx="12" fill={FIG.nerveGround} stroke={FIG.nerveDark} strokeWidth="2" />
        ))}

        {/* discs */}
        {discs.map((y) => (
          <rect key={y} x="207" y={y} width="86" height="26" rx="12" fill={FIG.ground} stroke={FIG.muted} strokeWidth="1.8" />
        ))}

        {/* facet joints (posterior, right edge) */}
        {discs.map((y) => (
          <circle key={y} cx="316" cy={y + 13} r="9" fill={FIG.white} stroke={FIG.nerveDark} strokeWidth="2" />
        ))}

        {/* nerve roots exiting left at each disc level */}
        {discs.map((y) => (
          <path
            key={y}
            d={`M195 ${y + 13} C 172 ${y + 16} 160 ${y + 30} 150 ${y + 48}`}
            fill="none"
            stroke={FIG.nerve}
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}

        {/* sacrum */}
        <path
          d="M198 302 L302 302 L282 366 Q250 382 218 366 Z"
          fill={FIG.nerveGround}
          stroke={FIG.nerveDark}
          strokeWidth="2"
        />
        {/* sacroiliac joint lines */}
        <path d="M206 308 L226 360" fill="none" stroke={FIG.muted} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M294 308 L274 360" fill="none" stroke={FIG.muted} strokeWidth="2.5" strokeLinecap="round" />

        {/* amber pain markers */}
        {[
          { cx: 141, cy: 120 }, // muscle
          { cx: 250, cy: 131 }, // upper disc
          { cx: 316, cy: 221 }, // facet joint
          { cx: 153, cy: 254 }, // nerve root
          { cx: 285, cy: 336 }, // SI joint
        ].map((m) => (
          <g key={`${m.cx}-${m.cy}`}>
            <circle cx={m.cx} cy={m.cy} r="11" fill={FIG.signalTint} opacity="0.85" />
            <circle cx={m.cx} cy={m.cy} r="5" fill={FIG.signal} />
          </g>
        ))}

        {/* labels + leader lines */}
        <g fontSize="14" fontWeight="600" fill={FIG.ink}>
          <text x="40" y="34">Muscles &amp; ligaments</text>
          <text x="420" y="135">Disc</text>
          <text x="420" y="226">Facet joint</text>
          <text x="40" y="330">Nerve root</text>
          <text x="420" y="341">Sacroiliac joint</text>
        </g>
        <g fontSize="12" fill={FIG.textMid}>
          <text x="40" y="52">strain is the everyday culprit</text>
          <text x="420" y="153">bulge, tear, degeneration</text>
          <text x="420" y="244">small linking joints; arthritis</text>
          <text x="40" y="348">compression → leg pain</text>
          <text x="420" y="359">where spine meets pelvis</text>
        </g>
        <g stroke={FIG.line} strokeWidth="1.5" fill="none">
          <path d="M120 40 Q136 60 141 106" />
          <path d="M413 130 L264 131" />
          <path d="M413 221 L330 221" />
          <path d="M118 324 Q136 300 149 262" />
          <path d="M413 336 L299 336" />
        </g>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — the honest census: how often back pain has a nameable cause.
 * Segment widths 540/54/6 on a 600px bar (90% / 9% / 1%).
 */
function CausesBarFigure() {
  return (
    <Figure caption="What's behind low back pain in primary care, to the nearest honest number: ~90% non-specific, ~5–10% nerve-root (radicular) pain, and roughly 1% serious underlying disease (Hartvigsen 2018).">
      <svg
        role="img"
        aria-labelledby="bar-title bar-desc"
        viewBox="0 0 680 220"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="bar-title">Causes of low back pain, by share of cases</title>
        <desc id="bar-desc">
          A single horizontal bar divided into three segments: about 90 percent
          non-specific, five to ten percent nerve-root pain, and about one
          percent serious underlying causes such as fracture, infection,
          inflammatory disease, or cancer.
        </desc>

        <rect x="40" y="82" width="540" height="46" rx="8" fill={FIG.nerve} />
        <rect x="580" y="82" width="54" height="46" fill={FIG.signal} />
        <path d="M634 82 h6 a8 8 0 0 1 8 8 v30 a8 8 0 0 1 -8 8 h-6 z" fill={FIG.caution} />

        <text x="310" y="110" textAnchor="middle" fontSize="16" fontWeight="700" fill={FIG.white}>
          Non-specific — about 9 in 10
        </text>

        <g fontSize="13.5" fontWeight="700">
          <text x="52" y="150" fill={FIG.nerveDark}>
            no single structure identifiable
          </text>
          <text x="607" y="60" textAnchor="middle" fill={FIG.signalText}>
            Nerve-root (~5–10%)
          </text>
          <text x="644" y="176" textAnchor="end" fill={FIG.cautionText}>
            Serious causes (~1%)
          </text>
        </g>
        <g fontSize="12" fill={FIG.textMid}>
          <text x="52" y="168">muscles, ligaments, discs, joints — usually self-limiting</text>
          <text x="644" y="194" textAnchor="end">fracture · infection · inflammatory · cancer</text>
        </g>
        <g stroke={FIG.line} strokeWidth="1.5" fill="none">
          <path d="M607 66 L607 78" />
          <path d="M641 130 L641 162" />
        </g>
      </svg>
    </Figure>
  );
}

export default function LowBackPain() {
  return (
    <div>
      <P>
        If your lower back hurts, the most useful thing to know first is how
        ordinary that is. The World Health Organization counts low back pain as
        the single leading cause of disability on Earth — about 619 million
        people were living with it in 2020, a number projected to reach 843
        million by 2050. It is not a niche complaint or a personal failing. It
        is close to a universal human experience, and medicine has learned a
        great deal about it — including some things that overturn what most of
        us were taught.
      </P>

      <H2 id="what-can-hurt">What can actually hurt in the lower back</H2>
      <GeneratorsFigure />
      <P>
        The lumbar spine is a load-bearing tower of five vertebrae, cushioned by
        discs, linked by small facet joints, anchored to the pelvis at the
        sacroiliac joints, laced with ligaments, moved by deep layers of muscle,
        and threaded with nerve roots on their way to the legs. Every one of
        those structures has a nerve supply, and every one of them can generate
        pain. A strained muscle after unfamiliar lifting, an irritated facet
        joint, a disc bulge pressing near a nerve root, an arthritic sacroiliac
        joint — all of them present, from the inside, as the same thing:
        &ldquo;my lower back hurts.&rdquo;
      </P>

      <H2 id="non-specific">Why &ldquo;non-specific&rdquo; is the honest answer</H2>
      <CausesBarFigure />
      <P>
        Here is the fact that surprises almost everyone: in roughly{" "}
        <strong>90% of cases</strong>, no test can confidently pin low back pain
        on one structure. Clinicians call this{" "}
        <strong>non-specific low back pain</strong> — not because the pain
        isn&rsquo;t real, but because the back&rsquo;s many pain-capable parts
        sit millimeters apart, refer pain to the same places, and hurt in the
        same vocabulary. The Lancet&rsquo;s landmark review of the field is
        blunt about it: low back pain is a symptom, not a disease, and for most
        people a precise anatomical diagnosis is neither possible nor necessary
        for good care.
      </P>
      <P>
        Non-specific also does not mean mild. It simply means the useful
        questions change — from &ldquo;which structure?&rdquo; to &ldquo;is
        anything dangerous going on?&rdquo; (usually no) and &ldquo;what will
        help this settle?&rdquo;. And when back pain persists, it often stops
        being one mechanism at all: long-lasting low back pain is the classic{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          mixed pain
        </Link>{" "}
        — tissue-driven, nerve-driven, and sensitization-driven features
        layered together.
      </P>

      <H2 id="imaging">What an MRI can and can&rsquo;t tell you</H2>
      <P>
        It feels intuitive that a scan should settle the question. The
        research says otherwise, and the numbers are worth knowing. In a
        systematic review of imaging in <em>pain-free</em> adults, disc
        degeneration was present in <strong>37% of 20-year-olds</strong> and{" "}
        <strong>96% of 80-year-olds</strong>; disc bulges in 30% of pain-free
        20-year-olds and 84% of pain-free 80-year-olds. These findings are so
        common in comfortable backs that researchers describe them as normal
        features of aging — wrinkles on the inside.
      </P>
      <P>
        That is why major guidelines advise <em>against</em> routine early
        imaging for low back pain unless red flags or significant nerve
        symptoms are present. A scan ordered too early rarely changes
        treatment, but it reliably produces alarming-sounding words —
        degeneration, bulge, desiccation — that can make a recovering back
        feel more fragile than it is. The reverse is equally important: a
        normal scan does not mean the pain isn&rsquo;t real.{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          Pain is made by the nervous system
        </Link>
        , and the scanner photographs structure, not pain.
      </P>

      <H2 id="nerve-pain">When back pain is a nerve problem</H2>
      <P>
        In a minority of cases — on the order of 5 to 10% — the pain comes from
        an irritated or compressed <strong>nerve root</strong>, most often from
        a disc herniation. The signature is pain that travels: a sharp,
        electric, or burning line down the buttock and leg, sometimes with
        numbness, tingling, or weakness.{" "}
        <Link href="/conditions/sciatica" className={link}>
          Sciatica
        </Link>{" "}
        is the everyday name; radicular pain is the clinical one. Spinal stenosis — a narrowing of
        the canal that tends to come with age — produces its own pattern: leg
        pain or heaviness on walking that eases when you sit or lean forward.
        Nerve-root pain deserves a clinical look, because it is assessed and
        treated differently from non-specific back pain.
      </P>

      <H2 id="red-flags">The red flags: when to seek care now</H2>
      <P>
        A short list of warning signs matters far more than any scan. Seek
        urgent care — same day — for new <strong>numbness in the groin or
        inner thighs</strong>, <strong>trouble controlling bladder or
        bowels</strong>, or <strong>progressive leg weakness</strong>. Together
        these suggest cauda equina syndrome, a rare compression of the nerve
        bundle at the base of the spine that is treated as a surgical
        emergency. See a clinician promptly, if less urgently, for back pain
        with fever; pain after significant trauma; pain that is worst at rest
        or at night; or back pain alongside a history of cancer, osteoporosis,
        or unexplained weight loss. These are the roughly-one-in-a-hundred
        cases the whole diagnostic process is designed to catch — uncommon,
        and taken seriously precisely so that everyone else can be reassured
        with confidence.
      </P>

      <H2 id="treatment">How low back pain is treated today</H2>
      <P>
        The modern playbook, distilled from the American College of
        Physicians&rsquo; guideline, starts somewhere many people
        don&rsquo;t expect: <strong>movement, not rest</strong>. Bed rest —
        the standard advice for most of a century — turned out to slow
        recovery; staying gently active speeds it. For a new episode,
        guidelines favor non-drug care first: heat, massage, spinal
        manipulation, and above all reassurance plus a gradual return to
        normal activity, because most episodes settle substantially within a
        few weeks.
      </P>
      <P>
        When pain persists, the evidence supports treatments that rebuild
        capacity rather than chase the pain: structured exercise therapy,
        physical therapy, and — because a sensitized pain system responds to
        brain-targeted care — approaches like cognitive behavioral therapy and
        mindfulness-based programs. Anti-inflammatory medications are the
        first-line drug class in guidelines; medication choices beyond that,
        including nerve-pain agents and duloxetine, are described territory
        for a conversation with your physician. Opioids sit explicitly at the
        end of the guideline ladder, an option only when other routes have
        failed and after a frank discussion of risks and benefits. For
        selected cases there are image-guided procedures — injections,
        radiofrequency ablation — and surgery has clear value mainly for
        specific problems like severe or progressive nerve compression, far
        less for non-specific pain.
      </P>
      <P>
        None of this is one-size-fits-all, and none of it is a prescription —
        which mix fits your back is exactly the conversation to have with your
        clinician. What the evidence does say clearly: for most backs, the
        path runs through movement, time, and confidence, not through the
        strongest available pill.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        Low back pain is one of the frontiers the field is actively working:
        non-opioid drug candidates in trials, smarter{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          neuromodulation
        </Link>{" "}
        for persistent nerve-related pain, and{" "}
        <Link href="/future-of-pain-medicine/mind-and-brain" className={link}>
          pain-reprocessing research
        </Link>{" "}
        aimed at the sensitized pain system itself. The{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pipeline tracker
        </Link>{" "}
        follows what&rsquo;s in development and what each approach would mean
        for backs like yours.
      </P>

      <H2 id="specialist">When to see a pain specialist</H2>
      <P>
        If back pain is still limiting your life after six to twelve weeks of
        first-line care — or sooner, if nerve symptoms are significant — that
        is squarely the territory of{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain medicine
        </Link>
        . A specialist can sort out the mechanism, coordinate the physical and
        procedural options, and treat the pain system itself, not just the
        spine.{" "}
        <Link href="/find-help" className={link}>
          Finding pain care near you
        </Link>{" "}
        explains how to get there.
      </P>
    </div>
  );
}
