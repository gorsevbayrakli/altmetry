import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import { journalPosts } from "@/lib/data/journalPosts";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Altmetry`, description: post.excerpt };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = journalPosts.findIndex((p) => p.slug === slug);
  const post = journalPosts[index];
  if (!post) notFound();
  const related = journalPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const shareUrl = `https://altmetry.com/journal/${post.slug}`;

  return (
    <article className="px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-wide text-accent">
            {post.category}
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-ink/50">
            {post.author} · {post.date} · {post.readTime}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative my-12 aspect-[16/9] overflow-hidden rounded-2xl bg-ink/5">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="768px"
              priority
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          {post.content.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-8">
          <span className="text-xs uppercase tracking-wide text-ink/40">
            Share
          </span>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink/70 hover:text-accent"
          >
            X / Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink/70 hover:text-accent"
          >
            LinkedIn
          </a>
        </Reveal>

        {related.length > 0 && (
          <div className="mt-16 border-t border-ink/10 pt-10">
            <p className="mb-6 text-xs uppercase tracking-wide text-ink/40">
              Related
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/journal/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink/5">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="384px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 font-display text-base font-medium tracking-tight text-ink group-hover:text-accent transition-colors">
                    {p.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
