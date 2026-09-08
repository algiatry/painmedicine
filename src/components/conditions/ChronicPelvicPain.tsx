import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — one neighborhood, many tenants. The pelvis packs bladder,
 * bowel, reproductive organs, a muscular floor, and a dense nerve supply
 * into a small space, all reporting to overlapping spinal segments. That
 * convergence is why pelvic pain so often has more than one source.
 */
const TENANTS = [
  { label: "Bladder", sub: "IC / bladder pain syndrome", x: 340, y: 96 },
  { label: "Bowel", sub: "irritable bowel", x: 470, y: 150 },
  { label: "Reproductive organs", sub: "endometriosis, prostate", x: 340, y: 214 },
  { label: "Pelvic floor muscles", sub: "myofascial pain, found in 50–90%", x: 210, y: 150 },
];

function NeighborhoodFigure() {
  return (
    <Figure caption="The pelvis is one small neighborhood with many tenants, and they share nerve lines. Bladder, bowel, reproductive organs, and the pelvic floor muscles all report to overlapping segments of the spinal cord, so pain from one is routinely felt as pain from another — and over time, several sources tend to hurt at once.">
      <svg
        role="img"
        aria-labelledby="pelvis-title pelvis-desc"
        viewBox="0 0 680 324"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="pelvis-title">Why pelvic pain rarely has a single source</title>
        <desc id="pelvis-desc">
          Four labeled circles for bladder, bowel, reproductive organs, and
          pelvic floor muscles overlap around a central point marked as shared
          nerve supply, inside a pelvic bowl outline.
        </desc>
        {/* pelvic bowl */}
        <path
          d="M110 60 C 120 40 180 30 250 44 C 300 54 380 54 430 44 C 500 30 560 40 570 60 C 590 110 560 220 440 260 C 400 274 280 274 240 260 C 120 220 90 110 110 60 Z"
          fill={FIG.paper}
          stroke={FIG.line}
          strokeWidth="2"
        />
        {TENANTS.map((t) => (
          <g key={t.label}>
            <circle cx={t.x} cy={t.y} r="58" fill={FIG.nerveTint} stroke={FIG.nerve} strokeWidth="1.6" fillOpacity="0.55" />
          </g>
        ))}
        {/* shared nerve supply */}
        <circle cx="340" cy="155" r="20" fill={FIG.signal} fillOpacity="0.9" />
        <circle cx="340" cy="155" r="32" fill="none" stroke={FIG.signal} strokeWidth="2" strokeOpacity="0.5" />
        <text x="340" y="159" textAnchor="middle" fontSize="11" fontWeight="700" fill={FIG.white}>
          shared
        </text>
        <text x="340" y="171" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={FIG.white}>
          nerves
        </text>
        {TENANTS.map((t) => {
          const above = t.y < 155;
          const ly = t.y === 155 ? t.y - 66 : above ? t.y - 66 : t.y + 74;
          const lx = t.x;
          return (
            <g key={t.label + "-label"}>
              <text x={lx} y={ly} textAnchor="middle" fontSize="13.5" fontWeight="700" fill={FIG.ink}>
                {t.label}
              </text>
              <text x={lx} y={ly + 16} textAnchor="middle" fontSize="11.5" fill={FIG.muted}>
                {t.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — the six domains clinicians phenotype (UPOINT), generalized:
 * pain is sorted by which systems are contributing, not by one organ.
 */
const DOMAINS = [
  ["Urinary", "frequency, urgency, bladder pain"],
  ["Psychosocial", "mood, stress, catastrophizing"],
  ["Organ-specific", "endometriosis, prostate, bladder wall"],
  ["Infection", "the minority where a microbe is found"],
  ["Neurologic / systemic", "IBS, fibromyalgia, sensitized system"],
  ["Tenderness", "pelvic floor muscle trigger points"],
];

function DomainsFigure() {
  return (
    <Figure caption="The UPOINT approach, developed for men with chronic prostatitis / pelvic pain syndrome and now applied broadly: instead of asking 'which organ?', the clinician checks six domains and treats each one that is active. Most people have two or three, and outcomes improve when all of them are addressed.">
      <svg
        role="img"
        aria-labelledby="upoint-title upoint-desc"
        viewBox="0 0 680 250"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="upoint-title">Six domains of chronic pelvic pain</title>
        <desc id="upoint-desc">
          Six labeled cards in a two-by-three grid: urinary, psychosocial,
          organ-specific, infection, neurologic or systemic, and tenderness,
          each with a short example.
        </desc>
        {DOMAINS.map(([label, sub], i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 24 + col * 214;
          const y = 24 + row * 108;
          return (
            <g key={label}>
              <rect x={x} y={y} width="200" height="90" rx="12" fill={FIG.ground} stroke={FIG.soft} />
              <circle cx={x + 22} cy={y + 26} r="8" fill={i === 5 ? FIG.signal : FIG.nerve} />
              <text x={x + 38} y={y + 31} fontSize="13.5" fontWeight="700" fill={FIG.ink}>
                {label}
              </text>
              <text x={x + 16} y={y + 58} fontSize="11.5" fill={FIG.textMid}>
                {sub.length > 30 ? sub.slice(0, sub.lastIndexOf(" ", 30)) : sub}
              </text>
              {sub.length > 30 && (
                <text x={x + 16} y={y + 74} fontSize="11.5" fill={FIG.textMid}>
                  {sub.slice(sub.lastIndexOf(" ", 30) + 1)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}

export default function ChronicPelvicPain() {
  return (
    <div>
      <P>
        <strong>Chronic pelvic pain</strong> is pain felt below the navel and
        between the hips that has lasted six months or more. It is common, it
        affects every sex, and it is one of the most misunderstood conditions
        in medicine, because the pelvis is a crowded place and pain there is
        routinely blamed on a single organ. Surveys put the prevalence among
        women anywhere from about 6% to 27% depending on the country and the
        definition. In men it most often carries the label chronic
        prostatitis / chronic pelvic pain syndrome, a name that itself admits
        the prostate is usually not infected.
      </P>

      <H2 id="neighborhood">One neighborhood, many tenants</H2>
      <NeighborhoodFigure />
      <P>
        The bladder, bowel, reproductive organs, and the muscular floor that
        holds them all up sit within centimeters of each other, and their
        nerves converge on the same lower segments of the spinal cord. That
        wiring means the nervous system is often unsure which structure is
        complaining. Bladder irritation feels like cramping; a tight pelvic
        floor feels like a bladder or bowel problem; and once one source has
        been hurting for months, the shared circuitry sensitizes and the
        neighbors start to hurt too.
      </P>
      <P>
        A 2021 review in <em>JAMA</em> put a number on the consequence. Among
        women with chronic pelvic pain, the origin is not gynecologic in about
        80% of cases, yet the condition accounts for 40% of laparoscopies and
        12% of hysterectomies performed in the United States each year.
        Musculoskeletal pain and dysfunction, meaning the pelvic floor and
        surrounding muscles, is found in 50% to 90% of patients. The single
        most useful idea on this page is that a normal scan or scope does not
        mean nothing is wrong. It usually means the pain is coming from a
        structure those tests do not see.
      </P>

      <H2 id="sources">The usual sources</H2>
      <P>
        The conditions below are contributors, not competitors. Most people
        with long-standing pelvic pain have more than one, and the best
        evaluations look for all of them:
      </P>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Pelvic floor muscle pain.</strong> The most common and
            most overlooked. Muscles that clench in response to pain, stress,
            or a past injury develop tender trigger points that reproduce the
            person&rsquo;s pain when pressed. A trained examiner can find them
            in minutes; a scan cannot.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Endometriosis.</strong> Tissue like the uterine lining
            growing outside the uterus, covered in its own guide:{" "}
            <Link href="/conditions/endometriosis" className={link}>
              endometriosis
            </Link>
            . Often present alongside muscle and bladder pain rather than
            instead of them.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Bladder pain syndrome (interstitial cystitis).</strong>{" "}
            Bladder pain that builds as it fills and eases with emptying, with
            urgency and frequency, and repeatedly negative urine cultures.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Irritable bowel syndrome.</strong> Cramping tied to bowel
            habit. It shares nerve supply and sensitization mechanisms with the
            rest of the pelvis and is a frequent co-traveler.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Chronic prostatitis / CPPS in men.</strong> The NIH
            classification (1999) reserved a true bacterial cause for a small
            minority; category III, the pain syndrome without infection, is
            the large majority. Repeated courses of antibiotics for a culture
            that was never positive are a common and unhelpful pattern.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Nerve entrapment and post-surgical pain.</strong> The
            pudendal, ilioinguinal, and related nerves can be compressed or
            injured, often after surgery or childbirth, producing burning,
            sitting-provoked pain in a specific territory. See{" "}
            <Link href="/conditions/persistent-postsurgical-pain" className={link}>
              persistent postsurgical pain
            </Link>
            .
          </span>
        </li>
      </ul>

      <H2 id="phenotyping">Sorting by system, not by organ</H2>
      <DomainsFigure />
      <P>
        Urologists treating men with chronic pelvic pain syndrome developed a
        practical fix for the one-organ trap: the UPOINT system, which sorts
        each patient&rsquo;s picture into six domains and treats every active
        one. In the original 2009 study, the more domains a person had, the
        worse their symptoms, which is exactly what a multi-source condition
        should show. The same logic now runs through the American College of
        Obstetricians and Gynecologists&rsquo; 2020 practice bulletin for
        women: a systematic history and examination that covers the
        gynecologic, urologic, gastrointestinal, musculoskeletal, and
        psychosocial systems before anything is attributed to a single cause.
      </P>

      <H2 id="treatment">What treatment looks like today</H2>
      <P>
        Because the sources are plural, the treatment is too. Described, not
        prescribed, the pieces a pain team draws on:
      </P>
      <ul className="mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Pelvic floor physical therapy.</strong> The strongest
            single trial in the field: in women with bladder pain syndrome and
            pelvic floor tenderness, targeted myofascial physical therapy
            produced a moderate-or-better response in 59%, versus 26% with
            general massage. It is skilled, specific, internal-and-external
            hands-on work, not a handout of Kegels. For a tight, painful pelvic
            floor, strengthening exercises can make things worse.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Organ-directed treatment where an organ is involved.</strong>{" "}
            Hormonal therapy or surgery for endometriosis, bladder-directed
            therapies for bladder pain syndrome, dietary and gut-directed
            care for irritable bowel. Each helps its own domain and rarely the
            others.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Nervous-system medications.</strong> For the sensitized
            component, the same classes used for other centralized pain, with
            the trade-offs described in{" "}
            <Link href="/treatments/medications-for-pain" className={link}>
              medications for pain
            </Link>
            . Opioids have a poor record in chronic pelvic pain and are not
            recommended as ongoing treatment.
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Targeted injections and neuromodulation.</strong> Trigger
            point injections, nerve blocks for an entrapped nerve, and in
            selected cases sacral or pudendal nerve stimulation, covered in{" "}
            <Link href="/treatments/interventional-procedures" className={link}>
              interventional procedures
            </Link>
            .
          </span>
        </li>
        <li className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>
            <strong>Psychological and pain-science care.</strong> Not because
            the pain is psychological, but because a pelvis that has hurt for
            years has trained the nervous system, and cognitive behavioral and
            pain-reprocessing approaches measurably retrain it. Sexual pain and
            the relationships around it deserve their own attention here.
          </span>
        </li>
      </ul>
      <P>
        Since opioids came up: if you or someone you love is struggling with
        opioid or other substance use, the SAMHSA National Helpline is free,
        confidential, and open 24/7 at <strong>1-800-662-HELP (4357)</strong>.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        The research direction is phenotyping done properly: identifying, for
        each person, which domains are active and matching treatment to them,
        rather than trialing one organ-specific therapy after another. The
        precision approach described in{" "}
        <Link href="/future-of-pain-medicine/precision-pain-medicine" className={link}>
          precision pain medicine
        </Link>{" "}
        is being tested most actively in exactly these overlapping pain
        conditions, and pelvic pain is one of the model cases.
      </P>

      <H2 id="specialist">When to seek specialist care</H2>
      <P>
        Seek prompt care for pelvic pain with fever, unexplained bleeding,
        blood in urine or stool, a new mass, unintended weight loss, or pain
        that came on suddenly and severely. For pain that has lasted months
        and has had a normal workup, the right next step is usually not
        another scope. It is a clinician who examines the pelvic floor and
        thinks in domains: a pelvic pain specialist, a urogynecologist or
        urologist with a pelvic pain focus, or a{" "}
        <Link href="/find-help" className={link}>
          pain medicine physician
        </Link>
        , working with a pelvic floor physical therapist. If you have been
        told your tests are normal and therefore nothing is wrong, that is a
        sign to change clinicians, not to give up.
      </P>
    </div>
  );
}
