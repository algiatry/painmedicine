import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import { HeadProfile } from "../anatomy/HeadProfile";

const link =
  "text-teal-700 dark:text-teal-300 underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2 hover:decoration-teal-600";

function TwoHeadachesFigure() {
  return (
    <Figure caption="Two headaches at opposite ends of the scale. Tension-type headache is a mild-to-moderate pressure on both sides that can last hours to days. Cluster headache is an excruciating pain around one eye that lasts 15 minutes to three hours and returns in daily runs.">
      <svg
        role="img"
        aria-labelledby="tch-title tch-desc"
        viewBox="0 0 680 330"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="tch-title">Tension-type headache and cluster headache compared</title>
        <desc id="tch-desc">
          Two heads in profile. On the left, tension-type headache: pain
          markers spread across the forehead, temple, and back of the head,
          like a tight band. On the right, cluster headache: a single strong
          pain marker at the eye.
        </desc>

        <g transform="translate(30 6) scale(0.86)">
          <HeadProfile
            marks={[
              { at: "temple", size: "sm" },
              { at: "crown", size: "sm" },
              { at: "occiput", size: "sm" },
            ]}
          >
            <path
              d="M58 92 C 100 70 180 70 224 100"
              fill="none"
              stroke={FIG.signal}
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.45"
            />
          </HeadProfile>
        </g>
        <g transform="translate(370 6) scale(0.86)">
          <HeadProfile marks={[{ at: "orbit", size: "md" }]} />
        </g>

        <g fontSize="16" fontWeight="700" fill={FIG.ink} textAnchor="middle">
          <text x="150" y="262">Tension-type</text>
          <text x="490" y="262">Cluster</text>
        </g>
        <g fontSize="13" fill={FIG.textMid} textAnchor="middle">
          <text x="150" y="284">Both sides, pressing or tightening</text>
          <text x="150" y="303">Mild to moderate · 30 minutes to 7 days</text>
          <text x="490" y="284">One side, behind or around the eye</text>
          <text x="490" y="303">Excruciating · 15 minutes to 3 hours</text>
        </g>
      </svg>
    </Figure>
  );
}

export default function TensionAndClusterHeadache() {
  return (
    <div>
      <P>
        Headache is not one condition. Beyond{" "}
        <Link href="/conditions/migraine" className={link}>
          migraine
        </Link>
        , two other primary headaches matter most, and they could hardly be
        more different. Tension-type headache is the most common headache
        there is: a dull pressure that most people ride out. Cluster headache
        is rare and among the most severe pains known, striking around one eye
        in attacks that return day after day. Both are real neurological
        conditions, and both have treatments that work better when the
        headache is correctly named.
      </P>

      <KeyTakeaways
        items={[
          <>Tension-type headache affects roughly <strong>one in four people</strong> worldwide: pressure on both sides, mild to moderate, not worsened by ordinary activity.</>,
          <>Cluster headache is <strong>one-sided, around the eye, and excruciating</strong>, with a red or watering eye and attacks that often wake people at night.</>,
          <>Taking pain relievers too often can itself <strong>make headaches more frequent</strong> – a pattern called medication-overuse headache.</>,
          <>Cluster attacks respond to specific treatments, including <strong>high-flow oxygen</strong>; ordinary painkillers act too slowly to help.</>,
        ]}
      />

      <H2 id="compare">Two very different headaches</H2>
      <TwoHeadachesFigure />

      <H2 id="tension">Tension-type headache</H2>
      <P>
        A tension-type headache feels like constant pressure or a belt being
        tightened around the head. It is usually on both sides, mild to
        moderate, and can last from 30 minutes to seven days. Unlike migraine
        it brings no aura, nausea, or vomiting, and it does not get worse with
        everyday activity such as walking or climbing stairs. A pooled
        analysis of 357 studies put its worldwide prevalence at 26%.
      </P>
      <P>
        Its biology is less settled than its name suggests. Stress is an
        important trigger, along with poor sleep, strained postures, alcohol,
        and dehydration, and tender muscles of the scalp and neck play a part.
        Researchers think signals from those tissues start the pain, while a
        more sensitive pain system – the central sensitization described in{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          how pain works
        </Link>{" "}
        – may explain how occasional headaches become chronic ones in some
        people.
      </P>
      <P>
        For occasional attacks, guidelines recommend simple pain relievers and
        anti-inflammatory medicines, which have good evidence behind them. The
        same guidelines say that triptans, muscle relaxants, and opioids
        should not be used for this headache. If opioid use is becoming hard
        to control, confidential help is available from the SAMHSA National
        Helpline at <strong>1-800-662-HELP (4357)</strong>. The limits of the
        everyday medicines themselves are covered in{" "}
        <Link href="/treatments/medication-organ-safety" className={link}>
          pain medications and your organs
        </Link>
        .
      </P>
      <P>
        When headaches become frequent or chronic, the approach shifts from
        treating each one to preventing them. The antidepressant amitriptyline
        is the first-choice preventive, used for its effect on pain signaling
        rather than on mood, with mirtazapine and venlafaxine as second
        choices. Guidelines are candid that these often help only partly and
        that side effects can limit them. Non-drug approaches should always be
        considered: biofeedback has documented benefit, and cognitive
        behavioral therapy and relaxation training are likely effective. These
        sit within the{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical and behavioral therapies
        </Link>
        .
      </P>

      <H2 id="overuse">The medication trap</H2>
      <P>
        There is a catch that applies to every frequent headache. Regular or
        frequent use of pain relievers and migraine medicines can increase how
        often headaches occur and turn an occasional problem into a chronic
        one. This is medication-overuse headache, and it affects between 1%
        and 2% of the general population each year.
      </P>
      <P>
        It is not a failure of willpower; it is a known effect of the
        medicines on a headache-prone nervous system. Treatment starts with
        education and reducing how often acute medicines are taken. Some
        people benefit from stopping the overused medicine, and some need
        preventive treatment alongside. Anyone reaching for headache medicine
        on many days of the month should raise it with a clinician rather than
        stopping abruptly on their own.
      </P>

      <H2 id="cluster">Cluster headache</H2>
      <P>
        Cluster headache is strictly one-sided, usually behind or around one
        eye. The pain peaks within five to ten minutes and lasts between 15
        minutes and three hours. On the painful side the eye may redden and
        water and the nose may run or block. People become restless and
        agitated rather than lying still, which is one way it differs from
        migraine. The pain is severe enough that women with cluster headache
        describe each attack as worse than childbirth.
      </P>
      <P>
        The name comes from the timing. Attacks arrive in runs called cluster
        periods, from one every other day up to eight a day, often at the
        same hour and often waking people from sleep. A typical pattern is one
        to three attacks a day for several weeks, twice a year, with months of
        freedom between. Because periods often fall in spring and autumn, they
        can be mistaken for allergies or sinus trouble. A small group has a
        chronic form with little relief. Cluster headache usually begins
        between ages 20 and 40 and is more common in men and in smokers;
        alcohol can trigger attacks during a cluster period.
      </P>
      <P>
        That clockwork timing points to the cause. Research implicates the
        hypothalamus, the part of the brain that keeps the body&rsquo;s daily
        and seasonal rhythms, as the generator of both the pain and the eye
        and nose symptoms.
      </P>

      <H2 id="cluster-treatment">Treating cluster headache</H2>
      <P>
        Because attacks peak within minutes, tablets act too slowly. The
        American Headache Society gives its highest level of recommendation to
        three fast-acting treatments: an injected triptan, a triptan nasal
        spray, and high-flow oxygen breathed through a mask. In a randomized
        trial of oxygen, people were pain-free at 15 minutes in 78% of attacks,
        compared with 20% of attacks treated with ordinary air, with no
        important adverse events.
      </P>
      <P>
        Prevention aims to shorten or quiet a cluster period. NINDS notes that
        most doctors choose verapamil, a heart and blood-pressure medicine, as
        the first preventive. In the guideline, a steroid injection near the
        nerve at the back of the head was the only preventive with top-level
        trial evidence – a reminder that several widely used cluster
        preventives rest on experience more than on large trials. All of these
        need a prescriber; this page gives no dosing guidance.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        The antibody drugs that changed migraine care are being tested here
        too. In a trial of galcanezumab for episodic cluster headache, weekly
        attacks fell by 8.7 compared with 5.2 on placebo; the trial stopped
        early because too few volunteers qualified, so the estimate is
        imprecise. The story of that drug class is told in{" "}
        <Link href="/future-of-pain-medicine/biologics-and-gene-therapy" className={link}>
          biologics and gene-targeted therapy
        </Link>
        . Nerve stimulation for cluster headache is also under study, part of
        the wider field of{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          neuromodulation
        </Link>
        . Tension-type headache, by contrast, has seen little new research
        since the early 2000s, which specialists themselves call a neglect out
        of proportion to how many people it affects.
      </P>

      <H2 id="urgent">When a headache needs urgent care</H2>
      <P>
        Most headaches are not dangerous, but some are warnings. NINDS advises
        calling or seeing a doctor right away for a sudden, severe headache,
        especially with a stiff neck; a severe headache with fever, nausea, or
        vomiting not explained by another illness; a first or worst headache
        with confusion, weakness, double vision, or loss of consciousness; a
        headache with numbness or weakness in any part of the body, which
        could signal a stroke; a headache after a head injury; or a headache
        with convulsions or trouble breathing.
      </P>
      <P>
        Less urgently, see a clinician for headaches that are getting worse
        over days or weeks or have changed in pattern, for two or more
        headaches a week, for a constant new headache – particularly after age
        50 – and for new headaches in someone with a history of cancer or HIV.
        A neurologist or headache specialist is the usual referral for
        suspected cluster headache, and a{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain specialist
        </Link>{" "}
        can help when head pain persists despite treatment.
      </P>
    </div>
  );
}
