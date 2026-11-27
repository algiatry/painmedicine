import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

export default function MovementAsMedicine() {
  return (
    <div>
      <P>
        Exercise treats pain through chemistry and through learning, not
        through fitness culture. A bout of activity turns on the
        body&rsquo;s own pain-dampening systems. Progressive loading
        rebuilds the muscle that cushions joints and spine. And every
        safe repetition is data for a sensitized nervous system: this
        movement is not a threat. Guidelines put it first for{" "}
        <Link href="/conditions/low-back-pain" className={link}>
          back pain
        </Link>{" "}
        and{" "}
        <Link href="/conditions/arthritis-pain" className={link}>
          arthritis
        </Link>{" "}
        because the safety profile is better than any pill, and the
        average effect, though modest, stacks.
      </P>
      <KeyTakeaways
        items={[
          <>
            Hayden&rsquo;s Cochrane review found exercise{" "}
            <strong>probably reduces pain</strong> in chronic low back
            pain versus no treatment or usual care.
          </>,
          <>
            Effects are usually <strong>modest</strong>. Adherence is
            the active ingredient.
          </>,
          <>
            The menu is broad: therapist-led loading, tai chi, yoga,
            water work. Heat and massage are supporting roles.
          </>,
          <>
            <Link href="/treatments/pacing-for-pain" className={link}>
              Pacing
            </Link>{" "}
            is how a program survives a good day.
          </>,
        ]}
      />
      <Figure caption="Loading that stays under the flare line, then steps up by plan. Fitness is a side effect. The target is capacity and threat-unlearning.">
        <svg role="img" aria-labelledby="mv-title mv-desc" viewBox="0 0 700 130" className="mx-auto block h-auto w-full max-w-3xl">
          <title id="mv-title">Progressive loading</title>
          <desc id="mv-desc">A staircase of activity rising over weeks.</desc>
          <path d="M40 100 H 80 V 85 H 140 V 70 H 200 V 55 H 280 V 42 H 360 V 30 H 660" fill="none" stroke={FIG.nerveDark} strokeWidth="4" strokeLinejoin="round" />
          <text x="350" y="118" textAnchor="middle" fontSize="12" fill={FIG.textMid}>weeks · capacity up, not heroics</text>
        </svg>
      </Figure>
      <H2 id="evidence">What the reviews measured</H2>
      <P>
        Hayden and colleagues&rsquo; 2021 Cochrane review of exercise
        for chronic low back pain found moderate-certainty evidence that
        exercise is more effective than no treatment, usual care, or
        placebo for pain at earliest follow-up. Against other
        conservative care the extra benefit was smaller. ACP 2017 and
        NICE NG59 both put exercise first. Tai chi matched or beat
        aerobic exercise for{" "}
        <Link href="/conditions/fibromyalgia" className={link}>
          fibromyalgia
        </Link>{" "}
        in a randomized trial already cited on that page. No form of
        exercise is magic. The form you will repeat is the one that
        works.
      </P>
      <H2 id="fit">How this sits</H2>
      <P>
        Movement is one lever on the{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical and behavioral
        </Link>{" "}
        page.{" "}
        <Link href="/treatments/cbt-and-mindfulness-for-pain" className={link}>
          CBT and mindfulness
        </Link>{" "}
        pull the other. Questions: what you will do on a bad day, who
        progresses the plan, and whether heat or massage is opening a
        door or replacing the work.
      </P>
    </div>
  );
}
