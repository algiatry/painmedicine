import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

function AimFigure() {
  return (
    <Figure caption="The shot is aimed at an irritated nerve root in the epidural space, not at a degenerated disc and not at ordinary back pain. When the pain is in the leg more than the back, that address can be the right one. When it is not, the evidence thins out fast.">
      <svg
        role="img"
        aria-labelledby="esi-aim-title esi-aim-desc"
        viewBox="0 0 700 220"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="esi-aim-title">Where an epidural steroid injection is aimed</title>
        <desc id="esi-aim-desc">
          A lumbar spine outline with the epidural space around a nerve root
          highlighted, and a note that the target is radiating nerve-root
          pain rather than ordinary back pain.
        </desc>
        <rect
          x="40"
          y="24"
          width="280"
          height="172"
          rx="14"
          fill={FIG.nerveGround}
          stroke={FIG.nerve}
          strokeOpacity="0.45"
        />
        <text
          x="180"
          y="52"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          The address
        </text>
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={118}
            y={70 + i * 28}
            width="44"
            height="18"
            rx="3"
            fill={FIG.white}
            stroke={FIG.nerveDark}
            strokeWidth="2"
          />
        ))}
        <path
          d="M162 88 C 210 96, 240 110, 268 140"
          fill="none"
          stroke={FIG.signal}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="268" cy="140" r="8" fill={FIG.signal} />
        <text
          x="180"
          y="178"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          nerve root in the epidural space
        </text>

        <rect
          x="360"
          y="24"
          width="300"
          height="172"
          rx="14"
          fill={FIG.signalGround}
          stroke={FIG.signal}
          strokeOpacity="0.45"
        />
        <text
          x="510"
          y="52"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          What it is for
        </text>
        <text
          x="510"
          y="88"
          textAnchor="middle"
          fontSize="13"
          fill={FIG.textMid}
        >
          radiating leg or arm pain
        </text>
        <text
          x="510"
          y="112"
          textAnchor="middle"
          fontSize="13"
          fill={FIG.textMid}
        >
          a bridge of weeks, not a repair
        </text>
        <text
          x="510"
          y="148"
          textAnchor="middle"
          fontSize="13"
          fill={FIG.textMid}
        >
          little for ordinary back pain
        </text>
        <text
          x="510"
          y="172"
          textAnchor="middle"
          fontSize="13"
          fill={FIG.textMid}
        >
          NICE: do not offer for isolated LBP
        </text>
      </svg>
    </Figure>
  );
}

function WindowFigure() {
  return (
    <Figure caption="Chou's systematic review found a real, small, short-term benefit for radiculopathy and little for spinal stenosis or ordinary back pain. The LESS trial in stenosis found steroid plus lidocaine no better than lidocaine alone at six weeks on disability. A window of weeks is the product. A standing series is not.">
      <svg
        role="img"
        aria-labelledby="esi-win-title esi-win-desc"
        viewBox="0 0 700 150"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="esi-win-title">How long the benefit lasts</title>
        <desc id="esi-win-desc">
          A timeline from injection to a few months, with the useful window
          marked in the first weeks and fading after.
        </desc>
        <path
          d="M40 80 H 660"
          stroke={FIG.line}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="80" cy="80" r="8" fill={FIG.signal} />
        <text x="80" y="48" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.ink}>
          injection
        </text>
        <rect x="120" y="64" width="220" height="32" rx="8" fill={FIG.nerveTint} />
        <text x="230" y="85" textAnchor="middle" fontSize="12" fill={FIG.nerveDark}>
          weeks of modest relief
        </text>
        <text x="420" y="48" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          fades
        </text>
        <text x="600" y="48" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          disc often resorbing anyway
        </text>
      </svg>
    </Figure>
  );
}

export default function EpiduralSteroidInjections() {
  return (
    <div>
      <P>
        An epidural steroid injection puts anti-inflammatory medicine next
        to an irritated spinal nerve root. It is the most common
        interventional pain procedure in the United States, and it is also
        the one whose evidence is easiest to oversell. For radiating{" "}
        <Link href="/conditions/sciatica" className={link}>
          sciatica
        </Link>
        -type pain, reviews find a real, small, short-term drop in pain.
        For ordinary back pain, they find little. Used as a bridge while a
        disc settles and rehab starts, that can be enough. Used as a
        standing appointment, it disappoints on schedule.
      </P>

      <KeyTakeaways
        items={[
          <>
            The evidence is for{" "}
            <strong>radiating nerve-root pain</strong>, mostly weeks not
            months, and it is modest.
          </>,
          <>
            NICE says <strong>do not offer spinal injections</strong> for
            isolated low back pain. That is a different job from a
            diagnostic medial branch block.
          </>,
          <>
            In spinal stenosis, the LESS trial found steroid plus lidocaine{" "}
            <strong>no better than lidocaine alone</strong> on disability
            at six weeks.
          </>,
          <>
            FDA has not approved corticosteroids for epidural use and
            warns of <strong>rare but serious neurologic events</strong>.
            The common tax is a sore back for a day or two.
          </>,
        ]}
      />

      <H2 id="what">What is being injected, and where</H2>
      <AimFigure />
      <P>
        The epidural space is a fat-filled sleeve around the thecal sac.
        Under live X-ray, a needle is placed there from the back
        (interlaminar), from the side of the foramen (transforaminal), or
        from the tailbone (caudal), and a corticosteroid is delivered
        near the suspect nerve root. Imaging is what makes the address
        precise. The procedure is usually same-day, awake or lightly
        sedated. It does not remove a disc, un-narrow a canal, or reset
        arthritis. It tries to calm inflammation around a root that is
        already angry.
      </P>
      <P>
        This is not the same tool as a{" "}
        <Link href="/treatments/nerve-blocks-and-rfa" className={link}>
          medial branch block
        </Link>
        , which asks whether a facet joint is the source, or as
        radiofrequency ablation, which heats those tiny nerves. Mixing
        those names in conversation is how people get the wrong
        procedure for the wrong pain.
      </P>

      <H2 id="numbers">What the reviews measured</H2>
      <WindowFigure />
      <P>
        Chou and colleagues&rsquo; systematic review in Annals of Internal
        Medicine is the field&rsquo;s workhorse summary: epidural
        corticosteroids give a small, short-term improvement in pain for
        radiculopathy, with effects that fade over weeks to months, and
        little benefit for spinal stenosis or non-radicular back pain.
        That is not nothing. It is also not a repair. Most sciatica
        improves over weeks to a few months as herniated disc material
        resorbs. The injection, at its best, covers the worst of that
        stretch so walking and sleep can resume.
      </P>
      <P>
        For{" "}
        <Link href="/conditions/spinal-stenosis" className={link}>
          lumbar spinal stenosis
        </Link>
        , the LESS randomized trial compared epidural glucocorticoid plus
        lidocaine with lidocaine alone. At six weeks, disability scores
        did not differ in a way that mattered. Steroid was not the active
        ingredient people hoped it was for that anatomy. NICE&rsquo;s
        low-back guideline is blunt on isolated back pain: do not offer
        spinal injections for managing it.
      </P>

      <H2 id="risks">The rare disaster and the common sore back</H2>
      <P>
        Soreness at the injection site, a flushed face, a few days of
        higher blood sugar in people with diabetes: those are the usual
        after-effects. Infection, bleeding, and a wet tap (spinal
        headache) are uncommon. In 2014 the FDA required a class warning
        on injectable corticosteroids: rare but serious neurologic
        events, including vision loss, stroke, paralysis, and death, have
        been reported after epidural injection. The agency also notes
        that corticosteroids are not approved for this use. Rare is not
        never. It is a reason the procedure is done with imaging, by
        people who do it often, and only when the pain pattern matches
        the address.
      </P>

      <H2 id="fit">How this sits with everything else</H2>
      <P>
        An epidural is one tool on the{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          interventional
        </Link>{" "}
        map, not a substitute for the{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          movement and pacing
        </Link>{" "}
        that hold gains after the window closes. Questions for the visit:
        is the pain radiating in a nerve-root pattern, or is this being
        offered for a sore back? How many weeks of relief would count as
        success, and what happens inside them? What is the plan if the
        first injection does not help, rather than a standing series?
        A{" "}
        <Link href="/find-help" className={link}>
          fellowship-trained pain physician
        </Link>{" "}
        can answer those. The procedure is common. The evidence is
        specific.
      </P>
    </div>
  );
}
