import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const TEAM = [
  { label: "Pain physician", sub: "leads the plan", angle: -90 },
  { label: "Nurse", sub: "coordination & follow-up", angle: -30 },
  { label: "Physical / occupational therapist", sub: "movement & function", angle: 30 },
  { label: "Pain psychologist", sub: "the brain's dials", angle: 90 },
  { label: "Pharmacist", sub: "medication expertise", angle: 150 },
  { label: "Social worker", sub: "life logistics", angle: 210 },
];

function TeamRingFigure() {
  const cx = 340;
  const cy = 170;
  const r = 118;
  return (
    <Figure caption="A pain team, arranged the way the care model intends: around the patient, not above them. Composition varies by program — these are the roles named by IASP, the CDC, and major academic centers.">
      <svg
        role="img"
        aria-labelledby="team-title team-desc"
        viewBox="0 0 680 340"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="team-title">The multidisciplinary pain team</title>
        <desc id="team-desc">
          Six roles arranged in a ring around the patient: pain physician,
          nurse, physical or occupational therapist, pain psychologist,
          pharmacist, and social worker.
        </desc>

        {/* spokes */}
        {TEAM.map((m) => {
          const rad = (m.angle * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy + r * 0.72 * Math.sin(rad);
          return (
            <line
              key={`spoke-${m.label}`}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke={FIG.line}
              strokeWidth="1.5"
            />
          );
        })}

        {/* patient center */}
        <circle cx={cx} cy={cy} r="46" fill={FIG.nerveGround} stroke={FIG.nerve} strokeWidth="2.5" />
        <text x={cx} y={cy - 2} textAnchor="middle" fontSize="15" fontWeight="800" fill={FIG.ink}>
          You
        </text>
        <text x={cx} y={cy + 17} textAnchor="middle" fontSize="11.5" fill={FIG.nerveDark}>
          part of every decision
        </text>

        {/* role nodes */}
        {TEAM.map((m) => {
          const rad = (m.angle * Math.PI) / 180;
          const x = cx + (r + 92) * Math.cos(rad);
          const y = cy + (r * 0.72 + 62) * Math.sin(rad);
          return (
            <g key={m.label}>
              <rect
                x={x - 105}
                y={y - 25}
                width="210"
                height="46"
                rx="12"
                fill={FIG.white}
                stroke={FIG.faint}
                strokeWidth="1.5"
              />
              <text x={x} y={y - 5} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={FIG.ink}>
                {m.label}
              </text>
              <text x={x} y={y + 13} textAnchor="middle" fontSize="11.5" fill={FIG.muted}>
                {m.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}

export default function ThePainTeam() {
  return (
    <div>
      <TeamRingFigure />

      <P>
        Walk into a serious pain program and you will not meet one clinician —
        you will meet a roster. That is not bureaucracy. It is the working
        conclusion of nearly fifty years of pain science: chronic pain lives in
        biology, psychology, and daily life at once, so treating it well takes
        more than one kind of expertise.
      </P>

      <H2 id="why-a-team">Why pain care became a team sport</H2>
      <P>
        In 1977, the physician George Engel argued in <em>Science</em> that
        medicine needed a new model — one that treated illness as{" "}
        <strong>biopsychosocial</strong>: biological, psychological, and social
        at the same time. No field took that idea further than pain medicine,
        because no condition demanded it more. As the research summarized in{" "}
        <Link
          href="/understanding-pain/pain-and-emotion"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          pain and emotion
        </Link>{" "}
        and{" "}
        <Link
          href="/understanding-pain/pain-and-sleep"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          pain and sleep
        </Link>{" "}
        shows, mood, fear, stress, and sleep are not side effects of pain —
        they are dials wired into the pain system itself. A treatment plan that
        ignores them is leaving dials untouched.
      </P>

      <H2 id="who">Who&rsquo;s on the team</H2>
      <P>
        Composition varies by program, but the roles are consistent across the
        IASP&rsquo;s guidelines for pain treatment services, the CDC&rsquo;s
        2022 guideline, and major academic centers:
      </P>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>The pain physician</strong> — a fellowship-trained
            specialist who leads the assessment and owns the overall plan.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Nurses</strong> — often your most frequent contact:
            coordination, education, and follow-up between visits.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Physical and occupational therapists</strong> — rebuilding
            movement, strength, and the daily activities pain has taken.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>A pain psychologist</strong> — working the brain&rsquo;s own
            dials: sleep, stress, pacing, and the fear-avoidance loop.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Pharmacists and social workers</strong> — medication
            expertise on one side; insurance, work, and life logistics on the
            other. Both named in the CDC&rsquo;s picture of collaborative care.
          </span>
        </li>
      </ul>

      <H2 id="multi-vs-inter">Multidisciplinary vs. interdisciplinary — the wiring matters</H2>
      <P>
        The IASP draws a distinction worth knowing when you evaluate a program.{" "}
        <strong>Multidisciplinary</strong> means several disciplines treat you —
        possibly in parallel, without talking much.{" "}
        <strong>Interdisciplinary</strong> means they function as one unit:
        meeting regularly, sharing a single biopsychosocial assessment, agreeing
        on one set of goals, and — explicitly — including you in the decisions.
        The IASP is candid that fully interdisciplinary programs are still more
        aspiration than norm. That honesty is useful: it tells you what to ask.
        Not just &ldquo;do you have a psychologist?&rdquo; but &ldquo;do your
        clinicians actually meet about my case?&rdquo;
      </P>

      <H2 id="evidence">Does it work?</H2>
      <P>
        For chronic low back pain — the best-studied case — a systematic review
        of 41 randomized trials with nearly 7,000 participants found
        moderate-quality evidence that multidisciplinary biopsychosocial
        rehabilitation outperforms usual care on both pain and everyday
        function. Compared with physical treatment alone, it also roughly{" "}
        <strong>doubled the odds of being at work</strong>. The honest reading:
        the average effects are meaningful but modest. A team does not dissolve
        chronic pain. It reliably moves more of the dials than any single
        discipline moves alone — and for a condition with this many dials, that
        is exactly what you want.
      </P>
      <P>
        If you are looking for this kind of care, the{" "}
        <Link
          href="/find-help"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          find help
        </Link>{" "}
        page covers how to locate and verify a credentialed program near you.
      </P>
    </div>
  );
}
