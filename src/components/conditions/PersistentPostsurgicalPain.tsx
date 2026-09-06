import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

function TransitionFigure() {
  const points = [
    { x: 74, y: 80, label: "operation" },
    { x: 220, y: 132, label: "acute pain" },
    { x: 366, y: 172, label: "recovery" },
    { x: 542, y: 198, label: "settling" },
  ];
  return (
    <Figure caption="Most postoperative pain falls as tissue heals. Persistent postsurgical pain follows a different path: the signal plateaus or changes character instead of continuing toward recovery.">
      <svg role="img" aria-labelledby="pps-title pps-desc" viewBox="0 0 680 320" className="mx-auto block h-auto w-full max-w-2xl">
        <title id="pps-title">The transition from acute to persistent postsurgical pain</title>
        <desc id="pps-desc">One line declines during expected recovery while another plateaus beyond the three-month threshold.</desc>
        <path d="M62 66 C170 100 258 160 604 244" fill="none" stroke={FIG.nerve} strokeWidth="6" strokeLinecap="round" />
        <path d="M62 66 C170 100 244 156 330 178 C430 202 504 178 604 185" fill="none" stroke={FIG.signal} strokeWidth="6" strokeLinecap="round" />
        <path d="M420 40 V260" stroke={FIG.line} strokeWidth="2" strokeDasharray="6 6" />
        <text x="420" y="282" textAnchor="middle" fontSize="13" fontWeight="700" fill={FIG.textMid}>3 months</text>
        <text x="590" y="236" textAnchor="end" fontSize="14" fontWeight="700" fill={FIG.nerveDark}>expected recovery</text>
        <text x="590" y="168" textAnchor="end" fontSize="14" fontWeight="700" fill={FIG.signalText}>persistent pain</text>
        {points.map((p) => <circle key={p.label} cx={p.x} cy={p.y} r="5" fill={FIG.ink} />)}
      </svg>
    </Figure>
  );
}

export default function PersistentPostsurgicalPain() {
  return (
    <div>
      <P>
        Surgery deliberately injures tissue in order to repair, remove, replace,
        or reconstruct something deeper. Acute pain is therefore expected. The
        important signal is its direction: as healing advances, pain and
        interference should generally recede. When new or worsened pain remains
        beyond three months, medicine recognizes a distinct condition — not a
        character flaw, and not automatically a failed operation.
      </P>

      <H2 id="transition">When recovery takes a different path</H2>
      <TransitionFigure />
      <P>
        The ICD-11 definition requires pain that developed or increased after a
        surgical procedure, persists for at least three months, and sits in the
        surgical field or a referred nerve territory. Other explanations —
        infection, recurrent disease, an unstable implant, poor healing, or a
        separate pain condition — must be considered. The three-month line is a
        definition, not permission to ignore severe or worsening pain before it.
      </P>
      <P>
        Persistent postsurgical pain affects roughly one person in ten after
        surgery, although risk varies widely by procedure and by how studies
        define it. Operations near major nerves — including thoracic, breast,
        hernia, amputation, and some joint procedures — carry recognizable risk.
        A substantial share has a neuropathic component, which changes both the
        symptoms and the treatment map.
      </P>

      <H2 id="mechanisms">A healed incision can still hurt</H2>
      <P>
        A small skin nerve may be cut, stretched, trapped in scar, or sensitized.
        The result can be burning, shocks, numb-yet-painful skin, or pain from
        clothing brushing the scar. Other people develop guarded movement,
        muscle weakness, or an altered load pattern around the operated area.
        Repeated signaling can also sensitize spinal and brain circuits so that
        the alarm remains louder than the tissue state alone would predict.
      </P>
      <P>
        Those mechanisms can overlap. That is why another scan or another
        operation is not automatically the answer, but neither is
        &ldquo;everything healed&rdquo; an adequate dismissal. A useful assessment
        maps the pain, sensation, strength, movement, scar, function, and the
        original surgical goal, then asks what mechanism now explains the
        pattern.
      </P>

      <H2 id="risk">Risk is information, not blame</H2>
      <P>
        The most consistent risks include pain before surgery, another chronic
        pain condition, severe or prolonged acute postoperative pain, nerve
        injury, repeated procedures, and the type of operation. Anxiety,
        depression, sleep disruption, fear of movement, and social stress can
        raise risk too. They do not mean the pain is psychological. They affect
        immune, endocrine, behavioral, and nervous-system recovery and identify
        people who may need more support before and after surgery.
      </P>
      <P>
        Prevention therefore starts before the incision: set realistic recovery
        expectations, identify high-risk patients, plan multimodal analgesia,
        protect nerves where possible, and arrange follow-up when pain is not
        following the expected curve. No single perioperative drug has
        consistently erased the risk across operations; individualized systems
        of care matter more than one supposed protective medication.
      </P>

      <H2 id="treatment">How persistent postsurgical pain is treated</H2>
      <P>
        First, make sure a treatable surgical problem has not been missed. The
        surgical team may need to evaluate fever, drainage, swelling, mechanical
        symptoms, recurrence, implant problems, or new neurological loss. Once
        those are addressed, treatment is mechanism-based: graded physical
        rehabilitation for lost movement and capacity; scar mobilization and
        desensitization; and the{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>neuropathic-pain toolbox</Link>{" "}
        when injured nerves dominate.
      </P>
      <P>
        Psychological pain therapies can reduce fear, distress, and disability
        while sleep treatment removes a powerful amplifier. Selected nerve
        blocks or other procedures may clarify and treat a focal generator, but
        temporary numbness is not proof that repeated procedures will create
        durable recovery. The right outcome measures include function, sleep,
        medication burden, and participation — not only the pain score.
      </P>

      <H2 id="transitional">The missing bridge: transitional pain care</H2>
      <P>
        Surgical care can end just as chronic-pain care becomes necessary. A
        transitional pain service bridges that handoff: anesthesiology and pain
        medicine work with surgery, rehabilitation, psychology, and primary care
        to follow high-risk patients, identify neuropathic pain early, restore
        activity, and manage medication safely. The model is promising because
        it treats the transition itself rather than waiting months for a new
        referral after recovery has stalled.
      </P>
      <P>
        If opioid pain medicine remains part of recovery, it should be reviewed
        against current function, benefit, adverse effects, and a clinician-led
        plan rather than stopped abruptly or allowed to drift indefinitely. If
        opioid use is becoming hard to control, confidential help is available
        from the SAMHSA National Helpline at <strong>1-800-662-HELP (4357)</strong>.
      </P>

      <H2 id="urgent">When postoperative pain is urgent</H2>
      <P>
        Follow the operation-specific instructions from the surgical team. Seek
        urgent care for trouble breathing, chest pain, fainting, sudden
        confusion, uncontrolled bleeding, new one-sided leg swelling, rapidly
        worsening pain, fever with spreading redness or drainage, a cold or pale
        limb, new weakness or sensory loss, or loss of bladder or bowel control.
        These are not symptoms to relabel as chronic pain from a distance.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        The field is moving toward risk prediction before surgery, procedure-
        specific prevention, sensory mapping that identifies injured nerves, and
        wider transitional pain services. Better trials must separate ordinary
        pain intensity from neuropathic symptoms and functional interference.
        The site&rsquo;s guides to{" "}
        <Link href="/future-of-pain-medicine/precision-pain-medicine" className={link}>precision pain medicine</Link>{" "}
        and <Link href="/future-of-pain-medicine/neuromodulation" className={link}>neuromodulation</Link>{" "}
        track two parts of that mechanism-matching future.
      </P>

      <H2 id="specialist">When to see a pain specialist</H2>
      <P>
        Ask for help early when pain is severe, neuropathic, requiring ongoing
        high-risk medication, or blocking rehabilitation — there is no advantage
        in waiting for exactly three months to plan better care. A pain
        specialist or transitional service can work alongside the surgeon to
        exclude complications, identify the dominant mechanism, and coordinate
        rehabilitation and medication. Persistent pain after technically
        successful surgery is a recognized diagnosis, not proof that the patient
        or surgeon imagined the problem.
      </P>
    </div>
  );
}
