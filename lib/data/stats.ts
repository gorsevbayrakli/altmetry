export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 9, suffix: "+", label: "Years in practice" },
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 14, suffix: "", label: "Industries served" },
  { value: 38, suffix: "%", label: "Avg. conversion lift" },
];
