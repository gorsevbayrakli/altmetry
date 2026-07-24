import { unsplash } from "@/lib/utils";

export type Discipline = "Design" | "Development" | "Consulting";

export interface Project {
  slug: string;
  client: string;
  title: string;
  summary: string;
  discipline: Discipline[];
  industry: string;
  year: number;
  featured: boolean;
  coverImage: string;
  gallery: string[];
  challenge: string;
  approach: string;
  outcome: string;
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "northline-health",
    client: "Northline Health",
    title: "A patient portal people actually finish booking through",
    summary:
      "Rebuilt intake and scheduling around a single decision per screen, lifting completed bookings by 38%.",
    discipline: ["Design", "Development"],
    industry: "Healthcare",
    year: 2025,
    featured: true,
    coverImage: unsplash("1497366216548-37526070297c"),
    gallery: [
      unsplash("1497366216548-37526070297c"),
      unsplash("1522202176988-66273c2fd55f"),
      unsplash("1531973576160-7125cd663d86"),
    ],
    challenge:
      "Northline's booking flow asked patients for nine fields before showing a single open appointment. Two in five sessions abandoned before confirmation, and call-center volume was rising faster than headcount.",
    approach:
      "We mapped every drop-off point against call-center transcripts, then rebuilt intake as a single-question-per-screen flow with live availability shown up front. Design and engineering shipped in the same two-week sprints so copy, layout, and API contracts stayed in sync.",
    outcome:
      "Completed bookings rose 38% in the first full quarter post-launch, and inbound scheduling calls dropped enough to redeploy two support staff to patient follow-up.",
    stats: [
      { label: "Booking completion", value: "+38%" },
      { label: "Support call volume", value: "-24%" },
      { label: "Time to book", value: "1m 40s" },
    ],
  },
  {
    slug: "verra-freight",
    client: "Verra Freight",
    title: "Brand and ops dashboard for a freight network scaling fast",
    summary:
      "A new identity and a real-time dispatch dashboard gave a 40-terminal network visibility it never had.",
    discipline: ["Design", "Development", "Consulting"],
    industry: "Logistics",
    year: 2024,
    featured: true,
    coverImage: unsplash("1600607687939-ce8a6c25118c"),
    gallery: [
      unsplash("1600607687939-ce8a6c25118c"),
      unsplash("1518770660439-4636190af475"),
      unsplash("1581091012184-7e0cdfbb6797"),
    ],
    challenge:
      "Verra had grown from 6 to 40 terminals in three years on a patchwork of spreadsheets and a decade-old brand that undersold their scale to enterprise shippers.",
    approach:
      "Consulting led a positioning sprint to define Verra's category story, which set the brief for a new identity system and a dispatch dashboard built to surface delay risk before it became a missed delivery.",
    outcome:
      "Dispatch teams now catch at-risk shipments an average of 6 hours earlier, and the rebrand became the centerpiece of Verra's Series C pitch deck.",
    stats: [
      { label: "Delay detection", value: "6hrs earlier" },
      { label: "Terminals onboarded", value: "40" },
      { label: "Dashboard adoption", value: "94%" },
    ],
  },
  {
    slug: "solace-financial",
    client: "Solace Financial",
    title: "Repositioning a wealth platform for a category it helped create",
    summary:
      "New positioning and a marketing site rebuilt around outcomes, not features, ahead of a Series B raise.",
    discipline: ["Consulting", "Design"],
    industry: "Finance",
    year: 2026,
    featured: true,
    coverImage: unsplash("1541746972996-4e0b0f43e02a"),
    gallery: [
      unsplash("1541746972996-4e0b0f43e02a"),
      unsplash("1531973576160-7125cd663d86"),
      unsplash("1517245386807-bb43f82c33c4"),
    ],
    challenge:
      "Solace's product had matured past its original pitch, but the site and sales collateral still described a feature set three releases behind, confusing prospects mid-funnel.",
    approach:
      "We ran a positioning workshop with product, sales, and leadership to rebuild the value narrative around client outcomes, then redesigned the marketing site to carry that story from headline to CTA.",
    outcome:
      "Demo-to-close rate improved 21% in the two quarters following launch, and the new narrative became the backbone of the Series B deck.",
    stats: [
      { label: "Demo-to-close", value: "+21%" },
      { label: "Site conversion", value: "+3.4x" },
    ],
  },
  {
    slug: "kessler-and-vine",
    client: "Kessler & Vine",
    title: "An ecommerce rebuild for a wine retailer outgrowing its platform",
    summary:
      "Migrated to a custom Shopify build with faster checkout and a merchandising system staff could run themselves.",
    discipline: ["Development", "Design"],
    industry: "Retail",
    year: 2025,
    featured: true,
    coverImage: unsplash("1556742049-0cfed4f6a45d"),
    gallery: [
      unsplash("1556742049-0cfed4f6a45d"),
      unsplash("1441984904996-e0b6ba687e04"),
      unsplash("1600880292203-757bb62b4baf"),
    ],
    challenge:
      "Kessler & Vine's legacy platform couldn't support the allocation-based selling their top wines needed, and every merchandising change required a developer ticket.",
    approach:
      "We rebuilt the storefront on Shopify with a custom allocation and waitlist app, then handed the merchandising team a block-based editor so campaigns could ship without engineering.",
    outcome:
      "Checkout time fell by half, allocation drops sold out in under ten minutes, and the marketing team now ships new landing pages same-day.",
    stats: [
      { label: "Checkout time", value: "-50%" },
      { label: "Allocation sell-through", value: "<10min" },
      { label: "Mobile conversion", value: "+2.1x" },
    ],
  },
  {
    slug: "meridian-outdoor",
    client: "Meridian Outdoor",
    title: "A DTC launch for a gear brand skipping wholesale entirely",
    summary:
      "Brand system and ecommerce build for a direct-to-consumer launch that hit its first-year revenue target in five months.",
    discipline: ["Design", "Development"],
    industry: "Outdoor & Recreation",
    year: 2023,
    featured: true,
    coverImage: unsplash("1573497019940-1c28c88b4f3e"),
    gallery: [
      unsplash("1573497019940-1c28c88b4f3e"),
      unsplash("1521737604893-d14cc237f11d"),
      unsplash("1600880292203-757bb62b4baf"),
    ],
    challenge:
      "Meridian had product ready to ship but no brand, no site, and a hard launch date tied to a trade show four months out.",
    approach:
      "We ran design and development in parallel: identity and photography direction in weeks one and two, storefront build starting week three, so nothing waited in a queue.",
    outcome:
      "Meridian hit its year-one revenue target in five months and sold out its launch collection twice.",
    stats: [
      { label: "Year-one target", value: "5 months" },
      { label: "Launch sellouts", value: "2x" },
    ],
  },
  {
    slug: "basalt-robotics",
    client: "Basalt Robotics",
    title: "A product site and investor narrative for an industrial robotics team",
    summary:
      "Positioning and a technical marketing site that helped a hardware team raise its Series A.",
    discipline: ["Consulting", "Design"],
    industry: "Robotics & Manufacturing",
    year: 2024,
    featured: false,
    coverImage: unsplash("1565043666747-69f6646db940"),
    gallery: [
      unsplash("1565043666747-69f6646db940"),
      unsplash("1600607687939-ce8a6c25118c"),
      unsplash("1518770660439-4636190af475"),
    ],
    challenge:
      "Basalt's engineering was ahead of its story — investors and prospective customers couldn't tell the arm-automation platform apart from a dozen other robotics decks.",
    approach:
      "Consulting distilled the technical differentiation into a market category story, which design then translated into a site built to survive scrutiny from both engineers and investors.",
    outcome:
      "Basalt closed its Series A within the quarter and now uses the site as its default technical sales asset.",
    stats: [
      { label: "Funding round", value: "Series A" },
      { label: "Qualified demo requests", value: "+64%" },
    ],
  },
  {
    slug: "fennimore-coffee-co",
    client: "Fennimore Coffee Co.",
    title: "A subscription platform built for a roaster's actual fulfillment flow",
    summary:
      "Custom subscription and roast-scheduling logic replaced three disconnected tools and cut fulfillment errors sharply.",
    discipline: ["Development"],
    industry: "Food & Beverage",
    year: 2026,
    featured: false,
    coverImage: unsplash("1495474472287-4d71bcdd2085"),
    gallery: [
      unsplash("1495474472287-4d71bcdd2085"),
      unsplash("1447933601403-0c6688de566e"),
      unsplash("1524758631624-e2822e304c36"),
    ],
    challenge:
      "Fennimore ran subscriptions through a generic app that didn't understand roast schedules, so fulfillment staff manually reconciled orders against roast batches every week.",
    approach:
      "We built subscription logic directly into their storefront, syncing delivery dates to actual roast-batch capacity instead of a fixed calendar.",
    outcome:
      "Fulfillment errors dropped 71% and the fulfillment team reclaimed roughly six hours a week previously spent on manual reconciliation.",
    stats: [
      { label: "Fulfillment errors", value: "-71%" },
      { label: "Manual hours saved", value: "6/week" },
    ],
  },
  {
    slug: "arcform-studio",
    client: "Arcform Studio",
    title: "A portfolio and CMS built for an architecture practice's pace of work",
    summary:
      "A self-serve portfolio site let a 12-person practice publish new work the week it wraps, not the quarter after.",
    discipline: ["Design", "Development"],
    industry: "Architecture & Real Estate",
    year: 2023,
    featured: false,
    coverImage: unsplash("1486406146926-c627a92ad1ab"),
    gallery: [
      unsplash("1486406146926-c627a92ad1ab"),
      unsplash("1487958449943-2429e8be8625"),
      unsplash("1497366811353-6870744d04b2"),
    ],
    challenge:
      "Arcform's previous site required a developer for every project upload, so finished work sat unpublished for months at a time.",
    approach:
      "We designed a flexible project template system and a CMS the studio's own coordinators could run, matched to how architecture portfolios actually get assembled.",
    outcome:
      "Arcform now publishes new projects within a week of completion and has tripled organic site traffic since launch.",
    stats: [
      { label: "Publish time", value: "1 week" },
      { label: "Organic traffic", value: "+3x" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const industries = Array.from(new Set(projects.map((p) => p.industry))).sort();
export const disciplines: Discipline[] = ["Design", "Development", "Consulting"];
export const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);
