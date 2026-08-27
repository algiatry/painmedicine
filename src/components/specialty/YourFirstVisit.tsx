import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";

const STEPS = [
  { n: 1, title: "Your story", sub: "a detailed history of the pain; and everything it touches", x: 105 },
  { n: 2, title: "The exam", sub: "physical & neurological exam,; records and imaging reviewed", x: 262 },
  { n: 3, title: "The whole picture", sub: "sleep, mood, work, function; — the whole-person screen", x: 419 },
  { n: 4, title: "The plan", sub: "built with you, shared with; your primary care clinician", x: 576 },
];

function VisitFlowFigure() {
  return (
    <Figure caption="The shape of a first pain-medicine evaluation. It is longer than a routine appointment — often one to three hours — because working out the mechanism of your pain is the whole job.">
      <svg
        role="img"
        aria-labelledby="visit-title visit-desc"
        viewBox="0 0 680 250"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="visit-title">The four stages of a first pain evaluation</title>
        <desc id="visit-desc">
          Four connected steps: your story, the exam, the whole picture, and
          the plan.
        </desc>
        <defs>
          <marker
            id="visit-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="#0d9488" />
          </marker>
        </defs>

        {/* connectors */}
        <g fill="none" stroke="#0d9488" strokeWidth="2.5" markerEnd="url(#visit-arrow)">
          <line x1="139" y1="92" x2="228" y2="92" />
          <line x1="296" y1="92" x2="385" y2="92" />
          <line x1="453" y1="92" x2="542" y2="92" />
        </g>

        {STEPS.map((s) => (
          <g key={s.n}>
            <circle cx={s.x} cy="92" r="30" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
            <text x={s.x} y="99" textAnchor="middle" fontSize="19" fontWeight="800" fill="#0f766e">
              {s.n}
            </text>
            <text x={s.x} y="150" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">
              {s.title}
            </text>
            {s.sub.split("; ").map((line, i) => (
              <text
                key={line}
                x={s.x}
                y={172 + i * 17}
                textAnchor="middle"
                fontSize="11.5"
                fill="#64748b"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function YourFirstVisit() {
  return (
    <div>
      <VisitFlowFigure />

      <P>
        A first appointment with a pain specialist is a different kind of
        medical visit, and knowing that in advance changes how well it goes.
        You are not there for a quick look at one body part. You are there so a
        specialist can work out which pain mechanisms are in play — and that
        takes time, records, and questions that may surprise you.
      </P>

      <H2 id="before">Before you go</H2>
      <P>
        Most pain centers require a <strong>referral</strong> from your primary
        care clinician or another physician, and many ask you to complete a
        detailed questionnaire before or at the visit — expect questions about
        your pain&rsquo;s history, past treatments, sleep, mood, and daily
        life. Filling it out carefully is not paperwork for its own sake; it is
        the first draft of your evaluation. Worth gathering ahead of time:
      </P>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>A complete medication list with doses</strong> — including
            everything already tried for this pain, and what happened with each.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Records and imaging</strong> — prior notes, MRI/CT results,
            or the contact details of the clinicians who hold them so they can
            be sent ahead.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Your referring doctor&rsquo;s information</strong> and your
            insurance card.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>A pain diary or notes</strong>, if you keep them — even a
            week of entries on flares, triggers, and what pain stops you from
            doing.{" "}
            <Link
              href="/understanding-pain/measuring-pain"
              className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
            >
              Measuring pain
            </Link>{" "}
            covers how to describe pain in the terms clinicians can use.
          </span>
        </li>
      </ul>

      <H2 id="during">What happens in the room</H2>
      <P>
        Plan for an evaluation that is substantially longer than a routine
        appointment — often <strong>one to three hours</strong>; major centers
        tell patients to expect two to three when testing is involved. The
        visit typically moves through a long conversation about your pain and
        its history, a physical and neurological exam, and a careful review of
        your imaging and records. Expect questions about sleep, mood, work,
        and relationships. Those are not detours: as the science in{" "}
        <Link
          href="/understanding-pain/pain-and-emotion"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          pain and emotion
        </Link>{" "}
        explains, they are part of the pain system itself, and a good
        evaluation measures the whole picture.
      </P>
      <P>
        Along the way you may fill out standard assessment tools — a 0-to-10
        scale, the McGill Pain Questionnaire, the Brief Pain Inventory, or the
        short PEG scale. Each is a validated way of turning your experience
        into something the team can track over time.
      </P>

      <H2 id="safety">Safety habits you might notice</H2>
      <P>
        If medications with risks are on the table, a careful clinic follows
        the CDC&rsquo;s 2022 prescribing guideline: discussing risks and
        benefits openly, checking the state prescription-monitoring database,
        sometimes offering naloxone or using toxicology testing. These are{" "}
        <strong>signs of a guideline-following practice</strong> — routine
        safety habits applied to everyone, not suspicion aimed at you. And one
        line that belongs wherever opioids are mentioned: if you or someone you
        love is struggling with opioid or other substance use, the SAMHSA
        National Helpline is free, confidential, and open 24/7 at{" "}
        <strong>1-800-662-HELP (4357)</strong>.
      </P>

      <H2 id="the-plan">Leaving with a plan</H2>
      <P>
        A first visit should end with something concrete: a working assessment
        of what kind of pain you have, a treatment plan built{" "}
        <em>with</em> you — often spanning several of the{" "}
        <Link
          href="/what-is-pain-medicine/the-pain-team"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          pain team&rsquo;s
        </Link>{" "}
        disciplines — and a copy shared with your primary care clinician.
        Bring your own questions too; the{" "}
        <Link
          href="/find-help"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          find help
        </Link>{" "}
        page has a list worth printing, along with how to verify a
        specialist&rsquo;s credentials before you ever book.
      </P>
    </div>
  );
}
