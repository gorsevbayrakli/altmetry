"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { journalPosts } from "@/lib/data/journalPosts";

const categories = Array.from(new Set(journalPosts.map((p) => p.category)));

export default function JournalPage() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active ? journalPosts.filter((p) => p.category === active) : journalPosts),
    [active]
  );

  return (
    <div className="px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-wide text-ink/50">
            Journal
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Notes on design, development, and strategy.
          </h1>
        </Reveal>

        <div className="mb-12 flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs transition-colors",
              active === null
                ? "border-accent bg-accent/10 text-accent"
                : "border-ink/15 text-ink/60 hover:border-ink/40"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs transition-colors",
                active === cat
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-ink/15 text-ink/60 hover:border-ink/40"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link href={`/journal/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink/5">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wide text-accent">
                  {post.category}
                </p>
                <h2 className="mt-2 font-display text-lg font-medium leading-snug tracking-tight text-ink group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink/60">{post.excerpt}</p>
                <p className="mt-3 text-xs text-ink/50">
                  {post.author} · {post.readTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
