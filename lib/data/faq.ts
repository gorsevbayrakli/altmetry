export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "What does an engagement with Altmetry actually look like?",
    answer:
      "Most engagements start with a scoped discovery sprint — one to two weeks — that ends in a clear brief and estimate. From there we work in fixed-scope phases (strategy, design, build) or as an embedded team on a monthly retainer, depending on what the work needs.",
  },
  {
    question: "How long do projects typically take?",
    answer:
      "A focused brand or marketing site runs 6–10 weeks. A full product build with design systems and custom development is usually 3–6 months. Consulting engagements (positioning, GTM strategy) run 3–5 weeks and often set the brief for a build that follows.",
  },
  {
    question: "How do design, development, and consulting actually combine on one project?",
    answer:
      "One team, one calendar. A consulting sprint sets the strategic brief, design and development build against it in parallel rather than in a design-then-build handoff, and the same senior team stays on from kickoff to launch — no re-briefing a second vendor.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Fixed-scope phases are quoted as flat project fees based on the brief from discovery. Ongoing work — growth advisory, iterative design, or embedded development — runs as a monthly retainer. We'll always tell you which model fits before you commit to either.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project ships with a 30-day warranty period for fixes. Beyond that, most clients move to a lighter monthly retainer for iteration, monitoring, and small feature work, or bring work back to us on an as-needed basis.",
  },
  {
    question: "What industries have you worked in?",
    answer:
      "Healthcare, logistics, finance, retail, outdoor and recreation, robotics and manufacturing, food and beverage, and architecture, among others. The common thread isn't the industry — it's founder-led or scaling teams that need design, build, and strategy to move together.",
  },
  {
    question: "Do you work with early-stage companies, or only established ones?",
    answer:
      "Both. Early-stage teams tend to lean on our consulting and design work to get positioning and a launch-ready product out fast. Later-stage teams more often bring us in for a rebuild, a rebrand tied to a raise, or an embedded development retainer.",
  },
  {
    question: "Can we start with just one discipline and add the others later?",
    answer:
      "Yes. Plenty of clients start with a single engagement — a rebrand, a site rebuild, a positioning sprint — and expand once they've seen how the team works. Nothing requires buying into all three disciplines up front.",
  },
];
