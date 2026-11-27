import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

export default function PacingForPain() {
  return (
    <div>
      <P>
        The most common way an activity program fails is the boom-bust
        cycle: a good day arrives, everything postponed gets done, the
        sensitized system flares, and days are lost. That sequence
        teaches the nervous system that activity is dangerous. Pacing
        is the escape hatch: a baseline you can keep even on a bad day,
        increased on a schedule, by plan not by pain.
      </P>
      <KeyTakeaways
        items={[
          <>
            Boom-bust is a <strong>sawtooth that trends down</strong>:
            heroics, then a crash.
          </>,
          <>
            Pacing is a <strong>staircase</strong>: boring consistency,
            then planned steps.
          </>,
          <>
            Good days no longer trigger overdraft spending. Bad days no
            longer stop the program.
          </>,
          <>
            It is a skill inside{" "}
            <Link href="/treatments/movement-as-medicine" className={link}>
              movement
            </Link>{" "}
            and{" "}
            <Link href="/treatments/cbt-and-mindfulness-for-pain" className={link}>
              CBT
            </Link>
            , not a personality trait.
          </>,
        ]}
      />
      <Figure caption="Left: spikes and crashes. Right: a staircase. The right-hand version feels slower. It compounds faster than crashing does.">
        <svg role="img" aria-labelledby="pc-title pc-desc" viewBox="0 0 700 150" className="mx-auto block h-auto w-full max-w-3xl">
          <title id="pc-title">Boom-bust versus pacing</title>
          <desc id="pc-desc">A jagged line versus a rising staircase.</desc>
          <path d="M20 80 L50 30 L80 110 L110 40 L140 115 L170 50 L200 118" fill="none" stroke={FIG.signalDark} strokeWidth="3" strokeLinejoin="round" />
          <text x="110" y="140" textAnchor="middle" fontSize="12" fill={FIG.textMid}>boom-bust</text>
          <path d="M380 110 H 430 V 90 H 490 V 72 H 550 V 55 H 620 V 40 H 680" fill="none" stroke={FIG.nerveDark} strokeWidth="4" strokeLinejoin="round" />
          <text x="530" y="140" textAnchor="middle" fontSize="12" fill={FIG.textMid}>pacing</text>
        </svg>
      </Figure>
      <H2 id="how">How it is done</H2>
      <P>
        Find the amount of walking, sitting, or chores you can repeat
        tomorrow even if today is a bad day. That is the baseline, not
        the personal best. Hold it with dull consistency for long
        enough that flares stop owning the calendar. Then increase by
        a planned fraction, not because you feel good. NICE&rsquo;s
        low-back guideline is built around staying active; pacing is
        how staying active survives real life. It is not the same as
        doing less forever.
      </P>
      <H2 id="fit">How this sits</H2>
      <P>
        Pacing belongs on the{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical and behavioral
        </Link>{" "}
        map as the skill that keeps the other two levers from
        cancelling each other. Questions: what is the baseline on a
        bad day, what is the next planned step, and who notices when
        a good day is about to become an overdraft.
      </P>
    </div>
  );
}
