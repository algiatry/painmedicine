import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 dark:text-teal-300 underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2 hover:decoration-teal-600";

/** Two ways down: a slow, stepped taper with a pause versus an abrupt stop. */
function TwoPathsFigure() {
  return (
    <Figure caption="Two ways a dose can come down (illustrative, not a schedule). Guidelines describe the first: small steps, agreed in advance, with room to pause. They warn against the second, which can trigger severe withdrawal and has been linked to overdose and mental health crises.">
      <svg
        role="img"
        aria-labelledby="taper-title taper-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="taper-title">A gradual taper compared with an abrupt stop</title>
        <desc id="taper-desc">
          A chart of dose over time. One line steps down gradually over many
          months, with a flat section marked as a pause. The other line drops
          straight to zero at the start and is marked as warned against.
        </desc>

        <g stroke={FIG.line} strokeWidth="1.5">
          <path d="M70 40 V240 H640" fill="none" />
        </g>
        <text x="70" y="28" fontSize="13" fontWeight="700" fill={FIG.ink}>
          Dose
        </text>
        <text x="640" y="264" fontSize="13" fontWeight="700" fill={FIG.ink} textAnchor="end">
          Months to years
        </text>

        {/* abrupt stop */}
        <path
          d="M70 70 H120 V240"
          fill="none"
          stroke={FIG.signal}
          strokeWidth="4"
          strokeLinejoin="round"
          strokeDasharray="7 6"
        />
        <text x="132" y="150" fontSize="13.5" fontWeight="700" fill={FIG.signalTextDark}>
          Abrupt stop
        </text>
        <text x="132" y="168" fontSize="12.5" fill={FIG.textMid}>
          warned against
        </text>

        {/* gradual taper with a pause */}
        <path
          d="M70 70 H150 V92 H210 V114 H270 V136 H400 V158 H460 V180 H520 V202 H580 V222 H640"
          fill="none"
          stroke={FIG.nerve}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <text x="335" y="124" fontSize="13" fontWeight="700" fill={FIG.nerveDark} textAnchor="middle">
          Pause
        </text>
        <text x="470" y="100" fontSize="13.5" fontWeight="700" fill={FIG.nerveDark}>
          Gradual taper
        </text>
        <text x="470" y="118" fontSize="12.5" fill={FIG.textMid}>
          small steps, agreed together
        </text>
      </svg>
    </Figure>
  );
}

export default function TaperingOpioids() {
  return (
    <div>
      <P>
        For people who have taken opioid pain medicine for months or years,
        the question of coming down is rarely simple. Some want to; some have
        been told they must; many are afraid of what happens to their pain
        either way. The evidence gives a clear answer on one point and a more
        careful one on the rest. <strong>How</strong> a dose is lowered
        matters as much as whether it is. Slow and agreed is the standard.
        Fast or forced is what the guidelines warn against.
      </P>

      <KeyTakeaways
        items={[
          <>Never stop long-term opioids suddenly on your own. The CDC says they <strong>should not be discontinued abruptly</strong> or reduced rapidly.</>,
          <>A taper is a <strong>shared plan</strong>: you help decide the pace and when to pause, and it can take months to years.</>,
          <>Withdrawal during a taper is a signal to <strong>slow down or pause</strong>, not a sign of failure or addiction.</>,
          <>Tolerance falls as the dose falls. Going back to an old, higher dose <strong>can cause an overdose</strong>.</>,
        ]}
      />

      <H2 id="why">Why tapering comes up</H2>
      <P>
        The CDC&rsquo;s 2022 guideline asks clinicians and patients to keep
        weighing whether opioids are still doing more good than harm: whether
        they are meeting goals for pain and daily function, and whether the
        risks have changed. When the balance tips, the guideline advises
        working closely with the patient to lower the dose gradually, or, if
        the individual situation warrants it, to taper and stop. The
        background on dependence, tolerance, and risk is in{" "}
        <Link href="/treatments/opioid-stewardship" className={link}>
          opioids, honestly
        </Link>
        .
      </P>
      <P>
        The same guideline is explicit about the other direction. Clinicians
        should not insist on tapering or stopping when the benefits of
        opioids still outweigh the risks. Tapering is not required of
        everyone, and a stable dose that is working is a legitimate outcome of
        that review. The guideline also does not apply to pain from cancer or
        sickle cell disease, or to palliative and end-of-life care.
      </P>

      <H2 id="how">What a well-run taper looks like</H2>
      <TwoPathsFigure />
      <P>
        The CDC describes tapering as something done with a patient, not to
        one. Clinicians are told to collaborate on the plan, including how
        quickly it goes and when pauses are warranted, and to follow up at
        least monthly. The guideline notes that a patient&rsquo;s agreement
        and interest is likely to be a key part of whether a taper succeeds.
      </P>
      <P>
        On pace, the guideline says tapers can take several months to years
        and should be individualized. For people who have taken opioids for a
        year or more, it describes reductions of about 10% a month or slower
        as likely to be better tolerated than faster ones. That figure is the
        guideline&rsquo;s benchmark for clinicians, not a schedule to follow
        alone: the right pace for any one person depends on the medicine, the
        dose, how long it has been taken, and how the body responds, and it
        is set with the prescriber. Goals differ too. Some people come off
        completely; others settle at a lower dose where the benefits outweigh
        the risks.
      </P>
      <P>
        The plan is expected to bend. A taper may be paused and restarted when
        the person is ready, and often needs to slow further at low doses.
        Alongside it, the guideline tells clinicians to strengthen the other
        parts of pain care – the{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical and behavioral therapies
        </Link>{" "}
        and non-opioid{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications
        </Link>{" "}
        – and to watch for anxiety and depression that a taper can bring to
        the surface.
      </P>

      <H2 id="withdrawal">Withdrawal, and what it means</H2>
      <P>
        A body that has adapted to opioids reacts when they are reduced.
        Withdrawal can include anxiety, trouble sleeping, abdominal pain,
        vomiting, diarrhea, sweating, tremor, and a racing heart. Pain itself
        can flare for a time. This is physical dependence, which is expected
        with long-term use. It is not the same as addiction, and it does not
        mean the taper is failing.
      </P>
      <P>
        The CDC&rsquo;s first response to withdrawal is to slow or pause the
        taper. Short-term medicines can also ease specific symptoms. So the
        practical message is to report symptoms early rather than push
        through them: they are information the prescriber needs to set the
        pace.
      </P>

      <H2 id="risks">Why abrupt and forced tapers are dangerous</H2>
      <P>
        After 2016, many people had their opioids cut quickly or stopped, and
        the consequences were studied. The CDC now states that rapid tapers,
        abrupt discontinuation without collaboration, and patient dismissal
        were misapplications of its earlier guidance and contributed to harm:
        untreated pain, serious withdrawal, psychological distress, overdose,
        and suicidal thoughts and behavior.
      </P>
      <P>
        Two large studies show the size of the risk. Among 113,618 U.S.
        adults on stable, higher-dose opioids, periods after tapering had 9.3
        overdose events per 100 person-years compared with 5.5 without
        tapering, and 7.6 mental health crises compared with 3.3. Faster dose
        reductions carried higher risk. Among nearly 1.4 million veterans,
        stopping opioid treatment was associated with a higher risk of death
        from overdose or suicide, and the risk was greater the longer a
        person had been on opioids.
      </P>
      <P>
        These were observational studies. They cannot prove the taper caused
        the harm, and they do not mean tapering is wrong. They are the reason
        guidelines insist on slow, supported, voluntary reductions.
      </P>
      <P>
        One danger deserves its own sentence. As the dose comes down, so does
        tolerance. A dose the body once handled can become an overdose after a
        taper. The CDC tells clinicians to warn patients about this, to teach
        overdose response, and to offer naloxone, the medicine that reverses
        an opioid overdose.
      </P>

      <H2 id="outcomes">What happens to pain afterwards</H2>
      <P>
        The common fear is that less medicine must mean more pain. The
        evidence, though weak, points the other way for many people. A
        systematic review of 67 studies found that among the better-quality
        studies of supported dose reduction, pain, function, and quality of
        life improved in every one that measured them. The authors rated the
        overall evidence as very low quality, because most of the studies
        had no comparison group.
      </P>
      <P>
        Support seems to be the active ingredient. In a small randomized
        trial, people given 22 weeks of taper support, including weekly
        meetings to build pain self-management skills, reported less
        interference from pain and fewer opioid-related problems than those
        given usual care, without their pain getting worse.
      </P>

      <H2 id="stuck">If a taper is not working</H2>
      <P>
        Some people cannot get lower despite a careful, slow attempt. The CDC
        addresses this directly: clinicians should not abandon these patients.
        It notes emerging evidence that people in this position may benefit
        from switching to{" "}
        <Link href="/treatments/buprenorphine-for-pain" className={link}>
          buprenorphine
        </Link>
        , an opioid with a lower risk of slowed breathing and overdose. A
        difficult taper can also reveal opioid use disorder, which is a
        treatable medical condition, and the guideline directs clinicians to
        offer or arrange treatment for it.
      </P>
      <P>
        If opioid use is becoming hard to control, confidential help is
        available from the SAMHSA National Helpline at{" "}
        <strong>1-800-662-HELP (4357)</strong>. If a taper has brought on
        thoughts of suicide, call or text <strong>988</strong> at any hour.
      </P>

      <H2 id="rights">If you are being tapered without agreement</H2>
      <P>
        It helps to know what the guidance says. The CDC states that its
        recommendations are voluntary and are not meant to be applied as
        inflexible standards. It says payers, health systems, and state
        medical boards should not use the guideline to set rigid limits on
        dose or duration, and should make sure their policies do not lead to
        rapid tapers or abrupt discontinuation. Where a clinician and patient
        disagree, the guideline asks the clinician to acknowledge that,
        respond with empathy, and avoid abandoning the patient.
      </P>
      <P>
        Asking for the reasons, a slower pace, a pause, or a second opinion
        from a{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain specialist
        </Link>{" "}
        is consistent with that guidance. Tapering during pregnancy needs
        specialist input because withdrawal carries risks for both the
        pregnant person and the baby. This page gives no dosing guidance, and
        no one should change an opioid dose without their prescriber.
      </P>
    </div>
  );
}
