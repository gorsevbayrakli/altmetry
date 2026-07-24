export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Altmetry didn't just redesign our booking flow, they rebuilt how our whole team thinks about patient experience. The 38% lift was real, and it held.",
    name: "Priya Anand",
    role: "VP of Product",
    company: "Northline Health",
    rating: 5,
  },
  {
    quote:
      "We came in for a rebrand and left with a dashboard our dispatchers actually fight over who gets to use first. That's the kind of design-meets-ops thinking we couldn't find anywhere else.",
    name: "Marcus Deloy",
    role: "COO",
    company: "Verra Freight",
    rating: 5,
  },
  {
    quote:
      "The positioning workshop alone was worth the engagement. Everything downstream — the site, the deck, our sales calls — got sharper because of it.",
    name: "Elena Sorbo",
    role: "CEO",
    company: "Solace Financial",
    rating: 5,
  },
  {
    quote:
      "Most agencies hand you a Figma file and disappear. Altmetry stayed through launch, watched the checkout metrics with us, and kept tuning until they moved.",
    name: "Grant Kessler",
    role: "Founder",
    company: "Kessler & Vine",
    rating: 5,
  },
  {
    quote:
      "They understood that we needed brand and storefront moving at the same speed, not sequentially. That's the only reason we made our launch date.",
    name: "Talia Reyes",
    role: "Head of Marketing",
    company: "Meridian Outdoor",
    rating: 5,
  },
  {
    quote:
      "Consulting, design, and dev usually means three vendors and three timelines. With Altmetry it was one team, one calendar, and zero handoff friction.",
    name: "Owen Fennimore",
    role: "Founder",
    company: "Fennimore Coffee Co.",
    rating: 4,
  },
];
