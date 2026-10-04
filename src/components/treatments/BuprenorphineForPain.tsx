import Link from "next/link";
import { Figure, H2, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * /treatments/buprenorphine-for-pain – a partial-agonist opioid that is
 * approved for pain in its own right, told through the 2025 VOICE
 * buprenorphine trial. Opioid-receptor content → SAMHSA helpline inline
 * (house rule), CDC-2022-aligned, no doses, no taper schedules, never
 * "how to obtain."
 */

function CeilingFigure() {
  return (
    <Figure caption="A schematic, not a measurement. As the amount of a full-agonist opioid rises, its effect on breathing keeps rising with it. Buprenorphine's effect on breathing flattens out – the 'ceiling' studied by Dahan and colleagues. The shaded band marks the danger zone the ceiling tends to stay below. Mixing in alcohol or sedatives can push either curve upward.">
      <svg
        role="img"
        aria-labelledby="bup-ceiling-title bup-ceiling-desc"
        viewBox="0 0 680 360"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="bup-ceiling-title">
          Full-agonist opioid versus buprenorphine: effect on breathing as the
          amount rises
        </title>
        <desc id="bup-ceiling-desc">
          A schematic chart with the amount of drug on the horizontal axis and
          suppression of breathing on the vertical axis, with no numbers. A
          slate line for a full-agonist opioid such as morphine rises steadily
          into a red-shaded danger zone at the top. A teal line for
          buprenorphine rises at first, then bends and flattens into a plateau
          below the danger zone, labeled the ceiling effect.
        </desc>

        {/* danger band */}
        <rect x="70" y="40" width="560" height="52" rx="6" fill={FIG.cautionGround} />
        <text x="84" y="63" fontSize="12" fontWeight="600" fill={FIG.cautionText}>
          breathing suppressed enough to be dangerous
        </text>
        <text x="84" y="80" fontSize="11.5" fill={FIG.cautionText}>
          the zone that overdose deaths come from
        </text>

        {/* axes */}
        <path
          d="M70 300 V 40 M70 300 H 630"
          fill="none"
          stroke={FIG.textMid}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M70 40 l-4 7 M70 40 l4 7" fill="none" stroke={FIG.textMid} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M630 300 l-7 -4 M630 300 l-7 4" fill="none" stroke={FIG.textMid} strokeWidth="1.8" strokeLinecap="round" />
        <text x="350" y="332" textAnchor="middle" fontSize="13" fill={FIG.text}>
          amount of drug in the body →
        </text>
        <text
          x="40"
          y="170"
          textAnchor="middle"
          fontSize="13"
          fill={FIG.text}
          transform="rotate(-90 40 170)"
        >
          suppression of breathing →
        </text>

        {/* full agonist – keeps climbing */}
        <path
          d="M70 300 C 200 290, 330 240, 430 170 S 560 70, 600 52"
          fill="none"
          stroke={FIG.muted}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text x="470" y="128" fontSize="13" fontWeight="700" fill={FIG.text}>
          full agonist
        </text>
        <text x="470" y="145" fontSize="11.5" fill={FIG.textMid}>
          morphine, oxycodone, fentanyl
        </text>

        {/* buprenorphine – bends and plateaus */}
        <path
          d="M70 300 C 180 288, 260 236, 320 196 S 420 150, 600 148"
          fill="none"
          stroke={FIG.nerve}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <text x="430" y="186" fontSize="13" fontWeight="700" fill={FIG.nerveDark}>
          buprenorphine
        </text>
        <text x="430" y="203" fontSize="11.5" fill={FIG.nerveDark}>
          partial agonist – the effect plateaus
        </text>

        {/* ceiling line */}
        <path
          d="M300 148 H 620"
          fill="none"
          stroke={FIG.nerve}
          strokeWidth="1.4"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
        <text x="302" y="140" fontSize="11.5" fontWeight="600" fill={FIG.nerveDark}>
          the &ldquo;ceiling&rdquo;
        </text>

        {/* pain-relief note */}
        <rect x="84" y="222" width="190" height="60" rx="8" fill={FIG.signalGround} stroke={FIG.signal} strokeOpacity="0.5" />
        <text x="179" y="246" textAnchor="middle" fontSize="12" fontWeight="600" fill={FIG.signalTextDark}>
          pain relief is a separate curve
        </text>
        <text x="179" y="263" textAnchor="middle" fontSize="11" fill={FIG.signalText}>
          it keeps climbing where breathing
        </text>
        <text x="179" y="277" textAnchor="middle" fontSize="11" fill={FIG.signalText}>
          has already leveled off
        </text>
      </svg>
    </Figure>
  );
}

export default function BuprenorphineForPain() {
  return (
    <div>
      <H2 id="stigma">&ldquo;Isn&rsquo;t that the addiction drug?&rdquo;</H2>
      <P>
        If your physician has mentioned buprenorphine and your first thought
        was <em>that is the drug they give people with addiction</em>, you are
        not wrong – and you are not being accused of anything. Buprenorphine is
        one of the three FDA-approved medications for opioid use disorder, and
        it has saved a great many lives in that role. But the same molecule
        has been an approved <strong>pain medication</strong> in the United
        States for more than four decades, in its own products with its own
        labels. A physician who brings it up is usually thinking about your
        breathing and your long-term safety – not about a diagnosis you do not
        have.
      </P>
      <P>
        That double life is why the stigma sticks. For years, a federal
        &ldquo;X-waiver&rdquo; was required to prescribe buprenorphine for
        addiction, which marked it in many minds as a drug for a separate kind
        of patient. Congress eliminated that waiver at the end
        of 2022, and the DEA now treats a buprenorphine prescription like any
        other controlled-substance prescription. The medicine did not change.
        The paperwork around it did.
      </P>

      <H2 id="what-it-is">What buprenorphine is</H2>
      <P>
        Buprenorphine is an opioid, and it is honest to say so. It works at
        the same <strong>mu-opioid receptor</strong> that morphine, oxycodone,
        and fentanyl work at, and it binds there very tightly. The difference
        is in what it does once attached. Those other drugs are{" "}
        <strong>full agonists</strong>: they switch the receptor fully on, and
        more drug means more effect, with no natural stopping point.
        Buprenorphine is a <strong>partial agonist</strong>: it switches the
        receptor on only part of the way. For some of the receptor&rsquo;s
        jobs, that partial signal is enough. For others, it is not.
      </P>
      <P>
        The job that matters most for safety is breathing. In controlled
        studies in healthy volunteers, Dahan and colleagues found that
        buprenorphine&rsquo;s effect on breathing{" "}
        <strong>reaches a ceiling</strong> – past a certain point, more drug
        did not suppress breathing further – while its pain-relieving effect
        did not show the same plateau. Fentanyl, tested the same way, kept
        suppressing breathing as the amount rose. This is the single property
        that makes buprenorphine different from the opioids most people know,
        and it is the reason the CDC&rsquo;s 2022 guideline lists it as
        having &ldquo;less respiratory depression&rdquo; than full agonists.
      </P>

      <CeilingFigure />

      <P>
        A ceiling is not a guarantee of safety. Buprenorphine still carries
        the opioid class boxed warnings, and the ceiling can be overwhelmed
        when it is combined with alcohol, benzodiazepines, or other sedatives
        – the same combinations that drive most opioid deaths. Because it
        grips the receptor so tightly, naloxone can take more effort to reverse
        it – a point Dahan&rsquo;s group also studied. The ceiling lowers one of the biggest risks.
        It does not remove the others.
      </P>

      <H2 id="two-families">Two families of products</H2>
      <P>
        Part of the confusion is that &ldquo;buprenorphine&rdquo; is really
        two shelves of medicine. The products approved for{" "}
        <strong>opioid use disorder</strong> – Suboxone and its generics,
        Sublocade, and others – are films, tablets, or injections, often
        combined with naloxone, built to hold a person steady and stop
        withdrawal and craving. The products approved for{" "}
        <strong>pain</strong> are different: <strong>Butrans</strong> is a
        seven-day skin patch, and <strong>Belbuca</strong> is a film that
        dissolves against the inside of the cheek. Both carry the same FDA
        indication, word for word: &ldquo;severe and persistent pain that
        requires an opioid analgesic and that cannot be adequately treated with
        alternative options.&rdquo; The amounts differ a great deal between the
        two shelves, which is one reason the choice of product belongs with
        your prescriber.
      </P>
      <P>
        Clinicians also sometimes use the opioid-use-disorder products for
        pain when the pain products do not reach high enough, and the CDC
        guideline describes exactly that situation. It is a legitimate use,
        not a statement about who you are.
      </P>

      <H2 id="the-trial">What the 2025 trial actually showed</H2>
      <P>
        The most rigorous test of buprenorphine as a way off high-dose opioids
        was published in <em>JAMA Internal Medicine</em> in 2025 by Becker,
        Krebs, and the VOICE study group. It enrolled 207 veterans with
        moderate to severe chronic pain who had been on a high-dose,
        full-agonist opioid – at least 70 morphine milligram equivalents a
        day – for at least three months. Half were randomly assigned to be{" "}
        <strong>offered the option</strong> of switching to buprenorphine;
        half were not offered it. The main outcome was the Brief Pain
        Inventory total score a year later, with the opioid dose as the main
        secondary outcome.
      </P>
      <P>
        Here is what happened. In the group offered the switch, the average
        pain score fell from 6.8 to 6.1 on a 0–10 scale, and the average
        full-agonist opioid dose fell from about 157 to 94 morphine milligram
        equivalents a day. Those are real changes: pain did not get worse as
        the opioid dose dropped by roughly 40 percent. But the group that was{" "}
        <em>not</em> offered buprenorphine did almost exactly the same – pain
        from 6.8 to 6.3, dose from 165 to 107. The difference between the two
        groups was essentially zero on both measures. And only 27 of the 104
        people offered the switch, about one in four, actually made it.
      </P>

      <H2 id="reading-it">How to read that result</H2>
      <P>
        It would be easy to spin this trial either way, and the honest reading
        is in the middle. It does not show that buprenorphine is a better pain
        reliever than the opioids people were already taking. It does show
        something patients on high-dose opioids are often told is impossible:
        that a large reduction in full-agonist opioids, done gradually with
        support, was accompanied by a small <em>improvement</em> in pain, not
        a collapse. That finding held whether or not buprenorphine was on
        offer, which suggests the collaborative care and the slow, supported
        dose reduction were doing much of the work.
      </P>
      <P>
        The trial also had limits worth naming. It was almost entirely male,
        it ran in one health system, and because so few people switched, it
        cannot tell us much about what happens to those who do. The strongest statement the evidence
        supports today is this: for someone on high-dose opioids whose pain is
        no better, buprenorphine is a reasonable option that a careful trial
        found neither harmful nor magical.
      </P>

      <H2 id="who">Who clinicians consider it for</H2>
      <P>
        The CDC guideline is specific. It suggests that patients for whom the
        risks of continued high-dose opioids outweigh the benefits, who have
        not been able to taper, and who do not have opioid use disorder{" "}
        <strong>might benefit from a transition to buprenorphine</strong>. Physicians
        also raise it when a person on a full-agonist opioid has
        sleep-disordered breathing, takes other sedating medications, or seems
        caught in the trap where rising doses bring rising pain – the opioid-induced hyperalgesia
        described on our{" "}
        <Link href="/treatments/opioid-stewardship" className={link}>
          opioid stewardship page
        </Link>
        . It is not usually a first opioid, and it does not replace the
        non-opioid treatments that remain the foundation of chronic pain care.
      </P>

      <H2 id="switching">What switching involves, in general terms</H2>
      <P>
        Because buprenorphine grips the receptor so tightly, it can push a
        full agonist off – and if the full agonist is still present in
        quantity, that sudden displacement can trigger{" "}
        <strong>precipitated withdrawal</strong>: a fast, miserable onset of
        sweating, aching, cramping, and anxiety. Avoiding that is the whole
        craft of the switch. Clinicians use one of two broad approaches: a
        planned gap in which the previous opioid wears off and mild withdrawal
        begins before buprenorphine starts, or a slower overlap in which very
        small amounts of buprenorphine are introduced while the previous
        opioid is reduced. Which approach, how long it takes, and what the
        numbers are depend entirely on which opioid you take, how much, and
        your health – which is why this page describes the shape of the
        process and does not give schedules.
      </P>
      <P>
        What you can expect is close follow-up – in the trial, people who
        switched had structured check-ins to adjust the amount and manage side
        effects. Common side effects are familiar opioid ones – nausea,
        constipation, drowsiness, headache – plus, with the patch, skin
        irritation at the site, and the label warns against heating pads or
        hot baths over a patch because heat speeds absorption. Buprenorphine
        can also affect heart rhythm at higher amounts, which is something your
        prescriber weighs against your other medications.
      </P>
      <P>
        Two safety lines do not change when the medication does. Any opioid
        taken with alcohol, benzodiazepines, or sleep medicines can stop
        breathing, and the ceiling does not protect against that combination.
        And if someone taking any opioid cannot be woken, is breathing slowly
        or in gasps, or has blue lips, that is an emergency:{" "}
        <strong>call 911 and give naloxone</strong> if it is on hand, then
        give it again if there is no response. If a transition is turning
        into a struggle, or if you are worried about your own use of opioids
        or anyone else&rsquo;s, the SAMHSA helpline,{" "}
        <strong>1-800-662-4357</strong>, is free, confidential, and answers
        around the clock.
      </P>

      <H2 id="fit">How it fits with your other options</H2>
      <P>
        Buprenorphine sits late in the treatment ladder, in the same rung as
        every other long-term opioid for chronic non-cancer pain. The classes
        that come before it – and that keep working alongside it – are mapped
        on our{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications for pain
        </Link>{" "}
        page, and the different question of opioids after surgery or injury is
        on{" "}
        <Link href="/treatments/opioids-for-acute-pain" className={link}>
          opioids for acute pain
        </Link>
        . If you are already on a high-dose opioid and your pain is no better,
        the trial&rsquo;s most useful message may be the simplest one: you are
        not imagining that the medicine has stopped helping, and there is more
        than one careful way forward. Bring the question to your physician or
        pharmacist. This page describes; it does not prescribe.
      </P>
    </div>
  );
}
