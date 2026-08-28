import Link from "next/link";
import { Figure, H2, P } from "../science/Figure";
import { FIG } from "@/lib/fig";

const link =
  "text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600";

/**
 * Figure 1 — the three sources of cancer pain: the disease, the treatment,
 * and the years after.
 */
function SourcesFigure() {
  return (
    <Figure caption="Cancer pain has three sources, and they call for different tools: the disease itself, the treatments that fight it, and — for a growing population of survivors — the marks treatment leaves behind.">
      <svg
        role="img"
        aria-labelledby="src-title src-desc"
        viewBox="0 0 680 300"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="src-title">The three sources of cancer pain</title>
        <desc id="src-desc">
          Three panels. The disease: pain from bone involvement, pressed
          nerves, and stretched organs. The treatment: pain after surgery,
          nerve damage from chemotherapy, and radiation effects. The years
          after: survivor pain — neuropathy, surgical sites, and joint pain
          from hormone therapy.
        </desc>

        {[14, 238, 462].map((x) => (
          <rect key={x} x={x} y="24" width="204" height="252" rx="14" fill={FIG.paper} stroke={FIG.soft} strokeWidth="1.5" />
        ))}

        {/* the disease */}
        <text x="116" y="58" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
          The disease
        </text>
        <g transform="translate(96 76)">
          <path d="M12 8 C4 8 4 20 12 18 L12 34 C4 32 4 44 12 44 M28 8 C36 8 36 20 28 18 L28 34 C36 32 36 44 28 44 M12 12 h16 M12 40 h16" fill="none" stroke={FIG.faint} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="26" r="9" fill={FIG.signalTint} opacity="0.9" />
          <circle cx="20" cy="26" r="4" fill={FIG.signal} />
        </g>
        <g fontSize="11.5" fill={FIG.textMid} textAnchor="middle">
          <text x="116" y="158">bone involvement — the most common</text>
          <text x="116" y="176">nerves pressed or invaded</text>
          <text x="116" y="194">organs stretched or blocked</text>
        </g>
        <text x="116" y="240" textAnchor="middle" fontSize="11" fill={FIG.muted}>
          often mixed: tissue + nerve at once
        </text>

        {/* the treatment */}
        <text x="340" y="58" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
          The treatment
        </text>
        <g transform="translate(320 76)" fill="none" stroke={FIG.faint} strokeWidth="2.5" strokeLinecap="round">
          <path d="M20 4 C12 16 8 24 8 32 a12 12 0 0 0 24 0 C32 24 28 16 20 4 z" />
          <path d="M14 44 l4 -4 4 4 4 -4" stroke={FIG.signalDark} strokeWidth="2.2" />
        </g>
        <g fontSize="11.5" fill={FIG.textMid} textAnchor="middle">
          <text x="340" y="158">pain around surgical sites</text>
          <text x="340" y="176">chemotherapy nerve damage</text>
          <text x="340" y="194">radiation&rsquo;s local effects</text>
        </g>
        <text x="340" y="240" textAnchor="middle" fontSize="11" fill={FIG.muted}>
          expected, monitored — and treatable
        </text>

        {/* the years after */}
        <text x="564" y="58" textAnchor="middle" fontSize="14" fontWeight="700" fill={FIG.ink}>
          The years after
        </text>
        <g transform="translate(540 84)" fill="none" stroke={FIG.faint} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20 H40" />
          <path d="M30 10 L42 20 L30 30" />
          <circle cx="4" cy="20" r="3" fill={FIG.nerve} stroke="none" />
        </g>
        <g fontSize="11.5" fill={FIG.textMid} textAnchor="middle">
          <text x="564" y="158">lasting neuropathy in hands and feet</text>
          <text x="564" y="176">post-surgical pain</text>
          <text x="564" y="194">joint pain from hormone therapy</text>
        </g>
        <text x="564" y="240" textAnchor="middle" fontSize="11" fill={FIG.muted}>
          survivor pain — real, common, treatable
        </text>
      </svg>
    </Figure>
  );
}

/**
 * Figure 2 — palliative care is not giving up: the Temel 2010 randomized
 * trial, drawn soberly.
 */
function PalliativeFigure() {
  return (
    <Figure caption="The trial that changed the conversation: in metastatic lung cancer, palliative care added from diagnosis improved quality of life and mood — and patients lived longer (median 11.6 vs 8.9 months; Temel 2010, NEJM). Comfort care and cancer care belong together, early.">
      <svg
        role="img"
        aria-labelledby="pal-title pal-desc"
        viewBox="0 0 680 240"
        className="mx-auto block h-auto w-full max-w-2xl"
      >
        <title id="pal-title">Early palliative care in the Temel trial</title>
        <desc id="pal-desc">
          Two horizontal bars comparing median survival: standard cancer care
          alone, 8.9 months; cancer care plus palliative care from diagnosis,
          11.6 months — alongside better quality of life and less depression.
        </desc>

        <text x="40" y="52" fontSize="13.5" fontWeight="700" fill={FIG.ink}>
          Cancer care + palliative care from diagnosis
        </text>
        <rect x="40" y="62" width="445" height="30" rx="6" fill={FIG.nerve} />
        <text x="497" y="82" fontSize="13.5" fontWeight="700" fill={FIG.nerveDark}>
          11.6 months
        </text>

        <text x="40" y="132" fontSize="13.5" fontWeight="700" fill={FIG.ink}>
          Standard cancer care alone
        </text>
        <rect x="40" y="142" width="341" height="30" rx="6" fill={FIG.faint} />
        <text x="393" y="162" fontSize="13.5" fontWeight="700" fill={FIG.muted}>
          8.9 months
        </text>

        <text x="40" y="212" fontSize="12" fill={FIG.textMid}>
          median survival — alongside better quality of life and less depression
        </text>
      </svg>
    </Figure>
  );
}

export default function CancerPain() {
  return (
    <div>
      <P>
        Two facts about cancer pain belong side by side, because either one
        alone misleads. The first: pain is common — studies find it in about{" "}
        <strong>55% of people during cancer treatment</strong> and{" "}
        <strong>66% of those with advanced disease</strong>. The second, and
        the one this page exists for: cancer pain is among the{" "}
        <strong>most treatable</strong> problems in all of pain medicine.
        The tools are strong, the evidence is deep, and the field&rsquo;s
        hardest-won lesson is organizational, not pharmacological: pain that
        goes unreported goes untreated, and for decades studies found a
        substantial minority of patients undertreated — mostly for reasons
        that dissolve once they are said out loud. Treating pain is part of
        treating cancer. You never have to earn relief by suffering first.
      </P>

      <H2 id="sources">Where cancer pain comes from</H2>
      <SourcesFigure />
      <P>
        Cancer pain is really three problems wearing one name. The{" "}
        <strong>disease</strong> causes pain most often through bone —
        metastases remodel and weaken bone, which aches deeply and can flare
        sharply with movement — and by pressing on or invading nerves, or
        stretching organs and their coverings. The{" "}
        <strong>treatment</strong> causes its own: pain around surgical
        sites, chemotherapy&rsquo;s nerve damage in the hands and feet —
        classic{" "}
        <Link href="/conditions/neuropathic-pain" className={link}>
          neuropathic pain
        </Link>
        , glove-and-stocking included — and radiation&rsquo;s local
        effects. And the <strong>years after</strong> bring the newest
        chapter: a large and growing population of survivors whose cancer is
        gone but whose pain is not. Most cancer pain mixes mechanisms —
        tissue-driven and nerve-driven at once — which is exactly why the
        toolbox below is wider than any single drug class.
      </P>

      <H2 id="the-plan">The plan: relief by the clock, not by the crisis</H2>
      <P>
        Modern cancer pain care descends from a genuinely great idea: the
        World Health Organization&rsquo;s 1986 cancer pain program, which
        taught the world that most cancer pain could be controlled with a
        few principles — treat <strong>by the clock</strong> rather than
        chasing pain after it peaks, prefer simple routes, and match the
        strength of treatment to the severity of pain. Today&rsquo;s WHO
        guidance keeps the spirit and drops the rigidity: treatment is
        individualized from the start. Two practical habits carry most of
        the value. Report pain early, specifically, and every visit — where
        it is, what it feels like, what it stops you doing (
        <Link href="/understanding-pain/measuring-pain" className={link}>
          how to describe pain
        </Link>{" "}
        helps). And expect a plan for <strong>“breakthrough” pain</strong> —
        the fast, sharp spikes through otherwise controlled background pain
        — because scheduled control plus a rescue plan is the standard, and
        you should have both halves.
      </P>

      <H2 id="opioids">About opioids — a different conversation here</H2>
      <P>
        Elsewhere on this site, opioids appear late in treatment ladders and
        wrapped in caution. Cancer pain is the context those medicines were
        made for: for moderate-to-severe cancer pain, opioids are the{" "}
        <strong>backbone of treatment</strong> and sit on the WHO&rsquo;s
        list of essential medicines. The distinctions that get blurred
        everywhere else matter most here. <strong>Tolerance</strong> —
        needing adjustment over time — and <strong>physical
        dependence</strong> — the body adapting, needing a taper to stop —
        are expected biology that your team plans for.{" "}
        <strong>Addiction</strong> — use escaping control despite harm — is
        a different phenomenon, and it is uncommon in monitored cancer pain
        care. Research on undertreatment keeps finding the same barrier:
        fear of addiction, held by patients and families, quietly trading
        real relief for imagined safety. Take the medicine your pain
        actually requires; let your team manage the side effects
        proactively — constipation, notably, is expected and treatable from
        day one. And if opioid use ever does feel like it is escaping the
        plan — yours or a loved one&rsquo;s — say so early: the SAMHSA
        helpline, 1-800-662-4357, is free, confidential, and always open.
      </P>

      <H2 id="toolbox">Beyond the pill bottle</H2>
      <P>
        The rest of the toolbox is broad, and much of it is underused
        simply because patients don&rsquo;t know to ask.{" "}
        <Link href="/treatments/medications-for-pain" className={link}>
          Nerve-pain medications
        </Link>{" "}
        treat the neuropathic share — chemotherapy neuropathy especially.
        Steroids shrink painful swelling around tumors and nerves.
        Bone-targeted drugs strengthen bone under attack, and{" "}
        <strong>radiation</strong> deserves special mention: for a painful
        bone metastasis, even a single treatment session relieves pain in
        the majority of patients — one of oncology&rsquo;s quiet triumphs.
        Interventional pain medicine adds precision tools: nerve blocks
        such as the celiac plexus block for pancreatic and upper-abdominal
        cancer pain — a procedure with decades of track record — and
        implanted pumps that deliver medication directly to the spinal
        fluid when pills reach their limits. Psychology, physical therapy,
        and good sleep care round out a plan that treats the person, not
        the number.
      </P>

      <H2 id="palliative">Palliative care is not giving up</H2>
      <PalliativeFigure />
      <P>
        The word &ldquo;palliative&rdquo; scares people into refusing one
        of the most valuable services in medicine, so the record needs
        stating plainly. Palliative care is <strong>specialist symptom and
        quality-of-life care delivered alongside cancer treatment, at any
        stage</strong> — not instead of treatment, and not a signal about
        prognosis. In the landmark randomized trial above, patients with
        metastatic lung cancer who received palliative care from diagnosis
        had better quality of life, less depression — and lived longer.
        Comfort turned out to be not the opposite of fighting, but part of
        how the fight goes better. If pain or symptoms are a daily
        presence, asking for a palliative care referral early is one of
        the strongest moves available to you.
      </P>

      <H2 id="after">Pain after cancer</H2>
      <P>
        Survivorship is oncology&rsquo;s success story, and it has a pain
        chapter that deserves daylight: lasting chemotherapy neuropathy,
        pain around surgical sites, joint pain from hormone-blocking
        therapy. Enough survivors live with pain that oncology publishes
        its own guideline for managing it. If your treatment ended years
        ago and pain remains, two things are true: it is common, and it is
        treatable — generally with the same approaches used for other
        chronic pain, sized to the mechanism. Mentioning it to your care
        team is not ingratitude for your recovery; it is the next step of
        the same care.
      </P>

      <H2 id="team">Who treats cancer pain</H2>
      <P>
        Your oncology team leads, and for most pain that is enough. The
        reinforcements are worth knowing by name: <strong>palliative
        care</strong> for symptom expertise at any stage, and{" "}
        <Link href="/what-is-pain-medicine" className={link}>
          pain medicine
        </Link>{" "}
        for the interventional tools — blocks, pumps, and the management of
        survivor pain.{" "}
        <Link href="/find-help" className={link}>
          Finding pain care near you
        </Link>{" "}
        explains how to reach them. The single most important instruction
        on this page remains the simplest: say when it hurts, early and
        exactly. Everything in modern cancer pain care starts there.
      </P>
    </div>
  );
}
