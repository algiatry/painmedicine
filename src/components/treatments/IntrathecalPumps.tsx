import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

export default function IntrathecalPumps() {
  return (
    <div>
      <P>
        An intrathecal pump sits under the skin and delivers medicine
        through a catheter into the spinal fluid. The dose at the cord
        can be a fraction of what pills require, which is why the device
        earned its keep in{" "}
        <Link href="/conditions/cancer-pain" className={link}>
          cancer pain
        </Link>{" "}
        that outruns what the mouth can take. It is surgery, hardware,
        refills, and a long relationship with a clinic. It is not a
        quieter pill.
      </P>
      <KeyTakeaways
        items={[
          <>
            The evidence is strongest as a{" "}
            <strong>cancer-pain option</strong> when systemic medicine is
            failing or the side effects are.
          </>,
          <>
            Morphine-class drugs and ziconotide are the labeled
            intrathecal analgesics. Mixing cocktails is specialist craft.
          </>,
          <>
            Infection, catheter problems, pump failure, and granuloma at
            the catheter tip are the hardware tax.
          </>,
          <>
            If use of these medicines has become hard to control, the
            SAMHSA helpline is <strong>1-800-662-4357</strong>.
          </>,
        ]}
      />
      <Figure caption="A reservoir under the skin, a catheter to the spinal fluid. The point is concentration at the cord, not a new molecule.">
        <svg role="img" aria-labelledby="pump-title pump-desc" viewBox="0 0 700 140" className="mx-auto block h-auto w-full max-w-3xl">
          <title id="pump-title">Intrathecal pump</title>
          <desc id="pump-desc">A round pump under the skin connected by a catheter to the spinal canal.</desc>
          <circle cx="180" cy="70" r="36" fill={FIG.nerveTint} stroke={FIG.nerveDark} strokeWidth="3" />
          <text x="180" y="74" textAnchor="middle" fontSize="12" fontWeight="700" fill={FIG.ink}>pump</text>
          <path d="M216 70 H 420" stroke={FIG.nerveDark} strokeWidth="4" />
          <rect x="420" y="24" width="36" height="92" rx="8" fill={FIG.white} stroke={FIG.nerveDark} strokeWidth="2" />
          <text x="540" y="74" fontSize="12" fill={FIG.textMid}>spinal fluid</text>
        </svg>
      </Figure>
      <H2 id="who">Who it is for</H2>
      <P>
        Smith and colleagues&rsquo; randomized trial in cancer pain
        compared comprehensive medical management with the addition of
        an implantable pump. The pump arm had more people reaching a
        pain-and-toxicity goal. That is the core evidence, not a blank
        check for chronic non-cancer pain. Ziconotide, a snail-peptide
        calcium-channel blocker, is the other labeled intrathecal
        analgesic and does not belong to the morphine family. Selection,
        a trial of the drug in some programs, and a team that refills
        and troubleshoots the device are the difference between a tool
        and an abandoned implant.
      </P>
      <H2 id="risks">What can go wrong</H2>
      <P>
        Pockets get infected. Catheters kink, migrate, or occlude.
        Granulomas can form at the tip with some infusions and injure
        the cord. Overdose or withdrawal can follow a programming error
        or a missed refill. This is why pumps live in programs, not in
        one-off operating rooms. If opioid or other substance use has
        become hard to control, the SAMHSA National Helpline is free,
        confidential, and open around the clock at 1-800-662-4357.
      </P>
      <H2 id="fit">How this sits</H2>
      <P>
        A pump is a late rung on the{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          interventional
        </Link>{" "}
        ladder, after{" "}
        <Link href="/treatments/spinal-cord-stimulation" className={link}>
          stimulation
        </Link>{" "}
        has been considered for nerve-type pain, and after the cancer
        team has run out of easier routes. Questions: which drug, who
        refills it, what happens if it fails, and what the goal is
        besides a smaller oral bottle.
      </P>
    </div>
  );
}
