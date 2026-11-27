import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

function ThreeJobsFigure() {
  const panel = (
    x: number,
    title: string,
    lines: string[],
    ground: string,
    edge: string,
  ) => (
    <g>
      <rect
        x={x}
        y={16}
        width="216"
        height="128"
        rx="12"
        fill={ground}
        stroke={edge}
        strokeOpacity="0.5"
      />
      <text
        x={x + 108}
        y={44}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={FIG.ink}
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + 108}
          y={70 + i * 18}
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          {line}
        </text>
      ))}
    </g>
  );
  return (
    <Figure caption="Three different jobs on the skin. Diclofenac gel is an anti-inflammatory for a joint you can reach. Lidocaine quiets nerve endings under a patch. Capsaicin exhausts local pain fibers. Menthol rubs are a fourth family and do not stand in for these.">
      <svg
        role="img"
        aria-labelledby="topical-jobs-title topical-jobs-desc"
        viewBox="0 0 700 160"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="topical-jobs-title">Three topical pain treatments</title>
        <desc id="topical-jobs-desc">
          Three panels: diclofenac gel for reachable osteoarthritic joints,
          lidocaine patches for localized nerve pain, and capsaicin to exhaust
          local pain fibers.
        </desc>
        {panel(
          16,
          "Diclofenac gel",
          ["anti-inflammatory", "knee, hand, ankle", "now over the counter"],
          FIG.nerveGround,
          FIG.nerveDark,
        )}
        {panel(
          242,
          "Lidocaine",
          ["quiets nerve endings", "post-shingles skin", "patch on the spot"],
          FIG.signalGround,
          FIG.signal,
        )}
        {panel(
          468,
          "Capsaicin",
          ["exhausts pain fibers", "clinic high-strength", "OTC cream is milder"],
          FIG.paper,
          FIG.faint,
        )}
      </svg>
    </Figure>
  );
}

function ReachFigure() {
  return (
    <Figure caption="Topicals work where the joint or the painful skin is close to the surface. A knee or a hand is a fair target. A hip sits too deep for gel to be a first-line osteoarthritis treatment, which is why the ACR guideline treats knee and hip differently.">
      <svg
        role="img"
        aria-labelledby="topical-reach-title topical-reach-desc"
        viewBox="0 0 700 220"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="topical-reach-title">Where topical drugs can reach</title>
        <desc id="topical-reach-desc">
          A knee joint near the skin with gel reaching the joint line, versus a
          deep hip joint the same gel cannot usefully reach.
        </desc>
        <rect
          x="20"
          y="20"
          width="320"
          height="180"
          rx="14"
          fill={FIG.nerveGround}
          stroke={FIG.nerve}
          strokeOpacity="0.45"
        />
        <text
          x="180"
          y="48"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          Knee, hand, ankle
        </text>
        <rect x="130" y="70" width="100" height="18" rx="4" fill={FIG.signal} />
        <text
          x="180"
          y="84"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={FIG.white}
        >
          gel
        </text>
        <path
          d="M150 96 v18"
          stroke={FIG.nerveDark}
          strokeWidth="2"
          markerEnd="url(#topical-arrow)"
        />
        <ellipse
          cx="180"
          cy="140"
          rx="48"
          ry="22"
          fill={FIG.white}
          stroke={FIG.nerveDark}
          strokeWidth="2.5"
        />
        <text
          x="180"
          y="145"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          joint line
        </text>
        <text
          x="180"
          y="180"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          close to the skin
        </text>

        <defs>
          <marker
            id="topical-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M0 0 L 8 4 L 0 8 z" fill={FIG.nerveDark} />
          </marker>
        </defs>

        <rect
          x="360"
          y="20"
          width="320"
          height="180"
          rx="14"
          fill={FIG.paper}
          stroke={FIG.faint}
        />
        <text
          x="520"
          y="48"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          Hip
        </text>
        <rect x="470" y="70" width="100" height="18" rx="4" fill={FIG.soft} />
        <text
          x="520"
          y="84"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={FIG.textMid}
        >
          gel
        </text>
        <ellipse
          cx="520"
          cy="155"
          rx="28"
          ry="16"
          fill={FIG.white}
          stroke={FIG.faint}
          strokeWidth="2"
        />
        <text
          x="520"
          y="160"
          textAnchor="middle"
          fontSize="11"
          fill={FIG.muted}
        >
          deep
        </text>
        <text
          x="520"
          y="186"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          too far for gel to be first-line
        </text>
      </svg>
    </Figure>
  );
}

export default function TopicalsForPain() {
  return (
    <div>
      <P>
        Some of the most useful pain medicines never have to travel through
        the stomach. A gel, a patch, or a cream can act on a joint or a
        strip of skin you can put a finger on. That is the point, and also
        the limit. These are not a quieter version of a pill for every
        pain. They are local tools, and the evidence is local too.
      </P>

      <KeyTakeaways
        items={[
          <>
            <strong>Diclofenac gel</strong> is an anti-inflammatory for
            osteoarthritis in joints you can reach. It is sold over the
            counter. It is not an instant rub.
          </>,
          <>
            <strong>Lidocaine</strong> quiets nerve endings under a patch.
            The labeled home is post-shingles pain, not every burning foot.
          </>,
          <>
            <strong>Capsaicin</strong> exhausts local pain fibers. The
            high-strength version is applied in clinic; drugstore cream is
            a milder cousin.
          </>,
          <>
            The usual win is modest. In osteoarthritis gel trials, about{" "}
            <strong>one extra person in ten</strong> succeeds beyond the
            gel&rsquo;s own carrier. That is real. It is not a vanishing
            act.
          </>,
        ]}
      />

      <H2 id="three">Three drugs, three jobs</H2>
      <ThreeJobsFigure />
      <P>
        Diclofenac gel is an NSAID delivered through the skin. In 2020 the
        FDA switched the arthritis gel from prescription to over the
        counter for pain in the hand, wrist, elbow, foot, ankle, or knee.
        Lidocaine is a local anesthetic: it reduces the firing of nerve
        endings under the patch. Capsaicin, the molecule that makes chili
        hot, overstimulates those fibers until they quiet. Menthol and
        methyl-salicylate rubs (the drugstore &ldquo;icy&rdquo; family) are
        counterirritants. They can feel like they are doing something.
        They are not substitutes for these three.
      </P>

      <H2 id="gel">Diclofenac gel, and what the numbers show</H2>
      <ReachFigure />
      <P>
        A 2016 Cochrane review of topical NSAIDs for chronic
        musculoskeletal pain found that almost all of the usable evidence
        is osteoarthritis, and almost all of that is the knee. Diclofenac
        gel beat carrier (the gel without the drug). The number needed to
        treat for a substantial reduction in pain was about ten. Roughly
        half of people improved on carrier alone, which is why rubbing
        anything onto a sore joint can feel like medicine. The drug still
        adds a minority on top of that. Direct comparisons with an oral
        NSAID were few; where they exist, relief looked similar, with more
        local skin reactions and less of the stomach tax.
      </P>
      <P>
        The American College of Rheumatology&rsquo;s 2019 osteoarthritis
        guideline strongly recommends topical NSAIDs for{" "}
        <Link href="/conditions/knee-and-hip-osteoarthritis" className={link}>
          knee osteoarthritis
        </Link>
        . It does not give the hip the same first-line status, because the
        joint sits too deep. The OTC label is also not a license for the
        back, the shoulder, or &ldquo;whatever hurts.&rdquo; The gel is
        labeled for those listed joints in adults, and the Drug Facts
        panel says it may take up to seven days and is not for immediate
        relief. If nothing has changed in a week, the label says stop.
      </P>
      <P>
        &ldquo;Through the skin&rdquo; is not the same as &ldquo;none in
        the bloodstream.&rdquo; Absorption is a fraction of a swallowed
        NSAID, which is the safety argument, but the product still carries
        NSAID class warnings. People with serious stomach, kidney, or
        heart disease, or who already take oral NSAIDs, should not treat
        gel as a free pass. The{" "}
        <Link href="/treatments/medication-organ-safety" className={link}>
          organ-safety
        </Link>{" "}
        page is the body-wide half of that conversation.
      </P>

      <H2 id="lidocaine">Lidocaine for a strip of nerve pain</H2>
      <P>
        Prescription lidocaine patches are labeled for post-herpetic
        neuralgia, the nerve pain that can follow{" "}
        <Link href="/conditions/shingles-pain" className={link}>
          shingles
        </Link>
        . A Cochrane review of topical lidocaine for neuropathic pain
        found some signal of benefit and graded the evidence very low:
        small studies, mixed methods, not a blank check for every burning
        territory. Drugstore lidocaine creams and patches are a different,
        milder set. They can still be worth a try on a findable patch of
        skin. They are not the labeled post-shingles product. For{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>
          neuropathic pain
        </Link>{" "}
        more broadly, tablets remain first-line; topicals earn a look when
        the pain lives in one place you can cover.
      </P>

      <H2 id="capsaicin">Capsaicin: clinic strength versus the jar</H2>
      <P>
        High-concentration capsaicin is applied in a clinic, usually for
        post-shingles pain or painful{" "}
        <Link href="/conditions/diabetic-neuropathy" className={link}>
          diabetic neuropathy
        </Link>
        , because the first hours burn. Cochrane evidence supports that
        high-concentration patch for a minority of people with chronic
        neuropathic pain. Over-the-counter capsaicin cream is much
        weaker, has to be used regularly, and often fails because people
        stop when it stings. Wash your hands after, and keep it out of
        eyes and broken skin. That is not folklore. It is how the molecule
        works.
      </P>

      <H2 id="fit">How this sits with everything else</H2>
      <P>
        Topicals are one corner of the{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications map
        </Link>
        , not a replacement for movement in osteoarthritis or for the{" "}
        <Link href="/treatments/antidepressants-and-anticonvulsants" className={link}>
          nerve-pain tablets
        </Link>{" "}
        when the pain is widespread. They shine when the target is
        shallow and findable: a knee, a hand, a strip of post-shingles
        skin. Questions worth bringing to a clinician or pharmacist: which
        joint or which patch of skin, whether you already take an oral
        NSAID, and whether a week of gel without change means stop.
      </P>
    </div>
  );
}
