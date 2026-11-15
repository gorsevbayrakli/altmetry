const text =
  "Teknoloji ve yapay zekâda yirmi yılı aşkın, B2B satış ve pazarlamada on dokuz yıllık deneyim. Bu yüzden önce işinizi, sonra teknolojiyi konuşuyoruz.";

/** Okundukça yanan büyük cümle (kelimeleri HomeMotion yakar; hareket azaltmada hepsi baştan açık). */
export default function Statement() {
  const words = text.split(" ");
  return (
    <section aria-label="Deneyim" className="px-4 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="flex flex-col items-center text-center">
        <p data-words aria-label={text} className="max-w-[1100px] font-display text-[clamp(30px,3.8vw,52px)] font-light leading-[1.2] tracking-[-0.02em]">
          {words.map((w, i) => (
            <span key={i} aria-hidden className="word">
              {w}{" "}
            </span>
          ))}
        </p>
        <p className="mt-8 text-sm text-dark-ink-2">Süreler kurucularımızın önceki deneyimine aittir.</p>
      </div>
    </section>
  );
}
