import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 dark:text-teal-300 underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2 hover:decoration-teal-600";

function TimelineFigure() {
  return (
    <Figure caption="Shingles follows one nerve, so the rash and the pain stay in one band on one side of the body. The rash usually clears within three to five weeks. Pain that is still there about three months after the rash began is called postherpetic neuralgia.">
      <svg
        role="img"
        aria-labelledby="shingles-title shingles-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="shingles-title">From shingles to postherpetic neuralgia</title>
        <desc id="shingles-desc">
          A torso with a band of pain on one side, beside a timeline: warning
          pain for one to five days, a rash that clears in three to five weeks,
          and pain lasting beyond three months, which is postherpetic neuralgia.
        </desc>

        {/* Torso with a one-sided band */}
        <g fill="none" stroke={FIG.ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="95" cy="42" r="22" />
          <path d="M55 92 Q95 70 135 92 L128 232 H62 Z" />
        </g>
        <path d="M95 138 H131 L129 166 H95 Z" fill={FIG.signal} opacity="0.9" />
        <path d="M95 84 V232" stroke={FIG.nerve} strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
        <text x="95" y="262" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.ink}>
          One nerve, one side
        </text>

        {/* Timeline */}
        <g>
          <rect x="220" y="120" width="60" height="34" rx="6" fill={FIG.signalTint} />
          <rect x="280" y="120" width="130" height="34" rx="6" fill={FIG.signalBright} />
          <rect x="410" y="120" width="110" height="34" rx="6" fill={FIG.signalTint} />
          <rect x="520" y="120" width="130" height="34" rx="6" fill={FIG.signal} />
          <path d="M520 104 V172" stroke={FIG.ink} strokeWidth="2.5" strokeDasharray="5 5" />
        </g>
        <g fontSize="13" fontWeight="700" fill={FIG.ink}>
          <text x="250" y="100" textAnchor="middle">Warning</text>
          <text x="345" y="100" textAnchor="middle">Rash</text>
          <text x="465" y="100" textAnchor="middle">Healing skin</text>
          <text x="585" y="100" textAnchor="middle">Pain persists</text>
          <text x="585" y="82" textAnchor="middle" fill={FIG.signalTextDark}>
            Postherpetic neuralgia
          </text>
        </g>
        <g fontSize="12.5" fill={FIG.text}>
          <text x="250" y="192" textAnchor="middle">1–5 days</text>
          <text x="345" y="192" textAnchor="middle">3–5 weeks</text>
          <text x="520" y="192" textAnchor="middle">about 3 months</text>
        </g>
        <text x="220" y="232" fontSize="13" fill={FIG.textMid}>
          Antiviral treatment works best within
        </text>
        <text x="220" y="250" fontSize="13" fill={FIG.textMid}>
          72 hours of the first symptoms.
        </text>
      </svg>
    </Figure>
  );
}

export default function ShinglesPain() {
  return (
    <div>
      <P>
        Shingles is the chickenpox virus waking up. After chickenpox, the
        varicella-zoster virus stays quiet inside nerve cells for decades. When
        it reactivates, it travels down a single nerve to the skin, which is
        why the rash and the pain appear in one band on one side of the body or
        face. For most people the pain fades as the skin heals. For some it
        does not, and that lasting pain has its own name:{" "}
        <strong>postherpetic neuralgia</strong>.
      </P>

      <KeyTakeaways
        items={[
          <>About <strong>one in three</strong> people in the United States will have shingles in their lifetime, and risk climbs sharply after age 50.</>,
          <>Antiviral medicine works best when started <strong>within 72 hours</strong> of the first symptoms. A rash near the eye needs same-day care.</>,
          <>Pain that lasts <strong>about three months or more</strong> after the rash began is postherpetic neuralgia – real nerve injury, not slow healing.</>,
          <>The two-dose shingles vaccine cut both shingles and postherpetic neuralgia by <strong>roughly nine-tenths</strong> in trials of adults 70 and older.</>,
        ]}
      />

      <H2 id="timeline">The course of shingles</H2>
      <TimelineFigure />
      <P>
        The first sign is often burning, tingling, or itching in one patch of
        skin, with nothing yet to see. A red rash follows between one and five
        days later and turns into fluid-filled blisters. Those crust over in a
        week to ten days, and most cases run their course in three to five
        weeks. The most common place is a band around one side of the trunk,
        but any nerve can be involved, including the nerve that serves the
        forehead and eye.
      </P>
      <P>
        The pain during the rash can be intense. Some people find that the
        lightest touch – a shirt, a breeze – sets it off. That is the nerve
        itself being inflamed, which is why shingles pain behaves like{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>
          neuropathic pain
        </Link>{" "}
        rather than like a skin wound.
      </P>

      <H2 id="early">Why the first three days matter</H2>
      <P>
        Antiviral medicines can help the blisters clear faster and limit severe
        pain during the attack, and the CDC notes that treatment is most
        effective within 72 hours of the first symptoms. That window is the
        reason to contact a clinician as soon as shingles is suspected rather
        than waiting to see how the rash develops.
      </P>
      <P>
        One honest limit is worth knowing. A Cochrane review of six randomized
        trials found that the antiviral aciclovir did not significantly reduce
        the number of people who went on to postherpetic neuralgia, although
        there was some evidence of less pain at four weeks. Early antivirals
        are still standard care for the attack itself. They are not a
        guarantee against lasting pain, and nobody who develops it should
        assume they waited too long.
      </P>

      <H2 id="phn">When the pain outlasts the rash</H2>
      <P>
        Postherpetic neuralgia is usually defined as pain that continues about
        three months or more after the rash began. It is felt in the same area
        the rash covered. People describe burning, stabbing, or electric
        jolts, and skin so sensitive that clothing hurts – a symptom called
        allodynia. The skin can look fully healed while the nerve beneath it
        is still misfiring. It belongs to the neuropathic group in{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          the three types of pain
        </Link>
        .
      </P>
      <P>
        Age is the clearest risk factor: the older a person is when shingles
        strikes, the greater the chance of lasting pain. A pooled analysis of
        19 studies also found the risk more than doubled in people who had pain
        before the rash appeared, severe pain during the attack, a severe
        rash, or shingles involving the eye. Lasting pain can wear down sleep,
        mood, and appetite. For most people it eases over time, though that
        can take months and for some it lasts longer.
      </P>

      <H2 id="treatment">How postherpetic neuralgia is treated</H2>
      <P>
        Ordinary painkillers tend to do little for nerve pain, so treatment
        draws on the neuropathic-pain toolbox described in{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications for pain
        </Link>
        . The 2025 international evidence review for neuropathic pain, which
        pooled 313 trials, gives a strong recommendation to three medicine
        groups as first choices: tricyclic antidepressants, the gabapentinoids,
        and serotonin-norepinephrine reuptake inhibitors. These are used here
        for their effect on nerve signaling, not for mood or seizures.
      </P>
      <P>
        Treatments applied to the skin come next in that review: lidocaine
        patches, capsaicin cream, and a high-strength capsaicin patch that is
        applied in a clinic. They suit postherpetic neuralgia well because the
        painful area is usually small and well defined, and because they
        largely spare the rest of the body – an advantage for older adults,
        who are the people most affected and the most prone to drowsiness and
        falls from tablets. In trials of the high-strength capsaicin patch for
        postherpetic neuralgia, about one in ten more people reported being
        much improved than with the comparison patch.
      </P>
      <P>
        That last figure is typical, and it is the honest picture of this
        field. The same review describes treatment outcomes as modest. A
        realistic goal is pain turned down far enough to sleep, dress, and get
        on with the day – often through a combination of approaches and some
        trial and adjustment – rather than a single medicine that removes it.
      </P>
      <P>
        Opioid pain medicines sit in the third line of that review, with a
        weak recommendation and low-certainty evidence, alongside botulinum
        toxin injections and non-invasive brain stimulation. If opioid use is
        becoming hard to control, confidential help is available from the
        SAMHSA National Helpline at <strong>1-800-662-HELP (4357)</strong>.
        Which option fits depends on other health conditions and other
        medicines, and that choice belongs with a clinician; this page gives
        no dosing guidance.
      </P>

      <H2 id="prevention">Prevention: the vaccine</H2>
      <P>
        The surest way to avoid postherpetic neuralgia is not to get shingles.
        The CDC recommends two doses of the recombinant shingles vaccine,
        given two to six months apart, for adults aged 50 and older, and for
        adults 19 and older whose immune systems are or will be weakened.
      </P>
      <P>
        The evidence is unusually strong. In pooled data from two large trials
        covering more than 16,000 adults aged 70 and older, the vaccine was
        91% effective against shingles and 89% effective against postherpetic
        neuralgia. Short-lived reactions were common: in the larger trial,
        79% of vaccinated participants reported an injection-site or
        whole-body reaction in the week after a dose, compared with about 30%
        given placebo. Serious adverse events occurred at similar rates in
        both groups. Whether and when to be vaccinated after an episode of
        shingles is a question for a clinician or pharmacist.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        Research is aimed at the gap the current medicines leave. Non-invasive
        brain stimulation already appears in the 2025 evidence review, though
        with low-certainty evidence, and{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          newer neuromodulation
        </Link>{" "}
        approaches are being refined. The{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pain-treatment pipeline
        </Link>{" "}
        tracks new drugs that act on pain-signaling nerves directly.
      </P>

      <H2 id="urgent">When to seek care quickly</H2>
      <P>
        Contact a clinician as soon as shingles is suspected, ideally within
        three days of the rash appearing. Seek same-day care for blisters on
        the face, and especially near or in the eye: shingles there can cause
        lasting eye damage and loss of vision. Hearing loss, weakness on one
        side of the face, confusion, or a severe headache also need prompt
        attention.
      </P>
      <P>
        Until the blisters have dried and crusted, the fluid inside them can
        pass the virus to someone who has never had chickenpox or the
        chickenpox vaccine, so the CDC advises keeping the rash covered until
        then. If pain is still
        disrupting sleep or daily life weeks after the skin has healed, a{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain specialist
        </Link>{" "}
        can help build a plan.
      </P>
    </div>
  );
}
