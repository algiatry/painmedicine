import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

export default function JointSteroidInjections() {
  return (
    <div>
      <P>
        A cortisone shot into a joint is not the same procedure as an{" "}
        <Link href="/treatments/epidural-steroid-injections" className={link}>
          epidural
        </Link>
        . This one goes into the synovial space of a{" "}
        <Link href="/conditions/knee-and-hip-osteoarthritis" className={link}>
          knee
        </Link>
        , a shoulder, a hip, or a smaller joint you can reach with imaging.
        It calms inflammation in that capsule for a stretch of weeks. It
        does not rebuild cartilage, and repeating it as a calendar habit
        is how a useful bridge becomes a stall.
      </P>
      <KeyTakeaways
        items={[
          <>
            Cochrane evidence for knee osteoarthritis is{" "}
            <strong>short-term pain relief</strong>, on the order of weeks.
          </>,
          <>
            It is a <strong>different address</strong> from an epidural
            steroid injection, which bathes a nerve root.
          </>,
          <>
            Benefit fades. A shot that has to be repeated as the only
            plan is a sign the plan is too small.
          </>,
          <>
            Image guidance matters for deep joints. A hip is not a knee
            you can feel with a finger.
          </>,
        ]}
      />
      <Figure caption="The steroid is aimed at the joint lining, not at a nerve root in the spine. Same drug family, different job, different evidence.">
        <svg
          role="img"
          aria-labelledby="csi-title csi-desc"
          viewBox="0 0 700 160"
          className="mx-auto block h-auto w-full max-w-3xl"
        >
          <title id="csi-title">Joint injection versus epidural</title>
          <desc id="csi-desc">
            Two panels: a needle into a knee joint space, versus a needle
            into the epidural space around a nerve root.
          </desc>
          <rect x="16" y="16" width="324" height="128" rx="12" fill={FIG.nerveGround} stroke={FIG.nerve} strokeOpacity="0.4" />
          <text x="178" y="44" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>Joint</text>
          <ellipse cx="178" cy="88" rx="40" ry="22" fill={FIG.white} stroke={FIG.nerveDark} strokeWidth="2" />
          <text x="178" y="128" textAnchor="middle" fontSize="12" fill={FIG.textMid}>synovial space · weeks</text>
          <rect x="360" y="16" width="324" height="128" rx="12" fill={FIG.signalGround} stroke={FIG.signal} strokeOpacity="0.4" />
          <text x="522" y="44" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>Epidural</text>
          <path d="M490 70 v50" stroke={FIG.nerveDark} strokeWidth="8" strokeLinecap="round" />
          <text x="522" y="128" textAnchor="middle" fontSize="12" fill={FIG.textMid}>nerve root · also weeks</text>
        </svg>
      </Figure>
      <H2 id="numbers">What the reviews measured</H2>
      <P>
        Jüni and colleagues&rsquo; Cochrane review of intra-articular
        corticosteroid for{" "}
        <Link href="/conditions/arthritis-pain" className={link}>
          knee osteoarthritis
        </Link>{" "}
        found pain relief that is real and short. Effects were most
        visible in the first weeks and uncertain beyond. That matches
        what clinics see: a useful window, then the joint is still the
        joint. The American College of Rheumatology&rsquo;s 2019
        osteoarthritis guideline treats injections as one option among
        others, not as first-line ahead of{" "}
        <Link href="/treatments/topicals-for-pain" className={link}>
          topical anti-inflammatories
        </Link>{" "}
        and movement for a reachable knee.
      </P>
      <H2 id="limits">What it cannot do</H2>
      <P>
        It cannot straighten an X-ray. Frequent, closely spaced shots
        raise questions about cartilage and about masking a joint that
        needs a different plan. Blood-sugar bumps in people with
        diabetes are expected for a few days. Infection in the joint is
        uncommon and the reason the skin is prepped as if it matters.
        A hip usually needs imaging; a guessed trajectory is how the
        drug misses the capsule.
      </P>
      <H2 id="fit">How this sits with everything else</H2>
      <P>
        This is one tool on the{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          interventional
        </Link>{" "}
        map. Questions for the visit: which joint, how long a prior shot
        lasted, what will fill the weeks it buys, and whether{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          movement
        </Link>{" "}
        is already in the plan.
      </P>
    </div>
  );
}
