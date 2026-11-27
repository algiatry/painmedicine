import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

export default function CbtAndMindfulnessForPain() {
  return (
    <div>
      <P>
        Cognitive behavioral therapy for pain retrains the thoughts,
        fears, and behaviors that turn the volume up. Mindfulness-based
        stress reduction trains attention so a flare is less of a
        full-body emergency. Neither implies the pain is imaginary.
        Both assume pain runs on circuitry, and circuitry trains. The
        Cochrane reviews and a head-to-head JAMA trial put numbers on
        that.
      </P>
      <KeyTakeaways
        items={[
          <>
            Cochrane evidence for CBT in chronic pain is{" "}
            <strong>reliable and usually modest</strong> for pain and
            disability.
          </>,
          <>
            Cherkin&rsquo;s JAMA trial found{" "}
            <strong>MBSR and CBT both beat usual care</strong> for
            chronic low back pain, with gains at a year, and no
            meaningful difference between them.
          </>,
          <>
            ACT and CBT for insomnia are cousins, not replacements.
          </>,
          <>
            None of this replaces{" "}
            <Link href="/treatments/movement-as-medicine" className={link}>
              movement
            </Link>
            . The plans that change lives pull both levers.
          </>,
        ]}
      />
      <Figure caption="CBT works the thoughts and behaviors that amplify pain. Mindfulness works attention. Same nervous system, two training methods. Cherkin found them statistically tied.">
        <svg role="img" aria-labelledby="cbt-title cbt-desc" viewBox="0 0 700 140" className="mx-auto block h-auto w-full max-w-3xl">
          <title id="cbt-title">CBT and mindfulness</title>
          <desc id="cbt-desc">Two panels for CBT and MBSR, both pointing at the pain system.</desc>
          <rect x="16" y="16" width="324" height="108" rx="12" fill={FIG.nerveGround} stroke={FIG.nerve} strokeOpacity="0.4" />
          <text x="178" y="52" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>CBT for pain</text>
          <text x="178" y="80" textAnchor="middle" fontSize="12" fill={FIG.textMid}>thoughts, fear, behavior</text>
          <rect x="360" y="16" width="324" height="108" rx="12" fill={FIG.signalGround} stroke={FIG.signal} strokeOpacity="0.4" />
          <text x="522" y="52" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>MBSR</text>
          <text x="522" y="80" textAnchor="middle" fontSize="12" fill={FIG.textMid}>attention, less emergency</text>
        </svg>
      </Figure>
      <H2 id="evidence">What the trials measured</H2>
      <P>
        Williams and colleagues&rsquo; Cochrane review of psychological
        therapies for chronic pain (excluding headache) found CBT
        produced small to moderate benefits for pain, disability, and
        mood versus usual treatment. Cherkin randomized adults with
        chronic low back pain to MBSR, CBT, or usual care: both active
        arms beat usual care on function and pain at 26 and 52 weeks,
        and they did not differ from each other in a way that mattered.
        Acceptance and commitment therapy aims at a life that has
        shrunk, without waiting for pain to leave first. CBT for
        insomnia treats the{" "}
        <Link href="/understanding-pain/pain-and-sleep" className={link}>
          sleep half
        </Link>{" "}
        of the cycle directly.
      </P>
      <H2 id="fit">How this sits</H2>
      <P>
        This is the brain-side lever on the{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical and behavioral
        </Link>{" "}
        page. A psychologist who treats pain specifically is the mark
        of the real version, not a general pep talk. Specialized
        imagery work for{" "}
        <Link href="/conditions/crps" className={link}>
          CRPS
        </Link>{" "}
        lives on{" "}
        <Link href="/future-of-pain-medicine/mind-and-brain" className={link}>
          mind and brain
        </Link>
        .
      </P>
    </div>
  );
}
