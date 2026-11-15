import { unsplash } from "@/lib/utils";

export type ServiceArea = "Satış ve pazarlama" | "Süreç iyileştirme" | "Yönetişim ve ölçüm";

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServicePillar {
  number: string;
  slug: string;
  name: ServiceArea;
  description: string;
  intro: string;
  tags: string[];
  items: ServiceItem[];
  images: string[];
}

export const services: ServicePillar[] = [
  {
    number: "01",
    slug: "surec-iyilestirme",
    name: "Süreç iyileştirme",
    description:
      "Ekibin zamanını yiyen tekrar eden işleri ölçmek ve yapay zekâyla yeniden kurmak.",
    intro:
      "Yeni bir sisteme geçmenizi istemiyoruz. Mevcut araçlarınızın arasındaki elle yapılan işi azaltıyoruz.",
    tags: [
      "Süreç haritalama",
      "Doküman ve veri girişi otomasyonu",
      "Şirket içi bilgi asistanı",
      "ERP ve CRM entegrasyonu",
      "Otomatik raporlama",
    ],
    items: [
      {
        title: "Süreç haritası",
        description:
          "Ekiple birlikte zamanın nereye gittiğini ve hangi işin tekrar ettiğini çıkarıyoruz.",
      },
      {
        title: "Otomasyon",
        description:
          "Veri girişi, doküman hazırlama, e-posta sınıflandırma, sipariş ve talep takibi.",
      },
      {
        title: "Şirket içi bilgi asistanı",
        description:
          "Prosedürleriniz, ürün bilgileriniz ve dokümanlarınız üzerinden soru yanıtlayan asistanlar.",
      },
      {
        title: "Entegrasyon",
        description:
          "ERP, CRM, e-posta ve ortak klasörlerle bağlantı. Yeni bir sisteme geçmeniz gerekmez.",
      },
      {
        title: "Yönetim panoları",
        description: "Ay sonunu beklemeden güncel kalan raporlar.",
      },
    ],
    images: [
      unsplash("1461749280684-dccba630e2f6", 800),
      unsplash("1518770660439-4636190af475", 800),
      unsplash("1531973576160-7125cd663d86", 800),
    ],
  },
  {
    number: "02",
    slug: "satis-pazarlama",
    name: "Satış ve pazarlama",
    description:
      "Doğru müşteriyi bulmak, ona doğru mesajla ulaşmak ve teklifi hızlı çıkarmak.",
    intro:
      "Yapay zekâ satışta en hızlı karşılığını veren alan, çünkü sonucu doğrudan ölçülüyor: görüşme, teklif ve kapanış.",
    tags: [
      "İdeal müşteri profili",
      "Hedef liste",
      "Kişiselleştirilmiş ulaşma",
      "Teklif ve RFP asistanı",
      "CRM ve lead skorlama",
      "İçerik üretim sistemi",
    ],
    items: [
      {
        title: "İdeal müşteri profili ve hedef liste",
        description:
          "Mevcut müşterilerinizden en iyi profili çıkarıyor, buna uyan firmaları ve karar vericileri buluyoruz.",
      },
      {
        title: "Kişiselleştirilmiş ulaşma",
        description:
          "Her firmaya kendi gündemine göre yazılmış e-posta ve LinkedIn akışları kuruyoruz. Tek kalıp mesaj göndermiyoruz.",
      },
      {
        title: "Teklif ve RFP asistanı",
        description:
          "Geçmiş tekliflerinizden beslenen şablonlar ve asistanlar kuruyoruz. Günler süren teklif hazırlığı saatlere iner.",
      },
      {
        title: "CRM ve veri kalitesi",
        description:
          "Kayıtları temizliyor, zenginleştiriyor, lead skorlama ve satış raporlarını otomatikleştiriyoruz.",
      },
      {
        title: "İçerik sistemi",
        description:
          "LinkedIn, blog, broşür ve sunumlar için markanızın sesini koruyan, çok dilli bir üretim akışı kuruyoruz.",
      },
      {
        title: "Web ve görünürlük",
        description:
          "Site hızı, SEO ve ChatGPT gibi yapay zekâ aramalarında bulunur olmak.",
      },
    ],
    images: [
      unsplash("1552664730-d307ca884978", 800),
      unsplash("1553877522-43269d4ea984", 800),
      unsplash("1504384308090-c894fdcc538d", 800),
    ],
  },
  {
    number: "03",
    slug: "yonetisim-olcum",
    name: "Yönetişim ve ölçüm",
    description:
      "Yapay zekânın güvenli, kurallı ve ölçülebilir çalışması. Diğer iki alanın temeli.",
    intro:
      "Ekibin “kullanıyoruz” demesi ile kullanım verisinin gösterdiği çoğu zaman farklıdır. İkisini de ölçüyoruz.",
    tags: [
      "AI kullanım politikası",
      "Yetki ve onay yapısı",
      "KVKK ve veri güvenliği",
      "Benimseme ve değer ölçümü",
      "Ekip eğitimi",
    ],
    items: [
      {
        title: "AI kullanım politikası",
        description: "Kim, hangi araçla, hangi veriyi kullanabilir?",
      },
      {
        title: "Yetki yapısı",
        description:
          "Bir yapay zekâ ajanının neye dokunabileceği, kimin onaylayacağı ve neyin teslim sayılacağı. Bunu bir aç/kapa düğmesi olarak görmüyor, bir güven yapısı olarak tasarlıyoruz.",
      },
      {
        title: "Ölçüm",
        description:
          "Benimsemeyi değerden ayırıyoruz: kim, ne sıklıkla kullanıyor ve o iş gerçekten hızlandı mı?",
      },
      {
        title: "KVKK ve veri güvenliği",
        description: "Hangi verinin şirket dışına çıkmayacağını baştan, yazılı olarak belirliyoruz.",
      },
      {
        title: "Eğitim",
        description: "Ekibin araçları tek başına kullanabilmesi için uygulamalı oturumlar.",
      },
    ],
    images: [
      unsplash("1522202176988-66273c2fd55f", 800),
      unsplash("1600880292203-757bb62b4baf", 800),
      unsplash("1522071820081-009f0129c71c", 800),
    ],
  }
];

export interface EngagementModel {
  name: string;
  duration: string;
  description: string;
}

export const engagementModels: EngagementModel[] = [
  {
    name: "AI Hazırlık Teşhisi",
    duration: "1 hafta",
    description:
      "Ekip görüşmeleri, süreç ve veri incelemesi, öncelikli 3 fırsat, her biri için ölçü ve yol haritası.",
  },
  {
    name: "Pilot",
    duration: "4–6 hafta",
    description:
      "Tek bir süreçte gerçek işte çalışan çözüm, ekip eğitimi ve önce/sonra karşılaştırması.",
  },
  {
    name: "AI Ortaklığı",
    duration: "Aylık",
    description:
      "Yarı zamanlı yapay zekâ ve teknoloji liderliği: yeni süreçlere yaygınlaştırma, ölçüm, kurallar ve ekip desteği.",
  },
];
