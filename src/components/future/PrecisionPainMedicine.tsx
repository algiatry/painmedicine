import Link from "next/link";
import { Figure, H2, P } from "@/components/science/Figure";

const GROUPS = [
  {
    x: 20,
    cx: 136,
    accent: "#64748b",
    title: "Poor metabolizer",
    sub: "gene barely active",
    pct: 0.15,
    pctLabel: "little morphine",
    out1: "Too little effect —",
    out2: "poor pain relief",
  },
  {
    x: 282,
    cx: 398,
    accent: "#0d9488",
    title: "Normal metabolizer",
    sub: "gene works as usual",
    pct: 0.55,
    pctLabel: "expected morphine",
    out1: "The intended amount —",
    out2: "codeine works as designed",
  },
  {
    x: 544,
    cx: 660,
    accent: "#d97706",
    title: "Ultrarapid metabolizer",
    sub: "gene overactive",
    pct: 0.95,
    pctLabel: "too much morphine",
    out1: "Too much, too fast —",
    out2: "risk of dangerous toxicity",
  },
];

function MetabolizerFigure() {
  return (
    <Figure caption="The same dose of codeine, three different people. The CYP2D6 gene decides how much morphine each one makes — and whether the drug is useless, effective, or dangerous.">
      <svg
        role="img"
        aria-labelledby="pgx-title pgx-desc"
        viewBox="0 0 780 250"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="pgx-title">CYP2D6 and codeine — the metabolizer spectrum</title>
        <desc id="pgx-desc">
          Three cards for poor, normal, and ultrarapid metabolizers, each showing
          how much morphine the body makes from the same codeine dose and the
          resulting outcome.
        </desc>
        {GROUPS.map((g) => (
          <g key={g.title}>
            <rect x={g.x} y="16" width="232" height="218" rx="14" fill="#ffffff" stroke="#e2e8f0" />
            <rect x={g.x} y="16" width="232" height="6" rx="3" fill={g.accent} />
            <text x={g.cx} y="52" textAnchor="middle" fontSize="16.5" fontWeight="700" fill="#0f172a">
              {g.title}
            </text>
            <text x={g.cx} y="72" textAnchor="middle" fontSize="12.5" fontWeight="600" fill={g.accent}>
              {g.sub}
            </text>
            <text x={g.cx} y="104" textAnchor="middle" fontSize="12" fill="#64748b">
              codeine → morphine
            </text>
            <rect x={g.x + 26} y="116" width="180" height="14" rx="7" fill="#e2e8f0" />
            <rect x={g.x + 26} y="116" width={180 * g.pct} height="14" rx="7" fill={g.accent} />
            <text x={g.cx} y="152" textAnchor="middle" fontSize="12" fill="#64748b">
              {g.pctLabel}
            </text>
            <text x={g.cx} y="188" textAnchor="middle" fontSize="13.5" fontWeight="600" fill="#0f172a">
              {g.out1}
            </text>
            <text x={g.cx} y="206" textAnchor="middle" fontSize="13.5" fill="#475569">
              {g.out2}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function PrecisionPainMedicine() {
  return (
    <div>
      <MetabolizerFigure />

      <P>
        Two people with the same injury can need completely different treatments
        — and can react to the very same drug in opposite ways. Precision pain
        medicine aims to use your biology to guide care, replacing trial and
        error with something closer to a fit.
      </P>

      <H2 id="genes">Your genes and your painkillers</H2>
      <P>
        The clearest example is already in your medical record&rsquo;s reach.
        Codeine does nothing on its own — your body has to convert it into
        morphine, using an enzyme built by the gene{" "}
        <strong>CYP2D6</strong>. But people carry different versions of that
        gene. <strong>Poor metabolizers</strong> convert very little and get
        weak pain relief. <strong>Ultrarapid metabolizers</strong> convert too
        much, too fast — enough that the FDA carries a boxed warning after
        children died of respiratory depression following routine surgery.
      </P>
      <P>
        This is not theoretical. National prescribing guidelines now advise{" "}
        <strong>avoiding codeine and tramadol entirely</strong> in poor and
        ultrarapid metabolizers, and pharmacogenomic testing for CYP2D6 exists to
        identify them in advance. It is precision pain medicine you can act on
        today — the same dose, a different gene, a completely different outcome.
      </P>
      <P>
        Because codeine and tramadol are opioids, one note belongs here as much
        as anywhere: if you or someone you love is struggling with opioid or
        other substance use, the SAMHSA National Helpline is free, confidential,
        and open 24/7 at <strong>1-800-662-HELP (4357)</strong>.
      </P>

      <H2 id="mechanism">Matching the drug to the mechanism</H2>
      <P>
        Precision is not only genetic. It also means matching the treatment to
        the <em>kind</em> of pain you have — the nociceptive, neuropathic, and
        nociplastic distinction in{" "}
        <Link
          href="/understanding-pain/types-of-pain"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          the three types of pain
        </Link>
        . A nerve-pain medicine will do little for a mechanical joint problem,
        and vice versa. Careful sensory testing can help sort out which pain
        system is misbehaving, pointing toward the treatments most likely to
        help before the trial-and-error even begins.
      </P>

      <H2 id="biomarkers">The search for an objective signal</H2>
      <P>
        Pain has no blood test — and a great deal of research is trying to change
        that. Quantitative sensory testing, brain and nerve imaging, and
        candidate blood markers are all being studied as{" "}
        <strong>biomarkers</strong> that could confirm a pain mechanism, predict
        who will respond to a given treatment, or flag who is at risk of pain
        becoming chronic. None is ready for routine clinic use yet, but even a
        rough objective signal would change how pain is diagnosed.
      </P>

      <H2 id="ai">Where AI fits — carefully</H2>
      <P>
        Machine learning is being applied to some of these problems: reading
        imaging, spotting patterns across large datasets, and estimating the risk
        that acute pain will turn chronic. It is early, and it carries real risks
        of bias if trained on incomplete data — pain has a long history of being
        under-recognized in some groups. Treated as a tool to support clinicians
        rather than replace judgment, it may help target care; oversold, it could
        entrench old inequities.
      </P>

      <H2 id="fit">From the average patient to you</H2>
      <P>
        The common thread is a shift away from treating an average patient and
        toward treating <em>you</em> — your genes, your pain mechanism, your
        risk. Many of the new drugs in the{" "}
        <Link
          href="/future-of-pain-medicine/pipeline"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          pain treatment pipeline
        </Link>{" "}
        are being built for specific patient groups from the start — precision by
        design.
      </P>
    </div>
  );
}
