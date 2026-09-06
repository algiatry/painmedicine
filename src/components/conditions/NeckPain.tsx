import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

function PatternFigure() {
  const rows = [
    {
      y: 54,
      title: "Local neck pain",
      detail: "ache · stiffness · movement-sensitive",
      color: FIG.nerve,
    },
    {
      y: 126,
      title: "Nerve-root pain",
      detail: "electric arm pain · tingling · focal weakness",
      color: FIG.signal,
    },
    {
      y: 198,
      title: "Spinal cord pattern",
      detail: "clumsy hands · gait change · several limbs",
      color: FIG.caution,
    },
  ];

  return (
    <Figure caption="The location is only the start. Clinicians separate local neck pain from a nerve-root pattern in one arm and the rarer spinal-cord pattern affecting coordination, walking, or several limbs.">
      <svg
        role="img"
        aria-labelledby="neck-pattern-title neck-pattern-desc"
        viewBox="0 0 680 290"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="neck-pattern-title">Three clinical patterns of neck pain</title>
        <desc id="neck-pattern-desc">
          Three rows distinguish local mechanical neck pain, nerve-root pain
          traveling into one arm, and warning signs of spinal cord involvement.
        </desc>
        {rows.map((row) => (
          <g key={row.title}>
            <rect
              x="38"
              y={row.y}
              width="604"
              height="54"
              rx="12"
              fill={FIG.ground}
              stroke={FIG.line}
            />
            <circle cx="70" cy={row.y + 27} r="9" fill={row.color} />
            <text x="98" y={row.y + 23} fontSize="16" fontWeight="700" fill={FIG.ink}>
              {row.title}
            </text>
            <text x="98" y={row.y + 42} fontSize="13" fill={FIG.textMid}>
              {row.detail}
            </text>
          </g>
        ))}
        <text x="38" y="30" fontSize="13" fontWeight="700" fill={FIG.textMid}>
          COMMON
        </text>
        <text x="642" y="270" textAnchor="end" fontSize="13" fontWeight="700" fill={FIG.cautionText}>
          NEEDS PROMPT ASSESSMENT
        </text>
      </svg>
    </Figure>
  );
}

export default function NeckPain() {
  return (
    <div>
      <P>
        Seven small vertebrae hold up the head while allowing it to turn, tip,
        and bend. Between them sit discs; behind them are paired joints; around
        them are muscles and ligaments; through them pass the spinal cord and
        the nerve roots serving the arms. That crowded anatomy explains both
        why neck pain is common and why the first useful question is not
        &ldquo;which bone is damaged?&rdquo; but &ldquo;which clinical pattern is
        this?&rdquo;
      </P>

      <H2 id="patterns">Three patterns hidden inside one phrase</H2>
      <PatternFigure />
      <P>
        <strong>Local or non-specific neck pain</strong> is the everyday pattern:
        aching, stiffness, and pain changed by movement, often spreading into
        the shoulder blade or back of the head. Several tissues may contribute,
        but examination and imaging usually cannot name one guilty structure
        with confidence. Non-specific does not mean imagined. It means the pain
        is real while the anatomical label remains less certain than the
        symptom.
      </P>
      <P>
        <strong>Cervical radiculopathy</strong> is different. A nerve root is
        irritated or compressed, usually by a disc or age-related narrowing,
        and the loudest symptom often travels into one arm. Burning or electric
        pain, tingling, numbness, altered reflexes, or weakness form a pattern a
        clinician can test. Rarer but more urgent is <strong>myelopathy</strong>:
        pressure on the spinal cord itself. Clumsy hands, dropping objects,
        difficulty with buttons, an unsteady or stiff-legged walk, or symptoms
        in more than one limb deserve prompt assessment.
      </P>

      <H2 id="posture">Your posture is not a diagnosis</H2>
      <P>
        Looking down at a screen can provoke symptoms, just as any position held
        long enough can. But &ldquo;text neck&rdquo; turns a modifiable exposure into
        a story of structural ruin. There is no single correct posture that
        guarantees a pain-free neck, and a photograph of head position cannot
        explain the whole condition. A more useful rule is variability: change
        position, take movement breaks, arrange repeated tasks so they demand
        less strain, and build the strength and tolerance to do what matters.
      </P>
      <P>
        Persistent pain also changes the system receiving signals from the neck.
        Sleep disruption, fear of movement, stress, and repeated flare-ups can
        raise sensitivity without making the pain less physical or less real.
        That is why long-lasting neck pain may become a{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          mixed-mechanism pain
        </Link>{" "}
        rather than a simple worn-part problem.
      </P>

      <H2 id="imaging">What an X-ray or MRI can — and cannot — settle</H2>
      <P>
        A scan answers a clinical question; it does not automatically discover
        the cause of pain. Age-related disc and joint changes are common, so
        words such as degeneration, narrowing, and bulge must be matched to the
        examination rather than treated as a verdict. The American College of
        Radiology notes that plain films may be appropriate in some persistent
        cases, while MRI is usually more useful for new or increasing
        radiculopathy because it shows nerve roots and soft tissue.
      </P>
      <P>
        Imaging becomes more important after significant trauma, with
        progressive neurological loss, or when infection, cancer, inflammatory
        disease, or spinal cord compression is suspected. Without those clues,
        a scan may add alarming nouns without changing the early plan. Your
        clinician can decide whether an image would answer a question that
        matters now.
      </P>

      <H2 id="red-flags">When neck pain needs urgent care</H2>
      <P>
        Seek emergency care after major trauma, or when neck pain arrives with
        signs of a possible stroke or arterial emergency: sudden one-sided
        weakness or numbness, facial droop, trouble speaking, severe new
        imbalance, loss of consciousness, or a sudden severe unfamiliar
        headache. These symptoms should not be watched at home.
      </P>
      <P>
        Prompt assessment is also warranted for new clumsy hands, trouble
        walking, weakness affecting several limbs, or loss of bladder or bowel
        control — a possible spinal-cord pattern. Fever, recent serious
        infection, immune suppression, a history of cancer, unexplained weight
        loss, or steadily worsening pain at night also change the picture.
        Red flags are not diagnoses by themselves: a 2024 review found poor
        agreement among guidelines and weak evidence for many individual flags.
        They work as reasons for a clinician to investigate the whole pattern,
        not as a checklist for self-diagnosis.
      </P>

      <H2 id="treatment">How neck pain is treated today</H2>
      <P>
        Across clinical guidelines, the center of care is active rather than
        passive: a clear explanation, reassurance when serious disease has been
        excluded, staying engaged with ordinary activity, and exercise-based
        rehabilitation. Physical therapy can restore comfortable motion and
        progressively build the neck, shoulder, and upper-back capacity that
        work and daily life demand. Manual therapy may help some people,
        especially when paired with exercise, but repeated short-lived relief
        is not the same as regained function.
      </P>
      <P>
        Medication may provide short-term symptom relief for selected people;
        which class is safe depends on health history and belongs in a
        conversation with a clinician. Psychological or multidisciplinary pain
        care can help when sleep, fear, distress, and sensitization are keeping
        disability high — not because the pain is imaginary, but because these
        are real parts of the pain system. The broader{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical and behavioral treatment map
        </Link>{" "}
        explains how these pieces fit together.
      </P>
      <P>
        Procedures and surgery have narrower jobs. An injection may be discussed
        for selected, confirmed nerve-root pain; surgery becomes a more direct
        conversation when spinal-cord compression or progressive weakness is
        present, or when disabling radiculopathy persists despite well-run
        non-surgical care. Neither is a routine answer to an aching neck. The
        goal is to match the tool to the mechanism, not escalate simply because
        pain has lasted.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        The most credible future is not one universal neck-pain procedure. It is
        better matching: identifying who has a tissue-dominant, nerve-root, or
        sensitization-heavy pattern; tracking function rather than scan language
        alone; and using more adaptive{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          neuromodulation
        </Link>{" "}
        for carefully selected nerve-related pain. The{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pain-treatment pipeline
        </Link>{" "}
        follows the non-opioid drugs and devices moving through trials.
      </P>

      <H2 id="specialist">When to see a pain specialist</H2>
      <P>
        See a clinician sooner for arm weakness, persistent numbness, severe
        radiating arm pain, trauma, or any warning signs above. When neck pain
        remains substantially limiting after a well-run course of first-line
        care, a{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain physician
        </Link>{" "}
        can revisit the diagnosis, separate nerve-root or joint-mediated pain
        from a broader persistent-pain pattern, and coordinate rehabilitation,
        medication, and appropriately selected procedures. The aim is not a
        more dramatic label. It is a plan that fits the pattern you actually
        have.
      </P>
    </div>
  );
}
