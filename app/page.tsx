import Hero from "@/components/sections/Hero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Impact from "@/components/sections/Impact";
import Process from "@/components/sections/Process";
import Studio from "@/components/sections/Studio";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import JournalTeaser from "@/components/sections/JournalTeaser";
import FinalCta from "@/components/sections/FinalCta";
import SectionIndexRail from "@/components/layout/SectionIndexRail";

export default function Home() {
  return (
    <>
      <SectionIndexRail />
      <Hero />
      <ClientMarquee />
      <Services />
      <Work />
      <Impact />
      <Process />
      <Studio />
      <Testimonials />
      <Faq />
      <JournalTeaser />
      <FinalCta />
    </>
  );
}
