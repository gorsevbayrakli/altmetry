import type { ReactNode } from "react";
import { Pill } from "@/components/home/ui";

/**
 * İç sayfa başlığı: ana sayfadaki dil (ince, büyük başlık; satırlar sırayla netleşir).
 * Üst etiket (eyebrow) yok; sayfanın adı başlığın kendisi.
 */
export function PageHero({ lines, accent, lede, children }: { lines: string[]; accent?: string; lede?: ReactNode; children?: ReactNode }) {
  return (
    <section data-hero className="dot-grid px-4 pt-24 pb-16 sm:px-8 lg:px-12 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="font-display text-[clamp(44px,6.4vw,96px)] font-light leading-[1.04] tracking-[-0.035em] text-dark-ink">
          {lines.map((l) => (
            <span key={l} className="ln block">
              {l}
            </span>
          ))}
          {accent && <span className="ln block text-peach">{accent}</span>}
        </h1>
        {(lede || children) && (
          <div data-hero-rest>
            {lede && <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-dark-ink-2 sm:text-xl">{lede}</p>}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

/** Bölüm başlığı: ince, büyük; satırlar kaydırınca netleşir. */
export function SectionTitle({ id, lines, accent, className }: { id?: string; lines: string[]; accent?: string; className?: string }) {
  return (
    <h2 id={id} data-lines className={`font-display text-[clamp(36px,4.8vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-dark-ink ${className ?? ""}`}>
      {lines.map((l) => (
        <span key={l} className="ln block">
          {l}
        </span>
      ))}
      {accent && <span className="ln block text-peach">{accent}</span>}
    </h2>
  );
}

/** Sayfa sonu çağrısı. */
export function PageCta({ title, accent, text, label = "Ücretsiz ön görüşme" }: { title: string; accent?: string; text?: string; label?: string }) {
  return (
    <section aria-label="Ön görüşme" className="dot-grid border-t border-dark px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <SectionTitle lines={[title]} accent={accent} className="text-center" />
        {text && (
          <p data-up className="mt-8 max-w-[56ch] text-lg leading-relaxed text-dark-ink-2">
            {text}
          </p>
        )}
        <div data-up className="mt-10">
          <Pill href="/contact">{label}</Pill>
        </div>
      </div>
    </section>
  );
}
