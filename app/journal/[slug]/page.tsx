import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageCta } from "@/components/page/PageHero";
import { journalPosts } from "@/lib/data/journalPosts";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} · Altmetry`, description: post.excerpt };
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = journalPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const shareUrl = `https://altmetry.com/journal/${post.slug}`;
  const date = new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <article>
      <header data-hero className="dot-grid px-4 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-[880px]">
          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-light leading-[1.08] tracking-[-0.03em] text-dark-ink">
            <span className="ln block">{post.title}</span>
          </h1>
          <div data-hero-rest>
            <p className="mt-6 text-base text-dark-ink-2">
              {post.category} · {date} · {post.readTime}
            </p>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[880px]">
          <div data-up className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-dark-raise">
            <Image src={post.coverImage} alt="" fill priority sizes="(min-width: 880px) 880px, 100vw" className="object-cover" />
          </div>

          <div className="mt-16 flex max-w-[68ch] flex-col gap-6">
            {post.content.map((paragraph, i) => (
              <p key={i} data-up className="text-lg leading-relaxed text-dark-ink">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 flex max-w-[68ch] flex-wrap items-center gap-x-6 border-t border-dark-line pt-8">
            <p className="text-base text-dark-ink-2">Paylaş</p>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-base text-dark-ink underline decoration-1 underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-base text-dark-ink underline decoration-1 underline-offset-4"
            >
              X (Twitter)
            </a>
          </div>

          {related.length > 0 && (
            <section aria-labelledby="diger-baslik" className="mt-24 border-t border-dark-line pt-12 pb-24">
              <h2 id="diger-baslik" className="font-display text-3xl font-light text-dark-ink">
                Diğer yazılar
              </h2>
              <ul className="mt-8 grid gap-8 sm:grid-cols-2">
                {related.map((p) => (
                  <li key={p.slug} data-up>
                    <Link href={`/journal/${p.slug}`} className="group block">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-dark-raise">
                        <Image src={p.coverImage} alt="" fill sizes="(min-width: 640px) 432px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                      </div>
                      <h3 className="mt-4 text-xl font-medium leading-snug text-dark-ink group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">{p.title}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <PageCta title="Bu konuyu kendi şirketinizde" accent="konuşalım mı?" />
    </article>
  );
}
