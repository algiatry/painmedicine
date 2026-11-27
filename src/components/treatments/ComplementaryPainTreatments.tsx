import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-brand underline decoration-faint underline-offset-2 hover:decoration-brand";

export default function ComplementaryPainTreatments() {
  return (
    <div>
      <P>
        Acupuncture, TENS, and spinal manipulation sit in the
        complementary aisle: widely used, unevenly proven, low to
        modest average effects when the trials are honest. None
        replaces{" "}
        <Link href="/treatments/movement-as-medicine" className={link}>
          movement
        </Link>
        . Each can be a defensible adjunct for someone drawn to it,
        if the claim is sized to the evidence.
      </P>
      <KeyTakeaways
        items={[
          <>
            Vickers&rsquo; individual-patient meta-analysis found
            acupuncture <strong>better than sham and better than no
            acupuncture</strong> for several chronic pains. The extra
            versus sham was small.
          </>,
          <>
            TENS is a home device that uses the same gate-control idea
            as rubbing a sore spot. Evidence is mixed; it is low-risk
            to trial if it is not delaying the active plan.
          </>,
          <>
            Rubinstein&rsquo;s Cochrane review found spinal manipulation
            for chronic low back pain has a{" "}
            <strong>small effect that may not be clinically
            important</strong> versus other care.
          </>,
          <>
            Supplements are the thin-evidence corner. Name them to a
            clinician and pharmacist.
          </>,
        ]}
      />
      <Figure caption="Three different tools, similar-sized average effects: small, sometimes real, never a substitute for the active plan.">
        <svg role="img" aria-labelledby="cm-title cm-desc" viewBox="0 0 700 140" className="mx-auto block h-auto w-full max-w-3xl">
          <title id="cm-title">Acupuncture, TENS, manipulation</title>
          <desc id="cm-desc">Three panels for acupuncture, TENS, and spinal manipulation.</desc>
          <rect x="16" y="16" width="216" height="108" rx="12" fill={FIG.nerveGround} stroke={FIG.nerve} strokeOpacity="0.4" />
          <text x="124" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>Acupuncture</text>
          <text x="124" y="82" textAnchor="middle" fontSize="12" fill={FIG.textMid}>small vs sham</text>
          <rect x="242" y="16" width="216" height="108" rx="12" fill={FIG.signalGround} stroke={FIG.signal} strokeOpacity="0.4" />
          <text x="350" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>TENS</text>
          <text x="350" y="82" textAnchor="middle" fontSize="12" fill={FIG.textMid}>gate control · mixed trials</text>
          <rect x="468" y="16" width="216" height="108" rx="12" fill={FIG.paper} stroke={FIG.faint} />
          <text x="576" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>Manipulation</text>
          <text x="576" y="82" textAnchor="middle" fontSize="12" fill={FIG.textMid}>small vs other care</text>
        </svg>
      </Figure>
      <H2 id="acu">Acupuncture</H2>
      <P>
        Vickers pooled individual-patient data from 29 trials and about
        18,000 people with back or neck pain, osteoarthritis, headache,
        or shoulder pain. True acupuncture beat sham and beat no
        acupuncture. The gap versus sham was modest, which is why the
        authors said needling is more than placebo and also not most of
        the effect. As an adjunct for someone who wants it, that is a
        reasonable referral. As a replacement for the{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          active plan
        </Link>
        , it is undersized.
      </P>
      <H2 id="tens">TENS</H2>
      <P>
        Transcutaneous electrical nerve stimulation is pads on the
        skin and a battery pack. It borrows the same gate-control idea
        as rubbing a sore spot. Cochrane reviews have repeatedly found
        the chronic-pain evidence too thin or too mixed to make a
        strong claim. It is not expensive to try at home if it does
        not become the whole program. It is not a diagnosis.
      </P>
      <H2 id="chiro">Spinal manipulation</H2>
      <P>
        Rubinstein&rsquo;s Cochrane update on spinal manipulative
        therapy for chronic low back pain found a small short-term
        effect versus other interventions that did not look clinically
        important. Versus sham or inert care the evidence was weaker
        still. Hands-on care can still be a door into movement. It
        should not be an endless calendar of passive visits.
      </P>
      <H2 id="fit">How this sits</H2>
      <P>
        Read these options with the same four questions as the{" "}
        <Link href="/treatments/comparing-your-options" className={link}>
          comparing
        </Link>{" "}
        page. Small average effects are still effects. They are not a
        reason to skip{" "}
        <Link href="/treatments/movement-as-medicine" className={link}>
          exercise
        </Link>
        .
      </P>
    </div>
  );
}
