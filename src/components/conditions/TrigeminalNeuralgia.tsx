import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import { HeadProfile } from "../anatomy/HeadProfile";

const link =
  "text-teal-700 dark:text-teal-300 underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2 hover:decoration-teal-600";

function BranchesFigure() {
  return (
    <Figure caption="The trigeminal nerve carries feeling from the face through three branches. Trigeminal neuralgia most often strikes the middle and lower branches – the cheek, teeth, gums, and jaw – on one side.">
      <svg
        role="img"
        aria-labelledby="tn-title tn-desc"
        viewBox="0 0 680 320"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="tn-title">The three branches of the trigeminal nerve</title>
        <desc id="tn-desc">
          A head in profile. A nerve fans forward from a point near the ear
          into three branches: an upper branch to the forehead, a middle
          branch to the cheek, and a lower branch to the jaw. Pain markers sit
          on the cheek and jaw, the areas most often affected.
        </desc>

        <g transform="translate(36 16)">
          <HeadProfile marks={[{ at: "sinus", size: "md" }, { at: "jaw", size: "md" }]}>
            <circle cx="150" cy="138" r="7" fill={FIG.nerveTint} stroke={FIG.nerveDark} strokeWidth="2" />
            <g fill="none" stroke={FIG.nerve} strokeWidth="3" strokeLinecap="round">
              <path d="M150 138 C132 110 108 80 86 66" />
              <path d="M150 138 C126 134 100 134 78 134" />
              <path d="M150 138 C136 156 122 166 106 170" />
            </g>
          </HeadProfile>
        </g>

        <g fontSize="15" fontWeight="700" fill={FIG.ink}>
          <text x="340" y="78">Upper branch</text>
          <text x="340" y="158">Middle branch</text>
          <text x="340" y="238">Lower branch</text>
        </g>
        <g fontSize="13" fill={FIG.textMid}>
          <text x="340" y="98">Forehead, scalp, and eye area</text>
          <text x="340" y="178">Cheek, upper teeth and gums, side of the nose</text>
          <text x="340" y="258">Lower jaw, lower teeth and gums, bottom lip</text>
        </g>
        <g fontSize="12.5" fontWeight="700" fill={FIG.signalTextDark}>
          <text x="340" y="198">Most often affected</text>
          <text x="340" y="278">Most often affected</text>
        </g>
      </svg>
    </Figure>
  );
}

export default function TrigeminalNeuralgia() {
  return (
    <div>
      <P>
        Trigeminal neuralgia causes sudden attacks of severe pain on one side
        of the face. People describe an electric shock or a stab. Each attack
        usually lasts a few seconds, occasionally up to two minutes, and
        attacks can repeat many times a day. What sets it apart is the
        trigger: things that should not hurt at all, such as brushing teeth,
        shaving, eating, talking, or a breeze across the cheek.
      </P>

      <KeyTakeaways
        items={[
          <>The pain is <strong>brief, shock-like, and one-sided</strong>, and it is set off by light touch or ordinary movements of the face.</>,
          <>In the most common form, a <strong>blood vessel presses on the nerve root</strong> near the brainstem. About 15% of cases are caused by another condition.</>,
          <>Ordinary painkillers rarely help. The first-choice medicines are <strong>carbamazepine or oxcarbazepine</strong>, which quiet the misfiring nerve.</>,
          <>When medicine fails or cannot be tolerated, <strong>surgery is a standard option</strong>, not a last resort.</>,
        ]}
      />

      <H2 id="nerve">The nerve behind the pain</H2>
      <BranchesFigure />
      <P>
        The trigeminal nerves are a pair of nerves, one on each side, that
        carry feeling from the face to the brain. Each has three branches,
        serving the upper, middle, and lower face. Trigeminal neuralgia most
        often affects the middle or lower branch, so the pain is commonly felt
        in the cheek, teeth, gums, or jaw, and it can be mistaken for a dental
        problem. It rarely strikes during sleep.
      </P>
      <P>
        The condition is most common after age 50 and affects women more often
        than men, though it can begin at any age. Attacks typically come in
        runs, stop for a time, and then return. In some people the attacks
        grow longer or more frequent over the years, and a dull ache or
        burning may linger between them.
      </P>

      <H2 id="causes">Why it happens</H2>
      <P>
        In the most common form, called classic trigeminal neuralgia, a blood
        vessel presses on the nerve root where it enters the brainstem. The
        leading explanation is that this wears away the nerve&rsquo;s
        insulating coat at that spot. Bare fibers can then fire on their own
        and pass signals to their neighbors, so a light touch is delivered to
        the brain as a jolt of pain. That makes it a form of{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>
          neuropathic pain
        </Link>
        : the wiring itself is the source.
      </P>
      <P>
        About 15% of cases are secondary, meaning another condition is
        damaging the nerve – multiple sclerosis or a tumor, for example.
        People with secondary trigeminal neuralgia are more likely to be
        younger and to have pain on both sides. When no cause can be found
        after a full workup, the condition is called idiopathic.
      </P>

      <H2 id="diagnosis">How it is diagnosed</H2>
      <P>
        The diagnosis comes from the story: the pattern of the attacks, their
        triggers, and a neurological examination. There is no blood test. The
        European Academy of Neurology guideline recommends an MRI for everyone
        with trigeminal neuralgia, because symptoms alone cannot rule out a
        secondary cause.
      </P>
      <P>
        The scan has a limit worth knowing. A blood vessel touching the nerve
        is a common finding, and the same guideline says it should not be used
        to confirm the diagnosis. Its value is in planning: it helps decide
        whether and when surgery to move the vessel makes sense.
      </P>

      <H2 id="medication">Medication comes first</H2>
      <P>
        Trigeminal neuralgia does not respond to the usual pain medicines.
        NINDS notes that common painkillers such as aspirin and ibuprofen, and
        opioid medicines, are not usually helpful. If opioid use is becoming
        hard to control, confidential help is available from the SAMHSA
        National Helpline at <strong>1-800-662-HELP (4357)</strong>.
      </P>
      <P>
        The medicines that work are anti-seizure drugs, used here because they
        calm overactive nerve fibers. The European guideline names
        carbamazepine or oxcarbazepine as the first choice for long-term
        treatment. Others, including lamotrigine, gabapentin, pregabalin,
        baclofen, and botulinum toxin injections, may be used alone or added
        on. They sit within the wider map in{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications for pain
        </Link>
        .
      </P>
      <P>
        Two honest caveats. First, the trial evidence is old and thin: a
        Cochrane review found carbamazepine generally relieved pain better
        than placebo, but in small studies that lasted four weeks or less.
        Long clinical experience, more than large modern trials, is what
        keeps it first. Second, side effects are common. In those trials 65%
        of people taking carbamazepine reported at least one, compared with
        27% on placebo. Tiredness and trouble with memory or thinking are the
        kind that lead people to stop. Choosing,
        adjusting, and monitoring these medicines belongs with a clinician;
        this page gives no dosing guidance.
      </P>

      <H2 id="surgery">When surgery is considered</H2>
      <P>
        The European guideline recommends that surgery be offered when
        medicine does not control the pain well enough or is poorly
        tolerated. That is a common path, because the medicines can lose
        effect as the condition progresses.
      </P>
      <P>
        <strong>Microvascular decompression</strong> is an operation behind
        the ear that moves the blood vessel away from the nerve. It is the
        most invasive option and the most effective over the long term, and
        the guideline recommends it as the first surgical choice for classic
        trigeminal neuralgia. In the largest long-term series, 1,185 people
        followed for a median of six years, 70% were free of pain without
        medication ten years after surgery. About 30% had a recurrence at some
        point. The risks were real but uncommon: 0.2% died shortly after the
        operation, and about 1% lost hearing on the operated side.
      </P>
      <P>
        The other procedures work differently: they deliberately injure part
        of the nerve to interrupt the signal. They include balloon
        compression, glycerol injection, radiofrequency lesioning, and focused
        radiation. NINDS notes that they always leave some facial numbness,
        tend to relieve pain for a few years rather than long term, and, in
        the case of radiation, may take more than a month to work. They are
        less invasive, which matters for people who cannot safely have open
        surgery. Which approach fits is a decision for a neurosurgeon and the
        person together.
      </P>

      <H2 id="living">Living with it</H2>
      <P>
        NINDS describes the pain as physically and emotionally devastating,
        and that is not an exaggeration. People stop eating properly, avoid
        washing their face, and dread the next attack. The European guideline
        recommends psychological and nursing support alongside medical and
        surgical care for that reason. Fear of the next attack is part of the
        condition, not a weakness, and it deserves treatment too. If the pain
        ever makes life feel not worth living, call or text{" "}
        <strong>988</strong> at any hour.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        The clearest need is for medicines that work as well as the current
        ones with fewer side effects, and researchers name that as a
        priority, along with genetics and{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          neuromodulation
        </Link>
        . The{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pain-treatment pipeline
        </Link>{" "}
        tracks the wider effort to build drugs that act on pain-signaling
        nerves more selectively.
      </P>

      <H2 id="specialist">When to see a specialist</H2>
      <P>
        Sudden, shock-like facial pain deserves a medical assessment rather
        than a wait-and-see approach, and a neurologist is usually the right
        first specialist. Seek prompt care if facial pain comes with numbness,
        weakness, changes in vision or hearing, or pain on both sides, since
        these can point to a secondary cause. If medicine has stopped working
        or its side effects are hard to live with, ask about a surgical
        opinion; that conversation does not have to wait until every drug has
        been tried. A{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain specialist
        </Link>{" "}
        can help when pain persists after treatment.
      </P>
    </div>
  );
}
