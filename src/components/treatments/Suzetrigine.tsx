import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

export default function Suzetrigine() {
  return (
    <div>
      <P>
        Suzetrigine (Journavx) is the first new oral pain-drug class in
        decades: a selective blocker of NaV1.8, a sodium channel on
        pain-sensing nerves outside the brain. The FDA approved it in
        January 2025 for moderate-to-severe acute pain. It is not
        approved for chronic pain. The{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pipeline
        </Link>{" "}
        tracks what Vertex is doing next. This page is the approved use.
      </P>
      <KeyTakeaways
        items={[
          <>
            It blocks <strong>NaV1.8 on peripheral pain nerves</strong>.
            It does not act on the brain&rsquo;s reward system.
          </>,
          <>
            The label is <strong>acute pain</strong>: after surgery, injury,
            not a standing chronic-pain pill.
          </>,
          <>
            Phase 3 trials after bunionectomy and abdominoplasty beat
            placebo on pain scores. Headache and nausea were common.
          </>,
          <>
            Chronic uses, including diabetic nerve pain, are{" "}
            <strong>still in trials</strong>. Approved is not the same as
            studied-for-everything.
          </>,
        ]}
      />
      <Figure caption="Ordinary pain pills act at tissue chemistry or in the brain. Suzetrigine sits on the peripheral nerve's own sodium channel. That is a different address, which is why it is a different class.">
        <svg role="img" aria-labelledby="suz-title suz-desc" viewBox="0 0 700 140" className="mx-auto block h-auto w-full max-w-3xl">
          <title id="suz-title">Where suzetrigine acts</title>
          <desc id="suz-desc">A peripheral nerve with NaV1.8 marked as the block site, away from the brain.</desc>
          <rect x="16" y="20" width="200" height="100" rx="12" fill={FIG.signalGround} stroke={FIG.signal} strokeOpacity="0.4" />
          <text x="116" y="60" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.ink}>tissue</text>
          <text x="116" y="82" textAnchor="middle" fontSize="12" fill={FIG.textMid}>NSAIDs</text>
          <rect x="250" y="20" width="200" height="100" rx="12" fill={FIG.nerveGround} stroke={FIG.nerveDark} strokeOpacity="0.45" />
          <text x="350" y="60" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.ink}>peripheral nerve</text>
          <text x="350" y="82" textAnchor="middle" fontSize="12" fill={FIG.textMid}>NaV1.8 · suzetrigine</text>
          <rect x="484" y="20" width="200" height="100" rx="12" fill={FIG.paper} stroke={FIG.faint} />
          <text x="584" y="60" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.ink}>brain</text>
          <text x="584" y="82" textAnchor="middle" fontSize="12" fill={FIG.textMid}>not this drug&apos;s job</text>
        </svg>
      </Figure>
      <H2 id="trials">What the acute-pain trials showed</H2>
      <P>
        Jones and colleagues reported Phase 2 data in the New England
        Journal of Medicine: VX-548 (the code name) reduced acute pain
        after surgery compared with placebo. Later Phase 3 programs in
        bunionectomy and abdominoplasty supported the January 2025
        approval. The comparison that matters for a person leaving
        surgery is whether this is available for their procedure, on
        their formulary, and whether the pain is acute. It is not a
        substitute for the{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          everyday painkillers
        </Link>{" "}
        or for the{" "}
        <Link href="/treatments/comparing-your-options" className={link}>
          acute-pain evidence
        </Link>{" "}
        on when morphine-class drugs help and when they do not.
      </P>
      <H2 id="not-chronic">What it is not</H2>
      <P>
        Chronic pain, including{" "}
        <Link href="/conditions/diabetic-neuropathy" className={link}>
          painful diabetic neuropathy
        </Link>
        , is a research question. Vertex has described Phase 3
        neuropathy studies as ongoing. Until a label changes, using
        suzetrigine as a long-term nerve-pain tablet is using it off
        the approved map. Side effects in the acute trials included
        headache, nausea, constipation, and dizziness.
      </P>
      <H2 id="fit">How this sits</H2>
      <P>
        Questions for a clinician: is the pain acute, is this on the
        hospital or pharmacy list, and what is the plan after a few
        days. The class is new. The job is still a window.
      </P>
    </div>
  );
}
