import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

function PostureFigure() {
  return (
    <Figure caption="The shopping-cart sign: standing upright or walking commonly builds leg symptoms; sitting or bending forward opens space around the lumbar nerves and often settles them.">
      <svg
        role="img"
        aria-labelledby="stenosis-title stenosis-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="stenosis-title">Posture pattern in lumbar spinal stenosis</title>
        <desc id="stenosis-desc">
          Two simplified paths compare symptoms building during upright standing
          and walking with symptoms settling during sitting or forward bending.
        </desc>
        <rect x="36" y="46" width="284" height="196" rx="16" fill={FIG.ground} stroke={FIG.line} />
        <rect x="360" y="46" width="284" height="196" rx="16" fill={FIG.nerveGround} stroke={FIG.line} />
        <text x="178" y="78" textAnchor="middle" fontSize="16" fontWeight="700" fill={FIG.ink}>
          Upright / walking
        </text>
        <text x="502" y="78" textAnchor="middle" fontSize="16" fontWeight="700" fill={FIG.ink}>
          Sitting / leaning forward
        </text>
        <path d="M92 137 C140 113 190 161 256 124" fill="none" stroke={FIG.signal} strokeWidth="5" strokeLinecap="round" />
        <path d="M416 137 C464 126 514 145 580 132" fill="none" stroke={FIG.nerve} strokeWidth="5" strokeLinecap="round" />
        {[112, 158, 204, 250].map((x, i) => (
          <circle key={x} cx={x} cy={i % 2 ? 154 : 122} r="7" fill={FIG.signal} />
        ))}
        {[436, 482, 528, 574].map((x) => (
          <circle key={x} cx={x} cy="134" r="5" fill={FIG.nerve} />
        ))}
        <text x="178" y="190" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.signalText}>
          symptoms build
        </text>
        <text x="178" y="212" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          pain · heaviness · tingling · weakness
        </text>
        <text x="502" y="190" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.nerveDark}>
          symptoms settle
        </text>
        <text x="502" y="212" textAnchor="middle" fontSize="12" fill={FIG.textMid}>
          the classic posture response
        </text>
        <path d="M320 144 H360" stroke={FIG.line} strokeWidth="2" strokeDasharray="5 5" />
      </svg>
    </Figure>
  );
}

export default function SpinalStenosis() {
  return (
    <div>
      <P>
        Spinal stenosis literally means a narrowing of space in the spine. In
        the lower back, discs can lose height, facet joints can enlarge, and
        ligaments can thicken as the spine ages. Those changes may crowd the
        nerve roots — but the scan is only half the story. Many people have a
        narrow-looking canal without the walking-limited leg symptoms that make
        stenosis a clinical condition.
      </P>

      <H2 id="claudication">The shopping-cart sign</H2>
      <PostureFigure />
      <P>
        The signature is <strong>neurogenic claudication</strong>: pain,
        heaviness, tingling, numbness, or weakness in the buttocks or legs that
        builds with standing or walking. Sitting or bending forward brings
        relief. People often discover this before they know its name — they can
        walk farther leaning over a shopping cart, ride a bicycle more easily
        than they can stroll, or recover by sitting rather than merely standing
        still.
      </P>
      <P>
        That posture response separates stenosis from several look-alikes.
        Circulation-related claudication also hurts with walking, but relief is
        tied more closely to stopping exertion and pulses may be reduced.
        Hip disease, peripheral neuropathy, and a single irritated nerve root can
        overlap. A clinician uses the exact pattern, a neurological and vascular
        examination, and then imaging when it will confirm or change the plan.
      </P>

      <H2 id="scan">A narrow MRI is not the diagnosis</H2>
      <P>
        MRI shows the canal, nerve exits, discs, and ligaments, but measurements
        of narrowing correlate imperfectly with what a person feels or can do.
        Clinical guidance therefore requires two things to line up: anatomical
        narrowing and the matching symptom pattern. Treating the report instead
        of the person risks turning a common age-related image into an illness
        it is not causing.
      </P>
      <P>
        Imaging matters when symptoms fit, especially if a procedure or surgery
        is being considered. It also helps identify another cause when weakness
        is progressing or the story is atypical. But it cannot measure pain or
        walking tolerance, and it does not decide by itself whether treatment
        should be conservative or surgical.
      </P>

      <H2 id="why-it-hurts">Why standing and walking bring it on</H2>
      <P>
        Extending the lower back — the posture used in upright standing — tends
        to reduce space around already crowded nerves. Walking also raises the
        nerves&rsquo; demand for blood flow. The leading explanation combines
        mechanical crowding with impaired circulation around the nerve roots,
        which helps explain why symptoms build over distance and ease with
        flexion. This is nerve-related pain, but not always the sharp one-root
        line seen in{" "}
        <Link href="/conditions/sciatica" className={link}>
          classic sciatica
        </Link>
        . It may feel diffuse, heavy, weak, or bilateral.
      </P>

      <H2 id="treatment">How lumbar spinal stenosis is treated today</H2>
      <P>
        The strongest nonsurgical evidence supports a multimodal rehabilitation
        plan: education, supervised exercise, progressive walking or aerobic
        training in tolerable positions, and sometimes manual therapy. Programs
        also work on leg and trunk strength, balance, pacing, and confidence.
        The goal is not to widen an MRI through exercise. It is to widen the
        person&rsquo;s world — farther walking, steadier movement, and less
        disruption from symptoms.
      </P>
      <P>
        Medication evidence is thinner than many people expect. Choices depend
        on other health conditions and should be discussed with a clinician. A
        multidisciplinary 2021 guideline recommended against several commonly
        used drugs for stenosis-related neurogenic claudication because benefit
        was absent or uncertain, and recommended against epidural steroid
        injections. An updated systematic review likewise found that adding
        steroid did not produce clinically important improvement. That evidence
        concerns stenosis with neurogenic claudication; another diagnosed pain
        mechanism may lead to a different conversation.
      </P>

      <H2 id="surgery">What decompression surgery can — and cannot — promise</H2>
      <P>
        Decompression removes bone or ligament that is crowding the nerves. It
        is generally considered when walking and daily function remain severely
        limited after a well-run nonsurgical plan and the imaging matches the
        symptoms. Trials show that both surgery and structured physical therapy
        can improve function, while comparisons are complicated by people
        crossing from one treatment group to the other. Surgery may offer more
        relief for selected patients, but it carries operative risks and does
        not erase every source of back or leg pain.
      </P>
      <P>
        Fusion is not synonymous with decompression. It adds stabilization and
        its own risks, recovery burden, and cost; the decision usually depends
        on instability, deformity, spondylolisthesis, or another specific
        surgical reason. Asking &ldquo;why fusion in my case?&rdquo; is a reasonable
        part of shared decision-making.
      </P>

      <H2 id="urgent">When to seek urgent care</H2>
      <P>
        Slowly limited walking is different from sudden neurological loss. Seek
        urgent assessment for rapidly worsening leg weakness, new numbness in
        the groin or inner thighs, inability to urinate, or new loss of bladder
        or bowel control. These can signal cauda equina compression, an
        emergency. Falls, new major balance problems, fever with back pain, or
        symptoms after significant trauma also warrant prompt evaluation.
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        The useful frontier is better selection, not simply smaller incisions:
        identifying which symptom and imaging patterns truly respond to
        decompression, which patients improve with targeted rehabilitation, and
        when fusion adds value rather than complexity. Less-invasive procedures
        and adaptive{" "}
        <Link href="/future-of-pain-medicine/neuromodulation" className={link}>
          neuromodulation
        </Link>{" "}
        continue to evolve, but each needs comparison against good rehabilitation
        and standard decompression — not just against doing nothing.
      </P>

      <H2 id="specialist">When to see a specialist</H2>
      <P>
        If leg symptoms repeatedly stop you from standing or walking, especially
        with weakness, numbness, or falls, a clinical evaluation is worthwhile.
        A pain or spine specialist can test whether the pattern is truly
        stenosis, make sure the MRI matches it, and coordinate rehabilitation
        before weighing procedures or surgery. The question is not how narrow
        the canal looks. It is which option offers the most function for the
        least burden in your specific case.
      </P>
    </div>
  );
}
