import { unsplash } from "@/lib/utils";

export interface ServicePillar {
  number: string;
  slug: string;
  name: string;
  description: string;
  tags: string[];
  images: string[];
}

export const services: ServicePillar[] = [
  {
    number: "01",
    slug: "design",
    name: "Design",
    description:
      "Identity, product, and motion systems built to hold up at scale — not just look good in a deck.",
    tags: [
      "Brand identity",
      "Web & product design",
      "Design systems",
      "Motion",
      "Packaging & print",
    ],
    images: [
      unsplash("1522202176988-66273c2fd55f", 800),
      unsplash("1600880292203-757bb62b4baf", 800),
      unsplash("1522071820081-009f0129c71c", 800),
    ],
  },
  {
    number: "02",
    slug: "development",
    name: "Development",
    description:
      "Production-grade builds across web, app, and commerce platforms, engineered alongside design instead of after it.",
    tags: [
      "Web development",
      "App development",
      "Webflow / Shopify / WordPress",
      "Creative dev & WebGL",
      "API & systems integration",
    ],
    images: [
      unsplash("1461749280684-dccba630e2f6", 800),
      unsplash("1518770660439-4636190af475", 800),
      unsplash("1531973576160-7125cd663d86", 800),
    ],
  },
  {
    number: "03",
    slug: "consulting",
    name: "Consulting",
    description:
      "Positioning, research, and growth strategy that sets the brief for everything design and development ship next.",
    tags: [
      "GTM strategy",
      "CX & conversion strategy",
      "Positioning & research",
      "Growth advisory",
      "Analytics & measurement",
    ],
    images: [
      unsplash("1552664730-d307ca884978", 800),
      unsplash("1553877522-43269d4ea984", 800),
      unsplash("1504384308090-c894fdcc538d", 800),
    ],
  },
];
