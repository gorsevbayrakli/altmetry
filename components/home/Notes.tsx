import Image from "next/image";
import Link from "next/link";
import { journalPosts } from "@/lib/data/journalPosts";
import { ArrowIcon, TextLink } from "@/components/home/ui";

export default function Notes() {
  return (
    <section aria-labelledby="not-baslik" className="px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <h2 id="not-baslik" data-lines className="font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-dark-ink">
          <span className="ln block">Sahadan notlar</span>
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {journalPosts.slice(0, 3).map((p) => (
            <li key={p.slug} data-up className="flex flex-col overflow-hidden rounded-2xl bg-canvas text-ink">
              <div className="relative aspect-[16/10] bg-subtle">
                <Image src={p.coverImage} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-2">{p.category} · {p.readTime}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink-2">{p.excerpt}</p>
                <Link href={`/journal/${p.slug}`} className="mt-6 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-ink px-6 text-base font-medium text-dark-ink hover:bg-dark">
                  Yazıyı oku <ArrowIcon />
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <TextLink href="/journal" className="text-dark-ink">Tüm yazılar</TextLink>
        </div>
      </div>
    </section>
  );
}
