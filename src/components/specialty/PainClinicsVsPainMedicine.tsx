import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";

const SIGNALS = [
  { title: "Verifiable training", sub: "board-certified physicians you can look up in the ABMS registry" },
  { title: "A real evaluation", sub: "a long, thorough first assessment — history, exam, records" },
  { title: "A team, not a counter", sub: "multiple disciplines and non-drug options on the menu" },
  { title: "Safety habits", sub: "risks discussed, databases checked — routine, not accusatory" },
  { title: "Open coordination", sub: "plans shared with your primary care clinician, referrals expected" },
];

function SignalsFigure() {
  return (
    <Figure caption="Five signals of the real thing. Any single one can be imitated; together they describe a practice organized around medicine rather than volume.">
      <svg
        role="img"
        aria-labelledby="signals-title signals-desc"
        viewBox="0 0 680 330"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="signals-title">Five signals of a credentialed pain practice</title>
        <desc id="signals-desc">
          A checklist of five signals: verifiable training, a real evaluation,
          a team rather than a counter, safety habits, and open coordination.
        </desc>

        {SIGNALS.map((s, i) => {
          const y = 26 + i * 60;
          return (
            <g key={s.title}>
              <rect x="26" y={y} width="628" height="50" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
              <circle cx="56" cy={y + 25} r="14" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
              <path
                d={`M49 ${y + 25} l5 5 l9 -10`}
                fill="none"
                stroke="#0d9488"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="86" y={y + 21} fontSize="13.5" fontWeight="700" fill="#0f172a">
                {s.title}
              </text>
              <text x="86" y={y + 40} fontSize="12" fill="#64748b">
                {s.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}

export default function PainClinicsVsPainMedicine() {
  return (
    <div>
      <P>
        &ldquo;Pain clinic&rdquo; is a phrase doing two very different jobs in
        American healthcare. It describes some of the most rigorous,
        team-based programs in medicine — and it has also hung over storefronts
        that existed to move prescriptions. The words on the sign carry no
        licensing weight of their own. What separates the two is everything
        behind the sign, and all of it is checkable.
      </P>

      <SignalsFigure />

      <H2 id="the-specialty">One is a sign; the other is a specialty</H2>
      <P>
        Pain medicine, the specialty, has a spine you can verify: a 12-month
        accredited fellowship, a shared national board exam, certification
        through six ABMS member boards, and a public registry. None of that is
        conveyed by the phrase &ldquo;pain clinic,&rdquo; which anyone may
        use. So the productive question is never &ldquo;is this a pain
        clinic?&rdquo; — it is &ldquo;<strong>who practices here, and what
        happens inside?</strong>&rdquo; The five signals above are how that
        question gets answered.
      </P>

      <H2 id="training">Signal one: training you can verify</H2>
      <P>
        The physicians should be board-certified — ideally in pain medicine,
        through the pathway described in{" "}
        <Link
          href="/what-is-pain-medicine/how-pain-physicians-train"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          how pain physicians train
        </Link>
        . The ABMS&rsquo;s free lookup settles it in minutes, and your state
        medical board covers licensure and discipline. Credentials from
        certifying bodies outside the ABMS system exist; they vary, and they
        are not the same standard. A practice proud of its training makes it
        easy to find.
      </P>

      <H2 id="evaluation">Signals two and three: the evaluation, and the menu</H2>
      <P>
        A credentialed practice begins with a real evaluation — the long,
        records-deep first visit described in{" "}
        <Link
          href="/what-is-pain-medicine/your-first-visit"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          your first visit
        </Link>{" "}
        — because treatment follows mechanism, and mechanism takes work to
        find. And its treatment menu is wide: the IASP&rsquo;s standards for
        pain treatment services expect physicians, mental-health
        professionals, and physical therapists working in concert, the model
        laid out in{" "}
        <Link
          href="/what-is-pain-medicine/the-pain-team"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          the pain team
        </Link>
        . A practice offering exactly one thing to every patient — whatever
        that one thing is — is not practicing pain medicine in the
        specialty&rsquo;s sense.
      </P>

      <H2 id="safety">Signal four: safety habits worn openly</H2>
      <P>
        Where opioids or other higher-risk medications are part of care, the
        CDC&rsquo;s 2022 guideline describes what carefulness looks like:
        risks and benefits discussed before and during treatment, the state
        prescription-monitoring database reviewed, naloxone offered where it
        makes sense, sometimes toxicology testing. A good practice applies
        these as routine safety habits for everyone and pairs careful
        prescribing with genuine non-drug options. And a line this site
        repeats wherever opioids come up: if you or someone you love is
        struggling with opioid or other substance use, the SAMHSA National
        Helpline is free, confidential, and open 24/7 at{" "}
        <strong>1-800-662-HELP (4357)</strong>.
      </P>

      <H2 id="coordination">Signal five: nothing to hide from your other doctors</H2>
      <P>
        Real pain medicine plugs into the rest of your care: referrals are
        normal or required, the treatment plan is shared with your primary
        care clinician, and insurance is the expected way to pay. Isolation is
        the anti-signal — a practice that wants no records sent, no plan
        shared, and cash only is organized around something other than your
        long-term health. The{" "}
        <Link
          href="/find-help"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          find help
        </Link>{" "}
        page carries the full checklist — verification steps, questions to
        ask, and the red flags in detail.
      </P>
      <P>
        The encouraging bottom line: the specialty built the tools for exactly
        this judgment. Five signals, two free lookups, one thorough first
        visit — and the sign over the door stops mattering.
      </P>
    </div>
  );
}
