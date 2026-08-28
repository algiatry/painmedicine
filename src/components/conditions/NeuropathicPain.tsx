import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import { BodyFront } from "../anatomy/BodyOutline";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — the broken alarm wiring: a healthy nerve that signals only when
 * something happens vs. a damaged nerve firing on its own.
 */
function WiringFigure() {
  const myelin = (x0: number, gaps: number[] = []) =>
    [0, 1, 2, 3, 4, 5].filter((i) => !gaps.includes(i)).map((i) => (
      <rect
        key={i}
        x={x0 + i * 44}
        y="158"
        width="32"
        height="16"
        rx="8"
        fill={FIG.nerveTint}
        stroke={FIG.nerveDark}
        strokeWidth="1.8"
      />
    ));
  const spark = (x: number, y: number) => (
    <g key={`${x}-${y}`} stroke={FIG.signalDark} strokeWidth="2.2" strokeLinecap="round">
      <line x1={x - 7} y1={y - 4} x2={x - 2} y2={y - 12} />
      <line x1={x} y1={y - 14} x2={x} y2={y - 24} />
      <line x1={x + 7} y1={y - 4} x2={x + 2} y2={y - 12} />
    </g>
  );
  return (
    <Figure caption="The fault behind neuropathic pain: a healthy nerve carries signals only when something happens to it. A damaged nerve — its insulation patchy, its channels overactive — fires spontaneously, and fires at things that should not hurt.">
      <svg
        role="img"
        aria-labelledby="wire-title wire-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="wire-title">Healthy nerve vs. damaged nerve</title>
        <desc id="wire-desc">
          Two panels. Left: a healthy nerve fiber with intact insulation
          segments; one spark at its tip where a stimulus occurs, and a signal
          traveling once. Right: a damaged nerve with missing insulation
          segments and sparks firing at several points along its length with
          no stimulus at all.
        </desc>

        <line x1="340" y1="36" x2="340" y2="264" stroke={FIG.soft} strokeWidth="1.5" />

        {/* healthy panel */}
        <text x="170" y="56" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
          Healthy nerve
        </text>
        <text x="170" y="76" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          signals only when something happens
        </text>
        <line x1="36" y1="166" x2="304" y2="166" stroke={FIG.nerve} strokeWidth="3.5" strokeLinecap="round" />
        {myelin(44)}
        {spark(36, 152)}
        <text x="36" y="206" fontSize="11.5" fill={FIG.signalText}>
          a real stimulus
        </text>
        <path d="M120 132 H240" stroke={FIG.signal} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="10 8" />
        <path d="M232 125 L244 132 L232 139" fill="none" stroke={FIG.signal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="180" y="118" textAnchor="middle" fontSize="11.5" fill={FIG.signalText}>
          one honest message
        </text>

        {/* damaged panel */}
        <text x="510" y="56" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
          Damaged nerve
        </text>
        <text x="510" y="76" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          fires on its own — and to a light touch
        </text>
        <line x1="376" y1="166" x2="644" y2="166" stroke={FIG.nerve} strokeWidth="3.5" strokeLinecap="round" strokeDasharray="14 6" />
        {myelin(384, [1, 3, 4])}
        {spark(430, 152)}
        {spark(520, 152)}
        {spark(600, 152)}
        <text x="510" y="206" textAnchor="middle" fontSize="11.5" fill={FIG.signalText}>
          spontaneous firing — no stimulus at all
        </text>
        <text x="510" y="240" textAnchor="middle" fontSize="11.5" fill={FIG.textMid}>
          overactive sodium channels + patchy insulation = false alarms
        </text>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — the glove-and-stocking pattern: longest nerves fail first,
 * from the tips backward. First use of BodyFront's hand/foot anchors.
 */
function StockingGloveFigure() {
  return (
    <Figure caption="The glove-and-stocking pattern of peripheral neuropathy: the body's longest nerves struggle first, so symptoms begin in the toes and soles, spread upward, and reach the hands later.">
      <svg
        role="img"
        aria-labelledby="sg-title sg-desc"
        viewBox="0 0 680 360"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="sg-title">The glove-and-stocking pattern</title>
        <desc id="sg-desc">
          A schematic figure seen from the front, with amber pain markers on
          both feet and both hands. An upward arrow beside one leg shows
          symptoms spreading from the toes toward the knee as neuropathy
          advances.
        </desc>

        <g transform="translate(60 8) scale(0.72)">
          <BodyFront
            marks={[
              { at: "footL", size: "md" },
              { at: "footR", size: "md" },
              { at: "handL", size: "sm" },
              { at: "handR", size: "sm" },
            ]}
          />
        </g>

        {/* upward-spread arrow beside the left leg */}
        <path
          d="M96 318 L100 254"
          fill="none"
          stroke={FIG.signal}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="2 7"
        />
        <path d="M94 262 L100 250 L106 262" fill="none" stroke={FIG.signal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* labels */}
        <g fontSize="15" fontWeight="700" fill={FIG.ink}>
          <text x="330" y="300">The stocking</text>
          <text x="330" y="150">…then the glove</text>
        </g>
        <g fontSize="12.5" fill={FIG.textMid}>
          <text x="330" y="320">starts in the toes and soles —</text>
          <text x="330" y="337">the body&rsquo;s longest nerves fail first</text>
          <text x="330" y="170">hands join later, once the</text>
          <text x="330" y="187">damage reaches nerves of their length</text>
        </g>
        <path d="M322 312 Q240 330 172 324" fill="none" stroke={FIG.line} strokeWidth="1.5" />
        <path d="M322 162 Q260 172 200 190" fill="none" stroke={FIG.line} strokeWidth="1.5" />
        <text x="112" y="238" fontSize="11.5" fill={FIG.signalText}>
          spreads upward
        </text>
      </svg>
    </Figure>
  );
}

export default function NeuropathicPain() {
  return (
    <div>
      <P>
        Every other pain on this site is a report: tissue in trouble, nerves
        carrying the news. Neuropathic pain is different in kind. It is pain
        caused by damage or disease in the reporting system itself — the
        International Association for the Study of Pain defines it as pain
        from a lesion or disease of the somatosensory nervous system. The
        messenger has become the message. That single fact explains nearly
        everything strange about it: why it feels electric, why it strikes
        without provocation, why a bedsheet can hurt, and why the usual
        painkillers so often shrug. It is also common — studies put
        neuropathic pain at roughly <strong>7 to 10% of adults</strong>,
        making it one of the largest and most under-recognized territories in
        pain medicine.
      </P>

      <H2 id="broken-wiring">The wiring becomes the alarm</H2>
      <WiringFigure />
      <P>
        A healthy sensory nerve is disciplined: it fires when something
        happens to it, and otherwise keeps quiet. Injury and disease break
        that discipline. Damaged fibers accumulate extra sodium channels —
        the molecular triggers of nerve firing — and begin generating
        impulses spontaneously, with no stimulus at all. Patches of lost
        insulation let signals leak and cross-excite neighboring fibers. And
        the spinal cord, bombarded by this traffic, amplifies: circuits
        sensitize, and touch fibers that never carried pain get rewired into
        the alarm. The result is the neuropathic signature — spontaneous
        burning and electric shocks, <strong>allodynia</strong> (pain from a
        light touch), and the paradox that bewilders almost every patient:
        a region that is <em>numb and in pain at the same time</em>, because
        the same damage that loses real signal also manufactures false
        signal. If that paradox describes you, nothing is contradictory
        about your body — it is the textbook picture of{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          neuropathic pain
        </Link>
        .
      </P>

      <H2 id="feet-first">Why feet first</H2>
      <StockingGloveFigure />
      <P>
        The nerves serving your toes are the longest cells in your body —
        single fibers running from the spine to the foot. Length is
        vulnerability: a nerve struggling metabolically fails from its
        farthest tip backward, the way a city&rsquo;s outermost suburbs lose
        power first. So peripheral neuropathy classically announces itself in
        the toes and soles — burning, tingling, numbness, often worst at
        night — and creeps upward, with the hands joining once the damage
        reaches nerves of <em>their</em> length. <strong>Diabetes</strong> is
        the leading cause of this pattern in the developed world. But the
        list is long: shingles can leave lasting nerve pain in its wake
        (postherpetic neuralgia), chemotherapy agents injure nerve endings,
        alcohol and B-vitamin deficiency take their toll, compression does it
        locally —{" "}
        <Link href="/conditions/sciatica" className={link}>
          sciatica
        </Link>{" "}
        is neuropathic pain of a single nerve root — and central causes like
        stroke, multiple sclerosis, and spinal cord injury generate it from
        inside the cord and brain. And in a meaningful minority, a careful
        workup finds no cause at all. That is frustrating, common, and not a
        verdict on the pain&rsquo;s reality.
      </P>

      <H2 id="recognizing">How it&rsquo;s recognized</H2>
      <P>
        The diagnosis starts with vocabulary — burning, shooting, electric,
        pins and needles are pointing words — and with geography: neuropathic
        pain lives in nerve territory, whether a stocking, a single root&rsquo;s
        line down a leg, or a band of old shingles rash. The exam maps where
        sensation is heightened, lost, or both. Testing then works backward
        toward a cause: nerve-conduction studies assess the large, insulated
        fibers; a small skin biopsy can count the small fibers those studies
        miss; and blood work screens the treatable drivers — glucose,
        vitamin B12, thyroid, and others. The cause hunt matters, because
        the most effective move against neuropathic pain is often aimed at the cause
        rather than the pain.
      </P>

      <H2 id="prompt-care">When to move quickly</H2>
      <P>
        Most neuropathy evolves slowly, but some presentations deserve
        prompt medical attention: weakness that is new or spreading,
        symptoms advancing over days rather than months, trouble with
        balance out of proportion to numbness, or autonomic signs like
        fainting on standing. And numbness itself carries a quiet danger —
        feet that cannot feel are feet that get injured without noticing,
        which is why foot care and regular checks are a standing part of
        diabetic neuropathy care, pain or no pain.
      </P>

      <H2 id="treatment">How neuropathic pain is treated today</H2>
      <P>
        First, the cause, wherever one is treatable: steadier blood sugar,
        decompressing a trapped nerve, changing an offending medication,
        replacing a missing vitamin. For the pain itself, the international
        NeuPSIG evidence review ranks the options, and its first line is not
        what most people expect: <strong>gabapentinoids</strong> to calm
        overexcited signaling, and <strong>duloxetine, venlafaxine, or the
        tricyclics</strong> to strengthen the spinal cord&rsquo;s own
        pain-dampening pathways —{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          the nerve-pain medications
        </Link>
        , doing mechanism-matched work. Honesty about the numbers builds
        better plans than hype: even first-line drugs deliver meaningful
        relief to a minority of the people who try them — roughly one in
        four to eight — so finding your medication is often a sequence of
        fair trials, not a single prescription. For pain in one findable
        place, second-line topicals earn their keep: lidocaine patches, and
        high-concentration capsaicin applied in clinic. Opioids sit
        deliberately late in the rankings — weakly recommended, a
        specialist-supervised option rather than a path.
      </P>
      <P>
        When medications underwhelm, the field&rsquo;s hardware has matured.
        For painful diabetic neuropathy, high-frequency{" "}
        <strong>spinal cord stimulation</strong> was tested in a randomized
        trial against continued medical management: about eight in ten
        stimulator patients achieved substantial relief at six months,
        versus roughly one in twenty with medication alone — among the
        clearest device results in pain medicine, and the reason neuropathic
        pain is now a leading destination for{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          neuromodulation
        </Link>
        .
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        Neuropathic pain sits at the center of the field&rsquo;s most
        exciting science, because its mechanism names its target: the sodium
        channels that make damaged nerves fire. The first selective
        sodium-channel blocker reached patients in 2025 for acute pain, and
        successors aimed squarely at nerve pain are in trials — alongside
        gene-targeted approaches to the channel that, when mutated, can
        abolish or ignite pain on its own. The{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pipeline tracker
        </Link>{" "}
        follows all of it.
      </P>

      <H2 id="specialist">When to bring in a specialist</H2>
      <P>
        If nerve pain is still running your nights after a cause hunt and a
        fair first-line trial — or if the diagnosis itself is unclear — this
        is core{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain medicine
        </Link>{" "}
        territory: sorting mechanism, sequencing the medication trials,
        delivering the topical and procedural options, and judging when a
        stimulator conversation is warranted.{" "}
        <Link href="/find-help" className={link}>
          Finding pain care near you
        </Link>{" "}
        explains where to start.
      </P>
    </div>
  );
}
