import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

function MechanismsFigure() {
  return (
    <Figure caption="Two different jobs, both aimed at nerve pain. Gabapentinoids quiet overexcited calcium channels on damaged nerves. Duloxetine and the tricyclics strengthen the spinal cord's own descending brakes. Neither is an ordinary painkiller, and neither is being prescribed as a comment on your mood.">
      <svg
        role="img"
        aria-labelledby="nerve-meds-title nerve-meds-desc"
        viewBox="0 0 700 250"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="nerve-meds-title">
          Two mechanisms of nerve-pain medication
        </title>
        <desc id="nerve-meds-desc">
          Left panel: a gabapentinoid calming calcium channels on an
          overexcited nerve. Right panel: an SNRI or tricyclic strengthening
          descending inhibitory pathways from the brain to the spinal cord.
        </desc>
        <rect
          x="16"
          y="16"
          width="324"
          height="218"
          rx="14"
          fill={FIG.nerveGround}
          stroke={FIG.nerve}
          strokeOpacity="0.45"
        />
        <text
          x="178"
          y="44"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          Gabapentinoids
        </text>
        <path
          d="M48 90 C 90 70, 130 130, 178 110 S 250 70, 300 100"
          fill="none"
          stroke={FIG.signal}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M48 130 C 90 150, 130 90, 178 120 S 250 170, 300 140"
          fill="none"
          stroke={FIG.nerveDark}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="178" cy="118" r="10" fill={FIG.white} stroke={FIG.nerveDark} strokeWidth="2.5" />
        <text
          x="178"
          y="188"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          calm overexcited calcium channels
        </text>
        <text
          x="178"
          y="208"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          gabapentin · pregabalin
        </text>

        <rect
          x="360"
          y="16"
          width="324"
          height="218"
          rx="14"
          fill={FIG.signalGround}
          stroke={FIG.signal}
          strokeOpacity="0.45"
        />
        <text
          x="522"
          y="44"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          SNRIs and tricyclics
        </text>
        <circle cx="522" cy="78" r="16" fill="none" stroke={FIG.nerveDark} strokeWidth="2.5" />
        <path
          d="M522 94 V 148"
          fill="none"
          stroke={FIG.nerveDark}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M522 148 C 490 168, 470 178, 452 186"
          fill="none"
          stroke={FIG.nerve}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M522 148 C 554 168, 574 178, 592 186"
          fill="none"
          stroke={FIG.nerve}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text
          x="522"
          y="208"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          strengthen the descending brakes
        </text>
        <text
          x="522"
          y="226"
          textAnchor="middle"
          fontSize="11"
          fill={FIG.muted}
        >
          duloxetine · amitriptyline · nortriptyline
        </text>
      </svg>
    </Figure>
  );
}

function FitFigure() {
  const panel = (
    x: number,
    title: string,
    lines: string[],
    ground: string,
    edge: string,
  ) => (
    <g>
      <rect
        x={x}
        y={16}
        width="216"
        height="132"
        rx="12"
        fill={ground}
        stroke={edge}
        strokeOpacity="0.5"
      />
      <text
        x={x + 108}
        y={44}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={FIG.ink}
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + 108}
          y={70 + i * 18}
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          {line}
        </text>
      ))}
    </g>
  );
  return (
    <Figure caption="The evidence is condition-specific. Diabetic nerve pain and post-shingles pain are the home turf. Pregabalin did not beat placebo for sciatica. NICE tells clinicians not to start gabapentinoids for chronic primary pain.">
      <svg
        role="img"
        aria-labelledby="nerve-fit-title nerve-fit-desc"
        viewBox="0 0 700 164"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="nerve-fit-title">Where these drugs help, and where they do not</title>
        <desc id="nerve-fit-desc">
          Three panels: evidence holds for diabetic neuropathy and post-shingles
          pain; mixed or modest for fibromyalgia; does not hold for sciatica or
          as a first start for chronic primary pain.
        </desc>
        {panel(
          16,
          "Holds",
          ["diabetic nerve pain", "post-shingles pain", "NICE first-line four"],
          FIG.nerveGround,
          FIG.nerveDark,
        )}
        {panel(
          242,
          "Modest",
          ["fibromyalgia (duloxetine)", "other nerve pain", "switch class if not"],
          FIG.signalGround,
          FIG.signal,
        )}
        {panel(
          468,
          "Does not",
          ["sciatica (pregabalin RCT)", "chronic primary pain", "as a general pill"],
          FIG.paper,
          FIG.faint,
        )}
      </svg>
    </Figure>
  );
}

export default function AntidepressantsAndAnticonvulsants() {
  return (
    <div>
      <P>
        Two of the most-used pain prescriptions in the country are not
        painkillers in the everyday sense. Gabapentin and pregabalin began
        as seizure drugs. Duloxetine and amitriptyline began as
        antidepressants. They are offered for pain because they act on the
        nervous system&rsquo;s own volume knobs, not because anyone has decided
        the pain is imaginary. The names cause more confusion than any
        other class on the{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications map
        </Link>
        .
      </P>

      <KeyTakeaways
        items={[
          <>
            The label is the <strong>first job, not the diagnosis</strong>.
            These drugs treat pain through nerve and spinal-cord mechanisms
            that do not require depression or epilepsy.
          </>,
          <>
            <strong>Gabapentinoids</strong> quiet overexcited nerve
            signaling. <strong>SNRIs and tricyclics</strong> strengthen the
            descending brakes. Different tools, same general territory.
          </>,
          <>
            International guidelines rank them{" "}
            <strong>first-line for neuropathic pain</strong>. They are not
            a general-purpose painkiller, and a large sciatica trial of
            pregabalin found no benefit over placebo.
          </>,
          <>
            The usual win is modest: about{" "}
            <strong>one in six to eight people</strong> get a substantial
            drop in pain they would not have gotten on placebo. Switching
            class is the guideline move when one drug fails.
          </>,
        ]}
      />

      <H2 id="names">Why the names throw people</H2>
      <P>
        A prescription for Cymbalta (duloxetine), Neurontin (gabapentin),
        or Lyrica (pregabalin) after a visit for burning feet or
        post-shingles pain is mechanism-matching. Duloxetine and the older
        tricyclics (amitriptyline, nortriptyline) boost serotonin and
        norepinephrine in the descending pathways the spinal cord uses to
        dampen pain traffic. Gabapentin and pregabalin bind the
        alpha-2-delta subunit of voltage-gated calcium channels on
        overexcited neurons and turn that signaling down. Both effects are
        independent of mood. The timelines and the reasons for the
        prescription differ from psychiatric or epilepsy care, even when
        the tablet is the same.
      </P>
      <MechanismsFigure />

      <H2 id="where">Where the evidence holds, and where it does not</H2>
      <FitFigure />
      <P>
        For{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>
          neuropathic pain
        </Link>{" "}
        other than trigeminal neuralgia, NICE offers a choice of
        amitriptyline, duloxetine, gabapentin, or pregabalin as initial
        treatment, and says to switch among the remaining three if the
        first is not effective or not tolerated. The NeuPSIG evidence
        review reached the same families as first-line, ahead of ordinary
        painkillers, which do little when the tissue is fine and the nerve
        is misfiring.{" "}
        <Link href="/conditions/diabetic-neuropathy" className={link}>
          Painful diabetic neuropathy
        </Link>{" "}
        and post-shingles pain are the conditions the gabapentinoid trials
        were built on. Duloxetine is the antidepressant with the most
        reliable pain evidence across chronic-pain trials; a 2023 Cochrane
        network meta-analysis found a small-to-moderate effect at the
        standard dose used in those studies, and no extra pain benefit from
        going higher.
      </P>
      <P>
        That is not a blank check for every painful condition. In the
        PRECISE trial, pregabalin did not reduce leg pain from{" "}
        <Link href="/conditions/sciatica" className={link}>
          sciatica
        </Link>{" "}
        compared with placebo over eight weeks, and it caused more
        dizziness. NICE&rsquo;s chronic-pain guideline tells clinicians not
        to start gabapentinoids for chronic primary pain (the nociplastic
        pattern that includes much of{" "}
        <Link href="/conditions/fibromyalgia" className={link}>
          fibromyalgia
        </Link>
        ), because the evidence is not there. Duloxetine still has a
        fibromyalgia label in the United States. The two facts can sit
        together: a drug can help a minority of people with a named
        condition and still be the wrong default for &ldquo;chronic pain&rdquo;
        as a lump.{" "}
        <Link href="/conditions/trigeminal-neuralgia" className={link}>
          Trigeminal neuralgia
        </Link>{" "}
        is its own exception: carbamazepine is the first anticonvulsant
        there, not gabapentin.
      </P>

      <H2 id="numbers">What first-line means in the numbers</H2>
      <P>
        First-line is a ranking of options, not a promise. Across the
        NeuPSIG meta-analysis, the number of people you need to treat for
        one extra person to get a 50% drop in pain sits around six to
        eight for gabapentinoids, SNRIs, and tricyclics. Many people get
        little or no benefit. Many stop because of dizziness, sleepiness,
        fog, swelling, or weight gain. That is why the guidelines say
        switch class rather than stack dose after dose on a drug that is
        not working. A realistic win is fewer burning hours and better
        sleep, not a silent nervous system.
      </P>

      <H2 id="risks">The risks that do not show up on the bottle</H2>
      <P>
        Common effects are sedation, dizziness, unsteadiness, and, with
        gabapentinoids, swelling and weight gain. Tricyclics add dry mouth,
        constipation, and caution in older adults because of confusion and
        heart-rhythm effects. Duloxetine can raise blood pressure and
        should not be stopped abruptly. None of these drugs is a vitamin.
        Stopping gabapentinoids or antidepressants suddenly can produce
        withdrawal; a planned taper with the prescriber is the way off.
      </P>
      <P>
        The less-advertised risk is breathing. In 2019 the FDA warned that
        gabapentin and pregabalin can cause serious respiratory depression,
        especially when taken with opioid pain medicines or other sedating
        drugs, in people with lung disease, and in older adults. That
        warning exists because gabapentinoids were widely treated as the
        safe swap during the opioid-prescribing shift, and they are not
        inert. If opioid or other substance use has become hard to
        control, the SAMHSA National Helpline is free, confidential, and
        open around the clock at{" "}
        <strong>1-800-662-4357</strong>. Pregabalin is a U.S. Schedule V
        controlled substance; gabapentin is scheduled in many states. The
        UK reclassified both as controlled drugs in 2019. Misuse is real
        and rising. That does not make a carefully chosen course for nerve
        pain a bad idea. It makes the &ldquo;harmless alternative&rdquo;
        story a bad one.
      </P>

      <H2 id="fit">How this sits with everything else</H2>
      <P>
        These drugs are one corner of the{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications
        </Link>{" "}
        landscape, not a replacement for movement, sleep, or the
        condition-specific plan. For nerve pain that has not responded,{" "}
        <Link href="/treatments/spinal-cord-stimulation" className={link}>
          spinal cord stimulation
        </Link>{" "}
        has randomized-trial evidence in diabetic neuropathy. Lidocaine and
        capsaicin on the skin matter when the pain is in one findable
        patch.
      </P>
      <P>
        Questions worth bringing: is the pain nerve-type, or is this being
        used as a general pain pill? Has a first drug been given a fair
        trial, and has a switch of class been offered? Are sedating drugs
        already in the mix? A{" "}
        <Link href="/find-help" className={link}>
          fellowship-trained pain specialist
        </Link>{" "}
        can sort those. The names are confusing. The mechanisms are not.
      </P>
    </div>
  );
}
