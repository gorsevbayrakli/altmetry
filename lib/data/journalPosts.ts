import { unsplash } from "@/lib/utils";

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  content: string[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "why-conversion-lift-is-a-design-problem",
    title: "Why your conversion lift is a design problem, not a marketing one",
    excerpt:
      "Most teams tune ad copy and landing-page headlines for months before touching the flow underneath. Usually the flow is the actual problem.",
    category: "Strategy",
    author: "Naz Aydın",
    date: "2026-05-14",
    readTime: "6 min read",
    coverImage: unsplash("1531973576160-7125cd663d86"),
    content: [
      "When conversion stalls, the instinct is almost always to rewrite the headline. Sometimes that's right. More often, the headline is fine and the three-step form beneath it is the actual leak.",
      "Across the last dozen conversion audits we've run, the highest-leverage fix was rarely copy. It was removing a field, reordering a decision, or showing the price before asking for an email address.",
      "Marketing can only push traffic toward a flow that's already working. If the flow itself asks too much too early, no amount of ad spend fixes that — it just gets more people to see the same drop-off.",
    ],
  },
  {
    slug: "positioning-before-pixels",
    title: "Positioning before pixels: why we don't open Figma first",
    excerpt:
      "Every design decision downstream of a fuzzy positioning statement is a guess. Here's how we get to clarity before anyone touches a mockup.",
    category: "Consulting",
    author: "Deniz Kaya",
    date: "2026-03-02",
    readTime: "5 min read",
    coverImage: unsplash("1553877522-43269d4ea984"),
    content: [
      "A brief that says 'make it feel premium' isn't a brief — it's a mood. Design needs something sharper to push against, and that sharpness has to come from positioning, not aesthetics.",
      "We run a short positioning sprint before any design work starts: competitive alternatives, what's actually unique about the product, who the buyer is, and what category they'd put you in if no one told them your name.",
      "Everything downstream — layout, tone, even color — gets easier to decide once the team agrees on what the company is actually claiming to be.",
    ],
  },
  {
    slug: "the-real-cost-of-a-slow-handoff",
    title: "The real cost of a slow design-to-dev handoff",
    excerpt:
      "Every week a finished design sits in a queue waiting for a developer is a week of drift between what was designed and what ships.",
    category: "Development",
    author: "Elif Sarı",
    date: "2026-01-20",
    readTime: "4 min read",
    coverImage: unsplash("1461749280684-dccba630e2f6"),
    content: [
      "The handoff gap is where most product quality actually gets lost — not in the design file, not in the code, but in the translation between them.",
      "Running design and development in the same sprints, with the same standups, closes that gap almost entirely. Questions get answered in minutes instead of surfacing three weeks later as a Slack thread.",
      "It's slower to set up than a traditional agency-then-dev-shop pipeline. It's faster for everything that follows.",
    ],
  },
];
