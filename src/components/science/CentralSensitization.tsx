import Link from "next/link";
import { Figure, H2, KeyTakeaways, P } from "./Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 dark:text-teal-300 underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2 hover:decoration-teal-600";

/** Same inputs, two nervous systems: what goes in versus what is felt. */
function InOutFigure() {
  const rows = [
    { y: 92, label: "Light touch", input: 26, normal: 0, sensitized: 96, name: "Allodynia" },
    { y: 162, label: "A pinprick", input: 70, normal: 62, sensitized: 170, name: "Hyperalgesia" },
    { y: 232, label: "After it stops", input: 0, normal: 0, sensitized: 70, name: "Lingering pain" },
  ];
  return (
    <Figure caption="What sensitization changes. The signal coming in is the same; the pain that comes out is not. Touch that should not hurt does, a pinprick hurts more than it should, and pain can outlast its cause.">
      <svg
        role="img"
        aria-labelledby="cs-title cs-desc"
        viewBox="0 0 680 290"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="cs-title">The same input, felt by a typical and a sensitized pain system</title>
        <desc id="cs-desc">
          Three rows compare the signal coming in with the pain felt. Light
          touch causes no pain in a typical system but clear pain in a
          sensitized one. A pinprick causes moderate pain normally and much
          more when sensitized. After the stimulus stops, a typical system
          feels nothing while a sensitized one still feels pain.
        </desc>

        <g fontSize="13" fontWeight="700" fill={FIG.ink}>
          <text x="150" y="44">Signal in</text>
          <text x="290" y="44">Pain felt: typical</text>
          <text x="470" y="44">Pain felt: sensitized</text>
        </g>
        <path d="M24 56 H656" stroke={FIG.line} strokeWidth="1.5" />

        {rows.map((r) => (
          <g key={r.label}>
            <text x="24" y={r.y + 5} fontSize="14" fontWeight="700" fill={FIG.ink}>
              {r.label}
            </text>
            <rect x="150" y={r.y - 9} width={Math.max(r.input, 3)} height="18" rx="4" fill={FIG.nerve} />
            <rect x="290" y={r.y - 9} width={Math.max(r.normal, 3)} height="18" rx="4" fill={r.normal ? FIG.signalBright : FIG.line} />
            <rect x="470" y={r.y - 9} width={r.sensitized} height="18" rx="4" fill={FIG.signal} />
            <text x="470" y={r.y + 30} fontSize="12.5" fontWeight="700" fill={FIG.signalTextDark}>
              {r.name}
            </text>
            {!r.normal && (
              <text x="302" y={r.y + 5} fontSize="12.5" fill={FIG.muted}>
                none
              </text>
            )}
            {!r.input && (
              <text x="162" y={r.y + 5} fontSize="12.5" fill={FIG.muted}>
                none
              </text>
            )}
          </g>
        ))}
      </svg>
    </Figure>
  );
}

export default function CentralSensitization() {
  return (
    <div>
      <P>
        Sometimes pain is far greater than any injury can explain. A scan
        looks unremarkable, a wound healed months ago, a light touch hurts.
        One of the best-studied explanations is{" "}
        <strong>central sensitization</strong>: the spinal cord and brain have
        become more responsive to incoming signals, so the same input produces
        more pain. Nothing about that is imagined. It is a measurable change
        in how the nervous system processes signals.
      </P>

      <KeyTakeaways
        items={[
          <>Central sensitization is the nervous system <strong>amplifying its own signals</strong> – more pain from the same input.</>,
          <>It shows up as pain from light touch, pain that <strong>spreads beyond the original site</strong>, and pain that lingers after its cause is gone.</>,
          <>It is a <strong>normal capacity of every nervous system</strong>, and researchers describe it as prolonged but reversible.</>,
          <>It helps explain why treatments aimed at the sore spot – anti-inflammatories, injections, surgery – <strong>often fall short</strong> for this kind of pain.</>,
        ]}
      />

      <H2 id="what-it-is">Turning up the gain</H2>
      <P>
        Pain signals travel from the body to the spinal cord, where they are
        relayed toward the brain. That relay is not a fixed wire. As{" "}
        <Link href="/understanding-pain/how-pain-works" className={link}>
          how pain works
        </Link>{" "}
        describes, it has an adjustable gain. When pain-sensing nerves fire
        hard or for a long time, the relay neurons become more excitable and
        the connections between them strengthen. The researcher who first
        described the process defines it as a prolonged but reversible
        increase in the excitability of neurons in the central pain pathways.
      </P>
      <P>
        Two words in that definition matter. <em>Prolonged</em>: the change
        outlasts the signal that caused it. <em>Reversible</em>: it is a
        setting, not permanent damage.
      </P>

      <H2 id="signs">What it feels like</H2>
      <InOutFigure />
      <P>
        Sensitization has recognizable fingerprints. Touch that should not
        hurt becomes painful, which clinicians call allodynia. Things that
        normally hurt a little hurt a lot, and tenderness spreads into
        healthy tissue around the original site. Pain lingers after a
        stimulus ends, and repeated mild stimuli build on each other instead
        of fading.
      </P>
      <P>
        None of this requires a disease. Central sensitization can be
        produced rapidly in healthy volunteers with a brief painful stimulus
        to skin or muscle, and it fades again. The capacity is built into every
        nervous system as protection for injured tissue. The problem comes
        when the setting stays high after it has stopped being useful.
      </P>

      <H2 id="conditions">Where it shows up</H2>
      <P>
        Signs of central sensitization have been documented across a long
        list of conditions:{" "}
        <Link href="/conditions/fibromyalgia" className={link}>
          fibromyalgia
        </Link>
        ,{" "}
        <Link href="/conditions/arthritis-pain" className={link}>
          osteoarthritis
        </Link>
        , headache,{" "}
        <Link href="/conditions/tmj-disorders" className={link}>
          jaw disorders
        </Link>
        ,{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>
          neuropathic pain
        </Link>
        , spinal pain, and{" "}
        <Link href="/conditions/persistent-postsurgical-pain" className={link}>
          pain after surgery
        </Link>
        . It is not all-or-nothing. Within any one of these conditions, people
        vary a great deal in whether sensitization is present and how strong
        it is, which is why two people with the same diagnosis and the same
        scan can have very different pain.
      </P>

      <H2 id="nociplastic">Sensitization and nociplastic pain</H2>
      <P>
        The two terms are related but not the same. Central sensitization is
        a <em>mechanism</em>, first worked out in the laboratory.{" "}
        <strong>Nociplastic pain</strong> is a <em>clinical category</em>,
        the third of{" "}
        <Link href="/understanding-pain/types-of-pain" className={link}>
          the three types of pain
        </Link>
        , used for pain that arises from altered pain processing rather than
        from ongoing tissue damage or nerve injury.
      </P>
      <P>
        Researchers are careful here, and it is worth being equally careful.
        The mechanisms behind nociplastic pain are not fully understood;
        amplified processing in the central nervous system and weakened
        pain-dampening systems are thought to play leading roles. Its typical
        picture is pain in several places that is more widespread or intense
        than the identifiable damage would predict, often accompanied by
        fatigue and problems with sleep, memory, and mood. It can occur on its
        own, as in fibromyalgia, or mixed with other pain types, as often
        happens in chronic{" "}
        <Link href="/conditions/low-back-pain" className={link}>
          low back pain
        </Link>
        .
      </P>

      <H2 id="diagnosis">How clinicians recognize it</H2>
      <P>
        There is no blood test or scan that shows central sensitization in an
        individual, and researchers have called for agreed diagnostic criteria
        and objective markers for years. In the clinic it is recognized by its
        pattern: pain out of proportion to findings, spread beyond the
        original area, sensitivity to touch or pressure, and the accompanying
        symptoms above. An international expert group has published clinical
        criteria for nociplastic pain affecting muscles and joints to make
        that judgment more consistent.
      </P>
      <P>
        A caution runs the other way too. Sensitization does not rule out a
        problem in the tissues, and the label should follow a proper
        assessment, never replace one.
      </P>

      <H2 id="treatment">Why it changes treatment</H2>
      <P>
        If the amplifier is the problem, treating the sore spot alone has
        limits. Reviews of nociplastic pain note that it responds less well to
        treatments directed at the periphery, such as anti-inflammatory drugs
        and opioids, surgery, and injections. Sensitization also predicts
        poorer outcomes from treatment in several conditions, which is a
        reason to identify it early rather than after a series of procedures
        has failed. If opioid use is becoming hard to control, confidential
        help is available from the SAMHSA National Helpline at{" "}
        <strong>1-800-662-HELP (4357)</strong>.
      </P>
      <P>
        Approaches that act on the nervous system as a whole fit better.
        Movement is the best studied: a Cochrane overview covering 381
        studies found that exercise may improve pain severity and physical
        function with few adverse events, mostly muscle soreness that settled
        within a few weeks. The effects were small to moderate and the
        evidence quality was low, so it is a foundation rather than a fix.
        Learning how pain works helps in a specific way: in a meta-analysis of
        12 trials, pain education had little effect on pain intensity itself
        but produced a meaningful drop in fear of movement, which is often
        what keeps people from the activity that helps. Both belong to the{" "}
        <Link href="/treatments/physical-and-behavioral-therapies" className={link}>
          physical and behavioral therapies
        </Link>
        . Some medicines act on central pain processing rather than on
        inflammation; they are mapped in{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          medications for pain
        </Link>
        .
      </P>

      <H2 id="whats-coming">What&rsquo;s coming</H2>
      <P>
        The research goal is to stop treating a diagnosis and start treating
        the mechanism: to work out, for each person, how much sensitization
        is contributing and to match treatment to it. That is the idea behind{" "}
        <Link href="/future-of-pain-medicine/precision-pain-medicine" className={link}>
          precision pain medicine
        </Link>
        , and it depends on the reliable tests that do not yet exist.
      </P>
    </div>
  );
}
