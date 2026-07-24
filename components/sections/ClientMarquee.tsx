import LogoMarquee from "@/components/ui/LogoMarquee";
import { clients } from "@/lib/data/clients";

export default function ClientMarquee() {
  return (
    <section aria-label="Clients" className="px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <LogoMarquee clients={clients} />
      </div>
    </section>
  );
}
