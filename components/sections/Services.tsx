import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Tag, { type TagTone } from "@/components/ui/Tag";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const tones: TagTone[] = ["accent", "accent-2", "accent-3"];
const numberClasses = ["text-accent", "text-accent-2", "text-accent-3"];
const titleHoverClasses = [
  "group-hover:text-accent",
  "group-hover:text-accent-2",
  "group-hover:text-accent-3",
];

export default function Services() {
  return (
    <section id="what-we-do" className="px-6 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          index="02"
          eyebrow="What we do"
          title={"Three disciplines.\nOne accountable team."}
          description="Design, development, and consulting run in parallel here, not in sequence — so nothing gets designed that can't be built, and nothing gets built without a strategic reason."
          className="mb-16 whitespace-pre-line"
        />

        <div className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <Link
                href={`/services#${service.slug}`}
                className="group grid grid-cols-1 gap-8 py-10 md:grid-cols-12 md:items-center md:gap-6"
              >
                <div className="md:col-span-1">
                  <span
                    className={cn(
                      "font-display text-sm font-medium tabular-nums",
                      numberClasses[i]
                    )}
                  >
                    {service.number}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3
                    className={cn(
                      "font-display text-3xl font-medium tracking-tight text-ink transition-colors sm:text-4xl",
                      titleHoverClasses[i]
                    )}
                  >
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
                    {service.description}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {service.tags.map((tag) => (
                      <Tag key={tag} tone={tones[i]} variant="dot">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>

                <div className="hidden md:col-span-3 md:flex md:justify-end md:gap-2">
                  {service.images.slice(0, 2).map((img, idx) => (
                    <div
                      key={idx}
                      className="relative h-20 w-16 overflow-hidden rounded-lg bg-ink/5"
                      style={{ marginTop: idx % 2 === 0 ? 0 : 16 }}
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
