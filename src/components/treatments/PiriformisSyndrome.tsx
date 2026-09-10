import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";
import {
  PelvisPosterior,
  PELVIS_H,
  PELVIS_W,
} from "../anatomy/PelvisPosterior";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — the deep hip from behind: piriformis crossing the greater
 * sciatic notch with the sciatic nerve emerging beneath it. Bone and muscle
 * are projected from BodyParts3D meshes; the nerve is schematic.
 */
function DeepHipFigure() {
  const scale = 0.62;
  return (
    <Figure caption="The deep hip, seen from behind (the patient's right is on your right). Piriformis is the small pear-shaped muscle running from the sacrum out to the top of the thigh bone, drawn here in teal beneath the ghosted gluteus medius. The sciatic nerve — drawn schematically, in amber — leaves the pelvis right underneath it, which is the whole story of this page. Bone and muscle outlines are projected from BodyParts3D 4.0 (DBCLS, CC BY 4.0).">
      <svg
        role="img"
        aria-labelledby="deephip-title deephip-desc"
        viewBox={`0 0 ${PELVIS_W * scale + 60} ${PELVIS_H * scale + 40}`}
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="deephip-title">
          Piriformis and the sciatic nerve, posterior view
        </title>
        <desc id="deephip-desc">
          A posterior view of the pelvis and upper thigh bones. The
          piriformis muscle crosses from the sacrum to the greater
          trochanter on each side; the gluteus medius is ghosted above it.
          On the right side, an amber line marks the schematic course of the
          sciatic nerve, emerging beneath the piriformis and descending the
          back of the thigh. An amber ring marks the tender point at the
          greater sciatic notch.
        </desc>
        <g transform={`translate(30 20) scale(${scale})`}>
          <PelvisPosterior
            piriformis="both"
            nerve="right"
            marks={[{ at: "sciaticNotchR", size: "md" }]}
          />
        </g>
        {/* labels, in figure space */}
        <g fontSize="13" fontWeight="700">
          <text x="440" y="212" fill={FIG.nerveDark}>
            piriformis
          </text>
          <text x="66" y="212" fill={FIG.nerveDark}>
            piriformis
          </text>
          <text x="560" y="486" fill={FIG.signalDark}>
            sciatic nerve
          </text>
          <text x="330" y="105" textAnchor="middle" fill={FIG.textMid} fontWeight="400">
            sacrum
          </text>
          <text x="112" y="318" textAnchor="middle" fill={FIG.textMid} fontWeight="400" fontSize="12">
            gluteus medius
          </text>
          <text x="112" y="334" textAnchor="middle" fill={FIG.textMid} fontWeight="400" fontSize="11">
            (dashed, overlying)
          </text>
        </g>
        <path d="M478 218 Q470 250 466 266" fill="none" stroke={FIG.nerveDark} strokeWidth="1.5" />
        <path d="M556 480 Q540 474 528 458" fill="none" stroke={FIG.signalDark} strokeWidth="1.5" />
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — the quartet: the four clinical features that the systematic
 * reviews keep finding, laid out as what the clinician is actually looking for.
 */
function QuartetFigure() {
  const cards: { title: string; body: [string, string]; x: number; y: number }[] = [
    { title: "Buttock pain", body: ["deep, in the cheek —", "not centered on the spine"], x: 24, y: 40 },
    { title: "Worse with sitting", body: ["the chair, the car,", "the long flight"], x: 352, y: 40 },
    { title: "Tender at the notch", body: ["pressing over the greater", "sciatic notch reproduces it"], x: 24, y: 160 },
    { title: "Provoked by tensioning", body: ["positions that stretch or", "contract piriformis fire it"], x: 352, y: 160 },
  ];
  return (
    <Figure caption="The quartet. Two systematic reviews, eight years apart, kept finding the same four features in reported cases: buttock pain, pain aggravated by sitting, tenderness over the greater sciatic notch, and pain on maneuvers that tension the piriformis. Together they define the syndrome — none of them, alone, proves it (Hopayian 2010, 2018).">
      <svg
        role="img"
        aria-labelledby="quartet-title quartet-desc"
        viewBox="0 0 680 290"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="quartet-title">The four features of piriformis syndrome</title>
        <desc id="quartet-desc">
          Four cards arranged in a two-by-two grid: buttock pain, worse with
          sitting, tenderness at the greater sciatic notch, and pain provoked
          by tensioning the piriformis. A caption underneath reads that the
          four together define the syndrome.
        </desc>
        {cards.map((c) => (
          <g key={c.title}>
            <rect x={c.x} y={c.y} width="304" height="96" rx="14" fill={FIG.nerveGround} stroke={FIG.nerveDark} strokeWidth="2" />
            <circle cx={c.x + 30} cy={c.y + 48} r="11" fill="none" stroke={FIG.signal} strokeWidth="2" strokeOpacity="0.8" />
            <circle cx={c.x + 30} cy={c.y + 48} r="3.2" fill={FIG.signal} />
            <text x={c.x + 56} y={c.y + 38} fontSize="14.5" fontWeight="700" fill={FIG.ink}>
              {c.title}
            </text>
            <text x={c.x + 56} y={c.y + 58} fontSize="11.5" fill={FIG.textMid}>
              {c.body[0]}
            </text>
            <text x={c.x + 56} y={c.y + 74} fontSize="11.5" fill={FIG.textMid}>
              {c.body[1]}
            </text>
          </g>
        ))}
        <text x="340" y="278" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          four together, not one alone — and a straight-leg raise that hurts does not rule it out
        </text>
      </svg>
    </Figure>
  );
}

export default function PiriformisSyndrome() {
  return (
    <div>
      <P>
        Most{" "}
        <Link href="/conditions/sciatica" className={link}>
          sciatica
        </Link>{" "}
        starts at the spine. This page is about the minority that does not
        — the buttock-and-leg pain whose address is a small, deep muscle
        in the hip called the <strong>piriformis</strong>, which the sciatic
        nerve has to pass beneath on its way out of the pelvis. Piriformis
        syndrome has been described for the better part of a century and
        argued about for nearly as long: the literature is mostly case
        series, nobody has a clean number for how common it is, and its
        signature features overlap with half a dozen other reasons a
        buttock can hurt. What the evidence does agree on is worth knowing,
        because it changes what a physical therapy plan is built to do.
      </P>

      <H2 id="where-it-lives">Where it lives</H2>
      <DeepHipFigure />
      <P>
        Piriformis runs from the front of the sacrum out through the
        greater sciatic notch to the top of the thigh bone. It is a hip
        rotator: it turns the thigh outward when the hip is straight and
        helps pull it sideways when the hip is bent. The sciatic nerve —
        the largest nerve in the body, formed from the lower spinal nerve
        roots — leaves the pelvis through the same notch, almost always
        emerging just <em>below</em> the muscle&rsquo;s lower edge. That
        shared doorway is the whole anatomy of the problem. A piriformis
        that is thickened, in spasm, shortened, or irritated by a fall or
        by hours of sitting on a hard edge can press on or inflame the nerve
        beneath it, and the nerve reports the trouble the only way it knows
        how: as pain down its territory, the back of the thigh and
        sometimes the calf.
      </P>
      <P>
        For decades the favorite explanation was an anatomical variant: in
        roughly one person in six, the nerve or one of its two divisions
        pierces the muscle rather than passing beneath it. That figure is
        real — a pooled analysis of more than six thousand cadavers put it
        at about 17% — but the same review found the variant no more
        common in people operated on for piriformis syndrome than in the
        general population. The nerve&rsquo;s route, in other words, is
        mostly not the culprit. What the muscle is <em>doing</em> matters
        more than where the nerve threads through it.
      </P>

      <H2 id="recognizing">The quartet</H2>
      <QuartetFigure />
      <P>
        Because there is no blood test, no imaging finding, and no single
        physical test that settles the diagnosis, clinicians recognize
        piriformis syndrome by pattern. The two systematic reviews of the
        world&rsquo;s reported cases — one covering 55 studies, and an
        update eight years later — kept finding the same four features:
        pain in the buttock itself rather than centered on the low back,
        pain that worsens with sitting, tenderness when the examiner
        presses over the greater sciatic notch, and pain reproduced by
        maneuvers that stretch or contract the piriformis. The best-known
        of those maneuvers folds the hip up, across, and inward — flexion,
        adduction, internal rotation, the &ldquo;FAIR&rdquo; position — which
        wraps the muscle tightly over the nerve.
      </P>
      <P>
        Two honest caveats travel with the quartet. First, a positive
        straight-leg raise, the classic disc test, does <em>not</em> rule
        piriformis syndrome out; the updated review found it limited in a
        substantial share of cases. Second, the accuracy of every one of
        these signs is unproven, because the studies that could prove it —
        comparing sciatica patients with and without disc disease, blind to
        the answer — have barely been done. The diagnosis is, as one review
        put it, roughly where the herniated disc was a generation ago:
        clearly real, poorly measured. A careful clinician therefore treats
        it as a diagnosis of pattern <em>and</em> exclusion — checking the
        spine, the sacroiliac joint, the hip joint, and the hamstring
        tendons before pinning it on the piriformis — and a broader label,{" "}
        <strong>deep gluteal syndrome</strong>, now covers every way the
        nerve can be caught in that space, of which piriformis is only the
        most famous.
      </P>

      <H2 id="what-pt-does">What physical therapy is built to do</H2>
      <P>
        The first-line answer, across every review, is conservative care
        led by{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical therapy
        </Link>
        . The 2023 systematic review of treatment trials is candid about
        why: thirteen studies, 508 patients, mostly comparing one injection
        to another, and quality low enough that no single conservative
        treatment could be recommended over any other. Its conclusion was
        to follow the general guidelines for back pain and sciatica —
        physiotherapy first — with surgery reserved for a chronic minority.
        That is less an endorsement of any particular exercise than a
        statement about where the burden of proof sits.
      </P>
      <P>
        What a good program actually contains follows from the anatomy. A
        therapist works on three fronts at once. The first is the muscle
        itself: stretching piriformis and the surrounding rotators,
        typically in that same FAIR direction, and easing the spasm and
        guarding around it. The second is the reason the muscle was
        overworking, which is usually the hips around it — weak or slow
        gluteal muscles, a stiff hip joint, a pelvis that drops on one side
        when you stand on one leg — so progressive strengthening of the hip
        abductors and rotators is the part of the plan that tends to last.
        The third is the nerve: gentle mobilization that slides the sciatic
        nerve through its tunnel, and a hard look at the sitting that
        provoked everything — the wallet in the back pocket, the low chair,
        the hours in the car. Like every{" "}
        <Link href="/treatments/physical-and-behavioral-therapies#pacing" className={link}>
          paced program
        </Link>
        , it starts below the flare line and progresses by plan.
      </P>
      <P>
        The largest outcome series ever published on this condition is
        encouraging about that kind of care. Over ten years, a New York
        rehabilitation group followed 918 patients diagnosed by a nerve
        test in the FAIR position; among those who tested positive and
        were treated with an injection plus physical therapy, 79% improved
        by half or more, with average improvement around 71% at ten
        months, and only about one in fifteen went on to surgery. It is a
        before-and-after series, not a randomized trial, and the injection
        is bundled in with the exercise — but it is the clearest picture
        anyone has of how this condition behaves when the deep hip is
        treated as the target.
      </P>

      <H2 id="beyond-pt">When the plan needs more</H2>
      <P>
        When a well-run program stalls, the next layer is a{" "}
        <Link href="/treatments/interventional-procedures" className={link}>
          targeted injection
        </Link>{" "}
        into the muscle — local anesthetic with a steroid, or botulinum
        toxin to relax it for months at a time — usually guided by
        ultrasound so the needle finds a small muscle sitting under a large
        one. Trials of these injections are the bulk of the treatment
        evidence, and only a few reached a clinically meaningful reduction
        in pain, which is why they are positioned as a way to let the
        exercise work rather than as a plan in themselves. Surgical
        release of the muscle exists for the rare chronic case that has
        exhausted everything else; the surgical case series show
        before-and-after improvement, and the reviews describe it as
        &ldquo;may have a place&rdquo; rather than as a destination. Nerve-pain
        medications are used case by case, as they are for any{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>
          neuropathic pain
        </Link>
        , with the same modest expectations.
      </P>

      <H2 id="specialist">When to bring in a specialist</H2>
      <P>
        Buttock-dominant pain that has outlasted six to eight weeks of
        first-line care, pain that keeps you from sitting through a working
        day, or any weakness, numbness, or change in bladder or bowel
        control are reasons to be seen — the last of those urgently, because
        it points to the spine, not the hip. A pain physician or a
        physiatrist can sort out which of the overlapping causes you have,
        arrange the guided injection if the program needs it, and keep the
        plan honest about what it is treating. The work of the diagnosis is
        mostly the work of ruling other things out; that is a job for a
        clinician, with your history and an examination, and not for a
        page.
      </P>
    </div>
  );
}
