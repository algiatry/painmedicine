import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

function PathwayFigure() {
  return (
    <Figure caption="During a migraine attack the trigeminal nerve releases CGRP onto the brain's pain-sensitive coverings. Antibodies grab the peptide itself (or, in erenumab's case, its receptor). Gepants are small tablets that sit on the receptor. Same pathway, two molecular sizes.">
      <svg
        role="img"
        aria-labelledby="cgrp-path-title cgrp-path-desc"
        viewBox="0 0 700 320"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="cgrp-path-title">How CGRP drugs interrupt a migraine attack</title>
        <desc id="cgrp-path-desc">
          A trigeminal nerve on the left releases CGRP onto the meninges. Two
          blockers sit on the right: a Y-shaped antibody capturing the peptide,
          and a small gepant tablet occupying the receptor.
        </desc>
        <rect
          x="20"
          y="28"
          width="300"
          height="264"
          rx="14"
          fill={FIG.nerveGround}
          stroke={FIG.nerve}
          strokeOpacity="0.4"
        />
        <text
          x="170"
          y="56"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          The attack
        </text>
        <path
          d="M70 90 C 90 140, 90 190, 70 250"
          fill="none"
          stroke={FIG.nerveDark}
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="70" cy="82" r="14" fill={FIG.nerveDark} />
        <text x="108" y="88" fontSize="12" fill={FIG.textMid}>
          trigeminal nerve
        </text>
        <rect
          x="168"
          y="118"
          width="118"
          height="88"
          rx="10"
          fill={FIG.signalTint}
          stroke={FIG.signal}
        />
        <text
          x="227"
          y="150"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill={FIG.signalTextDark}
        >
          CGRP
        </text>
        <text
          x="227"
          y="170"
          textAnchor="middle"
          fontSize="11"
          fill={FIG.signalText}
        >
          peptide released
        </text>
        <text
          x="227"
          y="186"
          textAnchor="middle"
          fontSize="11"
          fill={FIG.signalText}
        >
          onto the meninges
        </text>
        <circle cx="154" cy="150" r="5" fill={FIG.signal} />
        <circle cx="148" cy="168" r="4" fill={FIG.signal} />
        <circle cx="158" cy="184" r="4.5" fill={FIG.signal} />

        <defs>
          <marker
            id="cgrp-arrow"
            markerWidth="9"
            markerHeight="9"
            refX="7"
            refY="4.5"
            orient="auto"
          >
            <path d="M0 0 L 9 4.5 L 0 9 z" fill={FIG.faint} />
          </marker>
        </defs>
        <path
          d="M330 160 H 378"
          fill="none"
          stroke={FIG.faint}
          strokeWidth="2"
          markerEnd="url(#cgrp-arrow)"
        />

        <rect
          x="390"
          y="28"
          width="290"
          height="124"
          rx="14"
          fill={FIG.nerveGround}
          stroke={FIG.nerveDark}
          strokeOpacity="0.45"
        />
        <text
          x="535"
          y="56"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          Antibody
        </text>
        <path
          d="M470 108 L 500 78 L 530 108"
          fill="none"
          stroke={FIG.nerveDark}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="548" cy="92" r="10" fill={FIG.signal} />
        <text
          x="535"
          y="136"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          grabs CGRP or its receptor
        </text>

        <rect
          x="390"
          y="168"
          width="290"
          height="124"
          rx="14"
          fill={FIG.signalGround}
          stroke={FIG.signal}
          strokeOpacity="0.5"
        />
        <text
          x="535"
          y="196"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          Gepant
        </text>
        <rect
          x="508"
          y="214"
          width="54"
          height="28"
          rx="8"
          fill={FIG.signal}
        />
        <text
          x="535"
          y="264"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          small tablet on the receptor
        </text>
      </svg>
    </Figure>
  );
}

function MapFigure() {
  const cell = (
    x: number,
    y: number,
    w: number,
    title: string,
    lines: string[],
    ground: string,
    edge: string,
  ) => (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height="118"
        rx="12"
        fill={ground}
        stroke={edge}
        strokeOpacity="0.5"
      />
      <text
        x={x + w / 2}
        y={y + 28}
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
          x={x + w / 2}
          y={y + 52 + i * 18}
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
    <Figure caption="Three jobs, not one ladder. Acute drugs stop an attack that has started. Preventives lower how often attacks arrive. A few gepants can do both. Botox sits only in the chronic-migraine column.">
      <svg
        role="img"
        aria-labelledby="cgrp-map-title cgrp-map-desc"
        viewBox="0 0 700 168"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="cgrp-map-title">Acute, preventive, and dual headache drugs</title>
        <desc id="cgrp-map-desc">
          Three panels: acute treatments including triptans, gepants, and
          lasmiditan; preventive CGRP antibodies, atogepant, and Botox for
          chronic migraine; and rimegepant, which can treat an attack and
          prevent the next ones.
        </desc>
        {cell(
          16,
          16,
          216,
          "Acute",
          ["triptans, NSAIDs", "ubrogepant, zavegepant", "lasmiditan"],
          FIG.signalGround,
          FIG.signal,
        )}
        {cell(
          242,
          16,
          216,
          "Preventive",
          ["CGRP antibodies", "atogepant", "Botox if chronic"],
          FIG.nerveGround,
          FIG.nerveDark,
        )}
        {cell(
          468,
          16,
          216,
          "Both",
          ["rimegepant", "treat an attack", "or prevent the next"],
          FIG.paper,
          FIG.faint,
        )}
      </svg>
    </Figure>
  );
}

export default function CgrpAndHeadacheTreatments() {
  return (
    <div>
      <P>
        Headache medicine spent decades borrowing blood-pressure pills,
        seizure drugs, and antidepressants, then asking them to prevent
        migraine on the side. That still works for some people. What changed
        in 2018 is that the field finally got drugs built from migraine&rsquo;s
        own biology: the peptide CGRP, released by the trigeminal nerve
        onto the brain&rsquo;s pain-sensitive coverings. Blocking it does not
        make migraine vanish. It cuts how often attacks arrive, and for a
        large minority it cuts them a lot.
      </P>

      <KeyTakeaways
        items={[
          <>
            <strong>CGRP</strong> is the peptide a migraine attack runs on.
            Antibodies and gepants were designed to block it.
          </>,
          <>
            Antibodies are{" "}
            <strong>prevention</strong> (monthly or quarterly). Gepants are
            tablets: some treat an attack, some prevent, rimegepant can do
            both.
          </>,
          <>
            <strong>Triptans</strong> still treat attacks. They narrow blood
            vessels; gepants and the antibodies do not.
          </>,
          <>
            The usual trial win is about{" "}
            <strong>half of people getting half as many days</strong>, not
            zero days. That is a real change in a life. It is not a
            disappearing act.
          </>,
        ]}
      />

      <H2 id="cgrp">What CGRP is, and why it was worth targeting</H2>
      <PathwayFigure />
      <P>
        Calcitonin gene-related peptide is not a metaphor. During an attack
        the trigeminal nerve, the head&rsquo;s main sensory nerve, dumps CGRP
        onto the meninges. The peptide inflames those coverings and drives
        the throbbing pain. Infusing CGRP into someone who gets migraine can
        provoke an attack; blocking it can prevent one. That is a tighter
        causal chain than most of pain medicine ever gets.
      </P>
      <P>
        Erenumab (Aimovig), approved in May 2018, was the first antibody
        designed for this pathway, and the first approved antibody against
        a G-protein-coupled receptor. Three more antibodies followed, aimed
        at the peptide itself rather than the receptor: fremanezumab
        (Ajovy), galcanezumab (Emgality), and eptinezumab (Vyepti). Then
        came the gepants, small-molecule receptor blockers you swallow or
        take as a dissolving tablet or a nasal spray: ubrogepant (Ubrelvy),
        rimegepant (Nurtec ODT), atogepant (Qulipta), and zavegepant
        (Zavzpret). The{" "}
        <Link href="/conditions/migraine" className={link}>
          migraine
        </Link>{" "}
        page covers the disease. This page covers the drugs.
      </P>

      <H2 id="map">Acute, preventive, or both</H2>
      <MapFigure />
      <P>
        The antibodies are preventives. They are given as a monthly
        self-injection, a quarterly injection, or, for eptinezumab, an
        intravenous infusion every three months. They do not abort an
        attack that has already started. Gepants split. Ubrogepant and
        zavegepant are labeled to treat an attack. Atogepant is labeled to
        prevent. Rimegepant is labeled for both: treat an attack, or take
        it on a regular schedule to prevent the next ones. That dual job is
        unusual and is why rimegepant shows up in both columns.
      </P>
      <P>
        In 2024 the American Headache Society said CGRP-targeting
        preventives (the four antibodies, plus rimegepant and atogepant)
        should be considered a first-line option, without a requirement to
        fail older drugs first. A 2026 joint AAN/AHS guideline put those
        same migraine-specific preventives in the top evidence tier and
        said prevention should be offered when migraine is costing four or
        more days a month, or interfering with work and daily tasks. What
        often still stands in the way is prior authorization, not the
        evidence.
      </P>

      <H2 id="numbers">What the numbers show</H2>
      <P>
        Read the numbers before the adjectives. In STRIVE, the large
        randomized trial of erenumab for episodic migraine, people started
        with about 8 migraine days a month. By months four through six,
        the higher dose cut that by 3.7 days, versus 1.8 days on placebo.
        Half of people on that dose got at least a 50% reduction; a
        quarter of people on placebo did too. The drug-minus-placebo gap
        is real, and smaller than a brochure implies. Migraine trials have
        a large placebo response. That is why the comparison arm matters.
      </P>
      <P>
        Across the antibody class the pattern repeats: fewer monthly
        migraine days, fewer days reaching for an acute drug, and
        discontinuation rates much lower than the older daily pills, because
        the side-effect load is lighter. Nobody in these trials was
        promised a blank calendar. The endpoint the field uses is a 50%
        drop in days. If someone tells you CGRP drugs &ldquo;stop
        migraine,&rdquo; they are selling past the data.
      </P>

      <H2 id="triptans">Triptans, gepants, and the heart</H2>
      <P>
        Triptans, from the 1990s, remain the workhorse for an attack
        already underway. They are serotonin 1B/1D agonists, and they
        narrow cranial blood vessels. That is why they are avoided in
        people with coronary disease, prior stroke, or uncontrolled high
        blood pressure. Gepants and the CGRP antibodies do not constrict
        vessels, which is the point of the newer acute options for people
        who cannot take a triptan. Lasmiditan (Reyvow) is a third acute
        path: a &ldquo;ditan&rdquo; that hits a different serotonin
        receptor (1F) and also skips vasoconstriction, at the cost of
        dizziness and a warning not to drive after a dose.
      </P>
      <P>
        &ldquo;Does not constrict vessels&rdquo; is not the same as
        &ldquo;proven safe in high-risk hearts.&rdquo; The antibody trials
        excluded recent cardiovascular events. Erenumab&rsquo;s label now
        carries a hypertension warning; new or worsening high blood
        pressure has been reported after it reached the market. Constipation
        is more common with erenumab than with the ligand antibodies,
        because CGRP also lives in the gut. Hypersensitivity reactions
        occur. Pregnancy data are thin, so these drugs are generally not
        started if someone is pregnant or trying to be. None of this is a
        reason to avoid the class. It is a reason to treat the class as
        medicine, not as a vitamin.
      </P>

      <H2 id="botox">Botox is a real migraine treatment</H2>
      <P>
        For chronic migraine (headache on 15 or more days a month),
        onabotulinumtoxinA is not a cosmetic aside. The PREEMPT program
        pooled two large randomized trials and found fewer headache days
        with injections every twelve weeks than with placebo. It is not
        labeled for ordinary episodic migraine. The protocol is a map of
        injection sites across the head and neck, repeated on a schedule,
        in a clinic that does this often. Whether it fits is a specialist
        call, not a spa-menu item.
      </P>

      <H2 id="cluster">Cluster headache is a different drug</H2>
      <P>
        Among the CGRP antibodies, only galcanezumab has an FDA indication
        for episodic{" "}
        <Link href="/conditions/tension-and-cluster-headache" className={link}>
          cluster headache
        </Link>
        . A randomized trial led by Goadsby showed fewer weekly attacks
        during a cluster bout. It is not approved for chronic cluster, and
        the other CGRP antibodies do not carry a cluster indication.
        Cluster care still leans on high-flow oxygen and injected triptan
        for an attack, with verapamil and a short steroid course as the
        older preventive backbone. Do not import a migraine antibody
        playbook wholesale.
      </P>

      <H2 id="overuse">The overuse trap is still the overuse trap</H2>
      <P>
        Using acute painkillers or triptans on too many days a month, for
        months, can turn episodic migraine into a near-daily headache that
        the same medicines no longer help. That is medication-overuse
        headache, and it is one of the most important facts in this field.
        CGRP antibodies are preventives given monthly or quarterly, so they
        are not in that trap. Whether frequent gepant use can do the same
        thing is still being watched. Counting days of acute treatment
        still matters. A preventive is how most people get those days back
        down. Simple painkillers still have a place for milder attacks;
        the{" "}
        <Link href="/treatments/medication-organ-safety" className={link}>
          organ-safety
        </Link>{" "}
        page covers what frequent acetaminophen and anti-inflammatories ask
        of the liver, kidneys, heart, and gut.
      </P>

      <H2 id="fit">How this sits with everything else</H2>
      <P>
        Older preventives (beta blockers, topiramate, amitriptyline,
        candesartan) did not become wrong in 2018. They remain useful,
        cheap, and sometimes the right tool when a second condition (high
        blood pressure, epilepsy, depression) can be treated with the same
        pill. The{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications
        </Link>{" "}
        map is the wider landscape; CGRP is the migraine-specific corner of
        it. The{" "}
        <Link href="/future-of-pain-medicine/biologics-and-gene-therapy" className={link}>
          biologics
        </Link>{" "}
        page is the longer arc: CGRP as proof that a single-molecule block
        can prevent pain, and the PACAP antibodies now in trials for people
        the CGRP drugs miss.
      </P>
      <P>
        Questions worth bringing to a clinician: how many migraine days a
        month, what you already take for an attack, whether a triptan is
        unsafe for your heart, whether prevention has ever been offered,
        and whether the day-count is already in overuse territory. A{" "}
        <Link href="/find-help" className={link}>
          fellowship-trained pain or headache specialist
        </Link>{" "}
        can work those out. The drugs are designed for this disease. The
        plan still has to be designed for you.
      </P>
    </div>
  );
}
