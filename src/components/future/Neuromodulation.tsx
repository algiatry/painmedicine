import Link from "next/link";
import { H2, KeyTakeaways, P } from "@/components/science/Figure";
import { JournalSequence } from "@/components/science/JournalFigure";

function LevelsFigure() {
  return (
    <JournalSequence
      title="Where neuromodulation acts"
      description="The location of each stimulation technique, shown from the brain to the peripheral nerves."
      caption="Neuromodulation now acts at every level of the pain pathway, from the brain down to a single peripheral nerve."
      stages={[
        { name: "Brain", lines: ["Non-invasive rTMS or tDCS", "Magnetic or electrical pulses at the scalp"] },
        { name: "Spinal cord", lines: ["Spinal cord stimulation (SCS)", "Includes 10 kHz and closed-loop systems"] },
        { name: "Dorsal root ganglion", lines: ["Targets a nerve cluster for focal pain", "CRPS is one example"] },
        { name: "Peripheral nerve", lines: ["Stimulates a specific nerve", "Close to the source of pain"] },
      ]}
    />
  );
}

export default function Neuromodulation() {
  return (
    <div>
      <LevelsFigure />

      <P>
        Some of the biggest advances in pain treatment are not drugs at all.
        Neuromodulation uses precisely placed electricity to change how pain
        signals travel, and over the past decade it has gone from a blunt
        instrument to something closer to a tuned one.
      </P>

      <KeyTakeaways
        items={[
          <>
            <strong>High-frequency (10 kHz)</strong> stimulation relieves pain
            without any tingling.
          </>,
          <>
            <strong>Closed-loop</strong> systems adjust each pulse more than a
            hundred times a second as you move.
          </>,
          <>
            <strong>DRG and peripheral nerve stimulation</strong> aim at the
            exact spot, one nerve cluster or a single nerve, for focal pain
            such as CRPS.
          </>,
          <>
            <strong>Non-invasive brain stimulation</strong> needs no implant,
            but the evidence is still mixed.
          </>,
        ]}
      />

      <H2 id="old-idea">The old idea: cover the pain</H2>
      <P>
        Classic spinal cord stimulation puts a thin lead near the spinal cord
        and delivers pulses that create a gentle tingling, called{" "}
        <em>paresthesia</em>, over the painful area. It works partly through the
        spinal &ldquo;gate&rdquo; described in{" "}
        <Link
          href="/understanding-pain/how-pain-works"
          className="text-brand underline decoration-faint underline-offset-2 hover:decoration-brand"
        >
          how pain works
        </Link>
        : activity on large nerve fibers helps close the gate on pain signals.
        It helps many people, but the tingling is a constant reminder, and the
        setting never changes as you move.
      </P>

      <H2 id="cant-feel">Stimulation you can&rsquo;t feel</H2>
      <P>
        Newer <strong>high-frequency (10 kHz)</strong> stimulation relieves pain
        without producing any tingling at all. In 2021 the FDA approved a 10 kHz
        system specifically for <strong>painful diabetic neuropathy</strong> –
        the first spinal cord stimulator cleared for that condition – after a
        trial showed substantial, durable relief where medication had fallen
        short. Taking the paresthesia away also removed one of the therapy&rsquo;s
        least comfortable features.
      </P>

      <H2 id="listen">Stimulators that listen</H2>
      <P>
        The bigger leap is <strong>closed-loop</strong> stimulation. An
        FDA-approved system now measures the spinal cord&rsquo;s own electrical
        response to each pulse, a signal called an ECAP, and adjusts the next
        pulse more than a hundred times a second. Instead of a fixed dose of
        electricity, the device keeps the stimulation on target as you move,
        cough, or shift position, and it outperformed conventional open-loop
        stimulation in testing. It is the difference between a thermostat and a
        stuck dial.
      </P>

      <H2 id="precise">Aiming more precisely</H2>
      <P>
        Stimulation can also be pointed at exactly the right spot.{" "}
        <strong>Dorsal root ganglion (DRG) stimulation</strong>, FDA-approved in
        2016, targets the small bundle of nerve cell bodies that serves one
        region of the body, which makes it valuable for focal, hard-to-treat
        pain such as complex regional pain syndrome, where it outperformed
        standard stimulation in the pivotal ACCURATE trial. Peripheral nerve
        stimulation goes further still, treating a single nerve near the source
        of the pain.
      </P>

      <H2 id="no-surgery">No surgery required</H2>
      <P>
        Not every approach needs an implant. <strong>Non-invasive brain
        stimulation</strong> – repetitive transcranial magnetic stimulation
        (rTMS) and transcranial direct-current stimulation (tDCS) – sends
        magnetic or electrical pulses through the scalp to the brain&rsquo;s
        motor cortex. Studies suggest it can ease some drug-resistant nerve pain
        and fibromyalgia, though the evidence is still mixed and the technique is
        not yet a settled part of routine care. It is a frontier worth watching,
        neither dismissed nor oversold.
      </P>

      <H2 id="arc">The through-line</H2>
      <P>
        Across all of these, the direction is the same: away from one fixed
        setting for everyone, toward stimulation that is precise, sometimes
        invisible, and increasingly able to adjust itself to the person wearing
        it. See where each device sits among everything in development in the{" "}
        <Link
          href="/future-of-pain-medicine/pipeline"
          className="text-brand underline decoration-faint underline-offset-2 hover:decoration-brand"
        >
          pain treatment pipeline
        </Link>
        .
      </P>
    </div>
  );
}
