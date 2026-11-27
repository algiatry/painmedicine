import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

export default function AcetaminophenAndNsaids() {
  return (
    <div>
      <P>
        Acetaminophen and the NSAIDs are the two everyday pain relievers
        most people already have. They are not interchangeable. One acts
        mainly in the brain and spinal cord and leaves inflammation
        largely alone. The other blocks prostaglandin chemistry at the
        injured tissue and is the better match for a swollen joint or a
        sprained ankle. Both are ordinary. Both have a body-wide tax
        when they are stacked, combined, or used for months.
      </P>
      <KeyTakeaways
        items={[
          <>
            <strong>Acetaminophen</strong> (Tylenol, paracetamol) is
            central, not anti-inflammatory. Its boundary is the liver,
            especially when it hides in cold and flu combinations.
          </>,
          <>
            <strong>NSAIDs</strong> (ibuprofen, naproxen, aspirin) work
            at the tissue. Guidelines list them first for many
            inflammatory pains. Stomach, kidney, and heart are the tax.
          </>,
          <>
            ACP lists NSAIDs among first medication options for{" "}
            <Link href="/conditions/low-back-pain" className={link}>
              low back pain
            </Link>
            . That is a ranking, not a requirement to take a pill.
          </>,
          <>
            The{" "}
            <Link href="/treatments/medication-organ-safety" className={link}>
              organ-safety
            </Link>{" "}
            page is the health-history half: liver, kidneys, heart, gut.
          </>,
        ]}
      />
      <Figure caption="Two jobs. Acetaminophen quiets the central readout. NSAIDs quiet the inflammatory chemistry at the tissue. Pick by mechanism, not by which box is closer.">
        <svg role="img" aria-labelledby="an-title an-desc" viewBox="0 0 700 150" className="mx-auto block h-auto w-full max-w-3xl">
          <title id="an-title">Acetaminophen versus NSAIDs</title>
          <desc id="an-desc">Two panels: acetaminophen acting centrally, NSAIDs acting at injured tissue.</desc>
          <rect x="16" y="16" width="324" height="118" rx="12" fill={FIG.nerveGround} stroke={FIG.nerve} strokeOpacity="0.4" />
          <text x="178" y="48" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>Acetaminophen</text>
          <text x="178" y="78" textAnchor="middle" fontSize="12" fill={FIG.textMid}>brain and spinal cord</text>
          <text x="178" y="100" textAnchor="middle" fontSize="12" fill={FIG.textMid}>little anti-inflammatory effect</text>
          <rect x="360" y="16" width="324" height="118" rx="12" fill={FIG.signalGround} stroke={FIG.signal} strokeOpacity="0.4" />
          <text x="522" y="48" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>NSAIDs</text>
          <text x="522" y="78" textAnchor="middle" fontSize="12" fill={FIG.textMid}>prostaglandins at the tissue</text>
          <text x="522" y="100" textAnchor="middle" fontSize="12" fill={FIG.textMid}>sprain, joint, dental, menstrual</text>
        </svg>
      </Figure>
      <H2 id="acetaminophen">Acetaminophen, and the stacking trap</H2>
      <P>
        Science is still arguing over the exact receptor story.
        Practically, it reduces fever and pain without much
        anti-inflammatory punch, which is why a hot, swollen knee often
        needs an NSAID instead. The FDA&rsquo;s consumer warning is
        about doubling up: the same molecule sits inside hundreds of
        combination cold, flu, sleep, and prescription products. Taken
        together they add up. Unintentional overdose is a leading cause
        of acute liver failure. A pharmacist asking what else you took
        this week is doing the real safety work.
      </P>
      <H2 id="nsaids">NSAIDs, and why the same chemistry cuts both ways</H2>
      <P>
        Blocking prostaglandins calms swelling and tenderness. It also
        thins the stomach&rsquo;s defenses, leans on the kidneys, and
        has a cardiovascular warning the FDA added in 2015 for the
        class. Ibuprofen and naproxen are the names people know;
        aspirin is in the family with its own clotting story; diclofenac
        gel is the same class through the skin, covered on the{" "}
        <Link href="/treatments/topicals-for-pain" className={link}>
          topicals
        </Link>{" "}
        page. Blood thinners, prior ulcers, kidney disease, and heart
        disease are the reasons to ask before making ibuprofen a daily
        habit.{" "}
        <Link href="/conditions/arthritis-pain" className={link}>
          Arthritis
        </Link>{" "}
        flares and dental pain are where this mechanism earns its keep.
      </P>
      <H2 id="which">Which one, and for how long</H2>
      <P>
        Tissue-driven, inflammatory pain: NSAIDs are usually the better
        mechanistic match, if the rest of the body can tolerate them.
        Pain without much swelling, or a reason to avoid NSAIDs:
        acetaminophen is the ordinary alternative. Neither is a
        nerve-pain drug. Neither is a muscle relaxant. The{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications map
        </Link>{" "}
        is the wider landscape. Questions: what else already contains
        acetaminophen, whether the stomach and kidneys have a vote, and
        whether this is a few days or an open-ended plan.
      </P>
    </div>
  );
}
