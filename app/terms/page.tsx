import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";

export const metadata: Metadata = {
  title: "Kullanım Koşulları · Altmetry",
};

export default function TermsPage() {
  return (
    <div className="pb-24">
      <PageHero lines={["Kullanım Koşulları"]} lede="Bu sayfa hazırlanıyor. Sitenin kullanım koşulları yayına çıkmadan önce burada yer alacak." />
    </div>
  );
}
