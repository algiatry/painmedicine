import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

function TwoStepFigure() {
  const steps: { n: string; title: string; body: string[]; x: number }[] = [
    {
      n: "1",
      title: "Medial branch block",
      body: ["Numb the tiny nerves", "to the suspect joints"],
      x: 20,
    },
    {
      n: "2",
      title: "Read the answer",
      body: ["Meaningful relief:", "those joints are the source"],
      x: 250,
    },
    {
      n: "3",
      title: "Radiofrequency",
      body: ["Heat quiets the same", "nerves for months"],
      x: 480,
    },
  ];
  return (
    <Figure caption="The sequence that makes or breaks the result. A diagnostic block is a question. Ablation is only the next step if the answer was yes. Skipping the question is how the procedure inherits the wrong diagnosis.">
      <svg
        role="img"
        aria-labelledby="rfa-path-title rfa-path-desc"
        viewBox="0 0 700 180"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="rfa-path-title">Test, then treat</title>
        <desc id="rfa-path-desc">
          Three stages: a diagnostic medial branch block, reading whether
          relief followed, and radiofrequency ablation of the same nerves
          only if it did.
        </desc>
        <defs>
          <marker
            id="rfa-arrow"
            markerWidth="9"
            markerHeight="9"
            refX="7"
            refY="4.5"
            orient="auto"
          >
            <path d="M0 0 L 9 4.5 L 0 9 z" fill={FIG.faint} />
          </marker>
        </defs>
        {steps.map((s, i) => (
          <g key={s.n}>
            {i > 0 && (
              <path
                d={`M${s.x - 26} 80 L${s.x - 6} 80`}
                stroke={FIG.textMid}
                strokeWidth="2"
                markerEnd="url(#rfa-arrow)"
              />
            )}
            <rect
              x={s.x}
              y={30}
              width="200"
              height="118"
              rx="14"
              fill={FIG.nerveGround}
              stroke={FIG.nerveDark}
              strokeWidth="2"
            />
            <circle cx={s.x + 28} cy={58} r="13" fill={FIG.signal} />
            <text
              x={s.x + 28}
              y={63}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill={FIG.white}
            >
              {s.n}
            </text>
            <text
              x={s.x + 100}
              y={64}
              fontSize="13"
              fontWeight="700"
              fill={FIG.ink}
            >
              {s.title}
            </text>
            {s.body.map((line, j) => (
              <text
                key={line}
                x={s.x + 100}
                y={88 + j * 18}
                fontSize="12"
                fill={FIG.textMid}
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

function EvidenceFigure() {
  return (
    <Figure caption="Two facts that can sit together. The MINT trials found radiofrequency added no clinically important pain drop beyond a structured exercise program. NICE still says consider it after a positive diagnostic block, when conservative care has failed. Technique, selection, and what fills the window are the argument in between.">
      <svg
        role="img"
        aria-labelledby="rfa-ev-title rfa-ev-desc"
        viewBox="0 0 700 168"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="rfa-ev-title">MINT versus NICE</title>
        <desc id="rfa-ev-desc">
          Two panels: the MINT trials found no clinically important add-on
          from radiofrequency versus exercise, and NICE still considers
          denervation after a positive medial branch block.
        </desc>
        <rect
          x="16"
          y="16"
          width="324"
          height="136"
          rx="12"
          fill={FIG.paper}
          stroke={FIG.faint}
        />
        <text
          x="178"
          y="44"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          MINT, 2017
        </text>
        <text
          x="178"
          y="72"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          facet trial: -0.18 on a 0-10 scale
        </text>
        <text
          x="178"
          y="92"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          versus exercise alone at 3 months
        </text>
        <text
          x="178"
          y="120"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          they had set 2 points as meaningful
        </text>

        <rect
          x="360"
          y="16"
          width="324"
          height="136"
          rx="12"
          fill={FIG.nerveGround}
          stroke={FIG.nerveDark}
          strokeOpacity="0.45"
        />
        <text
          x="522"
          y="44"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill={FIG.ink}
        >
          NICE NG59
        </text>
        <text
          x="522"
          y="72"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          consider after conservative care fails
        </text>
        <text
          x="522"
          y="92"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          only after a positive diagnostic block
        </text>
        <text
          x="522"
          y="120"
          textAnchor="middle"
          fontSize="12"
          fill={FIG.textMid}
        >
          do not inject for ordinary back pain
        </text>
      </svg>
    </Figure>
  );
}

export default function NerveBlocksAndRfa() {
  return (
    <div>
      <P>
        A nerve block and radiofrequency ablation are not two names for
        the same needle. One is usually a question: numb a specific
        structure and see whether the pain changes. The other is a longer
        quieting of the same nerves with heat, used most for facet-joint
        pain in the{" "}
        <Link href="/conditions/low-back-pain" className={link}>
          low back
        </Link>{" "}
        and{" "}
        <Link href="/conditions/neck-pain" className={link}>
          neck
        </Link>
        . Both live inside the{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          interventional
        </Link>{" "}
        layer between pills and surgery. Neither repairs the joint. Both
        buy a window.
      </P>

      <KeyTakeaways
        items={[
          <>
            A diagnostic <strong>medial branch block</strong> asks whether
            the facet joints are the pain source. Ablation is the next
            step only if the answer was yes.
          </>,
          <>
            Relief from radiofrequency typically lasts{" "}
            <strong>many months to a year</strong>. The nerves regrow. The
            procedure can be repeated.
          </>,
          <>
            The large <strong>MINT trials</strong> found no clinically
            important add-on versus a structured exercise program. NICE
            still considers denervation after a positive block.
          </>,
          <>
            Therapeutic injections for ordinary back pain are a different,
            weaker story. NICE says <strong>do not offer them</strong> for
            isolated low back pain.
          </>,
        ]}
      />

      <H2 id="question">A block is a question</H2>
      <P>
        Image-guided numbing of a specific nerve or joint is diagnostic
        when the point is to learn, and therapeutic when the point is to
        treat. Those jobs get mixed up in conversation. A medial branch
        block uses a small amount of local anesthetic on the tiny nerves
        that serve the facet joints. If pain drops in a clear, short
        window, those joints are a plausible generator. If it does not,
        heating those nerves later is treating the wrong address.
      </P>
      <P>
        Epidural steroid injections are a different tool: they bathe an
        irritated nerve root, most often for radiating{" "}
        <Link href="/conditions/sciatica" className={link}>
          sciatica
        </Link>
        , and the systematic-review evidence is modest and mostly
        short-term. They belong on the interventional map. They are not
        the diagnostic step that licenses ablation, and they are not a
        standing appointment for ordinary back pain.
      </P>

      <H2 id="rfa">Test, then treat</H2>
      <TwoStepFigure />
      <P>
        Radiofrequency ablation (also called denervation or neurotomy)
        places a needle next to the same medial branch nerves, then uses
        a controlled current to heat and quiet them. Typical relief, when
        it comes, lasts many months to about a year. Axons can regenerate,
        which is why the pain can return and why a repeat is sometimes
        offered. The result lives or dies on the diagnostic step. Done
        after confirmatory blocks in someone whose pain is localized to
        those joints, it is a standard option in the toolbox. Done on
        spec, it inherits the wrong diagnosis.
      </P>
      <P>
        NICE&rsquo;s low-back guideline says consider referral for
        assessment for radiofrequency denervation when conservative care
        has not worked, the pain is thought to come from structures
        supplied by the medial branch, and the pain is at least moderate.
        It says only perform the denervation after a positive diagnostic
        medial branch block. It also says do not offer spinal injections
        for managing isolated low back pain. Facet-joint steroid shots
        as a treatment, as opposed to a diagnostic block, are not the
        same procedure.
      </P>

      <H2 id="mint">What MINT found, and why the argument continues</H2>
      <EvidenceFigure />
      <P>
        In 2017 JAMA published the MINT trials: three pragmatic Dutch
        studies that added radiofrequency denervation to a standardized
        exercise program. In the facet-joint trial, the difference at
        three months was 0.18 points on a 0-10 pain scale, against a
        pre-set bar of 2 points for a meaningful change. The sacroiliac
        and combination trials were a little larger and still below that
        bar. The authors concluded the findings do not support
        radiofrequency denervation for chronic low back pain from those
        sources.
      </P>
      <P>
        Interventional societies pushed back on technique and selection:
        a single diagnostic block, a non-blinded design, and lesion
        methods they argue do not match how the procedure is taught.
        That dispute is real. It does not erase the trial. A fair
        sentence is that MINT is the largest test of adding ablation to
        exercise, it did not clear its own meaningful-change bar, and
        NICE still leaves a narrow door open after a positive block.
        Anyone offering the procedure should be able to say which of
        those facts they are hanging it on.
      </P>

      <H2 id="elsewhere">Other addresses</H2>
      <P>
        The same heat-the-nerve idea is used outside the spine.
        Genicular radiofrequency for{" "}
        <Link href="/conditions/knee-and-hip-osteoarthritis" className={link}>
          knee osteoarthritis
        </Link>{" "}
        targets the small nerves around the knee when surgery is not the
        next step and pills have run their course. Sacroiliac joints have
        their own diagnostic injections and, in some programs, their own
        denervation. Cervical facet pain follows the same test-then-treat
        logic as lumbar. None of these is a repair of cartilage. All of
        them are a window.
      </P>

      <H2 id="risks">What can go wrong</H2>
      <P>
        These are needle procedures under X-ray or ultrasound, usually
        same-day. The expected tax is soreness at the sites for days.
        Infection, bleeding, and nerve injury are uncommon and the reason
        imaging guidance exists. After ablation some people have a patch
        of numbness or a stretch of increased pain while the nerve
        settles (neuritis). The larger disappointment is no relief,
        which is why the diagnostic block is not optional paperwork.
      </P>

      <H2 id="window">The window still has to be filled</H2>
      <P>
        Weeks from an injection, months from an ablation: the{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          window rule
        </Link>{" "}
        on the parent page is the frame. What you do inside it, movement,
        sleep, the{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical and behavioral work
        </Link>
        , is what decides whether the needle was worth it. Questions for
        the visit: which structure is being tested, what would count as
        a positive block, how long the expected quiet lasts, and what
        the plan is if the pain returns when the nerve grows back. A{" "}
        <Link href="/find-help" className={link}>
          fellowship-trained pain physician
        </Link>{" "}
        is the person whose craft this is.
      </P>
    </div>
  );
}
