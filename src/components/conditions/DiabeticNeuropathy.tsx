import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

function LengthFigure() {
  return (
    <Figure caption="Length-dependent neuropathy starts at the farthest ends of the longest nerves. Symptoms typically begin in both toes, rise in a stocking pattern, and reach the hands later if the process advances.">
      <svg
        role="img"
        aria-labelledby="dpn-title dpn-desc"
        viewBox="0 0 680 340"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="dpn-title">The stocking-glove pattern of diabetic neuropathy</title>
        <desc id="dpn-desc">
          A simplified body outline shows symptoms beginning intensely in both
          feet, fading upward through the lower legs, and appearing later in the hands.
        </desc>
        <g fill="none" stroke={FIG.ink} strokeWidth="5" strokeLinecap="round">
          <circle cx="340" cy="48" r="25" />
          <path d="M340 74 V188 M340 104 L270 176 M340 104 L410 176 M340 188 L292 300 M340 188 L388 300" />
        </g>
        <g fill={FIG.signal} opacity="0.95">
          <ellipse cx="282" cy="308" rx="27" ry="12" />
          <ellipse cx="398" cy="308" rx="27" ry="12" />
        </g>
        <g fill={FIG.signalTint} opacity="0.8">
          <path d="M273 300 L293 240 L316 248 L300 305 Z" />
          <path d="M407 300 L387 240 L364 248 L380 305 Z" />
        </g>
        <g fill={FIG.nerve} opacity="0.8">
          <circle cx="266" cy="180" r="14" />
          <circle cx="414" cy="180" r="14" />
        </g>
        <g fontSize="14" fontWeight="700" fill={FIG.ink}>
          <text x="52" y="105">Hands later</text>
          <text x="500" y="238">Symptoms rise</text>
          <text x="500" y="258">as nerves are affected</text>
          <text x="52" y="304">Toes first</text>
        </g>
        <g stroke={FIG.line} strokeWidth="1.5" fill="none">
          <path d="M145 101 L250 170" />
          <path d="M492 244 L408 258" />
          <path d="M130 300 L252 306" />
        </g>
      </svg>
    </Figure>
  );
}

export default function DiabeticNeuropathy() {
  return (
    <div>
      <P>
        Diabetes can injure nerves throughout the body, but the most common form
        is <strong>distal symmetric polyneuropathy</strong>: damage that begins
        at the far ends of the longest nerves. It is not only a pain condition.
        Some damaged nerves fire false alarms; others stop carrying protective
        sensation. A foot can therefore burn at night and still fail to feel a
        blister the next morning.
      </P>

      <H2 id="toes-first">Why it starts in the toes</H2>
      <LengthFigure />
      <P>
        The nerves reaching the toes have the longest journey in the body and
        are especially vulnerable to years of metabolic and vascular stress.
        Symptoms usually appear in both feet, spread upward in a
        &ldquo;stocking&rdquo; pattern, and may reach the hands later in a
        &ldquo;glove&rdquo; pattern. Burning, shocks, stabbing, pins and needles,
        pain from a bedsheet, and numbness can coexist because different fibers
        are failing and misfiring at the same time.
      </P>
      <P>
        Diabetes is common enough that it can become an easy explanation for
        every numb foot. The pattern still deserves diagnosis. Rapid onset,
        marked asymmetry, early weakness, symptoms mainly in the hands, or a
        sudden change can point toward another cause. Clinicians may check for
        contributors such as vitamin B12 deficiency, thyroid or kidney disease,
        alcohol exposure, medication effects, circulation problems, or a nerve
        compressed elsewhere.
      </P>

      <H2 id="screening">The exam is simple — and it matters</H2>
      <P>
        The American Diabetes Association recommends neuropathy assessment when
        type 2 diabetes is diagnosed, beginning five years after type 1 diabetes
        is diagnosed, and at least annually thereafter. The bedside examination
        checks small-fiber sensation with pinprick or temperature, large-fiber
        function with vibration, reflexes, and whether a 10-gram monofilament is
        felt at key points on the foot. That last test asks a practical question:
        can the foot still feel pressure strongly enough to protect itself?
      </P>
      <P>
        Nerve-conduction studies are not required for every typical case. They
        test large fibers and become more useful when the presentation is rapid,
        asymmetric, weakness-heavy, or otherwise atypical. Small-fiber disease
        can be painful while standard nerve conduction remains normal; a
        specialist may use other testing when the clinical question warrants it.
      </P>

      <H2 id="two-jobs">Treatment has two different jobs</H2>
      <P>
        The first job is to reduce future damage. Glucose management is central,
        particularly early in the disease, alongside attention to blood
        pressure, lipids, smoking, activity, weight, kidney health, and other
        risks that affect nerves and circulation. This can slow progression, but
        it should not be sold as instant pain relief or a guarantee that
        established nerve loss will reverse.
      </P>
      <P>
        The second job is symptom control. The{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>
          neuropathic-pain
        </Link>{" "}
        toolbox differs from ordinary analgesia because the nerve itself is
        generating the signal. Current guidelines support several oral classes:
        serotonin-norepinephrine reuptake inhibitors, gabapentinoids, tricyclic
        antidepressants, and sodium-channel blockers, plus selected topical
        treatments. No class works for everyone. Sleep, mood, fall risk, kidney
        function, heart rhythm, side effects, cost, and other medications help
        determine which option a clinician discusses first.
      </P>
      <P>
        The American Academy of Neurology advises trying a different effective
        class when the first provides too little relief or unacceptable adverse
        effects and advises against opioid pain medicines for diabetic neuropathy.
        If opioid use is becoming hard to control, confidential help is available
        from the SAMHSA National Helpline at <strong>1-800-662-HELP (4357)</strong>.
        A realistic goal is meaningful relief, better sleep, and improved function,
        not necessarily zero sensation. Medication choices and combinations
        belong with a clinician; this page provides no dosing guidance.
      </P>

      <H2 id="feet">The numb foot is the safety problem</H2>
      <P>
        Pain demands attention, but numbness removes the alarm that normally
        protects skin. A pebble in a shoe, hot bath, tight seam, blister, or cut
        can deepen unnoticed. Diabetes may also impair circulation and healing.
        Daily visual checks — soles included, using a mirror or another person
        when needed — and properly fitting footwear are therefore part of
        medical prevention, not cosmetic foot care.
      </P>
      <P>
        Broken skin, drainage, spreading redness, swelling, dark tissue, a bad
        smell, or fever needs prompt medical attention. A foot that becomes hot,
        red, and swollen — especially with little pain — can signal infection or
        acute Charcot neuroarthropathy and should not be walked on while waiting
        to see whether it settles. Regular professional foot examinations should
        assess sensation, skin, deformity, footwear, and circulation.
      </P>

      <H2 id="refractory">When first-line pain treatment is not enough</H2>
      <P>
        Persistent severe pain deserves a fresh look before simple escalation:
        confirm the diagnosis, review adherence and adverse effects, treat sleep
        and mood alongside pain, and ask whether a different medication class or
        topical approach fits better. For carefully selected people with
        refractory painful diabetic neuropathy, high-frequency spinal cord
        stimulation has shown substantial benefit in a randomized trial, but the
        study was not blinded and an implanted device brings procedural risks,
        follow-up needs, and cost. The evidence is promising, not a reason to
        skip the fundamentals.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        Better care is moving in two directions: detecting nerve injury before
        protective sensation is lost, and targeting pain without whole-body side
        effects. The{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pain-treatment pipeline
        </Link>{" "}
        includes non-opioid ion-channel drugs being studied in diabetic nerve
        pain, while newer{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          neuromodulation
        </Link>{" "}
        systems aim to make stimulation more responsive and durable.
      </P>

      <H2 id="specialist">When to seek specialist care</H2>
      <P>
        Ask for prompt assessment when symptoms progress quickly, affect one
        side much more than the other, cause significant weakness or falls, or
        do not fit the usual feet-first pattern. A neurologist can investigate an
        atypical neuropathy; a podiatry or multidisciplinary foot team can manage
        loss of protective sensation, deformity, wounds, or Charcot risk; and a
        pain specialist can help when neuropathic pain remains disabling despite
        well-run first-line care. Any open or changing foot wound takes priority
        over the pain score.
      </P>
    </div>
  );
}
