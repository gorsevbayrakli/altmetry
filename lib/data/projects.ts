import { unsplash } from "@/lib/utils";
import type { ServiceArea } from "@/lib/data/services";

/**
 * Example scenarios ("Neler mümkün"). These are NOT client case studies:
 * every page that renders them labels them as örnek senaryo. Replace with
 * real, verifiable cases once the first pilots are finished.
 */
export interface Scenario {
  slug: string;
  name: string;
  title: string;
  summary: string;
  areas: ServiceArea[];
  sector: string;
  duration: string;
  featured: boolean;
  coverImage: string;
  situation: string;
  approach: string;
  goal: string;
  metrics: { label: string; value: string }[];
}

export const scenarioDisclaimer =
  "Örnek senaryo. Gerçek bir müşteri vakası değildir; hedefler teşhis aşamasında sizinle birlikte belirlenir.";

export const scenarios: Scenario[] = [
  {
    slug: "teklif-hazirlama",
    name: "Teklif hazırlama",
    title: "Üç gün süren teklifi bir güne indirmek",
    summary:
      "Geçmiş tekliflerden beslenen bir asistan ilk taslağı çıkarır, satış ekibi kontrol edip özelleştirir.",
    areas: ["Satış ve pazarlama", "Süreç iyileştirme"],
    sector: "Üretim",
    duration: "Pilot: 4–6 hafta",
    featured: true,
    coverImage: unsplash("1497366216548-37526070297c"),
    situation:
      "Satış ekibi her teklif için eski dosyaları arıyor, firma tanıtımını, referansları, teknik kapsamı ve şartları yeniden kopyalıyor. Bir teklif ortalama üç gün sürüyor ve satış müdürü haftasının yarısını teklif kontrolüne harcıyor.",
    approach:
      "Son iki yılın tekliflerini düzenli bir kütüphaneye dönüştürüyoruz. Müşteri talebini okuyup ilk taslağı bu kütüphaneden hazırlayan bir asistan kuruyoruz. Fiyat ve özel şartlar her zaman insanda kalıyor.",
    goal:
      "Teklif hazırlama süresini kısaltmak ve aynı ekiple daha fazla teklif verebilmek. Kalite kaybı olmadığını, kabul edilen teklif oranıyla takip ediyoruz.",
    metrics: [
      { label: "Teklif başına süre", value: "3 gün → 1 gün" },
      { label: "Aylık teklif sayısı", value: "Artış" },
      { label: "Kabul oranı", value: "Korunur" },
    ],
  },
  {
    slug: "yeni-musteri-bulma",
    name: "Yeni müşteri bulma",
    title: "Aynı 200 firmayı aramayı bırakmak",
    summary:
      "En iyi müşterilerin profilinden yeni hedef liste ve her firmaya kendi gündemiyle yazılmış mesajlar.",
    areas: ["Satış ve pazarlama"],
    sector: "Toptan ve dağıtım",
    duration: "Pilot: 4–6 hafta",
    featured: true,
    coverImage: unsplash("1600607687939-ce8a6c25118c"),
    situation:
      "Satış ekibi yıllardır aynı listeyle çalışıyor. Yeni firma bulmak kişisel çevreye ve fuarlara bağlı. Gönderilen e-postalar herkese aynı, dönüş oranı düşük.",
    approach:
      "Mevcut en iyi müşterilerinizin ortak özelliklerini çıkarıyor, bu profile uyan yeni firmaları ve karar vericileri buluyoruz. Her firmanın gündemine göre kişiselleştirilmiş e-posta ve LinkedIn akışı kuruyoruz. Yanıtlar satış ekibine sınıflandırılmış olarak düşüyor.",
    goal:
      "Satış ekibinin zamanını liste temizlemekten nitelikli görüşmeye kaydırmak.",
    metrics: [
      { label: "Aylık nitelikli görüşme", value: "Artış" },
      { label: "Listeye harcanan saat", value: "Azalış" },
      { label: "Yanıt oranı", value: "Takip" },
    ],
  },
  {
    slug: "ay-sonu-raporu",
    name: "Ay sonu raporu",
    title: "Dört kişinin iki gününü alan raporu otomatikleştirmek",
    summary:
      "Farklı sistemlerdeki veriyi kendiliğinden toplayan ve her sabah güncel olan bir yönetim panosu.",
    areas: ["Süreç iyileştirme"],
    sector: "Profesyonel hizmetler",
    duration: "Pilot: 4–6 hafta",
    featured: true,
    coverImage: unsplash("1541746972996-4e0b0f43e02a"),
    situation:
      "Ay sonunda muhasebe, satış ve operasyon verileri Excel'de elle birleştiriliyor. Rapor yönetime ayın ilk haftasının sonunda ulaşıyor, kararlar gecikiyor.",
    approach:
      "Verinin hangi sistemden geldiğini haritalıyor, toplama ve birleştirme adımlarını otomatikleştiriyoruz. Yapay zekâ olağan dışı değişimleri işaretleyip kısa bir yorum yazıyor.",
    goal: "Rapor hazırlığına giden saati azaltmak ve yönetimin güncel veriyle karar vermesini sağlamak.",
    metrics: [
      { label: "Rapora harcanan süre", value: "2 gün → saatler" },
      { label: "Rapor gecikmesi", value: "Yok" },
    ],
  },
  {
    slug: "sirket-ici-bilgi",
    name: "Şirket içi bilgi",
    title: "Aynı soruların yanıtını bir asistana devretmek",
    summary:
      "Prosedürler ve dokümanlar üzerinden kaynak göstererek yanıt veren bir şirket içi asistan.",
    areas: ["Süreç iyileştirme", "Yönetişim ve ölçüm"],
    sector: "Üretim ve kalite",
    duration: "Pilot: 4–6 hafta",
    featured: true,
    coverImage: unsplash("1556742049-0cfed4f6a45d"),
    situation:
      "Kalite ve operasyon ekipleri gün içinde sürekli aynı soruları yanıtlıyor: hangi prosedür, hangi form, hangi sürüm. Yeni gelenlerin işe alışması aylar sürüyor.",
    approach:
      "Doküman ve prosedürleri düzenliyor, yalnızca bu kaynaklardan ve kaynağını göstererek yanıt veren bir asistan kuruyoruz. Kimin hangi dokümana erişebileceğini yetki yapısıyla belirliyoruz.",
    goal: "Uzman ekibin bölünen zamanını geri kazanmak ve yeni çalışanların işe alışmasını hızlandırmak.",
    metrics: [
      { label: "Tekrarlayan soru sayısı", value: "Azalış" },
      { label: "İşe alışma süresi", value: "Kısalma" },
    ],
  },
  {
    slug: "siparis-isleme",
    name: "Sipariş işleme",
    title: "E-postayla gelen siparişleri elle girmeyi bırakmak",
    summary:
      "Farklı formatlarda gelen sipariş e-postalarını okuyup ERP'ye hazırlayan, emin olmadığında soran bir akış.",
    areas: ["Süreç iyileştirme"],
    sector: "Toptan ve perakende",
    duration: "Pilot: 4–6 hafta",
    featured: true,
    coverImage: unsplash("1495474472287-4d71bcdd2085"),
    situation:
      "Siparişler e-posta, PDF ve Excel olarak geliyor. İki kişi gün boyu bunları ERP'ye elle giriyor; yoğun dönemlerde hata ve gecikme artıyor.",
    approach:
      "Gelen siparişleri okuyan, ürün kodlarını eşleştiren ve ERP'ye taslak olarak hazırlayan bir akış kuruyoruz. Emin olmadığı her satırı bir insana onaya gönderiyor.",
    goal: "Elle veri girişini azaltmak, hatayı düşürmek ve ekibi müşteriyle ilgilenmeye ayırmak.",
    metrics: [
      { label: "Elle girilen sipariş", value: "Azalış" },
      { label: "Hatalı kayıt", value: "Azalış" },
      { label: "Sipariş işleme süresi", value: "Kısalma" },
    ],
  },
  {
    slug: "ai-kullanim-politikasi",
    name: "AI kullanım kuralları",
    title: "Herkesin kendi bildiği gibi kullandığı yapay zekâya kural koymak",
    summary:
      "Tek sayfalık kullanım politikası, onaylı araçlar ve kullanımın gerçekten değer üretip üretmediğini gösteren basit ölçüler.",
    areas: ["Yönetişim ve ölçüm"],
    sector: "Her sektör",
    duration: "Teşhisle birlikte: 1 hafta",
    featured: true,
    coverImage: unsplash("1565043666747-69f6646db940"),
    situation:
      "Ekipte birçok kişi yapay zekâ araçlarını kişisel hesaplarla kullanıyor. Müşteri verisinin nereye gittiği belli değil, kimin ne kazandığı da bilinmiyor.",
    approach:
      "Onaylı araçları, hiçbir araca girmeyecek verileri, onay adımlarını ve bir sorun çıktığında izlenecek yolu tek sayfada topluyoruz. Kullanımı ve iş sonucunu ayrı ayrı ölçen basit bir takip kuruyoruz.",
    goal: "Veri riskini kapatmak ve yapay zekâ kullanımının hangi işte gerçekten değer ürettiğini görmek.",
    metrics: [
      { label: "Onaysız araç kullanımı", value: "Kapatılır" },
      { label: "Benimseme ve değer", value: "Ayrı ölçülür" },
    ],
  },
];

// Süreç iyileştirme giriş kapısı olduğu için süreç senaryoları önce gelir.
const featuredOrder = ["siparis-isleme", "ay-sonu-raporu", "sirket-ici-bilgi", "teklif-hazirlama", "yeni-musteri-bulma", "ai-kullanim-politikasi"];
export const featuredScenarios = scenarios
  .filter((s) => s.featured)
  .sort((a, b) => featuredOrder.indexOf(a.slug) - featuredOrder.indexOf(b.slug));
export const scenarioAreas: ServiceArea[] = [
  "Satış ve pazarlama",
  "Süreç iyileştirme",
  "Yönetişim ve ölçüm",
];
export const scenarioSectors = Array.from(new Set(scenarios.map((s) => s.sector))).sort((a, b) =>
  a.localeCompare(b, "tr")
);
