import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import { SiteMarker } from "../anatomy/marks";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 – a schematic shoulder in front view: the ball (humeral head)
 * sitting in the shallow socket (glenoid), the rotator cuff tendons wrapping
 * the ball, the acromion roofing the joint, and the narrow subacromial space
 * between them. Amber site markers show where the common sources of pain sit.
 */
function ShoulderFigure() {
  return (
    <Figure caption="A shallow socket, a roof, and a narrow gap. The rotator cuff tendons (teal) wrap the ball of the upper arm bone and pass under the bony acromion through the subacromial space. Most non-traumatic shoulder pain comes from that space, from the joint capsule, or from the joint surfaces – and some arrives from the neck.">
      <svg
        role="img"
        aria-labelledby="shoulder-anat-title shoulder-anat-desc"
        viewBox="0 0 680 320"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="shoulder-anat-title">Where shoulder pain can come from</title>
        <desc id="shoulder-anat-desc">
          A schematic front view of the right shoulder: the humeral head sits
          in the shallow glenoid socket of the shoulder blade, the rotator cuff
          tendons wrap over the ball, and the acromion forms a bony roof above
          them. Amber markers point to the subacromial space, the joint capsule,
          the joint surfaces, and a line from the neck for referred pain.
        </desc>

        {/* shoulder blade + glenoid socket (schematic) */}
        <path
          d="M300 120 C 290 150, 290 200, 305 250 L 350 300 L 390 300 L 372 250 C 362 210, 362 160, 372 125 Z"
          fill={FIG.ground}
          stroke={FIG.faint}
          strokeWidth="2"
        />
        {/* glenoid cartilage rim */}
        <path
          d="M372 128 C 358 160, 358 210, 372 246"
          fill="none"
          stroke={FIG.nerveBright}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* acromion roof */}
        <path
          d="M300 112 C 330 86, 400 80, 462 98 L 468 112 C 408 100, 340 104, 304 126 Z"
          fill={FIG.soft}
          stroke={FIG.faint}
          strokeWidth="2"
        />
        <text x="412" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.textMid}>
          ACROMION (roof)
        </text>

        {/* humerus shaft */}
        <path
          d="M400 232 L 404 310 L 456 310 L 452 232 Z"
          fill={FIG.ground}
          stroke={FIG.faint}
          strokeWidth="2"
        />
        {/* humeral head (ball) */}
        <circle cx="428" cy="186" r="56" fill={FIG.paper} stroke={FIG.faint} strokeWidth="2" />
        <circle cx="428" cy="186" r="56" fill="none" stroke={FIG.nerveBright} strokeWidth="4" strokeDasharray="0 0" strokeOpacity="0.9" />

        {/* rotator cuff tendons wrapping the ball */}
        <path
          d="M376 182 C 384 140, 428 118, 468 134"
          fill="none"
          stroke={FIG.nerve}
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M380 168 C 392 150, 420 136, 452 136"
          fill="none"
          stroke={FIG.nerveDark}
          strokeWidth="4"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        {/* subacromial bursa (thin cushion under the roof) */}
        <path
          d="M352 128 C 380 108, 430 104, 462 118"
          fill="none"
          stroke={FIG.signalBright}
          strokeWidth="5"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />

        {/* joint capsule outline */}
        <path
          d="M368 236 C 330 220, 330 150, 370 128"
          fill="none"
          stroke={FIG.faint}
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* pain sites */}
        <SiteMarker x={408} y={118} size="md" />
        <SiteMarker x={347} y={200} size="md" />
        <SiteMarker x={376} y={246} size="sm" />

        {/* referred-pain line from the neck */}
        <path
          d="M120 60 C 180 70, 250 86, 300 96"
          fill="none"
          stroke={FIG.signal}
          strokeWidth="2.5"
          strokeDasharray="6 5"
        />
        <circle cx="118" cy="58" r="5" fill={FIG.signal} />

        {/* labels, left column */}
        <text x="24" y="44" fontSize="13" fontWeight="700" fill={FIG.ink}>
          Referred from the neck
        </text>
        <text x="24" y="62" fontSize="12" fill={FIG.textMid}>
          nerve-root or spine pain felt in the shoulder
        </text>

        <text x="24" y="124" fontSize="13" fontWeight="700" fill={FIG.ink}>
          Subacromial space
        </text>
        <text x="24" y="142" fontSize="12" fill={FIG.textMid}>
          rotator cuff tendons and bursa under the roof
        </text>
        <path d="M212 132 L 392 120" fill="none" stroke={FIG.line} strokeWidth="1.5" />

        <text x="24" y="196" fontSize="13" fontWeight="700" fill={FIG.ink}>
          Joint capsule
        </text>
        <text x="24" y="214" fontSize="12" fill={FIG.textMid}>
          thickened and tight in frozen shoulder
        </text>
        <path d="M172 204 L 330 202" fill="none" stroke={FIG.line} strokeWidth="1.5" />

        <text x="24" y="262" fontSize="13" fontWeight="700" fill={FIG.ink}>
          Joint surfaces
        </text>
        <text x="24" y="280" fontSize="12" fill={FIG.textMid}>
          worn cartilage in osteoarthritis
        </text>
        <path d="M156 266 L 364 250" fill="none" stroke={FIG.line} strokeWidth="1.5" />

        {/* right labels */}
        <text x="500" y="150" fontSize="12" fontWeight="700" fill={FIG.nerveDark}>
          Rotator cuff
        </text>
        <text x="500" y="166" fontSize="11.5" fill={FIG.textMid}>
          four tendons that steer the ball
        </text>
        <text x="500" y="206" fontSize="12" fontWeight="700" fill={FIG.textMid}>
          Ball and socket
        </text>
        <text x="500" y="222" fontSize="11.5" fill={FIG.textMid}>
          big range, little bony support
        </text>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 – the trade-off, qualitatively: relief after an injection rises
 * fast and fades; relief from a course of exercise rises slowly and holds.
 * No numbers on purpose; the shapes are the point.
 */
function TradeoffFigure() {
  return (
    <Figure caption="Two shapes, not one winner. In the one-year SIX-Shoulder trial, people given a corticosteroid injection felt better sooner, while people who completed twelve sessions of exercise therapy were doing better at six, nine, and twelve months. The curves are drawn to show the pattern, not exact values, and the trial’s own confidence intervals were wide.">
      <svg
        role="img"
        aria-labelledby="shoulder-trade-title shoulder-trade-desc"
        viewBox="0 0 680 260"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="shoulder-trade-title">Relief over time: injection versus exercise</title>
        <desc id="shoulder-trade-desc">
          A qualitative chart with time on the horizontal axis from the first
          visit to one year and relief on the vertical axis. An amber curve for
          corticosteroid injection rises quickly within weeks and then drifts
          down. A teal curve for exercise therapy rises gradually and stays high
          through one year, crossing above the injection curve after a few
          months.
        </desc>

        {/* axes */}
        <path d="M70 212 L 630 212" stroke={FIG.line} strokeWidth="2" />
        <path d="M70 212 L 70 36" stroke={FIG.line} strokeWidth="2" />
        <text x="70" y="236" textAnchor="middle" fontSize="12" fill={FIG.muted}>first visit</text>
        <text x="206" y="236" textAnchor="middle" fontSize="12" fill={FIG.muted}>6 weeks</text>
        <text x="420" y="236" textAnchor="middle" fontSize="12" fill={FIG.muted}>6 months</text>
        <text x="630" y="236" textAnchor="middle" fontSize="12" fill={FIG.muted}>1 year</text>
        <text x="36" y="40" fontSize="12" fill={FIG.muted} transform="rotate(-90 36 40)" textAnchor="end">
          relief
        </text>

        {/* injection: fast rise, fades */}
        <path
          d="M70 206 C 110 120, 160 78, 206 80 C 300 86, 400 120, 630 150"
          fill="none"
          stroke={FIG.signal}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* exercise: slow rise, holds */}
        <path
          d="M70 206 C 150 190, 220 150, 300 112 C 380 78, 500 66, 630 64"
          fill="none"
          stroke={FIG.nerve}
          strokeWidth="4"
          strokeLinecap="round"
        />

        <text x="226" y="66" fontSize="13" fontWeight="700" fill={FIG.signalText}>
          Injection – fast, then fades
        </text>
        <text x="420" y="56" fontSize="13" fontWeight="700" fill={FIG.nerveDark}>
          Exercise – slow, then holds
        </text>
        <text x="630" y="196" textAnchor="end" fontSize="11.5" fill={FIG.muted}>
          shapes only – not to scale
        </text>
      </svg>
    </Figure>
  );
}

export default function ShoulderPain() {
  return (
    <div>
      <P>
        The shoulder trades stability for range. A large ball sits against a
        shallow socket, held in place less by bone than by a cuff of four
        tendons, a capsule, and the muscles around them. That design lets you
        reach overhead and behind your back, and it is why the tissues that do
        the steering are the ones that most often hurt. Shoulder pain is the
        third most common musculoskeletal reason people see a primary-care
        clinician, and most of it is not dangerous.
      </P>

      <KeyTakeaways
        items={[
          <>Shoulder pain is the <strong>third most common</strong> musculoskeletal reason people see a primary-care clinician, and most of it is not dangerous.</>,
          <>An injection buys <strong>speed</strong>; structured exercise or good advice tends to <strong>hold</strong>.</>,
          <>Rotator cuff tears are common without symptoms – <strong>two-thirds</strong> of those found in one village screening caused no symptoms at all.</>,
          <>Chest pressure, breathlessness, or sweating with shoulder pain needs <strong>emergency care</strong>, because the heart can refer pain here.</>,
        ]}
      />

      <H2 id="what-hurts">What can hurt in a shoulder</H2>
      <ShoulderFigure />
      <P>
        <strong>Subacromial pain</strong> is the most frequent source. The
        rotator cuff tendons and a thin cushion called the bursa pass through a
        narrow space under a bony roof, the acromion. Pain here is often felt on
        the outside of the upper arm, worse when reaching up or lying on that
        side. Older labels – rotator cuff tendinopathy, impingement, bursitis,
        partial tear – overlap so much that a 2026 review in JAMA Internal
        Medicine suggests the plainer term, subacromial pain, for all of them.
      </P>
      <P>
        <strong>Frozen shoulder</strong> (adhesive capsulitis) is different: the
        joint capsule itself becomes inflamed, thickened, and tight. Pain comes
        first, often worst at night, and then stiffness that limits movement in
        every direction, even when someone else moves the arm for you. It is
        more common in people with diabetes and in middle age.{" "}
        <strong>Osteoarthritis</strong> of the shoulder joint wears the
        cartilage surfaces and tends to cause a deep, grinding ache with
        stiffness. <strong>Instability</strong> – a shoulder that has
        dislocated or feels as if it might – follows injury or very loose
        joints and matters more in younger people.
      </P>
      <P>
        Finally, some shoulder pain does not start in the shoulder.{" "}
        <strong>Referred pain</strong> from an irritated nerve root in the
        neck, and more rarely from the heart, the diaphragm, the top of a lung,
        or the gallbladder, can be felt around the shoulder. A clinician asks
        about neck movement, tingling, breathlessness, and chest symptoms for
        exactly this reason; our{" "}
        <Link href="/conditions/neck-pain" className={link}>
          neck pain
        </Link>{" "}
        page explains the nerve-root pattern.
      </P>

      <H2 id="why-it-hurts">Why it hurts</H2>
      <P>
        Tendons are living tissue that adapts to load. When the load changes
        faster than the tendon can – a new sport, a season of overhead work, a
        fall, or simply years of use – the tendon and the bursa beside it become
        sensitive and sore. Pain then changes how you move: the arm is held
        close, the shoulder blade stops gliding, and the tissues are asked to
        work in a position they tolerate badly. That loop, more than any single
        structural flaw, is what most shoulder treatment tries to interrupt.
      </P>
      <P>
        Persistent shoulder pain also changes the system receiving the signal.
        Broken sleep, worry about damage, and repeated flare-ups can raise
        sensitivity so the shoulder hurts with less provocation. That is a
        normal property of the{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          pain system
        </Link>
        , not a sign that the pain is imagined. You are not imagining your pain.
        It is a reason to treat sleep, confidence, and movement together with
        the tendon.
      </P>

      <H2 id="injection-vs-rehab">Cortisone shot or exercise: fast versus durable</H2>
      <TradeoffFigure />
      <P>
        Both options sit in current guidelines, and both are reasonable. What
        the evidence can now describe is the shape of each. In the SIX-Shoulder
        Study, a pragmatic one-year trial run in Dutch general practice, 183
        people with a new episode of shoulder pain were randomly assigned to a
        single corticosteroid injection or to twelve sessions of
        physiotherapist-led exercise. At six weeks the injection group had
        improved more. At six, nine, and twelve months the exercise group was
        doing better on pain and function, though the confidence intervals were
        wide and the authors call the result an indication rather than a
        verdict. Side effects were reported more often with exercise (mostly
        temporary soreness) than with injection.
      </P>
      <P>
        The larger UK GRASP trial, 708 people with rotator cuff disorders,
        looked at the same question from another angle. A progressive exercise
        programme was not better over a year than a single best-practice advice
        session with a physiotherapist, and adding a subacromial corticosteroid
        injection brought no long-term benefit. Read together, the two trials
        say something honest: an injection buys speed, structured exercise or
        good advice tends to hold, and the evidence cannot yet say which person
        should start with which. That is a conversation for you and your
        clinician, weighing how much the next few weeks matter against the
        longer run. The site&rsquo;s{" "}
        <Link href="/treatments/comparing-your-options" className={link}>
          comparing your options
        </Link>{" "}
        page describes the same trade-off across other treatments.
      </P>

      <H2 id="other-treatments">The rest of the ladder</H2>
      <P>
        For most non-traumatic shoulder pain, first-line care is the same
        whatever the label: an explanation of what is going on, reassurance
        that the natural history is usually favourable, keeping the arm moving
        within tolerable limits, and adjusting the activity that keeps setting
        it off. Short-term pain relief with over-the-counter medicines may be
        discussed with a clinician or pharmacist; our{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications for pain
        </Link>{" "}
        page describes the classes without prescribing. Frozen shoulder is
        managed somewhat differently – a corticosteroid injection into the
        joint may be used for the painful early phase, with movement work
        afterwards – and a 2017 systematic review found the old idea that it
        reliably resolves on its own in three phases is not well supported, so
        it deserves a plan rather than waiting it out.
      </P>
      <P>
        Surgery has a narrower place than it once had. The Cochrane review of
        subacromial decompression and the UK CSAW trial, which compared the
        operation with placebo surgery, found no meaningful benefit over sham
        surgery for subacromial pain at one year – high-certainty evidence that
        has moved the operation to the margins. Surgery remains a real
        conversation for traumatic full-thickness tears, recurrent instability,
        advanced osteoarthritis, and selected frozen shoulders that have not
        responded. The{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          interventional procedures
        </Link>{" "}
        page covers how injections and operations are selected.
      </P>

      <H2 id="imaging">What a scan can – and cannot – settle</H2>
      <P>
        The American College of Radiology does not recommend early imaging for
        non-traumatic shoulder pain unless there are suspicious features. The
        reason is in the data: when researchers scanned both shoulders of 664
        people in one Japanese village, about one in five had a full-thickness
        rotator cuff tear, and two-thirds of those tears caused no symptoms at
        all. Tears were present in a quarter of people in their seventies and
        more than a third in their eighties. A tear on an MRI of a painful
        shoulder over sixty may be the cause, a bystander, or a finding that was
        there years before the pain.
      </P>
      <P>
        Imaging earns its place after significant trauma, when a dislocation or
        fracture is suspected, when a frozen shoulder or arthritis diagnosis is
        unclear, when surgery is being planned, or when fever, weight loss, or a
        cancer history raise concern. An X-ray shows bone and arthritis;
        ultrasound and MRI show tendons and the bursa. Your clinician can decide
        whether a scan would answer a question that matters to the plan now.
      </P>

      <H2 id="red-flags">When shoulder pain needs urgent care</H2>
      <P>
        Seek emergency care if shoulder pain comes with chest pressure,
        breathlessness, sweating, or nausea – especially pain in the left
        shoulder or arm that starts with exertion – because the heart can refer
        pain here. Go urgently after a fall or accident if you cannot move the
        arm, the shoulder has changed shape or is badly swollen, or there is
        numbness or a cold, pale hand, which can mean a fracture, dislocation,
        or a blood-vessel or nerve injury.
      </P>
      <P>
        Prompt assessment also matters for a hot, red, swollen shoulder with
        fever or feeling unwell (possible infection), for severe pain in both
        shoulders that arrived over days in someone over fifty (possible
        inflammatory disease), for steadily worsening pain at night with weight
        loss or a cancer history, and for pins and needles or weakness that do
        not settle. None of these is a diagnosis on its own; they are reasons
        for a clinician to look at the whole picture quickly rather than wait.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        The open question is not whether exercise or injection works but for
        whom. Programmes such as the UK&rsquo;s PANDA-S project are building
        prognostic tools to predict which shoulders settle quickly and which
        need more help from the start. Better matching, rather than a new
        operation, is the likeliest advance. The{" "}
        <Link href="/future-of-pain-medicine/precision-pain-medicine" className={link}>
          precision pain medicine
        </Link>{" "}
        page follows that work across conditions.
      </P>

      <H2 id="specialist">When to see a specialist</H2>
      <P>
        See a clinician sooner for the warning signs above, for pain after
        injury, for a shoulder that is getting steadily stiffer, or for pain
        that is not improving after a few weeks of sensible self-care. When
        shoulder pain remains limiting after a well-run course of first-line
        care, a physiotherapist, a musculoskeletal or sports physician, or a{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain physician
        </Link>{" "}
        can revisit the diagnosis, separate shoulder-origin pain from neck or
        referred pain, and help you choose between speed and durability with
        your own life in view. An orthopaedic surgeon becomes the right call
        when a tear after trauma, instability, or advanced arthritis is on the
        table.
      </P>
    </div>
  );
}
