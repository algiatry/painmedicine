import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

export default function VertebroplastyAndKyphoplasty() {
  return (
    <div>
      <P>
        Vertebroplasty injects bone cement into a collapsed osteoporotic
        vertebra. Kyphoplasty inflates a balloon first, then injects
        cement. Both are sold as a way to stabilize a fracture and
        quiet the pain. Two sham-controlled trials published together
        in 2009 found vertebroplasty no better than a simulated
        procedure. That result still sits at the center of the argument.
      </P>
      <KeyTakeaways
        items={[
          <>
            <strong>Kallmes and Buchbinder</strong>, both in NEJM 2009,
            found vertebroplasty similar to sham at the primary time
            points.
          </>,
          <>
            Pain from these fractures often{" "}
            <strong>improves with time anyway</strong>. That is why a
            sham arm matters.
          </>,
          <>
            Kyphoplasty is not the same trial. Balloon plus cement has
            its own studies, not a free pass from the 2009 result.
          </>,
          <>
            Cement leak, adjacent fracture, and the usual needle risks
            are the tax. A good operator will say so unprompted.
          </>,
        ]}
      />
      <Figure caption="Cement into a collapsed vertebral body, with or without a balloon. The 2009 sham trials tested vertebroplasty. They did not prove the pain was imaginary. They showed the procedure did not beat a simulated one.">
        <svg role="img" aria-labelledby="vp-title vp-desc" viewBox="0 0 700 150" className="mx-auto block h-auto w-full max-w-3xl">
          <title id="vp-title">Vertebroplasty versus sham</title>
          <desc id="vp-desc">Two similar-looking procedures: cement in, versus a simulated procedure without cement.</desc>
          <rect x="16" y="16" width="324" height="118" rx="12" fill={FIG.nerveGround} stroke={FIG.nerve} strokeOpacity="0.4" />
          <text x="178" y="48" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>Vertebroplasty</text>
          <text x="178" y="80" textAnchor="middle" fontSize="12" fill={FIG.textMid}>cement into the fracture</text>
          <text x="178" y="102" textAnchor="middle" fontSize="12" fill={FIG.textMid}>pain fell in the trial</text>
          <rect x="360" y="16" width="324" height="118" rx="12" fill={FIG.paper} stroke={FIG.faint} />
          <text x="522" y="48" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>Sham</text>
          <text x="522" y="80" textAnchor="middle" fontSize="12" fill={FIG.textMid}>simulated procedure</text>
          <text x="522" y="102" textAnchor="middle" fontSize="12" fill={FIG.textMid}>pain fell about as much</text>
        </svg>
      </Figure>
      <H2 id="trials">What 2009 showed</H2>
      <P>
        Kallmes randomized people with painful osteoporotic compression
        fractures to vertebroplasty or a simulated procedure without
        cement. At one month, disability and pain did not differ in a
        way that mattered. Buchbinder&rsquo;s multicenter sham trial
        found no significant advantage at one week or at one, three, or
        six months. Both groups improved. That is the sentence
        interventional programs have been answering ever since, with
        arguments about who was enrolled, how acute the fracture was,
        and whether later registries tell a different story. The sham
        trials have not been erased.
      </P>
      <H2 id="kypho">Kyphoplasty is a cousin, not a rebuttal</H2>
      <P>
        Balloon-assisted cement has its own literature and its own
        billing code. It is not automatically exempt from the
        vertebroplasty result. A clinician who offers either should be
        able to say which trial they are hanging it on, and what
        conservative care (time, bracing,{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          movement as tolerated
        </Link>
        ) looks like if the needle is declined.
      </P>
      <H2 id="fit">How this sits</H2>
      <P>
        These procedures live on the{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          interventional
        </Link>{" "}
        map next to injections that have clearer short-term evidence.
        They are not a treatment for ordinary{" "}
        <Link href="/conditions/low-back-pain" className={link}>
          back pain
        </Link>{" "}
        without a fracture. Questions: is there a recent compression
        fracture on imaging, how many weeks of pain, and what would
        count as success besides a post-procedure X-ray that shows
        cement.
      </P>
    </div>
  );
}
