import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 dark:text-teal-300 underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2 hover:decoration-teal-600";

/** The treatment ladder as four stacked steps, widest (everyone) at the bottom. */
function LadderFigure() {
  const steps = [
    { y: 216, x: 40, w: 600, fill: FIG.nerveTint, name: "For everyone", detail: "Exercise · weight loss if needed · education and self-management" },
    { y: 156, x: 100, w: 480, fill: FIG.nerveGround, name: "Add as needed", detail: "Anti-inflammatory gels or tablets · cane or knee brace" },
    { y: 96, x: 160, w: 360, fill: FIG.signalGround, name: "Short-term help", detail: "Steroid injection for a flare" },
    { y: 36, x: 220, w: 240, fill: FIG.signalTint, name: "Advanced disease", detail: "Joint replacement" },
  ];
  return (
    <Figure caption="How guidelines stack the options for knee and hip osteoarthritis. The base is for everyone and continues at every stage; each step up is added to it, never swapped for it.">
      <svg
        role="img"
        aria-labelledby="oa-title oa-desc"
        viewBox="0 0 680 290"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="oa-title">The treatment ladder for knee and hip osteoarthritis</title>
        <desc id="oa-desc">
          Four stacked steps. The widest, at the bottom, is for everyone:
          exercise, weight loss if needed, and education. Above it:
          anti-inflammatory gels or tablets and walking aids as needed. Above
          that: a steroid injection for short-term help. At the top, the
          narrowest step: joint replacement for advanced disease.
        </desc>
        {steps.map((s) => (
          <g key={s.name}>
            <rect x={s.x} y={s.y} width={s.w} height="52" rx="8" fill={s.fill} stroke={FIG.line} strokeWidth="1.5" />
            <text x="340" y={s.y + 22} textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
              {s.name}
            </text>
            <text x="340" y={s.y + 40} textAnchor="middle" fontSize="12" fill={FIG.text}>
              {s.detail}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function KneeAndHipOsteoarthritis() {
  return (
    <div>
      <P>
        Osteoarthritis is the most common joint disease in the world, and the
        knee and hip are where it does the most to limit daily life. The old
        picture of cartilage simply wearing out, with nothing to do but wait
        for a replacement, is out of date. The wider story of joint pain is in{" "}
        <Link href="/conditions/arthritis-pain" className={link}>
          arthritis pain
        </Link>
        ; this page is about what helps these two joints, in the order
        guidelines suggest trying it.
      </P>

      <KeyTakeaways
        items={[
          <>Osteoarthritis affects more than <strong>32 million people in the US</strong>; one in three people over 75 has symptomatic knee osteoarthritis.</>,
          <><strong>Exercise, weight loss when relevant, and education</strong> are the foundation at every stage, including before and after surgery.</>,
          <>Steroid injections help for <strong>weeks, not months</strong>. Guidelines recommend against glucosamine, platelet-rich plasma, and stem cell injections.</>,
          <>Joint replacement relieves pain effectively in advanced disease, and about <strong>82% of knee replacements last 25 years</strong>.</>,
        ]}
      />

      <H2 id="what-it-is">More than worn cartilage</H2>
      <P>
        Osteoarthritis involves the whole joint: cartilage, the bone beneath
        it, the joint lining, ligaments, and the surrounding muscle. The
        result is pain, stiffness, and the gradual loss of activities people
        value. The main risk factors are age, female sex, obesity, genetics,
        and a previous major joint injury.
      </P>
      <P>
        Diagnosis rests mostly on symptoms and examination: bony enlargement
        at the knee, or pain when the hip is rotated inward. X-rays can show
        bone spurs and a narrowed joint space, but they are a poor guide to
        how much a joint hurts. A sensitized pain system contributes in some
        people, as explained in{" "}
        <Link href="/understanding-pain/central-sensitization" className={link}>
          central sensitization
        </Link>
        , which helps explain why similar X-rays can come with very different
        pain.
      </P>

      <H2 id="ladder">The treatment ladder</H2>
      <LadderFigure />

      <H2 id="foundation">The foundation: movement and weight</H2>
      <P>
        The American College of Rheumatology makes strong recommendations for
        exercise, for weight loss in people with knee or hip osteoarthritis
        who are overweight, for self-management programs, and for tai chi. It
        is the reverse of the instinct to rest a sore joint.
      </P>
      <P>
        The evidence for exercise is large and worth describing honestly. A
        2024 Cochrane review of 139 trials found that exercise probably
        improves knee pain, physical function, and quality of life in the
        short term. The average gain in pain was roughly 9 to 13 points on a
        100-point scale, which is around the smallest change people reliably
        notice, and participants knew which treatment they were getting. The
        review found no difference between types of exercise. The practical
        reading: the kind you will keep doing matters more than the kind that
        is theoretically ideal. The wider case is in{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical and behavioral therapies
        </Link>
        .
      </P>
      <P>
        Weight matters especially for knees. The guideline notes a
        dose-response: losing 5% or more of body weight can improve symptoms,
        and benefits keep growing with larger losses. Weight loss works
        better combined with exercise than alone.
      </P>

      <H2 id="medicines">Medicines</H2>
      <P>
        For the knee, the guideline strongly recommends anti-inflammatory
        gels applied to the skin, which deliver the medicine where it is
        needed with less reaching the rest of the body. Anti-inflammatory
        tablets are also strongly recommended, at the lowest dose and for the
        shortest time that works, because of their effects on the stomach,
        kidneys, and heart – covered in{" "}
        <Link href="/treatments/medication-organ-safety" className={link}>
          pain medications and your organs
        </Link>
        . The hip is too deep for gels to be expected to help.
      </P>
      <P>
        Acetaminophen and duloxetine carry conditional recommendations,
        meaning they help some people and are reasonable to try. Opioids are
        a poor fit: a major review advises avoiding them, and the guideline
        describes very modest benefit from long-term use against a high risk
        of harm and dependence. If opioid use is becoming hard to control,
        confidential help is available from the SAMHSA National Helpline at{" "}
        <strong>1-800-662-HELP (4357)</strong>.
      </P>

      <H2 id="injections">Injections: what is and is not supported</H2>
      <P>
        Steroid injections into the joint are strongly recommended for knee
        and hip osteoarthritis, with a clear limit on what to expect. A
        Cochrane review of 27 trials found a moderate benefit one to two weeks
        after injection, a small one by three months, and no evidence of any
        effect at six months. They suit a flare or a specific event, not
        long-term control.
      </P>
      <P>
        Several heavily marketed options are recommended <em>against</em>. The
        guideline strongly recommends against platelet-rich plasma and stem
        cell injections for knee and hip osteoarthritis, citing the lack of
        standardization in what is actually being injected. It recommends
        against hyaluronic acid injections, conditionally for the knee and
        strongly for the hip, because the apparent benefit disappeared in the
        better-designed trials. And it strongly recommends against
        glucosamine, since the most reliable studies show no important
        benefit over placebo. These are often paid for out of pocket, which
        makes the evidence worth knowing before agreeing to them. Nerve
        ablation for the knee, described in{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          interventional procedures
        </Link>
        , has a conditional recommendation.
      </P>

      <H2 id="replacement">Joint replacement</H2>
      <P>
        For advanced symptoms and structural damage, total joint replacement
        effectively relieves pain. In the first randomized trial of knee
        replacement, surgery followed by non-surgical care improved pain and
        function about twice as much as non-surgical care alone over a year.
        Two details from that trial are as useful as the headline. The
        surgery group had more serious adverse events, 24 compared with 6.
        And three-quarters of the people assigned to exercise, education, and
        diet alone had not gone on to surgery a year later.
      </P>
      <P>
        Durability is better than many people assume. Pooled national registry
        data covering almost 300,000 operations show that about 82% of total
        knee replacements last 25 years. Timing is a personal decision made
        with a surgeon: there is no prize for waiting until a joint is
        unbearable, and no need to rush while the foundation treatments are
        still working.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        No approved treatment yet slows the joint damage itself, though drugs
        designed to do that have shown promise in trials. Others aim at the
        pain: several candidates for knee osteoarthritis are listed, with
        their current status, in the{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pain-treatment pipeline
        </Link>
        . One earlier hope, a class of antibodies against nerve growth
        factor, is a reminder that promising results do not always survive
        safety review.
      </P>

      <H2 id="specialist">When to seek care</H2>
      <P>
        Most knee and hip osteoarthritis is managed in primary care with a
        physical therapist. Ask about a surgical opinion when pain and loss of
        function persist despite a real trial of the foundation treatments. A{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain specialist
        </Link>{" "}
        can help when surgery is not an option or pain continues after it.
        Seek prompt care for a joint that becomes suddenly hot, red, and
        swollen, especially with fever, or that cannot bear weight after a
        fall: these are not typical of osteoarthritis and need to be checked
        the same day.
      </P>
    </div>
  );
}
