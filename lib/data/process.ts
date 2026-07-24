export interface ProcessStep {
  letter: string;
  number: string;
  title: string;
  description: string;
}

export const processFrameworkName = "The SCALE Framework";

export const processSteps: ProcessStep[] = [
  {
    letter: "S",
    number: "01",
    title: "Signal",
    description:
      "We start by finding the real constraint — through stakeholder interviews, data review, and a hard look at what's actually stopping growth, not just what it looks like from the outside.",
  },
  {
    letter: "C",
    number: "02",
    title: "Calibrate",
    description:
      "Strategy sets the brief: positioning, target outcomes, and the metrics we'll be judged against. Nothing gets designed until this is agreed.",
  },
  {
    letter: "A",
    number: "03",
    title: "Assemble",
    description:
      "Design builds the system — identity, product, and UX — directly against the calibrated brief, reviewed in working sessions rather than big-reveal presentations.",
  },
  {
    letter: "L",
    number: "04",
    title: "Launch",
    description:
      "Development ships in parallel with design, not after it, so what launches matches what was designed — down to the interaction detail.",
  },
  {
    letter: "E",
    number: "05",
    title: "Expand",
    description:
      "We stay on past launch to watch the metrics we set in Calibrate, and keep iterating — copy, flow, features — until the numbers move and hold.",
  },
];
