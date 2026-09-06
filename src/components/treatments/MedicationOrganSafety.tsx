import Link from "next/link";
import { Figure, H2, P } from "@/components/science/Figure";
import { FIG } from "@/lib/fig";

/**
 * /treatments/medication-organ-safety — the organ-by-organ safety map for
 * the everyday pain medications. Prints established label limits as
 * harm-reduction literacy per CONTENT-INTAKE.md §2 (limits, never
 * instructions).
 */
export default function MedicationOrganSafety() {
  return (
    <div>
      <OrganMapFigure />

      <H2 id="the-map">Every pain reliever has a home organ</H2>
      <P>
        The everyday pain medications are among the safest drugs ever made —
        at their label limits, in the bodies they were studied in. Injuries
        happen at the edges: above the limit, in an organ that was already
        working hard, or in combinations nobody deliberately chose. Each
        medication class concentrates its risk in a specific organ, and once
        you know the map, the safety rules stop being arbitrary warnings and
        start being obvious.
      </P>
      <P>
        <strong>Acetaminophen</strong> (Tylenol and hundreds of generics) is
        processed almost entirely by the liver. <strong>NSAIDs</strong> —
        ibuprofen, naproxen, and their prescription relatives — work by
        damping prostaglandin chemistry, which is exactly why they touch so
        many organs: prostaglandins maintain the stomach lining, regulate
        kidney blood flow, and influence blood pressure and clotting. One
        mechanism, four organs.
      </P>

      <H2 id="liver">The liver: acetaminophen&rsquo;s one hard boundary</H2>
      <P>
        The established FDA adult ceiling is{" "}
        <strong>4,000 milligrams of acetaminophen in 24 hours — from all
        products combined</strong>. The <em>combined</em> is the part that
        injures people. Acetaminophen hides inside prescription combination
        painkillers (the &ldquo;-cet&rdquo; in hydrocodone-acetaminophen) and
        inside dozens of cold, flu, sinus, and nighttime sleep products, so
        someone treating a cold and a backache can cross the ceiling without
        ever opening a bottle labeled Tylenol. The FDA limited prescription
        combination products to 325 milligrams per tablet for exactly this
        reason, and every label now carries the liver warning.
      </P>
      <P>
        The ceiling also moves. Regular alcohol use, prolonged fasting, and
        existing liver disease all lower the amount a given liver can safely
        process — sometimes substantially. Acetaminophen is the leading cause
        of acute liver failure in the United States, and roughly half of those
        cases are unintentional: not overdoses in the dramatic sense, but
        stacking. <strong>The established limit is a ceiling, not a
        target</strong> — and your own safe amount may be lower. That number
        belongs in a conversation with your physician or pharmacist, not in a
        guess.
      </P>

      <H2 id="kidneys">The kidneys: prostaglandins are plumbing</H2>
      <P>
        Your kidneys use prostaglandins to keep their own blood vessels open —
        especially when the body is under stress: dehydration, illness, heart
        failure, older age, or existing kidney disease. NSAIDs block those
        prostaglandins, and the kidney&rsquo;s blood flow narrows with them.
        For a healthy, hydrated adult taking a short course, the margin is
        wide. The OTC Drug Facts self-care ceilings reflect the conservative
        end: <strong>1,200 milligrams per day for ibuprofen</strong> and{" "}
        <strong>660 milligrams per day for naproxen sodium</strong>, for no
        more than ten days of self-treatment unless a clinician directs
        otherwise.
      </P>
      <P>
        The combination nephrologists name outright is the{" "}
        <strong>&ldquo;triple whammy&rdquo;</strong>: an NSAID layered onto an
        ACE inhibitor or ARB (common blood-pressure medications — lisinopril,
        losartan and relatives) plus a diuretic (a water pill). Each drug
        narrows kidney blood flow through a different route; together they can
        push a vulnerable kidney into acute injury, particularly during
        dehydration. Millions of people take two of the three safely — the
        danger is the unexamined third. If your medication list includes a
        blood-pressure pill and a water pill, an NSAID is not an
        over-the-counter decision anymore; it is a question for the prescriber.
      </P>

      <H2 id="heart">The heart and vessels: the 2015 warning, in plain terms</H2>
      <P>
        In 2015 the FDA took the unusual step of strengthening an existing
        warning: non-aspirin NSAIDs increase the chance of heart attack and
        stroke. The key findings, as the agency stated them: the risk can
        begin <em>within the first weeks</em> of use; it rises with longer use
        and at higher doses; and it applies to people with and without known
        heart disease — though the absolute risk is greater the more
        cardiovascular risk factors you carry. NSAIDs can also raise blood
        pressure and worsen heart failure, partly through the same kidney
        chemistry above: less prostaglandin signaling means more salt and
        water retained, and higher pressure against the heart.
      </P>
      <P>
        Context keeps this honest. A few days of ibuprofen for a sprained
        ankle in a healthy 30-year-old is a small, time-limited exposure — the
        warning is not about that. It is about the quiet default of daily
        NSAIDs for months of arthritis or back pain, especially past 60,
        especially with hypertension, cholesterol, diabetes, or smoking in the
        picture. Daily use deserves to be a deliberate, reviewed decision —
        the kind a clinician can only make if they know you are taking it.
        (Aspirin is the exception that proves the rule: it is an NSAID, but at
        the low doses used for heart protection its antiplatelet effect
        dominates — a separate question entirely for your physician.)
      </P>

      <H2 id="gut">The stomach: the price of blocking the shield</H2>
      <P>
        The stomach protects itself from its own acid with a layer of mucus
        and bicarbonate — maintained, again, by prostaglandins. Block them,
        and the shield thins: NSAIDs carry warnings about ulcers and GI
        bleeding, a risk that climbs steeply with age over 65, a previous
        ulcer, blood thinners, corticosteroids, SSRI antidepressants, and
        alcohol. Warning signs worth acting on immediately: black or bloody
        stools, vomiting blood or material that looks like coffee grounds, and
        persistent stomach pain. Acetaminophen does not share this mechanism —
        which is why, for someone with a fragile stomach, clinicians often
        reach for it first, and why every choice on this page is a trade
        between organs, not a verdict on a drug.
      </P>

      <CombinationStackFigure />

      <H2 id="combinations">Where the injuries actually come from</H2>
      <P>
        Read the injury data and three patterns repeat.{" "}
        <strong>Hidden acetaminophen stacking</strong> — a combination
        prescription plus a cold product — quietly doubles a liver load.{" "}
        <strong>The triple whammy</strong> adds an innocent-looking ibuprofen
        to two legitimate blood-pressure medications. And{" "}
        <strong>opioids or sedatives combined with benzodiazepines, sleep
        aids, or alcohol</strong> suppress breathing through a shared pathway
        — the combination behind most accidental overdose deaths (covered in
        depth on the{" "}
        <Link
          href="/treatments/opioid-stewardship"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          opioid safety page
        </Link>
        ). None of these requires a bad decision; all three are assembled
        accidentally, one reasonable product at a time.
      </P>

      <H2 id="practical">The five-minute safety review</H2>
      <P>
        The single highest-value step costs nothing and embarrasses no one:
        bring everything you take — prescriptions, OTC products, supplements,
        sleep aids, the gummy, all of it — to a pharmacist and ask for an
        interaction and duplication check. Pharmacists are trained for exactly
        this, it takes minutes, and it catches the stacking patterns above
        before they become lab results. Beyond that: read the Drug Facts
        &ldquo;active ingredients&rdquo; line on every product (that is where
        hidden acetaminophen and duplicate NSAIDs live), treat label ceilings
        as ceilings rather than starting points, stay hydrated when using
        NSAIDs, and tell every prescriber the full list — including the
        over-the-counter half. This page describes the established limits and
        the evidence behind them; the right choices for your organs belong to
        you and your care team.
      </P>
    </div>
  );
}

function OrganMapFigure() {
  const organs: {
    y: number;
    name: string;
    drug: string;
    note: string;
    tone: "nerve" | "signal" | "caution";
  }[] = [
    { y: 0, name: "Liver", drug: "acetaminophen", note: "4,000 mg/24 h — all products combined", tone: "signal" },
    { y: 1, name: "Kidneys", drug: "NSAIDs", note: "blood-flow prostaglandins · the triple whammy", tone: "caution" },
    { y: 2, name: "Heart & vessels", drug: "NSAIDs", note: "2015 FDA warning · BP elevation", tone: "caution" },
    { y: 3, name: "Stomach", drug: "NSAIDs", note: "mucosal shield · ulcer & bleed risk", tone: "signal" },
  ];
  const colors = {
    nerve: { edge: FIG.nerve, ground: FIG.nerveGround, text: FIG.nerveDark },
    signal: { edge: FIG.signalDark, ground: FIG.signalGround, text: FIG.signalTextDark },
    caution: { edge: FIG.cautionEdge, ground: FIG.cautionGround, text: FIG.cautionText },
  } as const;

  return (
    <Figure caption="One mechanism, four organs. Acetaminophen's risk concentrates in the liver; NSAIDs touch kidneys, heart, and stomach through the same prostaglandin chemistry that relieves pain. The limits shown are the established label ceilings — ceilings, not targets.">
      <svg
        role="img"
        aria-labelledby="organ-map-title organ-map-desc"
        viewBox="0 0 740 340"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="organ-map-title">
          Organ-by-organ safety map for common pain medications
        </title>
        <desc id="organ-map-desc">
          Four stacked cards — liver, kidneys, heart and vessels, stomach —
          showing which medication class stresses each organ and its key
          safety boundary.
        </desc>
        {organs.map((o) => {
          const top = 16 + o.y * 80;
          const c = colors[o.tone];
          return (
            <g key={o.name}>
              <rect
                x="20"
                y={top}
                width="700"
                height="64"
                rx="10"
                fill={c.ground}
                stroke={c.edge}
                strokeOpacity="0.7"
              />
              <text x="44" y={top + 27} fontSize="15" fontWeight="700" fill={FIG.ink}>
                {o.name}
              </text>
              <text x="44" y={top + 47} fontSize="12" fill={FIG.textMid}>
                {o.drug}
              </text>
              <text x="700" y={top + 37} textAnchor="end" fontSize="12.5" fontWeight="600" fill={c.text}>
                {o.note}
              </text>
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}

function CombinationStackFigure() {
  return (
    <Figure caption="The three stacking patterns behind most pain-medication injuries — each assembled accidentally, one reasonable product at a time.">
      <svg
        role="img"
        aria-labelledby="stack-title stack-desc"
        viewBox="0 0 740 210"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="stack-title">Three dangerous combination patterns</title>
        <desc id="stack-desc">
          Three cards: hidden acetaminophen stacking across cold and pain
          products; the NSAID plus blood-pressure pill plus diuretic triple
          whammy; and opioids or sedatives combined with benzodiazepines,
          sleep aids, or alcohol.
        </desc>
        {[
          {
            x: 20,
            title: "Hidden acetaminophen",
            lines: ["Rx combination painkiller", "+ cold / sleep product", "→ silent liver stacking"],
            ground: FIG.signalGround,
            edge: FIG.signalDark,
            text: FIG.signalTextDark,
          },
          {
            x: 267,
            title: "The triple whammy",
            lines: ["NSAID", "+ ACE inhibitor / ARB", "+ diuretic → kidney strain"],
            ground: FIG.cautionGround,
            edge: FIG.cautionEdge,
            text: FIG.cautionText,
          },
          {
            x: 513,
            title: "Sedative pile-up",
            lines: ["opioid or sedative", "+ benzodiazepine / alcohol", "→ breathing suppression"],
            ground: FIG.cautionGround,
            edge: FIG.caution,
            text: FIG.cautionTextDark,
          },
        ].map((card) => (
          <g key={card.title}>
            <rect x={card.x} y="20" width="207" height="170" rx="10" fill={card.ground} stroke={card.edge} />
            <text x={card.x + 103} y="52" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
              {card.title}
            </text>
            {card.lines.map((l, i) => (
              <text
                key={l}
                x={card.x + 103}
                y={86 + i * 26}
                textAnchor="middle"
                fontSize="12"
                fontWeight={i === 2 ? 700 : 400}
                fill={i === 2 ? card.text : FIG.textMid}
              >
                {l}
              </text>
            ))}
          </g>
        ))}
      </svg>
    </Figure>
  );
}
