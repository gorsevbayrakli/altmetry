import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Altmetry",
};

export default function PrivacyPage() {
  return (
    <div className="px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink/70">
          This is placeholder legal copy. Altmetry's full privacy policy —
          covering what data we collect through this site, how it's used,
          and how to request its removal — will be published here before
          launch.
        </p>
      </div>
    </div>
  );
}
