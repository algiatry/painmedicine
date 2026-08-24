export const SITE = {
  name: "PainMedicine.com",
  shortName: "Pain Medicine",
  url: "https://painmedicine.com",
  tagline: "Understand pain. Understand your options.",
  description:
    "Patient-first education on pain medicine: what the specialty is, how pain works, the treatment options that exist today, and the science shaping tomorrow's pain relief.",
} as const;

export type NavItem = {
  label: string;
  href: string;
  description: string;
};

export const NAV: NavItem[] = [
  {
    label: "What Is Pain Medicine",
    href: "/what-is-pain-medicine",
    description:
      "The medical specialty dedicated to diagnosing and treating pain — who pain specialists are and how they work.",
  },
  {
    label: "Understanding Pain",
    href: "/understanding-pain",
    description:
      "How pain actually works: acute vs. chronic, the three types of pain, and why pain is more than tissue damage.",
  },
  {
    label: "Treatments",
    href: "/treatments",
    description:
      "The full landscape of pain treatment today: medications, interventional procedures, physical and behavioral therapies.",
  },
  {
    label: "Conditions",
    href: "/conditions",
    description:
      "Condition-by-condition guides: why it hurts, what helps, and when to see a specialist.",
  },
  {
    label: "Future of Pain Medicine",
    href: "/future-of-pain-medicine",
    description:
      "The next generation of pain relief: non-opioid drug pipelines, neuromodulation, precision medicine, and more.",
  },
];

export const SUPPORT_LINKS = [
  { label: "About & Editorial Policy", href: "/about" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
] as const;

/**
 * Crisis and help lines shown site-wide. These are national US resources.
 */
export const HELP_LINES = [
  {
    name: "988 Suicide & Crisis Lifeline",
    detail: "Call or text 988 — free, confidential, 24/7",
  },
  {
    name: "SAMHSA National Helpline",
    detail:
      "1-800-662-HELP (4357) — treatment referral for substance use and mental health, 24/7",
  },
] as const;
