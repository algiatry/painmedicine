import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * /treatments/opioids-for-acute-pain – what the largest overview of the
 * evidence (Sydney, Drugs 2026) actually found about opioids for short-term
 * pain, condition by condition. Literacy, not policy. Opioid content →
 * SAMHSA helpline inline (house rule), CDC-2022-aligned, never "how to
 * obtain," never an argument against opioids where they belong.
 */
export default function OpioidsForAcutePain() {
  return (
    <div>
      <KeyTakeaways
        items={[
          <>
            For some acute conditions opioids help modestly, for others the benefit is very small, and <strong>the harms are not small</strong>.
          </>,
          <>
            For acute musculoskeletal pain, oral opioids lowered pain by only about <strong>9 points on a 100-point scale</strong> while raising side effects by roughly 10 percentage points.
          </>,
          <>
            In the OPAL trial, opioids gave <strong>no significant benefit</strong> for acute low back or neck pain at six weeks.
          </>,
          <>
            For acute abdominal pain and after painful procedures, the same evidence says opioids <strong>earn their place</strong>.
          </>,
        ]}
      />

      <H2 id="the-question">A fair question, finally answered at scale</H2>
      <P>
        If you have ever left an urgent care or emergency department with a
        sprained ankle, a wrenched back, or a fresh set of stitches and been
        handed ibuprofen rather than a &ldquo;strong&rdquo; painkiller, you
        may have wondered whether you were being short-changed. It is a fair
        question, and until recently nobody had pulled together the whole
        answer. In 2026 a University of Sydney team published the largest
        attempt so far: an <strong>overview of systematic reviews</strong>{" "}
        – a review of reviews – that gathered 59 systematic reviews of
        randomized trials comparing opioids with placebo for short-term,
        non-cancer pain. The headline is more interesting than either
        &ldquo;opioids work&rdquo; or &ldquo;opioids don&rsquo;t&rdquo;: for
        some acute conditions they help, modestly; for others the benefit is
        very small; and the harms are not small.
      </P>

      <P>
        This page walks through what that overview and the two trials behind
        its most-quoted findings actually report. It describes; it does not
        prescribe. Nothing here is an argument against opioids after major
        surgery, serious injury, or in cancer care, where they remain
        essential – and decisions about your own pain plan belong to you and
        your clinician.
      </P>

      <BenefitByConditionFigure />

      <H2 id="what-it-found">What the overview found, condition by condition</H2>
      <P>
        The reviewers measured pain on a 0–100 scale and asked how much lower
        it was with an opioid than with placebo. Their main time point was the
        first three hours after a dose. For <strong>acute abdominal pain</strong>{" "}
        (the belly pain of appendicitis, kidney stones, and similar
        emergencies, usually treated with injected morphine or oxycodone in
        hospital), opioids lowered pain by about 18 points – high-certainty
        evidence, though the trials did not report harms. For{" "}
        <strong>dental surgery</strong> the drop was about 20 points, and for{" "}
        <strong>myringotomy</strong> (ear-tube surgery in children) about 15
        points – both moderate certainty. Those are real, meaningful effects
        in the hours after a painful procedure.
      </P>
      <P>
        The picture changes for <strong>acute musculoskeletal pain</strong> –
        the sprains, strains, and back and neck injuries that account for most
        opioid prescriptions outside hospital. Here, oral opioids lowered pain
        by only about 9 points on the 100-point scale between six and 48
        hours, which the authors describe as &ldquo;very small.&rdquo; At the
        same time they raised the chance of a side effect by roughly 10
        percentage points: about one extra person in ten experiencing nausea,
        drowsiness, dizziness, or constipation. The authors&rsquo; own
        conclusion is careful and worth quoting: opioids &ldquo;are
        efficacious in reducing pain in some acute conditions.&rdquo; Some –
        not all, and not equally.
      </P>

      <H2 id="back-and-neck">Back and neck pain: the OPAL trial</H2>
      <P>
        The clearest single test of opioids for the most common acute
        complaint came from the same Sydney group in 2023. The{" "}
        <strong>OPAL trial</strong>, published in <em>The Lancet</em>,
        randomized 347 adults with recent low back or neck pain to a short,
        carefully managed course of an opioid or an identical placebo, both on
        top of standard care. At six weeks, pain scores were essentially the
        same – 2.8 out of 10 with the opioid, 2.3 with placebo, a difference
        that did not reach statistical significance and, if anything, leaned
        the wrong way. More people on the opioid reported opioid-type side
        effects such as constipation. The investigators concluded that
        opioids should not be recommended for acute non-specific back or neck
        pain.
      </P>
      <P>
        That finding is now built into how clinicians approach{" "}
        <Link href="/conditions/low-back-pain" className={link}>
          low back pain
        </Link>
        : the pain is real and often severe, but the medication that sounds
        strongest does not beat a sugar pill for this particular problem.
        Staying gently active, heat, short courses of an NSAID where safe, and
        time do most of the work.
      </P>

      <H2 id="ibuprofen">&ldquo;They only gave me ibuprofen&rdquo;</H2>
      <P>
        For a broken arm or a badly sprained ankle, is ibuprofen really in the
        same league? A 2017 randomized trial in two New York emergency
        departments, published in <em>JAMA</em>, tested exactly that. Over
        400 adults with moderate-to-severe arm or leg injuries – mostly
        fractures, sprains, and soft-tissue injuries – received a single dose
        of either <strong>ibuprofen plus acetaminophen</strong> or one of
        three opioid-plus-acetaminophen combinations (oxycodone, hydrocodone,
        or codeine). Two hours later, pain had fallen by about four points on
        a 10-point scale in every group, and none of the differences came
        close to the threshold patients notice. The non-opioid pair matched
        the opioids.
      </P>
      <P>
        There is a mechanism behind that result, explained on our{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications map
        </Link>
        . Injury pain is largely <strong>inflammatory</strong>: damaged tissue
        releases chemicals that sensitize nerve endings. NSAIDs act at that
        source; acetaminophen works higher up through a different route; used
        together they cover two mechanisms at once. Opioids act mainly in the
        spinal cord and brain and leave the inflammation untouched. So when a
        clinician reaches for the NSAID-and-acetaminophen combination first,
        that is usually not the system failing you. It is the evidence
        working – with the side effects of sedation, nausea, and constipation
        left out. (NSAIDs carry their own cautions, for the stomach, kidneys,
        and heart, which is why they are not right for everyone either; your
        clinician and pharmacist weigh that for you.)
      </P>

      <H2 id="where-opioids-belong">Where opioids still have a clear place</H2>
      <P>
        None of this means opioids are the wrong answer for acute pain in
        general. The overview found real benefit in the hours after painful
        procedures and in acute abdominal emergencies, and the trials it
        gathered largely excluded the situations where opioids matter most:
        major trauma, burns, large operations, sickle-cell crises, and cancer
        pain. In those settings the CDC&rsquo;s 2022 guideline is explicit
        that opioids remain appropriate, and it is equally explicit that its
        recommendations are not meant to be applied as rigid limits or to
        deny needed pain relief. What the guideline does ask, for acute pain,
        is that non-opioid treatments be used wherever they are at least as
        effective, that opioids be prescribed at the lowest effective dose for
        no longer than the expected duration of severe pain, and that
        clinicians reassess rather than renew on autopilot.
      </P>
      <P>
        The reason for that caution is also in the data. A short prescription
        is where most long-term use begins, and the pain that outlasts an
        operation – covered on our page about{" "}
        <Link href="/conditions/persistent-postsurgical-pain" className={link}>
          persistent postsurgical pain
        </Link>{" "}
        – is easier to prevent with a planned, multimodal approach than to
        treat afterward.
      </P>

      <H2 id="harms">The harms column, honestly</H2>
      <P>
        Side effects from a short opioid course are common and usually
        unpleasant rather than dangerous: constipation, nausea, drowsiness,
        dizziness, itching, and a foggy head that makes driving unsafe. The
        rarer harms are the serious ones. Opioids slow breathing, and that
        effect multiplies with alcohol, benzodiazepines, sleep medications,
        and gabapentinoids – the combinations behind most overdose deaths.
        Older adults, people with sleep apnea or lung disease, and anyone
        who has had a prior substance use problem are at higher risk from
        even a few days of use. And leftover tablets in a cabinet are the
        most common source of misused prescription opioids.
      </P>
      <P>
        If you or someone you love is struggling with opioid use, that is a
        medical condition with effective treatment, not a character verdict –
        the SAMHSA helpline, <strong>1-800-662-4357</strong>, is free,
        confidential, and answers around the clock. Our page on{" "}
        <Link href="/treatments/opioid-stewardship" className={link}>
          opioids, honestly
        </Link>{" "}
        covers naloxone, safe storage, and disposal in detail.
      </P>

      <H2 id="urgent">When pain after an injury needs urgent care</H2>
      <P>
        Whatever you were prescribed, some patterns should not wait for a
        follow-up appointment: pain that keeps escalating despite medication;
        a limb that is numb, cold, pale, or cannot be moved; new weakness in
        the legs, or new trouble controlling the bladder or bowels after a
        back injury; a fever with worsening pain; a wound that is spreading
        red or draining; or, if an opioid was prescribed, extreme sleepiness,
        slow or shallow breathing, or being hard to wake – that is an
        emergency, and naloxone and a 911 call come first. Go to an emergency
        department or call your clinician the same day.
      </P>

      <H2 id="takeaway">What to take from this</H2>
      <P>
        You are not imagining your pain, and you are not being fobbed off
        when a sprain, a strain, or a sore back gets ibuprofen and
        acetaminophen rather than an opioid. The largest overview of the
        evidence says the opioid would, on average, buy you very little extra
        relief for that kind of pain and a meaningfully higher chance of
        feeling worse in other ways. For acute belly pain and painful
        procedures, the same evidence says opioids earn their place. The
        useful question to bring to your clinician is not &ldquo;why
        didn&rsquo;t I get something stronger?&rdquo; but &ldquo;what kind of
        pain is this, and what works for that kind?&rdquo;
      </P>
    </div>
  );
}

/**
 * Figure – benefit versus placebo by acute condition (0–100 pain scale,
 * from the Sydney overview and the OPAL trial), with an honest harms column.
 */
function BenefitByConditionFigure() {
  const rows: {
    label: string;
    sub: string;
    value: number;
    note: string;
    certainty: string;
    harm: string;
    harmTone: "none" | "data" | "more";
  }[] = [
    {
      label: "Acute abdominal pain",
      sub: "injected opioids, first 3 h",
      value: 18.4,
      note: "about 18 points lower",
      certainty: "high certainty",
      harm: "no harms data",
      harmTone: "none",
    },
    {
      label: "Dental surgery",
      sub: "first 3 h",
      value: 19.5,
      note: "about 20 points lower",
      certainty: "moderate certainty",
      harm: "no extra side effects found",
      harmTone: "data",
    },
    {
      label: "Ear-tube surgery (children)",
      sub: "first 3 h",
      value: 15,
      note: "about 15 points lower",
      certainty: "moderate certainty",
      harm: "no harms data",
      harmTone: "none",
    },
    {
      label: "Acute musculoskeletal pain",
      sub: "oral opioids, 6–48 h",
      value: 8.9,
      note: "about 9 points – “very small”",
      certainty: "moderate certainty",
      harm: "≈1 in 10 more side effects",
      harmTone: "more",
    },
    {
      label: "Acute back / neck pain",
      sub: "OPAL trial, 6 weeks",
      value: 0,
      note: "no significant benefit",
      certainty: "randomized trial",
      harm: "more opioid-type side effects",
      harmTone: "more",
    },
  ];
  const rowH = 46;
  const top = 58;
  const barX = 236;
  const barMax = 180; // px for 20 points
  const scale = barMax / 20;

  return (
    <Figure caption="How much lower pain was with an opioid than with placebo, on a 0–100 scale, in the 2026 Sydney overview of 59 systematic reviews – plus the OPAL trial for acute back and neck pain. Benefit is real after painful procedures and in abdominal emergencies; for everyday musculoskeletal injuries it is very small, and the harms column fills in.">
      <svg
        role="img"
        aria-labelledby="ofa-title ofa-desc"
        viewBox="0 0 680 320"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="ofa-title">Opioid benefit versus placebo by acute condition</title>
        <desc id="ofa-desc">
          Horizontal bars: acute abdominal pain about 18 points lower, dental
          surgery about 20, ear-tube surgery about 15, acute musculoskeletal
          pain about 9 and labelled very small, and acute back or neck pain
          with no significant benefit. A harms column shows no data for
          abdominal and ear-tube surgery, no extra side effects for dental
          surgery, and more side effects for musculoskeletal and back or neck
          pain.
        </desc>

        {/* column headers */}
        <text x="20" y="30" fontSize="12" fontWeight="700" fill={FIG.muted}>
          CONDITION
        </text>
        <text x={barX} y="30" fontSize="12" fontWeight="700" fill={FIG.muted}>
          PAIN LOWER THAN PLACEBO (0–100)
        </text>
        <text x="520" y="30" fontSize="12" fontWeight="700" fill={FIG.muted}>
          HARMS
        </text>
        <line x1="20" y1="40" x2="660" y2="40" stroke={FIG.line} />

        {/* axis ticks */}
        {[0, 10, 20].map((t) => (
          <g key={t}>
            <line
              x1={barX + t * scale}
              y1={top - 8}
              x2={barX + t * scale}
              y2={top + rows.length * rowH - 10}
              stroke={FIG.soft}
              strokeDasharray="2 4"
            />
            <text
              x={barX + t * scale}
              y={top + rows.length * rowH + 6}
              textAnchor="middle"
              fontSize="10.5"
              fill={FIG.faint}
            >
              {t}
            </text>
          </g>
        ))}

        {rows.map((r, i) => {
          const y = top + i * rowH;
          const w = Math.max(r.value * scale, 0);
          const harmFill =
            r.harmTone === "more"
              ? FIG.cautionGround
              : r.harmTone === "data"
                ? FIG.nerveGround
                : FIG.ground;
          const harmStroke =
            r.harmTone === "more"
              ? FIG.cautionEdge
              : r.harmTone === "data"
                ? FIG.nerve
                : FIG.line;
          const harmText =
            r.harmTone === "more"
              ? FIG.cautionText
              : r.harmTone === "data"
                ? FIG.nerveDark
                : FIG.muted;
          return (
            <g key={r.label}>
              <text x="20" y={y + 6} fontSize="13" fontWeight="700" fill={FIG.ink}>
                {r.label}
              </text>
              <text x="20" y={y + 22} fontSize="11" fill={FIG.muted}>
                {r.sub}
              </text>

              {/* bar */}
              <rect
                x={barX}
                y={y - 6}
                width={barMax}
                height="16"
                rx="4"
                fill={FIG.paper}
                stroke={FIG.soft}
              />
              {w > 0 ? (
                <rect
                  x={barX}
                  y={y - 6}
                  width={w}
                  height="16"
                  rx="4"
                  fill={r.value < 10 ? FIG.signalBright : FIG.signal}
                  fillOpacity={r.value < 10 ? 0.75 : 1}
                />
              ) : (
                <line
                  x1={barX}
                  y1={y - 8}
                  x2={barX}
                  y2={y + 12}
                  stroke={FIG.signalDark}
                  strokeWidth="3"
                />
              )}
              <text x={barX} y={y + 24} fontSize="11" fill={FIG.signalText}>
                {r.note} · {r.certainty}
              </text>

              {/* harms pill */}
              <rect
                x="516"
                y={y - 9}
                width="150"
                height="24"
                rx="12"
                fill={harmFill}
                stroke={harmStroke}
              />
              <text
                x="591"
                y={y + 7}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill={harmText}
              >
                {r.harm}
              </text>
            </g>
          );
        })}

        <text x="20" y="306" fontSize="10.5" fill={FIG.faint}>
          Sources: Mathieson &amp; Zadro et al., Drugs 2026 (overview); Jones et al., Lancet 2023 (OPAL). Differences in means versus placebo.
        </text>
      </svg>
    </Figure>
  );
}
