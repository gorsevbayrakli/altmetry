import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Altmetry",
};

export default function TermsPage() {
  return (
    <div className="px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink/70">
          This is placeholder legal copy. Altmetry's full terms of service —
          covering engagement terms, intellectual property, and site usage —
          will be published here before launch.
        </p>
      </div>
    </div>
  );
}
