import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { founder } from "@/lib/data/team";

export default function Studio() {
  return (
    <section id="studio" className="gradient-mesh relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          index="06"
          eyebrow="Who's behind it"
          title="Surface and system."
          description="Anyone can design a nice-looking page. What holds a brand together over years is the operating logic underneath it — the part clients don't see, but always feel."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
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

          <Reveal delay={0.1} className="glass rounded-3xl p-8 lg:col-span-8 lg:p-10">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
              &ldquo;{founder.quote}&rdquo;
            </p>
            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="font-display text-lg font-medium text-ink">
                {founder.name}
              </p>
              <p className="text-sm text-ink/50">{founder.role}</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
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
      </div>
    </section>
  );
}
