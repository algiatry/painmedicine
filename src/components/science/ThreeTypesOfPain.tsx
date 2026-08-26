import Link from "next/link";
import { Figure, H2, P } from "./Figure";

const TYPES = [
  {
    key: "nociceptive",
    name: "Nociceptive",
    tag: "tissue damage",
    accent: "#d97706",
    tint: "#fef3c7",
    line1: "Nociceptors fire from actual or",
    line2: "threatened harm to tissue.",
    examples: "sprains · arthritis · a cut",
  },
  {
    key: "neuropathic",
    name: "Neuropathic",
    tag: "nerve damage",
    accent: "#4f46e5",
    tint: "#e0e7ff",
    line1: "A lesion or disease of the",
    line2: "nervous system itself.",
    examples: "sciatica · diabetic neuropathy",
  },
  {
    key: "nociplastic",
    name: "Nociplastic",
    tag: "over-sensitive system",
    accent: "#0d9488",
    tint: "#ccfbf1",
    line1: "Altered pain processing without",
    line2: "clear tissue or nerve damage.",
    examples: "fibromyalgia · widespread pain",
  },
];

function TypeIcon({ kind, accent }: { kind: string; accent: string }) {
  // drawn inside a 0..56 box; caller translates into place
  if (kind === "nociceptive") {
    return (
      <path
        d="M28 8 l-11 24 h13 l-9 24 26 -30 h-14 z"
        fill={accent}
        stroke={accent}
        strokeWidth="1"
      />
    );
  }
  if (kind === "neuropathic") {
    return (
      <g fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round">
        <path d="M6 40 L 22 40 L 30 16 L 38 40 L 50 40" />
        <circle cx="6" cy="40" r="2.5" fill={accent} />
        <circle cx="50" cy="40" r="2.5" fill={accent} />
      </g>
    );
  }
  // nociplastic — concentric amplification ripples
  return (
    <g fill="none" stroke={accent} strokeWidth="2.5">
      <circle cx="28" cy="28" r="5" fill={accent} stroke="none" />
      <path d="M40 16 a 18 18 0 0 1 0 24" />
      <path d="M48 8 a 30 30 0 0 1 0 40" strokeOpacity="0.55" />
      <path d="M16 16 a 18 18 0 0 0 0 24" />
      <path d="M8 8 a 30 30 0 0 0 0 40" strokeOpacity="0.55" />
    </g>
  );
}

function TypesFigure() {
  const cards = [20, 282, 544];
  return (
    <Figure caption="The three mechanism-based types of pain. Most real-world pain is a mix of more than one.">
      <svg
        role="img"
        aria-labelledby="types-title types-desc"
        viewBox="0 0 796 300"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
      <title id="types-title">The three mechanism-based types of pain</title>
      <desc id="types-desc">
        Three cards comparing nociceptive pain from tissue damage, neuropathic
        pain from nervous-system damage, and nociplastic pain from an
        over-sensitive pain system.
      </desc>
      {TYPES.map((t, i) => {
        const x = cards[i];
        const cx = x + 116;
        return (
          <g key={t.key}>
            <rect x={x} y="20" width="232" height="258" rx="14" fill="#ffffff" stroke="#e2e8f0" />
            <rect x={x} y="20" width="232" height="6" rx="3" fill={t.accent} />
            {/* icon */}
            <circle cx={cx} cy="82" r="34" fill={t.tint} />
            <g transform={`translate(${cx - 28}, ${82 - 28})`}>
              <TypeIcon kind={t.key} accent={t.accent} />
            </g>
            {/* title + tag */}
            <text x={cx} y="150" textAnchor="middle" fontSize="19" fontWeight="700" fill="#0f172a">
              {t.name}
            </text>
            <text x={cx} y="171" textAnchor="middle" fontSize="13" fontWeight="600" fill={t.accent}>
              {t.tag}
            </text>
            {/* mechanism */}
            <text x={cx} y="200" textAnchor="middle" fontSize="13.5" fill="#334155">
              {t.line1}
            </text>
            <text x={cx} y="218" textAnchor="middle" fontSize="13.5" fill="#334155">
              {t.line2}
            </text>
            {/* examples */}
            <text x={cx} y="252" textAnchor="middle" fontSize="12.5" fill="#64748b">
              {t.examples}
            </text>
          </g>
        );
      })}
      </svg>
    </Figure>
  );
}

export default function ThreeTypesOfPain() {
  return (
    <div>
      <TypesFigure />

      <P>
        Not all pain is the same kind of pain — and the difference is not just
        where it hurts, but <em>why</em>. Modern pain medicine sorts pain into
        three mechanism-based types. Knowing which one you have is one of the
        most useful things you and your clinician can work out, because
        different mechanisms respond to different treatments.
      </P>

      <H2 id="nociceptive">1. Nociceptive pain — the familiar kind</H2>
      <P>
        This is the pain most people picture. It comes from{" "}
        <strong>actual or threatened damage to body tissue</strong>, detected by
        the nerve endings called nociceptors. A sprained ankle, a burn, a
        surgical wound, and the ache of arthritis are all nociceptive. It tends
        to be well-localized and to make sense — it eases as the tissue heals,
        and it maps to something you can point to.
      </P>

      <H2 id="neuropathic">2. Neuropathic pain — a fault in the wiring</H2>
      <P>
        Neuropathic pain is caused by{" "}
        <strong>damage or disease in the nervous system itself</strong> — the
        nerves, spinal cord, or brain — rather than in the tissue those nerves
        report on. Because the wiring is the problem, it feels different:
        burning, shooting, electric, or stabbing, often with numbness, tingling,
        or a patch of skin that feels wrong to the touch. Sciatica, diabetic
        neuropathy, and the lingering pain after shingles are common examples.
      </P>

      <H2 id="nociplastic">3. Nociplastic pain — the newest category</H2>
      <P>
        The third type is the one most people — and many older resources — have
        never heard named. In <strong>2017</strong> the International Association
        for the Study of Pain formally recognized{" "}
        <strong>nociplastic pain</strong>: real pain that arises from a{" "}
        <em>changed, over-sensitive pain system</em>, without the clear tissue
        damage of nociceptive pain or the nerve injury of neuropathic pain.
      </P>
      <P>
        It is closely tied to the central sensitization described in{" "}
        <Link
          href="/understanding-pain/how-pain-works"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          how pain works
        </Link>{" "}
        — the nervous system&rsquo;s gain turned up and stuck. Fibromyalgia is
        the textbook example, and nociplastic mechanisms are thought to
        contribute to many cases of long-standing widespread pain. Naming it
        matters: for years these patients were told nothing was wrong because
        scans looked normal. The mechanism is different, but the pain is no less
        real.
      </P>

      <H2 id="mixed">Most real pain is a mix</H2>
      <P>
        These categories are a lens, not rigid boxes. Plenty of people have{" "}
        <strong>more than one type at once</strong>. Chronic low back pain, for
        instance, can carry nociceptive features from the joints and discs,
        neuropathic features from an irritated nerve root, and nociplastic
        features from a sensitized system — all together. That overlap is a big
        reason some pain is hard to treat and benefits from a specialist&rsquo;s
        assessment.
      </P>

      <H2 id="why-it-guides-treatment">Why the type guides treatment</H2>
      <P>
        The reason clinicians bother sorting pain this way is practical: the
        mechanism points toward what tends to help. Broadly, nociceptive pain
        often responds to treatments aimed at the tissue and inflammation;
        neuropathic pain often responds to medicines that calm nerve signaling;
        and nociplastic pain often responds best to approaches that turn down a
        sensitized nervous system, such as exercise, sleep, and
        pain-focused psychological therapies.
      </P>
      <P>
        These are general patterns, not a prescription — the right plan depends
        on you, and it belongs with your own care team. What matters here is the
        idea: identifying the <em>kind</em> of pain is the doorway to treating it
        well.
      </P>
    </div>
  );
}
