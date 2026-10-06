import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

function InfusionVersusHomeFigure() {
  return (
    <Figure caption="The same molecule, two very different settings. In a monitored infusion, the people and equipment that handle sedation, blood-pressure swings, and breathing changes are in the room. With mailed lozenges, they are not – which is the gap the ASA and the FDA have both pointed to.">
      <svg
        role="img"
        aria-labelledby="ketamine-settings-title ketamine-settings-desc"
        viewBox="0 0 680 400"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="ketamine-settings-title">
          Monitored ketamine infusion versus at-home ketamine
        </title>
        <desc id="ketamine-settings-desc">
          A ketamine vial at the top splits into two paths. On the left, a
          monitored clinic infusion with a pulse-oximeter trace, a
          blood-pressure reading, and a trained clinician present. On the
          right, a mailed lozenge at home with no monitor, no clinician, and a
          caution note that the same effects happen with no one watching.
        </desc>

        {/* the vial */}
        <g>
          <rect x="322" y="18" width="36" height="14" rx="3" fill={FIG.soft} stroke={FIG.faint} strokeWidth="1.5" />
          <rect x="314" y="32" width="52" height="78" rx="9" fill={FIG.nerveTint} stroke={FIG.nerveDark} strokeWidth="2.5" />
          <rect x="322" y="62" width="36" height="40" rx="5" fill={FIG.nerve} fillOpacity="0.35" />
          <text x="340" y="134" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
            Ketamine
          </text>
          <text x="340" y="152" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
            NMDA-receptor blocker · anesthetic since 1970 · DEA Schedule III
          </text>
        </g>

        {/* fork arrows */}
        <defs>
          <marker id="ketamine-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L 9 4.5 L 0 9 z" fill={FIG.faint} />
          </marker>
        </defs>
        <path
          d="M300 164 C 250 180, 215 194, 184 210"
          fill="none"
          stroke={FIG.faint}
          strokeWidth="2"
          markerEnd="url(#ketamine-arrow)"
        />
        <path
          d="M380 164 C 430 180, 465 194, 496 210"
          fill="none"
          stroke={FIG.faint}
          strokeWidth="2"
          markerEnd="url(#ketamine-arrow)"
        />
        <text x="214" y="176" textAnchor="middle" fontSize="12" fill={FIG.muted}>
          IV in a clinic
        </text>
        <text x="468" y="176" textAnchor="middle" fontSize="12" fill={FIG.muted}>
          lozenge by mail
        </text>

        {/* left card – monitored infusion */}
        <g>
          <rect x="24" y="222" width="308" height="160" rx="10" fill={FIG.nerveGround} stroke={FIG.nerve} strokeOpacity="0.45" />
          <text x="178" y="250" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
            Monitored infusion
          </text>
          {/* pulse-ox trace */}
          <path
            d="M44 300 h26 l8-18 8 32 8-26 6 12 h24 l8-18 8 32 8-26 6 12 h24"
            fill="none"
            stroke={FIG.nerveDark}
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <text x="44" y="326" fontSize="11.5" fill={FIG.textMid}>
            oxygen &amp; heart rate on a screen
          </text>
          {/* BP reading */}
          <rect x="222" y="276" width="90" height="34" rx="6" fill={FIG.white} stroke={FIG.nerve} strokeOpacity="0.6" />
          <text x="267" y="298" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={FIG.nerveDark}>
            BP checked
          </text>
          {/* clinician */}
          <circle cx="248" cy="344" r="7" fill={FIG.nerveTint} stroke={FIG.nerveDark} strokeWidth="2" />
          <path d="M236 368 c0-10 24-10 24 0" fill="none" stroke={FIG.nerveDark} strokeWidth="2" strokeLinecap="round" />
          <text x="262" y="356" fontSize="11.5" fill={FIG.textMid}>
            trained clinician in the room
          </text>
          <text x="44" y="356" fontSize="11.5" fontWeight="600" fill={FIG.nerveDark}>
            rescue equipment at hand
          </text>
        </g>

        {/* right card – at home */}
        <g>
          <rect x="348" y="222" width="308" height="160" rx="10" fill={FIG.cautionGround} stroke={FIG.cautionEdge} />
          <text x="502" y="250" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
            At home, by mail
          </text>
          {/* flat line – no monitor */}
          <path
            d="M368 300 h180"
            fill="none"
            stroke={FIG.faint}
            strokeWidth="2"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          <text x="368" y="326" fontSize="11.5" fill={FIG.textMid}>
            no monitor · no blood-pressure check
          </text>
          {/* lozenge */}
          <rect x="574" y="286" width="54" height="26" rx="13" fill={FIG.white} stroke={FIG.faint} strokeWidth="1.8" />
          <text x="601" y="304" textAnchor="middle" fontSize="11" fill={FIG.muted}>
            lozenge
          </text>
          <text x="368" y="350" fontSize="11.5" fill={FIG.textMid}>
            telehealth visit, then no one in the room
          </text>
          <text x="368" y="370" fontSize="11.5" fontWeight="600" fill={FIG.cautionText}>
            same sedation and dissociation – no one watching
          </text>
        </g>
      </svg>
    </Figure>
  );
}

export default function Ketamine() {
  return (
    <div>
      <KeyTakeaways
        items={[
          <>
            Ketamine is <strong>not FDA-approved for any pain condition</strong>; every use for pain is off-label, and its only FDA-approved use is as a surgical anesthetic.
          </>,
          <>
            The 2025 Cochrane review found <strong>&ldquo;no clear evidence&rdquo;</strong> that ketamine reduces chronic pain intensity, with low to very low certainty.
          </>,
          <>
            For some people with stubborn neuropathic or CRPS pain, a <strong>monitored infusion</strong> can bring relief for days to a few weeks.
          </>,
          <>
            Home ketamine lacks the monitoring of a clinic, and regular use can injure the <strong>bladder</strong> and cause dependence.
          </>,
        ]}
      />

      <InfusionVersusHomeFigure />

      <H2 id="what-it-is">An anesthetic with a second life</H2>
      <P>
        Ketamine was approved in 1970 as a surgical anesthetic, and that is
        still its only FDA-approved use. Hospitals have relied on it for more
        than fifty years because, unlike most anesthetics, it tends to keep
        people breathing and keeps blood pressure up. Over the past two
        decades it has found a second life in much smaller amounts: first for
        hard-to-treat depression, then for chronic pain, and lately as a
        product sold through telehealth clinics and mailed to patients&rsquo;
        homes. The DEA lists ketamine in <strong>Schedule III</strong> – a
        controlled substance with accepted medical uses and a real potential
        for misuse.
      </P>

      <P>
        If you have been living with pain that nothing seems to touch, it is
        natural to wonder about it. This page explains what ketamine does in
        the nervous system, what the evidence for chronic pain honestly shows,
        and why the setting it is given in matters so much. It describes; it
        does not prescribe.
      </P>

      <H2 id="how-it-works">How it works: turning down the volume knob</H2>
      <P>
        Ketamine is not an opioid. Its main target is the{" "}
        <strong>NMDA receptor</strong>, a docking site on nerve cells that
        helps pain signals get louder as they pass through the spinal cord.
        When pain goes on for months, these receptors can become
        over-responsive – part of what scientists call{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          central sensitization
        </Link>
        , where the nervous system amplifies signals that would once have
        been faint. Ketamine blocks the NMDA receptor, which is a bit like
        turning a volume knob down at the spinal cord rather than at the
        source of the pain.
      </P>
      <P>
        That is the theory behind using it for nerve pain and for{" "}
        <Link href="/conditions/crps" className={link}>
          complex regional pain syndrome (CRPS)
        </Link>
        , conditions where the amplifier seems stuck on. It is also why the
        effects feel strange: NMDA receptors are everywhere in the brain, so
        blocking them produces <strong>dissociation</strong> – a dreamlike
        sense of being detached from your body or surroundings – along with
        drowsiness, blurred vision, nausea, and a rise in blood pressure and
        heart rate. These are not rare side effects. They are the drug
        working, in places other than the pain pathway.
      </P>

      <H2 id="evidence">What the evidence shows – and doesn&rsquo;t</H2>
      <P>
        The strongest claim the evidence supports is a modest one. In 2018,
        three professional societies – the American Society of Regional
        Anesthesia and Pain Medicine, the American Academy of Pain Medicine,
        and the American Society of Anesthesiologists – published consensus
        guidelines on IV ketamine infusions for chronic pain. Their reading of
        the literature: evidence supports its use, but it &ldquo;varies by
        condition and dose range,&rdquo; and most studies were small,
        uncontrolled, and poorly blinded. The clearest signal was for
        <strong> CRPS</strong> and for some neuropathic pain; the data for
        fibromyalgia, headache, and spinal pain were weaker.
      </P>
      <P>
        A 2019 meta-analysis in <em>Anesthesia &amp; Analgesia</em> pooled
        seven randomized trials – 211 patients in all – and found a{" "}
        <strong>small benefit lasting up to about two weeks</strong> after an
        infusion: roughly 1.8 points on a 0-to-10 pain scale, with about half
        of ketamine patients counted as responders versus a fifth on placebo.
        Six of the seven trials were at high risk of bias. The 2025 Cochrane
        review, the most rigorous look so far, went further in its caution: in
        39 ketamine trials it found &ldquo;no clear evidence&rdquo; that IV,
        oral, or topical ketamine reduces chronic pain intensity, rated the
        evidence low to very low certainty, and found that IV ketamine may
        raise the risk of adverse events.
      </P>
      <P>
        So the honest summary is this: for some people with stubborn
        neuropathic or CRPS pain, a monitored infusion can bring real relief
        for days to a few weeks. Whether that relief lasts, whether repeated
        infusions are safe over years, and whether lozenges or nasal sprays do
        anything comparable – none of that has been settled. Ketamine is{" "}
        <strong>not FDA-approved for any pain condition</strong>; every use
        for pain is off-label, which is legal and common in medicine but means
        the usual proof of benefit and safety has not been gathered.
      </P>

      <H2 id="infusion-vs-home">Why a monitored infusion is a different thing</H2>
      <P>
        An infusion for pain is given in a clinic, through an IV, over hours,
        often on several days in a row. The 2018 guidelines describe what
        that setting is supposed to include: a clinician trained in airway
        management and resuscitation, continuous monitoring of oxygen, heart
        rate, and blood pressure, and medications on hand to blunt nausea or
        a sharp rise in blood pressure. The reason is simple. Ketamine&rsquo;s
        effects – sedation, dissociation, blood-pressure swings, and in rare
        cases slowed breathing – arrive quickly, and someone has to be
        watching for them.
      </P>
      <P>
        At-home ketamine is usually a compounded lozenge, tablet, or nasal
        spray, prescribed after a video visit and shipped to the door. The
        molecule is the same. What is missing is everyone and everything in
        the left half of the figure above. In October 2023 the FDA warned that
        taking compounded ketamine at home carries added risk precisely because
        no provider is present to monitor for sedation and dissociation, that
        the amount of drug in these products can vary, and that it has never
        found ketamine safe or effective for any psychiatric use. Compounded
        products are not FDA-approved, and the agency does not check their
        quality before they are sold.
      </P>

      <H2 id="asa">What the anesthesiologists are asking for</H2>
      <P>
        The American Society of Anesthesiologists – the specialty that has
        used ketamine longest – has spent 2026 pressing lawmakers and state
        medical boards on this point. In a June 2026 statement, ASA President
        Patrick Giam put it plainly: &ldquo;We have grave concerns about the
        home delivery and use of ketamine. You can move very quickly from
        feeling relaxed to becoming deeply sedated, and without proper
        monitoring and supervision, this can become dangerous.&rdquo; The
        society&rsquo;s updated guidance says ketamine used outside the
        operating room should meet the same safety standards as any
        anesthetic: in-person evaluation, a physician immediately available,
        a monitored setting with rescue equipment – and it states that a
        telehealth visit does not satisfy that requirement.
      </P>
      <P>
        Concretely, the ASA is asking states to require direct physician
        supervision for ketamine given by injection or infusion, to limit
        prescribing for unsupervised home use, and to back the bills now
        moving in Texas, Georgia, Missouri, and Utah. The stance is not that
        ketamine is bad; it is that a powerful anesthetic should not be
        handed out faster than the safety rules around it.
      </P>

      <H2 id="risks">Risks with repeated use</H2>
      <P>
        One infusion in a monitored setting is, for most people, uneventful
        beyond the strange hours it produces. The concerns grow with
        repetition. Regular use can injure the <strong>bladder</strong> –
        inflammation, urgency, pain, and blood in the urine, a pattern seen
        most in people who use ketamine often and sometimes slow to reverse.
        Liver and memory effects have been reported with heavy use. And
        ketamine can produce <strong>dependence</strong>: tolerance builds,
        the dissociative effects can become something people seek, and
        stopping after sustained use can be hard. None of this means a
        supervised course for pain will lead there; it means that frequency
        and oversight matter, and that a plan should have an endpoint.
      </P>
      <P>
        Ketamine is also riskier combined with other sedating drugs. Taking it
        alongside opioids, benzodiazepines, or alcohol stacks the effects on
        breathing and alertness – one more reason monitored settings screen
        for these first. If ketamine, opioids, or any substance use has
        become hard to control, the SAMHSA helpline,{" "}
        <strong>1-800-662-4357</strong>, is free, confidential, and answers
        around the clock.
      </P>
      <P>
        Seek urgent care if someone who has used ketamine cannot be roused,
        is breathing slowly or irregularly, has chest pain, a seizure, or
        severe agitation – call 911. Blood in the urine or new, persistent
        bladder pain should be reported to your physician promptly.
      </P>

      <H2 id="fit">How it fits with other options</H2>
      <P>
        In pain medicine, ketamine infusion is a late rung on the ladder: a
        specialist option for pain that has not responded to the{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          nerve-pain medications
        </Link>
        , physical and psychological therapies, and{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          interventional procedures
        </Link>{" "}
        with better long-term track records. It is usually offered as a
        short course with a clear goal – a window of lower pain in which
        rehabilitation can gain ground – rather than as a maintenance drug.
        Insurance often does not cover it for pain, and cash prices vary
        widely, which is part of why the at-home market grew.
      </P>
      <P>
        If you are considering it, the questions worth bringing to a pain
        physician are the ones the evidence leaves open: what condition is
        being treated, what response would count as success, how many
        sessions, who will be monitoring, and what the plan is if it does not
        help. A{" "}
        <Link href="/find-help" className={link}>
          fellowship-trained pain specialist
        </Link>{" "}
        can answer those honestly. Your pain is real; the goal is a treatment
        whose benefits and risks are just as real to the people giving it.
      </P>
    </div>
  );
}
