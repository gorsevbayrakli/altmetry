import Hero from "@/components/home/Hero";
import Tasks from "@/components/home/Tasks";
import Services from "@/components/home/Services";
import HowWeWork from "@/components/home/HowWeWork";
import Statement from "@/components/home/Statement";
import Scenarios from "@/components/home/Scenarios";
import Studio from "@/components/home/Studio";
import Faq from "@/components/home/Faq";
import Notes from "@/components/home/Notes";
import Closing from "@/components/home/Closing";

/**
 * Ana sayfa: koyu antrasit zemin (referans dsquaredmedia.net), hareketler Infaiwor sitesindeki dille (GSAP).
 * Önerme: 20–250 kişilik firmaların tekrar eden işlerini yapay zekâya devrediyoruz; ölçerek, kararı insanda bırakarak.
 */
export default function Home() {
  return (
    <div className="bg-dark-deep text-dark-ink">
      <Hero />
      <Tasks />
      <Services />
      <HowWeWork />
      <Statement />
      <Scenarios />
      <Studio />
      <Faq />
      <Notes />
      <Closing />
    </div>
  );
}
