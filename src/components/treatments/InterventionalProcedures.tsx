import Link from "next/link";
import GuideCallout from "@/components/GuideCallout";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import { SpineSide } from "../anatomy/SpineSide";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

/**
 * Figure 1 – the precision map: where the main procedures aim, on the
 * spine's side view. SpineSide's first page use.
 */
function TargetsFigure() {
  return (
    <Figure caption="Where the workhorse procedures aim: an epidural injection bathes an irritated nerve root; radiofrequency ablation quiets the small nerves of the facet joints; a stimulator lead sits in the epidural space, talking to the spinal cord itself. Imaging guidance is what makes the addresses precise.">
      <svg
        role="img"
        aria-labelledby="tgt-title tgt-desc"
        viewBox="0 0 680 360"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="tgt-title">Where interventional procedures aim</title>
        <desc id="tgt-desc">
          A side view of the spine with the lumbar region highlighted. An
          amber marker sits at a lumbar nerve root for epidural injection; a
          second marker sits at the facet-joint line for radiofrequency
          ablation; a dashed lead runs along the spinal canal for a
          stimulator. Labels identify each target.
        </desc>

        <g transform="translate(70 8) scale(0.74)">
          <SpineSide highlight="lumbar" />
        </g>

        {/* epidural / nerve-root target (anterior lumbar) */}
        <circle cx="118" cy="232" r="11" fill={FIG.signalTint} opacity="0.9" />
        <circle cx="118" cy="232" r="5" fill={FIG.signal} />

        {/* facet / RFA target (posterior lumbar) */}
        <circle cx="172" cy="244" r="11" fill={FIG.signalTint} opacity="0.9" />
        <circle cx="172" cy="244" r="5" fill={FIG.signal} />

        {/* stimulator lead along the canal */}
        <path
          d="M160 132 C163 160 166 195 167 220"
          fill="none"
          stroke={FIG.nerveDark}
          strokeWidth="3"
          strokeDasharray="7 5"
          strokeLinecap="round"
        />
        <rect x="154" y="118" width="12" height="18" rx="4" fill={FIG.nerveTint} stroke={FIG.nerveDark} strokeWidth="2" />

        {/* labels */}
        <g fontSize="14" fontWeight="700" fill={FIG.ink}>
          <text x="330" y="84">Stimulator lead</text>
          <text x="330" y="196">Epidural injection</text>
          <text x="330" y="300">Radiofrequency ablation</text>
        </g>
        <g fontSize="12" fill={FIG.textMid}>
          <text x="330" y="103">in the epidural space, pulsing the cord –</text>
          <text x="330" y="119">placed after a take-home trial</text>
          <text x="330" y="215">medication delivered around the</text>
          <text x="330" y="231">irritated nerve root</text>
          <text x="330" y="319">heat quiets the small nerves serving</text>
          <text x="330" y="335">the arthritic facet joints</text>
        </g>
        <g stroke={FIG.line} strokeWidth="1.5" fill="none">
          <path d="M322 90 Q250 100 172 126" />
          <path d="M322 204 Q230 216 131 230" />
          <path d="M322 306 Q250 290 184 248" />
        </g>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 – the window rule: what each procedure buys, honestly, and what
 * every window is for.
 */
function WindowsFigure() {
  const rows = [
    { label: "Steroid injection", w: 120, note: "weeks to a few months – a bridge" },
    { label: "Radiofrequency ablation", w: 260, note: "many months to a year – repeatable" },
    { label: "Stimulator (after a trial)", w: 430, note: "years – adjustable, reversible" },
  ];
  return (
    <Figure caption="What each window buys. The durations differ; the rule doesn't: a procedure lowers the pain so movement becomes possible, and the rehabilitation done inside the window is what holds the gains.">
      <svg
        role="img"
        aria-labelledby="win-title win-desc"
        viewBox="0 0 680 260"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="win-title">The relief window each procedure buys</title>
        <desc id="win-desc">
          Three horizontal bars of increasing length: steroid injections buy
          weeks to a few months; radiofrequency ablation many months to a
          year, repeatable; stimulators years, adjustable and reversible. A
          closing note reads: every window is for rehabilitation.
        </desc>

        {rows.map((r, i) => {
          const y = 36 + i * 62;
          return (
            <g key={r.label}>
              <text x="24" y={y + 19} fontSize="13.5" fontWeight="700" fill={FIG.ink}>
                {r.label}
              </text>
              <rect x="216" y={y} width="440" height="28" rx="6" fill={FIG.ground} />
              <rect x="216" y={y} width={r.w} height="28" rx="6" fill={FIG.nerve} />
              <text x="222" y={y + 47} fontSize="11.5" fill={FIG.textMid}>
                {r.note}
              </text>
            </g>
          );
        })}
        <text x="216" y="242" fontSize="12.5" fontWeight="700" fill={FIG.signalText}>
          every window is for rehabilitation
        </text>
      </svg>
    </Figure>
  );
}

export default function InterventionalProcedures() {
  return (
    <div>
      <P>
        Between the pharmacy and the operating room sits a whole layer of
        pain medicine that most patients never hear about until they need
        it: <strong>interventional procedures</strong> – treatments
        delivered with imaging guidance to the exact structure generating
        the pain. Where a pill is mailed to the whole body, a procedure is
        delivered to an address. That precision is the field&rsquo;s craft
        and its honest limit at once: aimed at the right structure, a
        procedure can change the next year; aimed at the wrong one, the
        world&rsquo;s steadiest needle accomplishes nothing. Which is why
        everything below begins with diagnosis, not equipment.
      </P>

      <KeyTakeaways
        items={[
          <>
            Procedures deliver treatment to the exact structure generating the pain, so <strong>everything begins with diagnosis</strong>, not equipment.
          </>,
          <>
            Epidural steroid injections give <strong>modest, mostly short-term</strong> relief for radiating nerve-root pain like sciatica.
          </>,
          <>
            Spinal cord stimulation offers a <strong>take-home trial</strong> of about a week before any implant decision.
          </>,
          <>
            Procedures rarely erase pain permanently; they <strong>buy windows</strong>, and what fills the window decides what it was worth.
          </>,
        ]}
      />

      <GuideCallout
        id="procedure-guides"
        title="Which procedure did your clinician mention?"
        tocLabel="Find your procedure"
        guides={[
          {
            href: "/treatments/epidural-steroid-injections",
            title: "Epidural steroid injections",
            description: "What the injection is used for, how long relief may last, and which risks to discuss.",
          },
          {
            href: "/treatments/nerve-blocks-and-rfa",
            title: "Nerve blocks and radiofrequency ablation",
            description: "Why a clinician may start with a nerve block and how the results can inform the next step.",
          },
          {
            href: "/treatments/spinal-cord-stimulation",
            title: "Spinal cord stimulation",
            description: "What happens during a stimulator trial and what to consider before an implant.",
          },
        ]}
      />

      <H2 id="the-map">The precision map</H2>
      <TargetsFigure />
      <P>
        Nearly every procedure in the toolbox aims at one of a few
        addresses: the <strong>epidural space</strong> around irritated
        nerve roots; the <strong>small nerves serving the facet
        joints</strong> that stiffen with age; the{" "}
        <strong>sympathetic nerve chains</strong> involved in conditions
        like{" "}
        <Link href="/conditions/crps" className={link}>
          CRPS
        </Link>{" "}
        and upper-abdominal cancer pain; painful <strong>joints and
        muscle trigger points</strong>; and, for the implanted devices,
        the <strong>spinal cord and its nerve-root ganglia</strong>
        themselves. All of it happens under live X-ray or ultrasound,
        usually awake or lightly sedated, usually home the same day.
      </P>

      <H2 id="blocks">Injections and blocks, and the question inside them</H2>
      <P>
        The most familiar procedure is the{" "}
        <Link href="/treatments/epidural-steroid-injections" className={link}>
          epidural steroid injection
        </Link>
        : for radiating nerve-root pain like{" "}
        <Link href="/conditions/sciatica" className={link}>
          sciatica
        </Link>
        , reviews show real but modest, mostly short-term relief, and
        little benefit for ordinary back pain. Used as a bridge, that can
        be enough. Used as a standing appointment, it disappoints. The
        subtler value of other blocks is diagnostic: numb a specific
        structure, and the pain&rsquo;s response tells you whether you
        found the generator. That question is the foundation of{" "}
        <Link href="/treatments/nerve-blocks-and-rfa" className={link}>
          radiofrequency ablation
        </Link>
        .
      </P>

      <H2 id="rfa">Radiofrequency ablation: test, then treat</H2>
      <P>
        For pain from the facet joints, the sequence is a diagnostic
        medial branch block, then heat to quiet those same nerves if the
        block answered yes. The{" "}
        <Link href="/treatments/nerve-blocks-and-rfa" className={link}>
          nerve blocks and radiofrequency ablation
        </Link>{" "}
        page covers that two-step logic, how long relief lasts, what the
        MINT trials found, and why NICE still considers denervation after
        a positive block.
      </P>

      <H2 id="stimulators">Stimulators: the therapy you can test-drive</H2>
      <P>
        Neuromodulation is the interventional world&rsquo;s deepest
        evidence story. The{" "}
        <Link href="/treatments/spinal-cord-stimulation" className={link}>
          spinal cord stimulation
        </Link>{" "}
        page covers the trial-first implant, who it helps, the newer
        waveforms, and the real limits.{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          Next-generation neuromodulation
        </Link>{" "}
        is where the hardware is headed.
      </P>

      <H2 id="pumps">Pumps, and the periphery</H2>
      <P>
        <Link href="/treatments/intrathecal-pumps" className={link}>
          Intrathecal pumps
        </Link>{" "}
        deliver medication into the spinal fluid, mostly for cancer pain
        that outruns pills.{" "}
        <Link href="/treatments/vertebroplasty-and-kyphoplasty" className={link}>
          Cement augmentation
        </Link>{" "}
        of painful spinal fractures has sham-controlled trials that did
        not beat a simulated procedure. A useful rule: the clinician who
        volunteers the evidence&rsquo;s limits is the one to trust with
        the needle. Joint cortisone shots are a different address, covered
        under{" "}
        <Link href="/treatments/joint-steroid-injections" className={link}>
          joint steroid injections
        </Link>
        .
      </P>

      <H2 id="window-rule">The window rule</H2>
      <WindowsFigure />
      <P>
        Here is the frame that makes the whole toolbox make sense.
        Procedures rarely erase pain permanently; they{" "}
        <strong>buy windows</strong>: weeks from an injection, months
        from an ablation, years from a stimulator. What fills the window
        decides what it was worth: the strengthening, the movement, the
        sleep repaired, the life resumed. So bring three questions to any
        procedure conversation. <em>What diagnosis is this testing or
        treating? How large and how long is the expected relief?
        And what will we do inside the window?</em> A
        clinician with crisp answers to all three is practicing
        interventional pain medicine the way it works.
      </P>

      <H2 id="specialist">Whose craft this is</H2>
      <P>
        Image-guided procedures are the signature craft of{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          fellowship-trained pain physicians
        </Link>{" "}
        – the anesthesiology-and-beyond specialty built around exactly
        this toolbox and the diagnostic thinking that aims it.{" "}
        <Link href="/find-help" className={link}>
          Finding pain care near you
        </Link>{" "}
        covers how to verify that training and what to ask at a first
        visit, including, now, the three questions above.
      </P>
    </div>
  );
}
