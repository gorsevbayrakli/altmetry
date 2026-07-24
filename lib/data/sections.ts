export interface SectionNavItem {
  id: string;
  index: string;
  label: string;
}

export const homeSections: SectionNavItem[] = [
  { id: "signal", index: "01", label: "Signal" },
  { id: "what-we-do", index: "02", label: "What we do" },
  { id: "proof", index: "03", label: "Proof" },
  { id: "by-the-numbers", index: "04", label: "By the numbers" },
  { id: "how-we-work", index: "05", label: "How we work" },
  { id: "studio", index: "06", label: "Studio" },
  { id: "words", index: "07", label: "Words" },
  { id: "questions", index: "08", label: "Questions" },
];
