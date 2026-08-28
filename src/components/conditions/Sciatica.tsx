import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import { BodyBack } from "../anatomy/BodyOutline";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — starts here, felt there: the back view with the sciatic path,
 * the pinch marked at the spine, and the pain radiating down the leg.
 */
function PathFigure() {
  return (
    <Figure caption="Sciatica's defining trick: the problem sits at the spine, where a nerve root is pinched and inflamed — but the pain is felt along the nerve's territory, down the buttock and leg, often past the knee.">
      <svg
        role="img"
        aria-labelledby="path-title path-desc"
        viewBox="0 0 680 350"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="path-title">Where sciatica starts and where it hurts</title>
        <desc id="path-desc">
          A schematic figure seen from behind. An amber marker at the lower
          spine shows where the nerve root is compressed; a teal line traces
          the sciatic nerve from the low back through the buttock and down the
          back of the leg, with amber dashes along it showing the radiating
          pain. Labels point to the start point and the felt pain.
        </desc>

        <g transform="translate(70 14) scale(0.7)">
          <BodyBack sciatic="left" marks={[{ at: "lowBack", size: "md" }]}>
            {/* the radiating signal, traveling the nerve's course */}
            <path
              d="M104 198 C96 212 92 224 92 242 L88 324 L85 410"
              fill="none"
              stroke={FIG.signal}
              strokeWidth="1.8"
              strokeDasharray="3 7"
              strokeLinecap="round"
            />
          </BodyBack>
        </g>

        {/* starts here */}
        <g fontSize="15" fontWeight="700" fill={FIG.ink}>
          <text x="330" y="96">Starts here</text>
        </g>
        <g fontSize="12.5" fill={FIG.textMid}>
          <text x="330" y="116">a nerve root pinched and inflamed</text>
          <text x="330" y="133">where it exits the lower spine</text>
        </g>
        <path d="M322 108 Q240 120 162 146" fill="none" stroke={FIG.line} strokeWidth="1.5" />

        {/* felt here */}
        <g fontSize="15" fontWeight="700" fill={FIG.ink}>
          <text x="330" y="238">Felt here</text>
        </g>
        <g fontSize="12.5" fill={FIG.textMid}>
          <text x="330" y="258">electric, shooting pain radiating</text>
          <text x="330" y="275">down the leg — often past the knee,</text>
          <text x="330" y="292">into the foot</text>
        </g>
        <path d="M322 250 Q220 252 142 246" fill="none" stroke={FIG.line} strokeWidth="1.5" />
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — the disappearing disc: probability of spontaneous regression by
 * herniation type (Chiu 2015). Bar = pct of a 400px scale.
 */
function ResorptionFigure() {
  const rows = [
    { label: "Mild bulge", pct: 13, note: "least alarming on MRI" },
    { label: "Protrusion", pct: 41, note: "" },
    { label: "Extrusion", pct: 70, note: "" },
    { label: "Free fragment", pct: 96, note: "most alarming on MRI" },
  ];
  return (
    <Figure caption="The disappearing disc: how often each herniation type shrinks or resolves on follow-up imaging without surgery. The worse it looks, the more likely the body clears it (Chiu 2015, systematic review).">
      <svg
        role="img"
        aria-labelledby="res-title res-desc"
        viewBox="0 0 680 270"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="res-title">Spontaneous regression of herniated discs, by type</title>
        <desc id="res-desc">
          Horizontal bar chart. Mild bulges regress in about 13 percent of
          cases, protrusions 41 percent, extrusions 70 percent, and free
          fragments about 96 percent — the most dramatic-looking herniations
          are the most likely to resolve on their own.
        </desc>

        {rows.map((r, i) => {
          const y = 34 + i * 54;
          const w = 4 * r.pct;
          return (
            <g key={r.label}>
              <text x="24" y={y + 20} fontSize="13.5" fontWeight="700" fill={FIG.ink}>
                {r.label}
              </text>
              {r.note && (
                <text x="24" y={y + 37} fontSize="11" fill={FIG.muted}>
                  {r.note}
                </text>
              )}
              <rect x="176" y={y} width="400" height="30" rx="6" fill={FIG.ground} />
              <rect x="176" y={y} width={w} height="30" rx="6" fill={i === 3 ? FIG.nerveDark : FIG.nerve} />
              <text
                x={176 + w + 10}
                y={y + 20}
                fontSize="13.5"
                fontWeight="700"
                fill={FIG.nerveDark}
              >
                ~{r.pct}%
              </text>
            </g>
          );
        })}
        <text x="176" y="256" fontSize="11.5" fill={FIG.muted}>
          share of cases where the herniation regressed without surgery
        </text>
      </svg>
    </Figure>
  );
}

export default function Sciatica() {
  return (
    <div>
      <P>
        Sciatica is not a disease — it is a description, and a precise one:
        pain running along the territory of the sciatic nerve, the largest
        nerve in the body, from the lower back or buttock down the back of
        the leg. People who have had it rarely need the definition. The pain
        has a character all its own — electric, shooting, sometimes
        breathtaking — and it obeys a line, tracing the leg like a wire. That
        line is the clue to everything else on this page.
      </P>

      <H2 id="where-it-starts">Where sciatica actually starts</H2>
      <PathFigure />
      <P>
        The sciatic nerve is built from nerve roots that exit the lowest
        levels of the spine and merge in the pelvis before traveling down the
        leg. And that is where sciatica almost always begins: in roughly{" "}
        <strong>nine cases out of ten</strong>, a herniated disc is pressing
        on one of those roots where it leaves the spinal canal. Less often
        the culprit is spinal stenosis — an age-related narrowing of the
        nerve&rsquo;s exit passages — or a vertebra that has slipped forward
        on its neighbor. Rarely, the nerve is irritated further along its
        course. The practical point is counterintuitive and important:{" "}
        <strong>the leg is where sciatica is felt, not where it lives</strong>.
        Treating the leg misses the address.
      </P>

      <H2 id="pinch-plus-fire">Why it hurts: pinch plus fire</H2>
      <P>
        For decades sciatica was explained as pure mechanics — a disc
        physically squashing a nerve. The modern picture is richer. Herniated
        disc material does press, but it also <em>leaks</em>: the disc&rsquo;s
        inner core is chemically inflammatory, and when it escapes it bathes
        the nerve root in irritant molecules that make the nerve fire at
        provocations it would normally ignore. This is why imaging finds disc
        herniations in plenty of people with no pain at all — compression
        without inflammation can be silent — and why a modest-looking
        herniation can hurt ferociously. It also explains sciatica&rsquo;s
        character: this is{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          neuropathic pain
        </Link>{" "}
        — pain from an irritated nerve itself — which is why it burns and
        shoots rather than aches, and why it answers to different treatments
        than ordinary back pain.
      </P>

      <H2 id="recognizing">How clinicians recognize it</H2>
      <P>
        The diagnosis usually rests on the story and the exam, not the
        scanner. Leg-dominant pain radiating below the knee is the core
        feature; which line it follows tells the examiner which root is
        involved — pain into the big toe and the top of the foot points to
        one level, pain along the outer foot and calf to another. Numbness
        and tingling trace the same map, coughing or sneezing can fire the
        pain, and raising the straightened leg while lying down — the
        straight-leg-raise test — stretches the inflamed root and reproduces
        it. Imaging is not needed to recognize sciatica; per the same logic
        as{" "}
        <Link href="/conditions/low-back-pain" className={link}>
          low back pain
        </Link>
        , scans are reserved for red flags, significant weakness, or the
        point where their result would actually change the plan.
      </P>

      <H2 id="disappearing-disc">The disappearing disc</H2>
      <ResorptionFigure />
      <P>
        Here is the most underappreciated fact in all of sciatica: herniated
        discs are not permanent fixtures. The body treats escaped disc
        material as debris, and immune cells move in to clear it. On
        follow-up imaging, herniations shrink and often vanish over months —
        and the pattern is beautifully backwards. In a systematic review of
        the follow-up studies, free disc fragments — the most dramatic
        finding a scan can show — resolved in about <strong>96%</strong> of
        cases, and extrusions in about <strong>70%</strong>, while mild
        bulges barely changed. The angrier the herniation looks, the more of
        it there is for the immune system to eat. Clinically this matches the
        condition&rsquo;s natural story: most episodes improve substantially
        within four to six weeks and resolve within about three months. If
        you are in the early weeks and a radiology report is frightening
        you, this figure is worth a second look.
      </P>

      <H2 id="red-flags">The red flags</H2>
      <P>
        Sciatica&rsquo;s warning signs are the same short list that governs
        all back pain, plus two of its own. Seek urgent, same-day care for
        new numbness in the groin or inner thighs, trouble controlling
        bladder or bowels, or <strong>sciatica in both legs at once</strong> —
        together these suggest cauda equina syndrome, a surgical emergency.
        And treat <strong>progressive weakness</strong> — a foot that has
        started to drag or slap, a leg that buckles — as a prompt-attention
        problem even without the others: a nerve losing strength is a nerve
        asking for a decision, not for more patience.
      </P>

      <H2 id="treatment">How sciatica is treated today</H2>
      <P>
        The first-line playbook is patience with structure: stay as active as
        the pain reasonably allows, keep walking, and let the biology above
        do its work — most sciatica is a condition you outlast, not one you
        defeat. The honest medication picture is humbler than most people
        expect. Ordinary anti-inflammatory painkillers help some people but
        have surprisingly thin trial evidence for sciatica specifically, and
        in a rigorous randomized trial, pregabalin — a mainstay for other
        nerve pain — worked no better than placebo for sciatica while causing
        more dizziness. Clinicians still use{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          nerve-pain medications
        </Link>{" "}
        case by case, but nobody should feel like a failure when pills
        underwhelm; for this condition, they often do.
      </P>
      <P>
        When pain is severe or persistent, an epidural steroid injection can
        deliver anti-inflammatory medication directly to the inflamed root —
        trials show modest, mostly short-term relief, which can still matter
        if it carries you through the worst weeks. And then there is surgery,
        where a landmark randomized trial produced one of the most useful
        results in spine medicine: early microdiscectomy relieved leg pain{" "}
        <strong>faster</strong> than continued conservative care, but by one
        year, <strong>both groups had recovered at essentially the same
        rate</strong>. Surgery is not a different destination — it is an
        express ticket to the same one. That makes it a genuine option for
        disabling pain that will not yield, and clearly indicated for
        progressive weakness or cauda equina syndrome; for everyone else it
        is a preference-sensitive decision about time, risk, and what the
        pain is costing you now — a decision to make with your surgeon and
        physician, not from a page.
      </P>

      <H2 id="specialist">When to bring in a specialist</H2>
      <P>
        If leg-dominant pain is still running your days after four to six
        weeks of first-line care — or sooner if weakness appears or the pain
        is unmanageable —{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain medicine
        </Link>{" "}
        earns its keep: confirming which root is involved, timing imaging
        sensibly, delivering targeted injections, and coordinating the
        surgical conversation if it comes to that.{" "}
        <Link href="/find-help" className={link}>
          Finding pain care near you
        </Link>{" "}
        explains how to start.
      </P>
    </div>
  );
}
