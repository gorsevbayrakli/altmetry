import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { journalPosts } from "@/lib/data/journalPosts";

export default function JournalTeaser() {
  return (
    <section className="px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="mb-4 text-sm uppercase tracking-wide text-ink/50">
              Journal
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Notes on the work.
            </h2>
          </Reveal>
          <MagneticButton href="/journal" variant="outline" className="shrink-0">
            Read the journal
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {journalPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wide text-accent">
                  {post.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium leading-snug tracking-tight text-ink group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-ink/50">
                  {post.author} · {post.readTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
