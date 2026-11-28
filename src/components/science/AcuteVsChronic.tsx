import Link from "next/link";
import { JournalFigure } from "@/components/science/JournalFigure";
import { H2, KeyTakeaways, P } from "./Figure";

function TimelineFigure() {
  return (
    <JournalFigure
      title="Acute versus chronic pain over time"
      description="Two schematic trajectories. The solid acute pain line falls as healing proceeds. The dashed chronic pain line stays elevated beyond about three months."
      caption="Acute pain tracks healing and fades. Chronic pain persists past about three months, often after the tissue itself has healed."
      height={205}
    >
      <path d="M42 35V160H302M177 36V160" className="diagram-rule" strokeWidth="1.5" fill="none" />
      <text x="42" y="22" className="diagram-label" fontSize="15">Pain intensity</text>
      <text x="42" y="182" className="diagram-detail" fontSize="14">Injury</text>
      <text x="177" y="182" textAnchor="middle" className="diagram-detail" fontSize="14">≈ 3 months</text>
      <text x="302" y="182" textAnchor="end" className="diagram-detail" fontSize="14">Time →</text>
      <path d="M42 159C64 63 92 65 114 96S151 157 179 159H300" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M42 159C65 65 93 64 115 91S154 108 181 108H300" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 4" fill="none" />
      <text x="300" y="99" textAnchor="end" className="diagram-label" fontSize="15">Chronic pain</text>
      <text x="300" y="149" textAnchor="end" className="diagram-label" fontSize="15">Acute pain</text>
    </JournalFigure>
  );
}

export default function AcuteVsChronic() {
  return (
    <div>
      <TimelineFigure />

      <P>
        Not all pain means the same thing. The most important distinction in all
        of pain medicine is between pain that is doing its job and pain that has
        outlived it – between <strong>acute</strong> and{" "}
        <strong>chronic</strong> pain.
      </P>

      <KeyTakeaways
        items={[
          <>
            Acute pain is a working alarm that <strong>fades as you heal</strong>.
          </>,
          <>
            Chronic pain <strong>persists past three months</strong>, often after
            the injury has healed.
          </>,
          <>
            Chronic pain is usually not just acute pain that lasted, because a
            pain system can become <strong>sensitized</strong>.
          </>,
          <>
            Chronic pain is <strong>treatable</strong> – many people
            substantially reduce their pain and rebuild their lives.
          </>,
        ]}
      />

      <H2 id="acute">Acute pain is a working alarm</H2>
      <P>
        Acute pain is the pain of a fresh injury or illness: a sprain, a burn, a
        broken bone, a surgical incision. It comes on with the problem, it is
        usually in proportion to it, and, crucially, it{" "}
        <strong>fades as you heal</strong>. This is pain doing exactly what it
        evolved to do: grab your attention, make you protect the part, and stand
        down once the danger has passed. An alarm that switches off when the fire
        is out.
      </P>

      <H2 id="chronic">Chronic pain is an alarm that won&rsquo;t switch off</H2>
      <P>
        Chronic pain is pain that <strong>persists or keeps returning for more
        than three months</strong> – often long after the original injury has
        healed. That three-month line is the threshold the World Health
        Organization adopted when, in its 2019 ICD-11, it recognized chronic
        pain as a health condition in its own right for the first time. It is a
        practical marker, not a magic switch, but it captures a real shift: pain
        that lasts this long often behaves differently from fresh injury pain.
      </P>

      <H2 id="its-own-disease">When pain becomes the disease</H2>
      <P>
        The ICD-11 draws a useful split. In{" "}
        <strong>chronic secondary pain</strong>, the pain is a symptom of
        something else that is ongoing – cancer, rheumatoid arthritis, a nerve
        injury, and it is managed alongside that condition. In{" "}
        <strong>chronic primary pain</strong>, the pain{" "}
        <em>is</em> the condition: it no longer points to active damage
        elsewhere. Fibromyalgia, many cases of chronic low back pain, and chronic
        primary headache belong here.
      </P>

      <H2 id="why-different">Why chronic pain isn&rsquo;t just acute pain that lasts</H2>
      <P>
        It is tempting to think chronic pain is simply acute pain that went on
        too long. It is usually something different. Over time, a pain system
        that keeps firing can become sensitized – the{" "}
        <Link
          href="/understanding-pain/how-pain-works"
          className="text-brand underline decoration-faint underline-offset-2 hover:decoration-brand"
        >
          central sensitization
        </Link>{" "}
        described in how pain works, so the alarm grows louder and easier to
        trip even as the tissue quiets down. That is why chronic pain can be very
        real while scans look normal, and why treating it often means calming the
        nervous system, not just chasing an injury that is no longer there.
      </P>

      <H2 id="hope">This matters, because chronic pain is treatable</H2>
      <P>
        None of this means chronic pain is imaginary or permanent. Understanding
        that the mechanism has shifted is what opens the door to help: paced
        movement and physical therapy, approaches that retrain a sensitized
        system, and medical options all have roles. A complete cure is not always
        possible, but many people substantially reduce their pain and rebuild
        their lives. That is the work of{" "}
        <Link
          href="/what-is-pain-medicine"
          className="text-brand underline decoration-faint underline-offset-2 hover:decoration-brand"
        >
          pain medicine as a specialty
        </Link>
        , and it is worth seeking out. Talk with a clinician about the approach
        that fits your situation.
      </P>
    </div>
  );
}
