import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — the medication map: the pain pathway from tissue to brain, with
 * each drug family attached at its site of action.
 */
function MapFigure() {
  const stations = [
    { x: 40, label: "Tissue" },
    { x: 200, label: "Nerve" },
    { x: 360, label: "Spinal cord" },
    { x: 520, label: "Brain" },
  ];
  const callout = (
    x: number,
    y: number,
    w: number,
    title: string,
    sub: string,
    isNew = false,
  ) => (
    <g key={title}>
      <rect
        x={x}
        y={y}
        width={w}
        height="52"
        rx="10"
        fill={isNew ? FIG.nerveTint : FIG.white}
        stroke={isNew ? FIG.nerveDark : FIG.line}
        strokeWidth={isNew ? 2 : 1.5}
      />
      <text x={x + w / 2} y={y + 22} textAnchor="middle" fontSize="13.5" fontWeight="700" fill={FIG.ink}>
        {title}
      </text>
      <text x={x + w / 2} y={y + 40} textAnchor="middle" fontSize="11" fill={FIG.textMid}>
        {sub}
      </text>
    </g>
  );
  return (
    <Figure caption="Where pain medications act along the pathway from tissue to brain. Each family intervenes at a different point — which is why no single 'painkiller' covers every pain.">
      <svg
        role="img"
        aria-labelledby="map-title map-desc"
        viewBox="0 0 680 420"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="map-title">Where pain medications act</title>
        <desc id="map-desc">
          The pain pathway drawn as four stations — tissue, nerve, spinal cord,
          brain — joined by an amber signal line. Drug families are attached
          where they act: NSAIDs and topicals at the tissue, suzetrigine and
          topical lidocaine at the nerve, gabapentinoids and the
          brake-boosting antidepressants at the spinal cord, opioids and
          acetaminophen centrally.
        </desc>

        {/* signal line through the stations */}
        <path
          d="M60 210 H640"
          fill="none"
          stroke={FIG.signal}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M628 202 L642 210 L628 218" fill="none" stroke={FIG.signal} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

        {/* stations */}
        {stations.map((s) => (
          <g key={s.label}>
            <rect x={s.x} y="184" width="120" height="52" rx="12" fill={FIG.nerveGround} stroke={FIG.nerveDark} strokeWidth="2" />
            <text x={s.x + 60} y="216" textAnchor="middle" fontSize="14.5" fontWeight="700" fill={FIG.ink}>
              {s.label}
            </text>
          </g>
        ))}

        {/* top callouts */}
        {callout(22, 60, 160, "NSAIDs · topical NSAIDs", "damp inflammatory chemistry")}
        {callout(184, 24, 156, "Suzetrigine — new, 2025", "blocks the signal at its source", true)}
        {callout(352, 60, 140, "SNRIs · tricyclics", "strengthen the brakes")}
        {callout(506, 24, 156, "Opioids", "turn down the alarm centrally")}

        {/* bottom callouts */}
        {callout(192, 320, 140, "Lidocaine · capsaicin", "topicals: numb or exhaust")}
        {callout(352, 320, 140, "Gabapentinoids", "calm sensitized signaling")}
        {callout(506, 320, 156, "Acetaminophen", "central; mechanism debated")}

        {/* connectors */}
        <g stroke={FIG.line} strokeWidth="1.5" fill="none">
          <path d="M100 112 L100 184" />
          <path d="M262 76 L262 184" />
          <path d="M422 112 L422 184" />
          <path d="M584 76 L584 184" />
          <path d="M262 320 L262 236" />
          <path d="M422 320 L422 236" />
          <path d="M584 320 L584 236" />
        </g>

        {/* descending-brakes arrow: brain down to cord */}
        <path
          d="M516 250 Q470 268 452 246"
          fill="none"
          stroke={FIG.nerve}
          strokeWidth="2.5"
          strokeDasharray="2 6"
          strokeLinecap="round"
        />
        <text x="500" y="282" textAnchor="middle" fontSize="11.5" fill={FIG.nerveDark}>
          descending pain control
        </text>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — match the mechanism: which families fit which pain type,
 * including the notable poor fit in each column.
 */
function MatchFigure() {
  const cols = [
    {
      x: 24,
      title: "Nociceptive",
      sub: "tissue & inflammation",
      fits: ["NSAIDs", "Acetaminophen", "Topical NSAIDs"],
      miss: "Nerve-pain drugs",
    },
    {
      x: 244,
      title: "Neuropathic",
      sub: "nerve damage",
      fits: ["Gabapentinoids", "SNRIs · tricyclics", "Topical lidocaine"],
      miss: "NSAIDs",
    },
    {
      x: 464,
      title: "Nociplastic",
      sub: "sensitized pain system",
      fits: ["Exercise & brain-targeted care", "Duloxetine (modest)"],
      miss: "Opioids",
    },
  ];
  return (
    <Figure caption="Match the mechanism: what tends to help each pain type — and the famous poor fit in each column. Mixed pain is common, which is why real regimens are often combinations (Finnerup 2015; ACP; CDC 2022).">
      <svg
        role="img"
        aria-labelledby="match-title match-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="match-title">Which medications fit which pain type</title>
        <desc id="match-desc">
          Three columns for nociceptive, neuropathic, and nociplastic pain.
          Each lists the medication families with evidence for that type,
          marked with teal dots, and one notable poor fit marked with a cross:
          nerve-pain drugs for nociceptive pain, NSAIDs for neuropathic pain,
          opioids for nociplastic pain.
        </desc>

        {cols.map((c) => (
          <g key={c.title}>
            <rect x={c.x} y="20" width="192" height="264" rx="14" fill={FIG.paper} stroke={FIG.soft} strokeWidth="1.5" />
            <text x={c.x + 96} y="52" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
              {c.title}
            </text>
            <text x={c.x + 96} y="71" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
              {c.sub}
            </text>
            <line x1={c.x + 20} y1="84" x2={c.x + 172} y2="84" stroke={FIG.soft} strokeWidth="1.5" />
            {c.fits.map((f, i) => (
              <g key={f}>
                <circle cx={c.x + 30} cy={108 + i * 36} r="5" fill={FIG.nerve} />
                <text x={c.x + 44} y={112 + i * 36} fontSize="12.5" fontWeight="600" fill={FIG.text}>
                  {f}
                </text>
              </g>
            ))}
            <g stroke={FIG.faint} strokeWidth="2.4" strokeLinecap="round">
              <line x1={c.x + 25} y1="239" x2={c.x + 35} y2="249" />
              <line x1={c.x + 35} y1="239" x2={c.x + 25} y2="249" />
            </g>
            <text x={c.x + 44} y="248" fontSize="12.5" fill={FIG.muted}>
              {c.miss} — poor fit
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function MedicationsForPain() {
  return (
    <div>
      <P>
        Walk down any pharmacy aisle and the shelf says &ldquo;pain
        relievers,&rdquo; as if pain were one thing and relief were one
        substance. It isn&rsquo;t, and this is the single most useful idea on
        this page: painkillers are not a ladder from weak to strong.
        They are <strong>different tools that act at different points</strong>{" "}
        on the pathway between an injured tissue and the brain that feels it.
        A medication that transforms one person&rsquo;s arthritis can do
        nothing for another person&rsquo;s nerve pain — not because either
        pain is less real, but because the mechanisms differ. Match the tool
        to the mechanism and modest drugs work well; mismatch them and even
        potent ones fail.
      </P>

      <H2 id="the-map">The map: where each family acts</H2>
      <MapFigure />
      <P>
        Reading the map from left to right: at the <strong>tissue</strong>,
        anti-inflammatory drugs blunt the chemical alarm of injury. At the{" "}
        <strong>nerve</strong>, local anesthetics — and now a new drug class —
        quiet the signal in transit. At the <strong>spinal cord</strong>, some
        medications calm sensitized signaling while others strengthen the
        body&rsquo;s own descending &ldquo;brakes.&rdquo; And in the{" "}
        <strong>brain</strong>, opioids and acetaminophen work on how loudly
        the alarm is experienced. The stations are the same ones described in{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          how pain works
        </Link>{" "}
        — every pain medication ever made is an intervention somewhere on that
        pathway.
      </P>

      <H2 id="everyday">The everyday two: acetaminophen and the NSAIDs</H2>
      <P>
        <strong>Acetaminophen</strong> (Tylenol, paracetamol) is the world&rsquo;s
        most-used pain reliever, and — remarkably — science is still debating
        exactly how it works; its action appears to be largely central, in the
        brain and spinal cord, with little effect on inflammation. Its
        defining safety boundary is the liver. On its own, at labeled doses,
        it is well tolerated; the danger is accumulation, because
        acetaminophen hides inside hundreds of combination cold, flu, sleep,
        and prescription pain products. Overdose — often unintentional — is a
        leading cause of acute liver failure, which is why pharmacists ask
        what else you are taking.
      </P>
      <P>
        The <strong>NSAIDs</strong> — ibuprofen, naproxen, aspirin,
        prescription relatives, and the anti-inflammatory medicines people
        search for by name — work at the scene of the injury: they block the
        prostaglandin chemistry that makes injured tissue swell, throb, and
        stay tender. That mechanism makes them genuinely effective for
        inflammatory and tissue-driven pain — sprains, arthritis flares,
        dental pain, menstrual pain — and it is why guidelines list them
        first-line for conditions like{" "}
        <Link href="/conditions/low-back-pain" className={link}>
          low back pain
        </Link>
        . The same mechanism sets their limits: prostaglandins also protect
        the stomach lining, support the kidneys, and balance cardiovascular
        function, so long-term or high-dose NSAID use carries stomach,
        kidney, and heart cautions that deserve a clinician&rsquo;s eyes —
        especially past middle age or alongside blood thinners.
      </P>

      <H2 id="topicals">Topicals: relief without the body-wide dose</H2>
      <P>
        Some of the most quietly useful pain medications never enter the
        bloodstream in meaningful amounts. Topical NSAID gels deliver the
        anti-inflammatory effect through the skin to a sore joint with a
        fraction of the systemic exposure. Lidocaine patches numb the nerve
        endings under them, useful for localized nerve pain such as
        post-shingles pain. Capsaicin — the chili-pepper molecule — works by
        overstimulating and then exhausting local pain fibers. For pain in
        one findable place, topicals are often worth asking about precisely
        because their risks stay local too.
      </P>

      <H2 id="nerve-pain">The nerve-pain medications — and their confusing names</H2>
      <P>
        Here is where more pain-medication confusion lives than anywhere
        else. If your physician offers an &ldquo;antidepressant&rdquo; or a
        &ldquo;seizure medication&rdquo; for pain, nothing is being implied
        about your mind. These drugs earned their names from their first
        jobs, but they have a second, independent pharmacology.{" "}
        <strong>Duloxetine</strong> and the older{" "}
        <strong>tricyclics</strong> boost the descending pathways the spinal
        cord uses to dampen pain traffic — the brakes in the figure above.{" "}
        <strong>Gabapentin and pregabalin</strong> bind a calcium-channel
        subunit on overexcited neurons and turn sensitized signaling down.
        For pain from damaged nerves — diabetic neuropathy, sciatica-type
        pain, post-shingles pain — the international NeuPSIG evidence review
        ranks exactly these families as first-line, ahead of any conventional
        painkiller. NSAIDs, for all their virtues, do little for this{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          type of pain
        </Link>
        .
      </P>

      <H2 id="muscle-relaxants">Muscle relaxants, briefly</H2>
      <P>
        For painful muscle spasm — the seized-up back, the wry neck —
        clinicians sometimes add a short course of a muscle relaxant. The
        honest evidence summary: modest benefit for short-term use, with
        drowsiness as the common tax, and little support for staying on them
        long. They are a bridge back to movement, not a maintenance plan.
      </P>

      <H2 id="opioids">Opioids: the honest picture</H2>
      <P>
        Opioids — morphine and its descendants — work on the receptors of the
        body&rsquo;s own pain-relief chemistry, turning down the alarm at the
        spinal cord and brain. For severe acute pain, surgical pain, cancer
        pain, and comfort at the end of life, they remain essential medicine,
        and nothing on this page argues otherwise. For long-term non-cancer
        pain the picture is more sobering: tolerance builds, benefits often
        fade, physical dependence develops with sustained use, and for a
        subset of people use progresses to addiction. The CDC&rsquo;s 2022
        guideline reframed the field away from one-size-fits-all limits and
        toward individualized decisions — maximizing non-opioid options
        first, starting low when opioids are used, and never abandoning
        patients who are already on them. If opioid use — yours or a loved
        one&rsquo;s — has become hard to control, confidential help exists
        and works: the SAMHSA helpline, 1-800-662-4357, is free and answers
        around the clock.
      </P>

      <H2 id="new-class">The first new class in decades</H2>
      <P>
        For most of living memory, every pain pill belonged to a family your
        grandparents would recognize. That changed in January 2025, when the
        FDA approved <strong>suzetrigine</strong> (Journavx) — the first
        medication of a genuinely new class in over twenty years. It blocks
        NaV1.8, a sodium channel found on pain-sensing nerves outside the
        brain, muting the pain signal at its source: no opioid receptors, no
        euphoria, no dependence liability. Its approval covers
        moderate-to-severe acute pain, and its deeper significance is the
        door it opens — a validated non-opioid mechanism with a pipeline of
        successors behind it, tracked on our{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pain treatment pipeline
        </Link>
        .
      </P>

      <H2 id="strongest">&ldquo;Strongest&rdquo; is the wrong question</H2>
      <MatchFigure />
      <P>
        The most searched question about pain relievers is which one is
        strongest — and the figure above is the answer the question deserves.
        Potency measures grip on one receptor; relief comes from{" "}
        <strong>mechanism match</strong>. Nerve-pain drugs underwhelm for a
        sprained ankle. NSAIDs underwhelm for neuropathy. Opioids underwhelm
        for the sensitized-system pain of fibromyalgia — where movement and
        brain-targeted care outperform them. And because long-lasting pain is
        so often{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          mixed-mechanism
        </Link>
        , real-world regimens are often thoughtful combinations of modest
        tools rather than one powerful one. That is not settling for less —
        it is how the pharmacology actually works.
      </P>

      <H2 id="ask">Questions worth bringing to your clinician</H2>
      <P>
        This page describes; your clinician prescribes. The conversation goes
        further if you arrive with the right questions: <em>Which mechanism
        do you think is driving my pain — and does this medication target
        it? What should improve, by when, and how will we decide whether
        it&rsquo;s working? What are the risks with my other medications and
        my health history? Is a topical option worth trying first? What is
        the plan for stopping?</em> A medication trial with a defined goal
        and an exit plan is modern pain medicine working as designed — and if
        your current regimen has grown without ever being re-examined, that
        review is exactly what{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          a pain specialist
        </Link>{" "}
        is for.
      </P>
    </div>
  );
}
