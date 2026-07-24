import { unsplash } from "@/lib/utils";

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  isFounder?: boolean;
}

export interface Founder {
  name: string;
  role: string;
  photo: string;
  bio: string;
  quote: string;
  linkedin: string;
}

export const founder: Founder = {
  name: "Deren Aksoy",
  role: "Founder & Principal",
  photo: unsplash("1507003211169-0a1dd7228f2d", 1200),
  bio: "Deren started Altmetry after a decade split between agency design leadership and in-house product strategy, tired of watching brand, build, and business strategy live in three separate vendor relationships. Altmetry exists to put them back in one room.",
  quote:
    "The best-looking site in the world doesn't matter if the strategy underneath it is wrong. We build the system first, then make it beautiful.",
  linkedin: "https://linkedin.com",
};

export const team: TeamMember[] = [
  { name: "Deren Aksoy", role: "Founder & Principal", photo: unsplash("1507003211169-0a1dd7228f2d", 600), isFounder: true },
  { name: "Naz Aydın", role: "Strategy Director", photo: unsplash("1494790108377-be9c29b29330", 600) },
  { name: "Deniz Kaya", role: "Creative Director", photo: unsplash("1472099645785-5658abf4ff4e", 600) },
  { name: "Elif Sarı", role: "Head of Engineering", photo: unsplash("1544005313-94ddf0286df2", 600) },
  { name: "Kerem Yıldız", role: "Lead Product Designer", photo: unsplash("1568602471122-7832951cc4c5", 600) },
  { name: "Mira Costa", role: "Senior Developer", photo: unsplash("1580489944761-15a19d654956", 600) },
  { name: "Tomas Reyer", role: "Motion Designer", photo: unsplash("1531123897727-8f129e1688ce", 600) },
  { name: "Ada Voss", role: "Producer", photo: unsplash("1552058544-f2b08422138a", 600) },
];
