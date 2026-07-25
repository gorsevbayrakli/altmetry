import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { founder, team } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Studio — Altmetry",
  description:
    "The team, the ethos, and the operating logic behind Altmetry.",
};

const values = [
  {
    title: "Surface and system",
    description:
      "Anyone can make something look good for a screenshot. We care as much about the operating logic underneath — the part that holds up six months after launch.",
  },
  {
    title: "One team, no handoffs",
    description:
      "Design, development, and consulting share a calendar and a brief. Nothing waits in a queue between disciplines.",
  },
  {
    title: "Numbers over adjectives",
    description:
      "Every recommendation is tied to a metric we're willing to be judged against, not a vague promise about brand feeling.",
  },
];

export default function StudioPage() {
  return (
    <div className="pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <Reveal className="mb-20 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-wide text-ink/50">
            Studio
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Design, development, and strategy — practiced as one craft.
          </h1>
        </Reveal>

        <div className="mb-24 grid grid-cols-1 gap-12 border-t border-ink/10 pt-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5">
              <Image
                src={founder.photo}
                alt={founder.name}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-4xl">
              &ldquo;{founder.quote}&rdquo;
            </p>
            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="font-display text-lg font-medium text-ink">
                {founder.name}
              </p>
              <p className="text-sm text-ink/50">{founder.role}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
                {founder.bio}
              </p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-accent underline-offset-4 hover:underline"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mb-24 border-t border-ink/10 pt-16">
          <Reveal>
            <p className="mb-10 text-xs uppercase tracking-wide text-ink/40">
              The team
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 0.06}>
                <div className="relative aspect-square overflow-hidden rounded-xl bg-ink/5">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 33vw"
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <p className="mt-3 font-display text-sm font-medium text-ink">
                  {member.name}
                </p>
                <p className="text-xs text-ink/50">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mb-24 border-t border-ink/10 pt-16">
          <Reveal>
            <p className="mb-10 text-xs uppercase tracking-wide text-ink/40">
              What we hold to
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="flex flex-col items-start justify-between gap-8 border-t border-ink/10 pt-16 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-wide text-ink/40">
              Where we work from
            </p>
            <p className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Istanbul, Türkiye — remote-friendly worldwide.
            </p>
            <div className="mt-4">
            </div>
          </div>
          <MagneticButton href="/contact">Start a project</MagneticButton>
        </Reveal>
      </div>
    </div>
  );
}
