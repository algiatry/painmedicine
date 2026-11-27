import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

/**
 * Figure 1 – two levers on the same dial: physical therapies raise capacity,
 * behavioral therapies turn down amplification, one pain system between them.
 */
function LeversFigure() {
  return (
    <Figure caption="Why one page covers both: physical and behavioral therapies pull two levers on the same pain system – movement rebuilds what the body can do, and brain-targeted work turns down the system's amplification. Most successful plans pull both.">
      <svg
        role="img"
        aria-labelledby="lev-title lev-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="lev-title">Two levers on the same pain system</title>
        <desc id="lev-desc">
          A center box labeled the pain system, with a volume dial. An arrow
          enters from the left from physical therapies, graded movement
          raising capacity, and from the right from behavioral therapies –
          retraining that turns down amplification.
        </desc>

        {/* left: physical */}
        <rect x="24" y="84" width="188" height="132" rx="14" fill={FIG.nerveGround} stroke={FIG.nerveDark} strokeWidth="2" />
        <text x="118" y="114" textAnchor="middle" fontSize="14.5" fontWeight="700" fill={FIG.ink}>
          Physical therapies
        </text>
        <g fontSize="11.5" fill={FIG.textMid} textAnchor="middle">
          <text x="118" y="140">graded exercise · strengthening</text>
          <text x="118" y="158">tai chi · yoga · water therapy</text>
          <text x="118" y="176">movement retraining</text>
        </g>
        <text x="118" y="200" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={FIG.nerveDark}>
          raises what the body can do
        </text>

        {/* right: behavioral */}
        <rect x="468" y="84" width="188" height="132" rx="14" fill={FIG.nerveGround} stroke={FIG.nerveDark} strokeWidth="2" />
        <text x="562" y="114" textAnchor="middle" fontSize="14.5" fontWeight="700" fill={FIG.ink}>
          Behavioral therapies
        </text>
        <g fontSize="11.5" fill={FIG.textMid} textAnchor="middle">
          <text x="562" y="140">CBT · mindfulness · ACT</text>
          <text x="562" y="158">sleep therapy (CBT-I)</text>
          <text x="562" y="176">graded motor imagery</text>
        </g>
        <text x="562" y="200" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={FIG.nerveDark}>
          turns down the amplification
        </text>

        {/* center: the pain system with its dial */}
        <rect x="256" y="96" width="168" height="108" rx="14" fill={FIG.signalGround} stroke={FIG.signal} strokeWidth="2" />
        <text x="340" y="126" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
          The pain system
        </text>
        <path d="M310 176 A30 30 0 0 1 370 176" fill="none" stroke={FIG.faint} strokeWidth="5" strokeLinecap="round" />
        <line x1="340" y1="176" x2="322" y2="156" stroke={FIG.signalDark} strokeWidth="3.5" strokeLinecap="round" />
        <text x="340" y="194" textAnchor="middle" fontSize="10.5" fill={FIG.signalText}>
          volume
        </text>

        {/* arrows */}
        <path d="M216 150 H250" stroke={FIG.nerveDark} strokeWidth="3" strokeLinecap="round" />
        <path d="M242 143 L253 150 L242 157" fill="none" stroke={FIG.nerveDark} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M464 150 H430" stroke={FIG.nerveDark} strokeWidth="3" strokeLinecap="round" />
        <path d="M438 143 L427 150 L438 157" fill="none" stroke={FIG.nerveDark} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <text x="340" y="256" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          same system, two directions of attack – the plans that work usually pull both levers
        </text>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 – boom-bust vs pacing: the sawtooth that trains the system to
 * fear activity, and the staircase that retrains it.
 */
function PacingFigure() {
  return (
    <Figure caption="The boom-bust cycle vs. pacing. Left: a good day's overexertion triggers a flare and lost days, and the swings slowly trend downward. Right: pacing starts below the flare threshold and progresses by plan, not by pain – slower-feeling, faster-compounding.">
      <svg
        role="img"
        aria-labelledby="pace-title pace-desc"
        viewBox="0 0 680 280"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="pace-title">The boom-bust cycle versus pacing</title>
        <desc id="pace-desc">
          Two panels of activity over weeks. Left, boom-bust: tall spikes of
          activity followed by deep crashes, with the overall trend drifting
          down. Right, pacing: a staircase of small, consistent steps rising
          steadily.
        </desc>

        <line x1="340" y1="36" x2="340" y2="236" stroke={FIG.soft} strokeWidth="1.5" />

        {/* boom-bust */}
        <text x="182" y="56" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
          The crash cycle
        </text>
        <text x="182" y="75" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          big day → flare → lost days
        </text>
        <line x1="46" y1="210" x2="318" y2="210" stroke={FIG.faint} strokeWidth="1.5" />
        <path
          d="M46 150 L78 96 L106 196 L134 108 L162 202 L190 124 L218 206 L246 140 L274 208 L302 158"
          fill="none"
          stroke={FIG.signalDark}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="182" y="232" textAnchor="middle" fontSize="11" fill={FIG.muted}>
          weeks →
        </text>

        {/* pacing */}
        <text x="510" y="56" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
          Pacing
        </text>
        <text x="510" y="75" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          progress by plan, not by pain
        </text>
        <line x1="374" y1="210" x2="646" y2="210" stroke={FIG.faint} strokeWidth="1.5" />
        <path
          d="M374 196 h38 v-16 h38 v-16 h38 v-16 h38 v-16 h38 v-16 h38"
          fill="none"
          stroke={FIG.nerveDark}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="510" y="232" textAnchor="middle" fontSize="11" fill={FIG.muted}>
          weeks →
        </text>
        <text x="382" y="188" fontSize="10.5" fill={FIG.nerveDark}>
          starts below the flare line
        </text>
      </svg>
    </Figure>
  );
}

export default function PhysicalBehavioralTherapies() {
  return (
    <div>
      <P>
        Here is a strange fact about chronic pain treatment: the approaches
        holding the <strong>strongest recommendations in guideline after
        guideline</strong> (graded exercise, physical therapy, cognitive
        behavioral therapy) are the ones patients are most likely to hear
        offered as an afterthought, or receive as a photocopied sheet on
        the way out. This page gives the active therapies their real
        standing. They are not consolation prizes for pain that pills
        couldn&rsquo;t fix. They are the treatments that{" "}
        <strong>retrain the pain system rather than mask its output</strong>
        – modest on average, durable, side-effect-free, and compounding, and for most chronic pain they are where the evidence says to
        start, not where to end up.
      </P>

      <KeyTakeaways
        items={[
          <>
            Graded exercise, physical therapy, and cognitive behavioral therapy hold the <strong>strongest recommendations in guideline after guideline</strong>.
          </>,
          <>
            These therapies <strong>retrain the pain system</strong> rather than mask its output – modest on average, durable, and side-effect-free.
          </>,
          <>
            Pacing – increasing activity <strong>by plan, not by pain</strong> – is the escape from the boom-bust cycle.
          </>,
          <>
            <strong>Multidisciplinary rehabilitation</strong> beat usual care and nearly doubled the odds of returning to work versus physical treatment alone.
          </>,
        ]}
      />

      <H2 id="two-levers">Two levers on the same dial</H2>
      <LeversFigure />
      <P>
        Why do a strengthening program and a psychologist&rsquo;s office
        belong on one page? Because chronic pain is a{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          nervous-system volume problem
        </Link>{" "}
        as much as a tissue problem, and these therapies attack it from
        both sides. Movement raises what the body can do – strength,
        capacity, confidence, while brain-targeted work turns down the
        amplification that{" "}
        <Link href="/understanding-pain/pain-and-emotion" className={link}>
          stress, fear, and vigilance
        </Link>{" "}
        add to every signal. Neither lever is imaginary; both act on
        measured biology. And the plans that change lives usually pull
        both.
      </P>

      <H2 id="movement">Movement as medicine</H2>
      <P>
        The{" "}
        <Link href="/treatments/movement-as-medicine" className={link}>
          movement as medicine
        </Link>{" "}
        page covers Hayden&rsquo;s Cochrane review, why guidelines put
        exercise first, and the menu from loading to tai chi. Heat and
        massage stay supporting roles.
      </P>

      <H2 id="pacing">The skill that changes everything: pacing</H2>
      <PacingFigure />
      <P>
        The{" "}
        <Link href="/treatments/pacing-for-pain" className={link}>
          pacing
        </Link>{" "}
        page is the boom-bust escape: a bad-day baseline, increased by
        plan not by pain.
      </P>

      <H2 id="brain-side">The brain-side toolbox</H2>
      <P>
        The{" "}
        <Link href="/treatments/cbt-and-mindfulness-for-pain" className={link}>
          CBT and mindfulness
        </Link>{" "}
        page covers the Cochrane CBT review and Cherkin&rsquo;s JAMA
        trial of MBSR versus CBT versus usual care for chronic low back
        pain.
      </P>

      <H2 id="together">When the levers pull together</H2>
      <P>
        The strongest version of this page is all of it at once:{" "}
        <strong>multidisciplinary rehabilitation</strong>, where physical
        therapy, psychology, and medical care run as one coordinated
        program. The Cochrane evidence for chronic low back pain shows
        such programs beat usual care for pain and disability, and
        nearly doubled the odds of returning to work compared with
        physical treatment alone. That is the model{" "}
        <Link href="/what-is-pain-medicine/the-pain-team" className={link}>
          the pain team
        </Link>{" "}
        page describes, and it exists because the levers reinforce each
        other: confidence makes movement possible, movement makes
        confidence honest.
      </P>

      <H2 id="expectations">Honest expectations, and the active ingredient</H2>
      <P>
        Read the trials plainly and a pattern emerges: average effects
        are <strong>modest</strong>, durability is <strong>good</strong>,
        harms are <strong>near zero</strong>, and benefits{" "}
        <strong>stack</strong> – with each other, with{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          sensible medication
        </Link>
        , with{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          the windows procedures buy
        </Link>
        . The catch is equally plain: these therapies only work performed.
        The dose is the doing, adherence is the active ingredient, and
        the promise is not a switch flipped but a trajectory
        bent, usually the thing chronic pain care is trying to
        achieve.
      </P>

      <H2 id="finding">Finding the good version</H2>
      <P>
        Quality varies, so know the marks of the real thing: a program
        built around what <em>you do</em> – progressive, planned, with a
        home program that advances and a graduation goal, rather than
        passive treatments repeating indefinitely; a therapist
        comfortable with the words &ldquo;sensitized nervous
        system&rdquo;; a psychologist who treats pain specifically.
        Multidisciplinary programs cluster around{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain medicine
        </Link>{" "}
        centers, and{" "}
        <Link href="/find-help" className={link}>
          finding pain care near you
        </Link>{" "}
        explains how to locate and vet them.
      </P>
    </div>
  );
}
