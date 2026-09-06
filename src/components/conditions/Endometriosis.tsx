import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

function PainLayersFigure() {
  const layers = [
    { y: 50, label: "Lesions & inflammation", note: "cycle-linked tissue signals", color: FIG.signal },
    { y: 112, label: "Organs & adhesions", note: "ovary · bowel · bladder · movement", color: FIG.caution },
    { y: 174, label: "Pelvic-floor guarding", note: "muscles tighten around pain", color: FIG.nerve },
    { y: 236, label: "Nervous-system sensitivity", note: "the alarm can stay amplified", color: FIG.nerveDark },
  ];

  return (
    <Figure caption="Endometriosis pain can become layered. Treating visible lesions may matter, but muscles, neighboring organs, and an amplified pain system can also need attention.">
      <svg
        role="img"
        aria-labelledby="endo-layers-title endo-layers-desc"
        viewBox="0 0 680 330"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="endo-layers-title">Four layers of endometriosis-associated pain</title>
        <desc id="endo-layers-desc">
          Four stacked bands show lesions and inflammation, involved organs and
          adhesions, pelvic-floor muscle guarding, and nervous-system sensitivity.
        </desc>
        {layers.map((layer) => (
          <g key={layer.label}>
            <rect x="48" y={layer.y} width="584" height="48" rx="12" fill={FIG.ground} stroke={FIG.line} />
            <rect x="48" y={layer.y} width="10" height="48" rx="5" fill={layer.color} />
            <text x="82" y={layer.y + 21} fontSize="15" fontWeight="700" fill={FIG.ink}>
              {layer.label}
            </text>
            <text x="82" y={layer.y + 39} fontSize="12.5" fill={FIG.textMid}>
              {layer.note}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function Endometriosis() {
  return (
    <div>
      <P>
        Endometriosis is defined by tissue similar to the lining of the uterus
        growing elsewhere — commonly on the pelvic lining, ovaries, and tissue
        around pelvic organs. It is not simply &ldquo;bad periods.&rdquo; It can
        drive pain throughout the month, pain during sex, bowel or bladder pain,
        fatigue, and infertility. The amount seen at surgery does not reliably
        predict how much a person hurts.
      </P>

      <H2 id="pattern">The symptom pattern matters</H2>
      <P>
        The classic clue is pain that follows the menstrual cycle: cramps severe
        enough to stop school, work, sleep, or ordinary life; deep pain during or
        after sex; and bowel movements or urination that become painful around a
        period. But endometriosis can also produce non-cyclical pelvic pain, back
        or hip pain, and symptoms that overlap irritable bowel syndrome, bladder
        pain syndrome, adenomyosis, ovarian cysts, and pelvic-floor muscle pain.
      </P>
      <P>
        That overlap is one reason diagnosis is delayed. Another is the false
        idea that severe menstrual pain must be normal if bleeding is regular.
        A symptom diary can reveal timing and triggers, but no single symptom
        proves the disease. The job of evaluation is to take the pattern
        seriously while checking for other causes that can coexist.
      </P>

      <H2 id="diagnosis">Diagnosis no longer has to begin with surgery</H2>
      <P>
        Older care pathways treated laparoscopy — keyhole surgery to look inside
        the pelvis — as the required diagnostic gate. Current ACOG and ESHRE
        guidance has moved beyond that rule. A clinician can form a working
        diagnosis from symptoms, examination, and imaging, then discuss either
        empiric medical treatment or surgery according to the person&rsquo;s
        priorities. Not needing surgery first does not mean guessing; it means
        the diagnostic pathway can be individualized.
      </P>
      <P>
        Expert transvaginal ultrasound and MRI can identify ovarian endometriomas
        and many deep lesions and can map disease before specialist surgery.
        They are much less reliable for superficial endometriosis. A normal scan
        therefore does not close the case. Laparoscopy remains useful when the
        diagnosis is uncertain, treatment has not worked, fertility or anatomy
        changes the decision, or the patient prefers diagnosis and possible
        surgical treatment together.
      </P>

      <H2 id="layers">Why pain can outgrow the visible lesions</H2>
      <PainLayersFigure />
      <P>
        Lesions can bleed microscopically, inflame surrounding tissue, irritate
        nerves, and tether organs through fibrosis or adhesions. Repeated pain
        can also teach pelvic-floor muscles to guard. Over time, the spinal cord
        and brain may become more responsive to pelvic signals — a real process
        called sensitization. These layers explain why stage and pain often fail
        to match, and why removing lesions may help greatly without guaranteeing
        that every part of persistent pain disappears.
      </P>
      <P>
        None of this makes the disease psychological. It makes endometriosis a
        good example of{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          mixed-mechanism pain
        </Link>
        : inflammatory tissue signals, nerve involvement, muscle guarding, and
        sometimes nociplastic amplification can occupy the same pelvis.
      </P>

      <H2 id="treatment">How endometriosis pain is treated today</H2>
      <P>
        Treatment is chosen around two goals that may coexist but are not
        identical: controlling pain and pursuing pregnancy. Analgesics can help
        symptoms. Hormonal treatments aim to suppress the cyclical stimulation
        of lesions and include combined hormonal contraceptives, progestogens,
        and, when appropriate, medications acting on the GnRH pathway. These
        options differ in adverse effects, contraceptive action, bone-health
        considerations, cost, and reversibility. The choice and monitoring
        belong with a clinician; this page gives no dosing guidance.
      </P>
      <P>
        Surgery can diagnose disease, remove lesions, restore anatomy, and reduce
        pain for selected patients. Deep disease involving bowel, bladder,
        ureter, or other organs should be managed by an experienced
        multidisciplinary center because benefit must be weighed against organ
        injury, complications, recurrence, and effects on ovarian reserve.
        Hysterectomy removes the uterus, not every lesion outside it, and does not
        guarantee the end of pain.
      </P>
      <P>
        Pelvic-floor physical therapy can address painful guarding, movement,
        and pain with sex. Broader multidisciplinary care can treat sleep,
        gastrointestinal or bladder overlap, sexual pain, and nervous-system
        sensitivity alongside the disease itself. That is not consolation care;
        it is treatment for mechanisms that hormones or lesion surgery do not
        directly reach.
      </P>

      <H2 id="fertility">Pain treatment and fertility treatment are different maps</H2>
      <P>
        Hormonal suppression can control pain while it is used, but it prevents
        conception during treatment and is not a fertility treatment. Surgery
        may help fertility in selected circumstances but can also reduce ovarian
        reserve, particularly with repeated surgery on ovarian endometriomas.
        Age, ovarian reserve, lesion location, prior operations, other infertility
        factors, and time priorities all matter. When pregnancy is a current
        goal, early coordination with gynecology or reproductive endocrinology
        can prevent a pain plan and fertility plan from working against each
        other.
      </P>

      <H2 id="urgent">When pelvic pain needs urgent evaluation</H2>
      <P>
        Not every severe pelvic event is an endometriosis flare. Seek urgent care
        for sudden severe pain, fainting, heavy bleeding, fever, persistent
        vomiting, a rigid or rapidly swelling abdomen, or pain when pregnancy is
        possible. Ectopic pregnancy, ovarian torsion, a ruptured cyst, infection,
        appendicitis, or another acute abdominal condition can overlap the same
        territory and may be time-critical.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        The field needs noninvasive biomarkers, imaging that reliably sees
        superficial disease, and treatments that suppress lesions without
        trading pain for intolerable hormonal effects. Research is also moving
        toward matching therapies to lesion biology and treating the nervous
        system and pelvic floor earlier, before years of repeated pain create
        additional layers. The site&rsquo;s{" "}
        <Link href="/future-of-pain-medicine/precision-pain-medicine" className={link}>
          precision pain medicine
        </Link>{" "}
        guide explains why mechanism-based matching matters.
      </P>

      <H2 id="specialist">When to seek specialist care</H2>
      <P>
        Evaluation is warranted when menstrual or pelvic pain disrupts life,
        sex, bowel or bladder function, school, work, or fertility plans. Seek an
        endometriosis-experienced gynecologist when symptoms persist despite
        first-line care, imaging suggests deep disease or an endometrioma, or
        surgery is being considered. A pelvic-floor therapist, fertility
        specialist, gastroenterologist, urologist, and pain physician may all
        have roles. Complex pelvic pain is not evidence that nothing is wrong;
        it is evidence that one specialty may not be enough.
      </P>
    </div>
  );
}
