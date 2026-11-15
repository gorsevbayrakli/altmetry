import { faq } from "@/lib/data/faq";

export default function Faq() {
  return (
    <section id="sorular" aria-labelledby="soru-baslik" className="border-t border-dark px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:gap-8">
        <h2 id="soru-baslik" data-lines className="font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.05] tracking-[-0.03em] text-dark-ink lg:col-span-4">
          <span className="ln block">Aklınıza</span>
          <span className="ln block">gelebilecekler</span>
        </h2>
        <ul className="border-t border-dark-line lg:col-span-8">
          {faq.map((item, i) => (
            <li key={item.question} data-up className="border-b border-dark-line">
              <details className="group" open={i === 0}>
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-xl font-medium text-dark-ink [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 shrink-0 text-peach transition-transform duration-200 group-open:rotate-45">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="max-w-[64ch] pb-6 text-base leading-relaxed text-dark-ink-2">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
