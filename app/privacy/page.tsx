import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";

export const metadata: Metadata = {
  title: "Gizlilik Politikası · Altmetry",
};

export default function PrivacyPage() {
  return (
    <div className="pb-24">
      <PageHero lines={["Gizlilik Politikası"]} lede="Bu sayfa hazırlanıyor. Bu site üzerinden hangi verileri topladığımızı, nasıl kullandığımızı ve KVKK kapsamındaki haklarınızı nasıl kullanabileceğinizi anlatan aydınlatma metni yayına çıkmadan önce burada yer alacak." />
    </div>
  );
}
