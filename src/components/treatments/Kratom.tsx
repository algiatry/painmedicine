import Link from "next/link";
import { Figure, H2, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

function LeafForkFigure() {
  return (
    <Figure caption="The same leaf, two very different products. Traditional leaf preparations carry only trace 7-OH; concentrated 7-OH tablets isolate and multiply the leaf's most opioid-like compound — and are the target of the 2026 federal scheduling action.">
      <svg
        role="img"
        aria-labelledby="kratom-fork-title kratom-fork-desc"
        viewBox="0 0 740 372"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="kratom-fork-title">
          Kratom leaf products versus concentrated 7-OH products
        </title>
        <desc id="kratom-fork-desc">
          A kratom leaf at the top splits into two paths: traditional leaf
          products with trace 7-OH on the left, and concentrated 7-OH tablets
          on the right, which carry a regulatory caution note.
        </desc>

        {/* the leaf */}
        <g>
          <path
            d="M370 24 C 322 40, 308 84, 370 122 C 432 84, 418 40, 370 24 Z"
            fill={FIG.nerveTint}
            stroke={FIG.nerveDark}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M370 32 V 114 M370 56 L 344 70 M370 56 L 396 70 M370 84 L 350 96 M370 84 L 390 96"
            fill="none"
            stroke={FIG.nerveDark}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <text x="370" y="146" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
            Kratom leaf (Mitragyna speciosa)
          </text>
          <text x="370" y="164" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
            mitragynine ≈ 1–2% of dry leaf · 7-OH only in traces
          </text>
        </g>

        {/* fork arrows */}
        <defs>
          <marker id="kratom-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L 9 4.5 L 0 9 z" fill={FIG.faint} />
          </marker>
        </defs>
        <path
          d="M330 176 C 270 192, 230 204, 196 218"
          fill="none"
          stroke={FIG.faint}
          strokeWidth="2"
          markerEnd="url(#kratom-arrow)"
        />
        <path
          d="M410 176 C 470 192, 510 204, 544 218"
          fill="none"
          stroke={FIG.faint}
          strokeWidth="2"
          markerEnd="url(#kratom-arrow)"
        />
        <text x="240" y="188" textAnchor="middle" fontSize="12" fill={FIG.muted}>
          dried &amp; ground
        </text>
        <text x="502" y="188" textAnchor="middle" fontSize="12" fill={FIG.muted}>
          extracted or synthesized
        </text>

        {/* left card — traditional leaf products */}
        <g>
          <rect x="30" y="228" width="330" height="118" rx="10" fill={FIG.nerveGround} stroke={FIG.nerve} strokeOpacity="0.45" />
          <text x="195" y="256" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
            Traditional leaf products
          </text>
          <text x="195" y="277" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            powder · tea · capsules
          </text>
          <text x="195" y="297" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            mitragynine-dominant, 7-OH below 0.05%
          </text>
          <text x="195" y="323" textAnchor="middle" fontSize="12" fontWeight="600" fill={FIG.nerveDark}>
            not federally scheduled (state laws vary)
          </text>
        </g>

        {/* right card — concentrated 7-OH */}
        <g>
          <rect x="380" y="228" width="330" height="118" rx="10" fill={FIG.cautionGround} stroke={FIG.cautionEdge} />
          <text x="545" y="256" textAnchor="middle" fontSize="15" fontWeight="700" fill={FIG.ink}>
            Concentrated 7-OH products
          </text>
          <text x="545" y="277" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            tablets · gummies · shots
          </text>
          <text x="545" y="297" textAnchor="middle" fontSize="12.5" fill={FIG.textMid}>
            isolated or synthetic 7-OH, far above leaf levels
          </text>
          <text x="545" y="323" textAnchor="middle" fontSize="12" fontWeight="600" fill={FIG.cautionText}>
            target of the 2026 DEA Schedule I action
          </text>
        </g>
      </svg>
    </Figure>
  );
}

export default function Kratom() {
  return (
    <div>
      <LeafForkFigure />

      <H2 id="what-it-is">A tree in the coffee family</H2>
      <P>
        Kratom comes from the leaves of <em>Mitragyna speciosa</em>, a tropical
        tree native to Southeast Asia — botanically a cousin of the coffee
        plant. Farmers and laborers in Thailand and Malaysia have chewed the
        leaf or brewed it as tea for centuries: small amounts for energy
        through a workday, larger amounts for pain and rest at the end of one.
        In the United States it arrives as powder, capsules, and extracts, and
        federal survey data suggest roughly <strong>two million Americans</strong>{" "}
        use it in a given year — with pain the most commonly reported reason.
      </P>

      <H2 id="how-it-works">How it works in the body</H2>
      <P>
        The leaf&rsquo;s main active compound is <strong>mitragynine</strong>,
        which makes up about one to two percent of dried leaf. Mitragynine is a{" "}
        <strong>partial agonist at mu-opioid receptors</strong> — the same
        receptors morphine and oxycodone act on — which is why researchers call
        kratom an &ldquo;atypical opioid&rdquo; even though the plant is
        unrelated to the opium poppy. It also touches adrenergic and serotonin
        systems, which fits what users describe: stimulant-like effects at low
        amounts, opioid-like effects at higher ones.
      </P>
      <P>
        In laboratory studies, mitragynine activates opioid receptors in a
        biased way that recruits less of the signaling associated with
        respiratory depression, and animal studies have found less breathing
        suppression than with classic opioids. That pharmacology is genuinely
        interesting — it is part of why NIH-funded labs study kratom compounds
        as leads for safer analgesics. But &ldquo;less in animal
        studies&rdquo; is not &ldquo;safe in humans,&rdquo; and no controlled
        human data yet establish that margin.
      </P>

      <H2 id="evidence">What the evidence shows — and doesn&rsquo;t</H2>
      <P>
        Surveys of tens of thousands of users consistently report relief from
        pain, and some people with chronic pain report substituting kratom for
        prescription opioids. Controlled evidence is far thinner. The
        best-known human trial, a randomized, placebo-controlled,
        double-blind study published in 2020, found that a kratom decoction
        roughly <strong>doubled pain tolerance</strong> in an ice-water test —
        a real, measurable analgesic signal. But it enrolled 26 long-term
        users, measured experimental pain rather than a pain condition, and
        lasted one afternoon.
      </P>
      <P>
        That is the entire top shelf of the evidence: no large randomized
        trial has ever tested kratom in people with chronic pain. So the
        honest summary is not &ldquo;kratom doesn&rsquo;t work&rdquo; — it is
        that nobody has yet measured how well it works, at what cost, compared
        to treatments that have been through that process. NIDA is funding the
        studies that could close that gap.
      </P>

      <H2 id="risks">The risks, honestly</H2>
      <P>
        Because mitragynine works through opioid receptors, regular use can
        produce <strong>physical dependence</strong>, and stopping can bring an
        opioid-like withdrawal: muscle aches, irritability, insomnia, runny
        nose, low mood. Reported harms also include nausea and constipation,
        rare but documented liver injury, and seizures — mostly with heavy use
        or combinations. Calls to U.S. poison centers about kratom have risen
        sharply. Deaths involving kratom are rare relative to the number of
        users and almost always involve other drugs — but that is itself the
        warning: kratom is processed by the same liver enzymes as many common
        medications, and mixing it with opioids, benzodiazepines, or alcohol
        is where the danger concentrates.
      </P>
      <P>
        The other risk is the product itself. Because kratom is sold as a
        botanical outside FDA oversight, the powder in one package can differ
        from the next — in alkaloid content, in purity, and occasionally in
        contamination. A 2018 multistate <em>Salmonella</em> outbreak was
        traced to kratom products, and testing has found heavy metals in some.
        None of this is unique to kratom; it is what an unregulated supply
        chain looks like.
      </P>
      <P>
        If you or someone you love is struggling with kratom, opioid, or other
        substance use, the SAMHSA National Helpline is free, confidential, and
        open 24/7 at <strong>1-800-662-HELP (4357)</strong>.
      </P>

      <H2 id="seven-oh">7-OH: when the leaf becomes a pill</H2>
      <P>
        The leaf also contains a trace alkaloid called{" "}
        <strong>7-hydroxymitragynine (7-OH)</strong> — present below 0.05% in
        the plant, but many times more potent than mitragynine at opioid
        receptors. Around 2023, manufacturers began selling tablets, gummies,
        and drink shots of concentrated or synthetic 7-OH at gas stations and
        smoke shops. The FDA&rsquo;s assessment was blunt: these products
        are <em>not kratom</em> in any traditional sense — they are potent,
        untested opioid products wearing the leaf&rsquo;s name.
      </P>
      <P>
        In July 2026 the DEA filed notice of intent to temporarily place 7-OH
        above that natural threshold — along with three related synthetic
        compounds — into <strong>Schedule I</strong>. The first half of that
        action has now landed: on <strong>August 26, 2026</strong>, a temporary
        order took effect placing the three synthetics — mitragynine
        pseudoindoxyl, MGM-15, and MGM-16 — in Schedule I. The order for 7-OH
        itself is still pending, with public comment on the proposed threshold
        open through September 10, 2026 — and natural leaf kratom remains
        federally unscheduled throughout. However the rest resolves, the
        direction is clear: regulators are drawing a line between the
        traditional leaf and the isolated compound.
      </P>

      <H2 id="legal-status">Where the law stands</H2>
      <P>
        Leaf kratom is not a federally controlled substance — the DEA proposed
        scheduling it in 2016 and withdrew the proposal after significant
        public and congressional pushback, an unusual reversal. It is also not
        FDA-approved for any medical use, and the agency has warned against
        using it for pain, mood, or opioid withdrawal. States have gone
        different ways: a half-dozen ban it outright, while a growing number
        regulate it through Kratom Consumer Protection Acts that set age
        limits, labeling rules, and purity standards. What is legal, and in
        what form, depends on where you live.
      </P>

      <H2 id="talk">Talking with your physician</H2>
      <P>
        If you use kratom or are weighing it, the single most useful step is
        to tell your physician — before surgery, before a new prescription,
        and at routine visits. Not because you will be lectured, but because
        it changes real decisions: anesthesia planning, drug-interaction
        checks, and how withdrawal or dependence would be recognized and
        treated if they arise. Pain medicine&rsquo;s regulated pipeline is
        working on the same target kratom points at — opioid-receptor relief
        with less harm — and you can follow those candidates in the{" "}
        <Link
          href="/future-of-pain-medicine/pipeline"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          pain treatment pipeline
        </Link>
        . This page describes; it does not prescribe. The decision belongs in
        an open conversation with your care team.
      </P>
    </div>
  );
}
