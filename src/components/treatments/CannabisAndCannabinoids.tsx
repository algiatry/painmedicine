import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 dark:text-teal-300 underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2 hover:decoration-teal-600";

/** Benefit and harm side by side, from the Cochrane neuropathic-pain review. */
function BalanceFigure() {
  const rows = [
    { y: 84, label: "Pain down by 30% or more", active: 39, placebo: 33 },
    { y: 150, label: "Nervous-system side effects", active: 61, placebo: 29 },
    { y: 216, label: "Psychiatric side effects", active: 17, placebo: 5 },
    { y: 282, label: "Stopped because of side effects", active: 10, placebo: 5 },
  ];
  const scale = 3.6;
  return (
    <Figure caption="Benefit and harm in the same trials. In a Cochrane review of 16 studies in chronic nerve pain, cannabis-based medicines helped a few more people than placebo did, and caused side effects in many more. Percentages are of trial participants.">
      <svg
        role="img"
        aria-labelledby="can-title can-desc"
        viewBox="0 0 680 330"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="can-title">Cannabis-based medicines versus placebo for chronic nerve pain</title>
        <desc id="can-desc">
          Four pairs of bars. Pain reduced by at least 30 percent: 39 percent
          with cannabis-based medicines, 33 percent with placebo. Nervous-system
          side effects: 61 versus 29 percent. Psychiatric side effects: 17
          versus 5 percent. Stopped treatment because of side effects: 10
          versus 5 percent.
        </desc>

        <g fontSize="12.5" fill={FIG.textMid}>
          <rect x="300" y="24" width="14" height="14" rx="3" fill={FIG.nerve} />
          <text x="320" y="36">Cannabis-based medicine</text>
          <rect x="490" y="24" width="14" height="14" rx="3" fill={FIG.faint} />
          <text x="510" y="36">Placebo</text>
        </g>

        {rows.map((r) => (
          <g key={r.label}>
            <text x="24" y={r.y + 4} fontSize="14" fontWeight="700" fill={FIG.ink}>
              {r.label}
            </text>
            <rect x="300" y={r.y - 16} width={r.active * scale} height="15" rx="3" fill={FIG.nerve} />
            <text x={300 + r.active * scale + 8} y={r.y - 4} fontSize="13" fontWeight="700" fill={FIG.ink}>
              {r.active}%
            </text>
            <rect x="300" y={r.y + 3} width={r.placebo * scale} height="15" rx="3" fill={FIG.faint} />
            <text x={300 + r.placebo * scale + 8} y={r.y + 15} fontSize="13" fill={FIG.textMid}>
              {r.placebo}%
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function CannabisAndCannabinoids() {
  return (
    <div>
      <P>
        Cannabis is increasingly used for chronic pain, and it is one of the
        hardest treatments to get a straight answer about. Advocates
        describe a safe natural painkiller. Skeptics point to the lack of FDA
        approval. The trial evidence supports neither extreme. It shows a real
        but small average benefit, clear short-term side effects, and large
        gaps where long-term data should be.
      </P>

      <KeyTakeaways
        items={[
          <>In pooled trials, cannabis-based medicines produce a <strong>small to very small</strong> improvement in chronic pain, physical function, and sleep.</>,
          <>Side effects are common: <strong>dizziness, drowsiness, and trouble concentrating</strong>, with dizziness rising in longer trials.</>,
          <>The FDA has <strong>not approved cannabis for any condition</strong>, and dispensary and CBD products are not held to medicine standards.</>,
          <>A leading guideline gives only a <strong>weak recommendation</strong> for a trial, alongside standard care, when that care has not been enough.</>,
        ]}
      />

      <H2 id="what-it-is">What &ldquo;cannabis for pain&rdquo; covers</H2>
      <P>
        The cannabis plant contains more than 80 compounds called
        cannabinoids. Two matter most. <strong>THC</strong> produces the high
        and most of the studied pain effects. <strong>CBD</strong> does not
        produce a high. Products differ enormously in how much of each they
        contain, which is one reason results are hard to compare.
      </P>
      <P>
        The research covers three different things: purified or synthetic
        cannabinoids made to pharmaceutical standards, a mouth spray combining
        THC and CBD that is licensed in some countries, and the plant itself.
        Most trials tested the first two. Most people use the third. That
        mismatch runs through everything below.
      </P>
      <P>
        Cannabinoids act on the body&rsquo;s own cannabinoid receptors, which
        are found on nerve cells throughout the pain pathways described in{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          how pain works
        </Link>
        . That gives a plausible reason to expect an effect on pain. Whether
        the effect is large enough to matter is a question only trials can
        answer.
      </P>

      <H2 id="evidence">What the trials found</H2>
      <P>
        Two large reviews published in 2021 reached conclusions that sound
        different and are closer than they seem.
      </P>
      <P>
        A review in <em>The BMJ</em> pooled 32 trials with 5,174 adults with
        chronic pain. It found, with moderate to high certainty, that
        non-inhaled medical cannabis or cannabinoids produce a small to very
        small improvement in pain relief, physical functioning, and sleep
        quality compared with placebo. In concrete terms, about 10 more people
        in every 100 reached a pain improvement they would notice. There was
        no improvement in emotional, role, or social functioning.
      </P>
      <P>
        A review commissioned by the International Association for the Study
        of Pain looked at 36 trials and judged the evidence itself more
        harshly. Every included study had a high or uncertain risk of bias,
        and the authors concluded that the evidence neither supports nor
        refutes claims of efficacy and safety. Read together: there is
        probably a small benefit, and the studies behind it are weaker than
        anyone would like.
      </P>

      <H2 id="balance">The benefit-harm balance</H2>
      <BalanceFigure />
      <P>
        Most trials enrolled people with{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>
          neuropathic pain
        </Link>
        , so that is where the numbers are firmest. In a Cochrane review of 16
        studies, 39% of people taking a cannabis-based medicine had their pain
        fall by at least 30%, compared with 33% on placebo. Nervous-system
        side effects such as dizziness and drowsiness affected 61% compared
        with 29%, and psychiatric side effects 17% compared with 5%. Twice as
        many people stopped treatment because of side effects. The authors
        concluded that the potential benefits might be outweighed by the
        potential harms.
      </P>
      <P>
        The BMJ review found the same pattern across chronic pain generally:
        small increases in drowsiness, nausea, impaired attention, and brief
        problems with thinking, and a larger increase in dizziness that grew
        in trials lasting three months or longer.
      </P>
      <P>
        Two limits apply to all of these figures. The trials ran from weeks to
        about six months, so they say little about years of use. And they
        mostly excluded people with a history of substance use problems or
        serious mental or physical illness, who may be the people at greatest
        risk.
      </P>

      <H2 id="risks">Risks beyond the trials</H2>
      <P>
        The NIH&rsquo;s complementary-health center lists safety concerns that
        short trials do not capture well. Cannabis use has been linked to a
        higher risk of motor vehicle crashes and, in older adults, of injury;
        it can cause dizziness on standing, which raises the risk of falls.
        Some people develop cannabis use disorder, with craving, withdrawal,
        and loss of control over use. Frequent use has been linked to a higher
        risk of psychosis in people who are predisposed to it. Smoking
        cannabis during pregnancy has been linked to lower birth weight.
      </P>
      <P>
        CBD is often assumed to be harmless because it does not cause a high.
        The same NIH summary notes that CBD has been associated with liver
        injury and with interactions with other medicines. Anyone taking
        prescription drugs should mention CBD to a pharmacist or clinician.
      </P>
      <P>
        If cannabis use is becoming hard to control, confidential help is
        available from the SAMHSA National Helpline at{" "}
        <strong>1-800-662-HELP (4357)</strong>.
      </P>

      <H2 id="regulation">What is and is not approved</H2>
      <P>
        The FDA has not approved cannabis itself for the treatment of any
        disease or condition. It has approved one cannabis-derived medicine, a
        purified CBD for certain seizure disorders, and three synthetic
        cannabinoid medicines; none is approved for pain. The agency states
        that no other cannabis or CBD product on the market has its approval.
      </P>
      <P>
        In practice this means products bought from a dispensary or a shop
        have not been through the testing for purity, strength, and
        consistency that an approved medicine must pass, and what is on the
        label is not guaranteed by the FDA. Laws on medical and recreational
        cannabis differ from state to state and continue to change, so the
        legal position where you live is worth checking directly rather than
        assuming.
      </P>

      <H2 id="guidance">What guidelines say</H2>
      <P>
        The clinical guideline published alongside the BMJ review gives a
        weak recommendation to offer a trial of non-inhaled medical cannabis
        or cannabinoids to people with chronic pain, in addition to standard
        care, when that care has not been sufficient. The panel called the
        recommendation weak because benefits and harms are closely balanced,
        and said the choice depends on how much an individual values a small
        improvement against a modest risk of side effects.
      </P>
      <P>
        That is a different message from both &ldquo;it works&rdquo; and
        &ldquo;it doesn&rsquo;t.&rdquo; It places cannabis among the options
        where the average effect is modest, like most entries in{" "}
        <Link href="/treatments/comparing-your-options" className={link}>
          comparing your options
        </Link>
        , and where an honest conversation with a clinician matters more than
        a headline. Anyone considering it should tell their clinicians,
        especially when driving is part of daily life or when taking other
        medicines that cause drowsiness. This page gives no dosing or product guidance.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        Research is moving in two directions. NIH-funded studies are testing
        whether lesser-known cannabinoids and other compounds in the plant
        relieve pain without the effects of THC. And reviewers are calling for
        larger, longer, better-designed trials of the products people actually
        use. Other non-opioid approaches in development are tracked in the{" "}
        <Link href="/future-of-pain-medicine/pipeline" className={link}>
          pain-treatment pipeline
        </Link>
        .
      </P>
    </div>
  );
}
