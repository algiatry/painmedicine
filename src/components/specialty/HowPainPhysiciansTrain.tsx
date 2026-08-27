import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";

const FEEDERS = [
  "Anesthesiology",
  "Physical medicine & rehab",
  "Neurology / psychiatry",
  "Emergency medicine",
  "Family medicine",
  "Radiology",
];

function PathwayFigure() {
  return (
    <Figure caption="Many doors, one standard: six specialties feed the same 12-month accredited fellowship and one shared board exam — about nine years of training after college.">
      <svg
        role="img"
        aria-labelledby="train-title train-desc"
        viewBox="0 0 680 360"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="train-title">The training pathway to pain medicine</title>
        <desc id="train-desc">
          Six residency specialties converge into a 12-month ACGME pain
          medicine fellowship, which leads to one shared board exam certified
          by six ABMS boards. A timeline beneath shows four years of medical
          school, four of residency, and one of fellowship.
        </desc>
        <defs>
          <marker
            id="train-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6.5"
            markerHeight="6.5"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="#0d9488" />
          </marker>
        </defs>

        {/* feeder residencies */}
        {FEEDERS.map((f, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = 22 + col * 160;
          const y = 30 + row * 62;
          return (
            <g key={f}>
              <rect x={x} y={y} width="150" height="42" rx="10" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
              <text x={x + 75} y={y + 26} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#334155">
                {f}
              </text>
            </g>
          );
        })}
        <text x="181" y="238" textAnchor="middle" fontSize="12" fill="#64748b">
          a 4-year residency, six specialties
        </text>

        {/* converging arrows */}
        <g fill="none" stroke="#0d9488" strokeWidth="2" markerEnd="url(#train-arrow)">
          <path d="M340 82 Q400 100 442 118" />
          <path d="M340 144 Q400 144 442 140" />
          <path d="M340 200 Q400 176 442 158" />
        </g>

        {/* fellowship */}
        <rect x="450" y="102" width="200" height="72" rx="13" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
        <text x="550" y="131" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#0f172a">
          Pain medicine fellowship
        </text>
        <text x="550" y="152" textAnchor="middle" fontSize="12" fill="#0f766e">
          12 months, ACGME-accredited
        </text>

        {/* exam */}
        <line x1="550" y1="178" x2="550" y2="206" stroke="#0d9488" strokeWidth="2.5" markerEnd="url(#train-arrow)" />
        <rect x="430" y="212" width="240" height="60" rx="13" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.8" />
        <text x="550" y="236" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">
          One shared board exam
        </text>
        <text x="550" y="256" textAnchor="middle" fontSize="11.5" fill="#92400e">
          six ABMS boards certify to one standard
        </text>

        {/* years timeline */}
        <g>
          <rect x="60" y="308" width="248" height="16" rx="8" fill="#cbd5e1" />
          <rect x="312" y="308" width="248" height="16" rx="8" fill="#94a3b8" />
          <rect x="564" y="308" width="62" height="16" rx="8" fill="#0d9488" />
          <text x="184" y="345" textAnchor="middle" fontSize="11.5" fill="#64748b">
            medical school · 4 yrs
          </text>
          <text x="436" y="345" textAnchor="middle" fontSize="11.5" fill="#64748b">
            residency · 4 yrs
          </text>
          <text x="595" y="345" textAnchor="middle" fontSize="11.5" fill="#0f766e">
            fellowship
          </text>
          <text x="60" y="300" textAnchor="start" fontSize="11" fontWeight="600" fill="#475569">
            ≈ 9 years after college
          </text>
        </g>
      </svg>
    </Figure>
  );
}

export default function HowPainPhysiciansTrain() {
  return (
    <div>
      <PathwayFigure />

      <P>
        Behind the title &ldquo;pain specialist&rdquo; sits one of
        medicine&rsquo;s more distinctive training pathways — a specialty
        physicians enter not through one door but through six, converging on a
        single fellowship and a single certifying standard. Knowing how the
        pathway works turns a vague title into something you can actually
        check.
      </P>

      <H2 id="the-road">The nine-year road</H2>
      <P>
        The arithmetic is straightforward. After a standard four-year medical
        degree comes a <strong>four-year residency</strong> — most commonly
        anesthesiology or physical medicine &amp; rehabilitation, with
        neurology and psychiatry close behind. Only then comes the
        specialty&rsquo;s defining step: a{" "}
        <strong>12-month fellowship devoted entirely to pain medicine</strong>,
        accredited by the ACGME, the body that accredits US physician
        training. Fellows spend that year across the full territory —
        evaluation, medications, procedures, rehabilitation, and the
        psychological dimensions of pain — before they can sit for boards.
      </P>

      <H2 id="one-standard">Many doors, one standard</H2>
      <P>
        Certification has an unusual and rather elegant structure. Since{" "}
        <strong>1993</strong>, the American Board of Anesthesiology has
        developed and administered the pain medicine exam — but it does not
        keep the credential to itself. Today <strong>six</strong> member boards
        of the American Board of Medical Specialties — anesthesiology, physical
        medicine &amp; rehabilitation, psychiatry &amp; neurology, emergency
        medicine, family medicine, and radiology — send their physicians
        through the same exam and certify them to the same passing standard.
        The subspecialty was approved by the ABMS in 1991, accredited by the
        ACGME in 1992, and renamed from &ldquo;pain management&rdquo; to{" "}
        <strong>pain medicine</strong> in 2002 — a small change of words that
        captured a real change of ambition, from managing symptoms to a full
        medical discipline.
      </P>
      <P>
        The pipeline is substantial but selective: roughly{" "}
        <strong>120 accredited fellowship programs</strong> train about{" "}
        <strong>400 fellows a year</strong> nationwide. When you meet a
        board-certified pain physician, you are meeting someone who chose this
        field twice — once at residency, and again when they gave it a
        dedicated year and an exam.
      </P>

      <H2 id="kept-current">A credential that has to be kept</H2>
      <P>
        Board certification in pain medicine is not a plaque earned once. The
        certificates are time-limited and maintained through continuing
        assessment — ongoing question banks, education requirements, and
        quality-improvement work — on cycles that the boards are moving from
        ten years to five. A currently certified pain physician is, by
        construction, one who has kept proving it.
      </P>

      <H2 id="verify">How to verify — in minutes</H2>
      <P>
        All of this exists so that you do not have to take anyone&rsquo;s word
        for it. The ABMS runs a free public lookup —{" "}
        <strong>Is My Doctor Certified?</strong>, reached from
        abms.org/verify-certification — that confirms a physician&rsquo;s
        board certification, including the pain medicine subspecialty. Your
        state medical board&rsquo;s website confirms the license and any
        disciplinary history; the NIH&rsquo;s National Library of Medicine
        points patients to both routes. The{" "}
        <Link
          href="/find-help"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          find help
        </Link>{" "}
        page walks through the steps.
      </P>

      <H2 id="distinctions">Two distinctions worth knowing</H2>
      <P>
        First: pain medicine is not the same as{" "}
        <strong>hospice and palliative medicine</strong> — a separate,
        similarly rigorous subspecialty centered on serious illness and
        end-of-life care. Second: not every &ldquo;board certification&rdquo;
        in pain is the ABMS credential described here. Independent
        certifying organizations exist outside the ABMS system with their own
        exams and standards. That is a matter of fact rather than judgment —
        but when this site says <em>board-certified pain physician</em>, it
        means the ACGME-fellowship-plus-ABMS pathway, because that is the one
        with a single national standard behind it and a public registry you
        can check. How that plays out when you are sizing up an actual clinic
        is the subject of{" "}
        <Link
          href="/what-is-pain-medicine/pain-clinics-vs-pain-medicine"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          pain clinics vs. pain medicine
        </Link>
        .
      </P>
    </div>
  );
}
