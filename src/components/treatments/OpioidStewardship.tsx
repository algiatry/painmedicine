import { Figure, H2, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

/**
 * /treatments/opioid-stewardship — the mind-and-brain side of pain
 * medication safety. Opioid-receptor content → SAMHSA helpline inline
 * (house rule), CDC-2022-aligned, never "how to obtain."
 */
export default function OpioidStewardship() {
  return (
    <div>
      <DependenceVsAddictionFigure />

      <H2 id="how-they-work">One system, three jobs</H2>
      <P>
        Opioids relieve pain by activating the same receptors your body&rsquo;s
        own endorphins use. But evolution assigned that receptor system three
        jobs at once: it dampens pain, it regulates <strong>breathing</strong>,
        and it marks experiences as <strong>rewarding</strong>. Every opioid
        effect — wanted and unwanted — flows from that triple assignment.
        Pain relief is the target; slowed breathing is the overdose mechanism;
        and the reward signal is why a drug prescribed for a knee can end up
        mattering to the brain far beyond the knee.
      </P>
      <P>
        This is not an argument that opioids are always wrong. For severe
        acute pain, after surgery and major injury, at the end of life, and in
        cancer care they remain essential tools. The CDC&rsquo;s 2022
        guideline is more precise than its reputation: it does not ban
        opioids — it places them late in the ladder for chronic non-cancer
        pain, after non-opioid options have had a fair trial, and it asks
        prescribers to start low, reassess often, and pair every prescription
        with safety planning. The evidence behind that placement is direct:
        in the year-long SPACE trial, opioids performed no better than
        non-opioid medications for chronic back and arthritis pain — with
        more side effects.
      </P>

      <H2 id="dependence">Dependence is physiology, not a diagnosis</H2>
      <P>
        Take opioids regularly for a few weeks and the body adapts — receptor
        systems recalibrate around the drug&rsquo;s presence. That adaptation
        is <strong>physical dependence</strong>, and it happens to essentially
        everyone on sustained therapy, the same way the body adapts to blood
        pressure medication or antidepressants. It means only one thing:
        stopping suddenly will cause withdrawal — muscle aches, sweating,
        insomnia, restlessness, diarrhea, anxiety. Unpleasant, temporary, and
        not dangerous in itself for most adults.
      </P>
      <P>
        <strong>Opioid use disorder</strong> is a different thing entirely: a
        medical condition marked by loss of control, craving, and continued
        use despite harm. Most people prescribed opioids for pain do not
        develop it. Keeping the two ideas separate matters in both directions
        — withdrawal after a taper does not mean you were addicted, and a use
        disorder, when it does develop, is a treatable illness rather than a
        character verdict. Effective treatments exist (buprenorphine,
        methadone, naltrexone, plus behavioral support), and the SAMHSA
        National Helpline — <strong>1-800-662-HELP (4357)</strong> — is a
        free, confidential, 24/7 starting point for anyone, including family
        members.
      </P>

      <H2 id="tolerance">Tolerance, and the trap at the end of it</H2>
      <P>
        Tolerance is dependence&rsquo;s cousin: over time the same dose
        produces less effect, which invites escalation. Two facts make this
        dangerous. First, tolerance to pain relief and euphoria rises{" "}
        <em>faster</em> than tolerance to respiratory depression — so the
        breathing margin quietly narrows as doses climb. Second, tolerance{" "}
        <strong>drops after a break</strong>: after detox, incarceration, or a
        successful taper, the dose a person used to handle can now stop their
        breathing. Returning to a previous dose after lost tolerance is one of
        the deadliest patterns in overdose data — and the reason the CDC
        specifically flags people coming off tapers for naloxone.
      </P>
      <P>
        There is one more twist worth knowing by name:{" "}
        <strong>opioid-induced hyperalgesia</strong>. In some people on
        long-term opioids, the exposure itself sensitizes the pain system —
        pain spreads, light touch starts to hurt, and escalating doses chase a
        target the medication is helping to move. When pain keeps rising
        despite rising doses, that pattern is not failure or faking; it is a
        recognized pharmacological phenomenon, and the evidence-based response
        is a supervised taper plus non-opioid treatments, not a bigger
        prescription.
      </P>

      <OverdoseCombinationsFigure />

      <H2 id="overdose">The combinations that kill</H2>
      <P>
        Overdose is rarely one drug. The FDA requires its most serious warning
        — a boxed warning — on opioids and benzodiazepines (alprazolam,
        lorazepam, diazepam) precisely because the combination suppresses
        breathing through converging pathways, and CDC data show most
        opioid-involved overdose deaths involve multiple substances. Alcohol,
        sleep medications, and the gabapentinoids (gabapentin, pregabalin)
        add to the same pile. If you take opioids and anything sedating —
        prescribed or not — that combination deserves to be named out loud
        with your prescriber and pharmacist, not discovered in an emergency.
      </P>
      <P>
        <strong>Naloxone</strong> (Narcan and generics) is the antidote: an
        opioid blocker that restores breathing within minutes, available
        without a prescription in all 50 states, simple enough for a friend or
        family member to use, and harmless if given to someone who turns out
        not to have opioids on board. The CDC guideline says clinicians should
        offer it when prescribing opioids — especially with sedative
        combinations, higher doses, a history of substance use disorder or
        overdose, sleep-disordered breathing, or after tolerance has dropped —
        and recommends teaching household members. If opioids live in your
        home, naloxone should too. That is not pessimism; it is the same logic
        as owning a fire extinguisher.
      </P>

      <H2 id="storage">Storage, disposal, and the medicine cabinet</H2>
      <P>
        Most diverted prescription opioids do not come from strangers — they
        come from the medicine cabinets of friends and relatives. The storage
        rules are unglamorous and real: locked or at least out of casual
        reach, away from children, teens, and visitors; original containers;
        a rough count kept. For disposal, DEA Take Back days and year-round
        drop boxes at pharmacies and police stations are the safest route;
        the FDA&rsquo;s flush list exists for the most dangerous medications
        when no take-back option is available. And the leftover principle:
        do not keep unused opioids &ldquo;just in case.&rdquo; Much of the
        crisis began in leftover supplies.
      </P>

      <H2 id="tapering">If you&rsquo;ve been on them for years</H2>
      <P>
        Long-term opioids can be tapered successfully — gradually, and with
        support. Guidelines explicitly warn against rapid or forced tapers:
        they can trigger uncontrolled pain, severe withdrawal, depression,
        and overdose when a person returns to a previous dose after losing
        tolerance. A well-run taper goes slowly enough for the nervous system
        to readapt, and it works best paired with the rest of the toolkit —
        movement-based care, non-opioid medications where they fit, and
        behavioral support for the fear that understandably comes with
        changing a long-standing plan. If stopping feels unmanageable, that is
        clinical information, not failure — and it is exactly what treatment
        exists for. SAMHSA&rsquo;s helpline is{" "}
        <strong>1-800-662-HELP (4357)</strong>, free and confidential, any
        hour. This page describes; decisions about your medications belong to
        you and your care team.
      </P>
    </div>
  );
}

function DependenceVsAddictionFigure() {
  return (
    <Figure caption="Two words the culture blurs and medicine keeps separate. Dependence is the body's adaptation — expected, universal with sustained use, reversible by taper. Opioid use disorder is a treatable medical condition — loss of control despite harm. Neither is a character verdict.">
      <svg
        role="img"
        aria-labelledby="dep-title dep-desc"
        viewBox="0 0 740 190"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="dep-title">Dependence versus opioid use disorder</title>
        <desc id="dep-desc">
          Two cards side by side: dependence — universal body adaptation,
          withdrawal on sudden stop, managed by taper — and opioid use
          disorder, a treatable medical condition.
        </desc>
        <g>
          <rect x="20" y="20" width="340" height="150" rx="10" fill={FIG.nerveGround} stroke={FIG.nerve} strokeOpacity="0.5" />
          <text x="190" y="52" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
            Dependence
          </text>
          <text x="190" y="74" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
            = physiology
          </text>
          <text x="190" y="102" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            body adapts with sustained use
          </text>
          <text x="190" y="124" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            sudden stop → withdrawal
          </text>
          <text x="190" y="150" textAnchor="middle" fontSize="12" fontWeight="600" fill={FIG.nerveDark}>
            managed by gradual taper
          </text>
        </g>
        <g>
          <rect x="380" y="20" width="340" height="150" rx="10" fill={FIG.signalGround} stroke={FIG.signalDark} strokeOpacity="0.6" />
          <text x="550" y="52" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
            Opioid use disorder
          </text>
          <text x="550" y="74" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
            = a medical condition
          </text>
          <text x="550" y="102" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            loss of control · craving
          </text>
          <text x="550" y="124" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            use continues despite harm
          </text>
          <text x="550" y="150" textAnchor="middle" fontSize="12" fontWeight="600" fill={FIG.signalTextDark}>
            treatable — help: 1-800-662-4357
          </text>
        </g>
      </svg>
    </Figure>
  );
}

function OverdoseCombinationsFigure() {
  return (
    <Figure caption="Why combinations multiply rather than add: opioids, benzodiazepines, alcohol, and sleep medications all press on the same brainstem breathing control. Naloxone is the antidote that lifts the opioid press — every home with opioids should have it.">
      <svg
        role="img"
        aria-labelledby="od-title od-desc"
        viewBox="0 0 740 240"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="od-title">Sedative combinations and breathing</title>
        <desc id="od-desc">
          Arrows from opioid, benzodiazepine, alcohol, and sleep medication
          converge on a breathing-control node, with naloxone shown blocking
          the opioid arrow.
        </desc>
        <defs>
          <marker id="od-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L 9 4.5 L 0 9 z" fill={FIG.faint} />
          </marker>
          <marker id="od-block" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0 1 L 0 9" stroke={FIG.caution} strokeWidth="3" />
          </marker>
        </defs>

        {/* central node */}
        <rect x="500" y="86" width="220" height="68" rx="12" fill={FIG.cautionGround} stroke={FIG.cautionEdge} />
        <text x="610" y="114" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
          Brainstem breathing control
        </text>
        <text x="610" y="136" textAnchor="middle" fontSize="12" fill={FIG.cautionText}>
          every arrow presses the same button
        </text>

        {/* source cards + arrows */}
        {[
          { y: 18, label: "opioid", sub: "the prescription", block: true },
          { y: 74, label: "benzodiazepine", sub: "alprazolam · lorazepam", block: false },
          { y: 130, label: "alcohol", sub: "any amount adds up", block: false },
          { y: 186, label: "sleep / sedative meds", sub: "incl. gabapentinoids", block: false },
        ].map((s) => (
          <g key={s.label}>
            <rect x="20" y={s.y} width="200" height="44" rx="9" fill={FIG.paper} stroke={FIG.line} />
            <text x="120" y={s.y + 19} textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.ink}>
              {s.label}
            </text>
            <text x="120" y={s.y + 36} textAnchor="middle" fontSize="11" fill={FIG.muted}>
              {s.sub}
            </text>
            <path
              d={`M 226 ${s.y + 22} C 340 ${s.y + 22}, 420 ${120}, 494 116`}
              fill="none"
              stroke={s.block ? FIG.caution : FIG.faint}
              strokeWidth="2"
              strokeDasharray={s.block ? "5 4" : undefined}
              markerEnd={s.block ? "url(#od-block)" : "url(#od-arrow)"}
            />
          </g>
        ))}

        {/* naloxone note */}
        <g>
          <rect x="238" y="12" width="190" height="30" rx="15" fill={FIG.nerveGround} stroke={FIG.nerve} strokeOpacity="0.6" />
          <text x="333" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.nerveDark}>
            naloxone blocks this path
          </text>
        </g>
      </svg>
    </Figure>
  );
}
