import Link from "next/link";
import { Figure, H2, P } from "./Figure";

/**
 * Figure — two pain trajectories over time. Acute pain (amber) rises with an
 * injury and fades as tissue heals; chronic pain (teal) persists past the
 * ~3-month line even after healing. Time on x, pain intensity on y.
 */
function TimelineFigure() {
  return (
    <Figure caption="Acute pain tracks healing and fades. Chronic pain persists past about three months — often after the tissue itself has healed.">
      <svg
        role="img"
        aria-labelledby="timeline-title timeline-desc"
        viewBox="0 0 760 320"
        className="mx-auto block h-auto w-full max-w-3xl"
      >
        <title id="timeline-title">Acute versus chronic pain over time</title>
        <desc id="timeline-desc">
          A graph of pain intensity against time. The acute-pain curve rises
          with injury and returns to zero as tissue heals. The chronic-pain
          curve rises but stays elevated past the three-month mark.
        </desc>

        {/* axes */}
        <line x1="70" y1="250" x2="712" y2="250" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#axis-arrow)" />
        <line x1="70" y1="60" x2="70" y2="250" stroke="#cbd5e1" strokeWidth="2" />
        <defs>
          <marker id="axis-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L 9 4.5 L 0 9 z" fill="#cbd5e1" />
          </marker>
        </defs>
        <text x="66" y="150" textAnchor="middle" fontSize="12" fill="#94a3b8" transform="rotate(-90 66 150)">
          Pain intensity
        </text>
        <text x="70" y="280" fontSize="13" fill="#64748b">Injury</text>
        <text x="700" y="280" textAnchor="end" fontSize="13" fill="#64748b">Time →</text>

        {/* 3-month marker */}
        <line x1="312" y1="66" x2="312" y2="258" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="312" y="54" textAnchor="middle" fontSize="13" fontWeight="600" fill="#475569">
          ≈ 3 months
        </text>

        {/* chronic curve */}
        <path
          d="M70 250 C 110 112, 152 96, 188 108 C 236 128, 262 168, 312 176 C 384 186, 430 166, 500 178 C 566 188, 626 170, 700 178"
          fill="none"
          stroke="#0d9488"
          strokeWidth="3.5"
        />
        {/* acute curve */}
        <path
          d="M70 250 C 110 110, 150 95, 185 105 C 235 122, 300 246, 360 249 L 700 250"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="3.5"
        />

        {/* legend */}
        <g>
          <line x1="96" y1="92" x2="128" y2="92" stroke="#f59e0b" strokeWidth="3.5" />
          <text x="136" y="96" fontSize="13.5" fill="#334155">
            Acute — protective, fades with healing
          </text>
          <line x1="96" y1="116" x2="128" y2="116" stroke="#0d9488" strokeWidth="3.5" />
          <text x="136" y="120" fontSize="13.5" fill="#334155">
            Chronic — persists past ~3 months
          </text>
        </g>
      </svg>
    </Figure>
  );
}

export default function AcuteVsChronic() {
  return (
    <div>
      <TimelineFigure />

      <P>
        Not all pain means the same thing. The most important distinction in all
        of pain medicine is between pain that is doing its job and pain that has
        outlived it — between <strong>acute</strong> and{" "}
        <strong>chronic</strong> pain.
      </P>

      <H2 id="acute">Acute pain is a working alarm</H2>
      <P>
        Acute pain is the pain of a fresh injury or illness: a sprain, a burn, a
        broken bone, a surgical incision. It comes on with the problem, it is
        usually in proportion to it, and — crucially — it{" "}
        <strong>fades as you heal</strong>. This is pain doing exactly what it
        evolved to do: grab your attention, make you protect the part, and stand
        down once the danger has passed. An alarm that switches off when the fire
        is out.
      </P>

      <H2 id="chronic">Chronic pain is an alarm that won&rsquo;t switch off</H2>
      <P>
        Chronic pain is pain that <strong>persists or keeps returning for more
        than three months</strong> — often long after the original injury has
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
        something else that is ongoing — cancer, rheumatoid arthritis, a nerve
        injury — and it is managed alongside that condition. In{" "}
        <strong>chronic primary pain</strong>, the pain{" "}
        <em>is</em> the condition: it no longer points to active damage
        elsewhere. Fibromyalgia, many cases of chronic low back pain, and chronic
        primary headache belong here.
      </P>

      <H2 id="why-different">Why chronic pain isn&rsquo;t just acute pain that lasts</H2>
      <P>
        It is tempting to think chronic pain is simply acute pain that went on
        too long. It is usually something different. Over time, a pain system
        that keeps firing can become sensitized — the{" "}
        <Link
          href="/understanding-pain/how-pain-works"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          central sensitization
        </Link>{" "}
        described in how pain works — so the alarm grows louder and easier to
        trip even as the tissue quiets down. That is why chronic pain can be very
        real while scans look normal, and why treating it often means calming the
        nervous system, not just chasing an injury that is no longer there.
      </P>

      <H2 id="hope">This matters — because chronic pain is treatable</H2>
      <P>
        None of this means chronic pain is imaginary or permanent. Understanding
        that the mechanism has shifted is what opens the door to help: paced
        movement and physical therapy, approaches that retrain a sensitized
        system, and medical options all have roles. A complete cure is not always
        possible, but many people substantially reduce their pain and rebuild
        their lives. That is the work of{" "}
        <Link
          href="/what-is-pain-medicine"
          className="text-teal-700 underline decoration-slate-300 underline-offset-2 hover:decoration-teal-600"
        >
          pain medicine as a specialty
        </Link>
        , and it is worth seeking out. Talk with a clinician about the approach
        that fits your situation.
      </P>
    </div>
  );
}
