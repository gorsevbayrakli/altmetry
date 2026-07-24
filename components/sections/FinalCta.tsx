import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FinalCta() {
  return (
    <section className="bg-dark px-6 py-24 text-dark-ink sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1440px] text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Let&rsquo;s build something
            <br />
            that measures up.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href="mailto:hello@altmetry.com"
            className="mt-8 inline-block text-lg text-dark-ink/70 transition-colors hover:text-accent sm:text-xl"
          >
            hello@altmetry.com
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10">
            <MagneticButton
              href="/contact"
              className="bg-accent text-canvas hover:bg-canvas hover:text-ink"
            >
              Start a project
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
