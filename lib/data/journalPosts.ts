import { unsplash } from "@/lib/utils";
import type { ServiceArea } from "@/lib/data/services";

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: ServiceArea;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  content: string[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "kullanmak-ve-deger-almak",
    title: "“Yapay zekâ kullanıyoruz” ile “yapay zekâdan değer alıyoruz” arasındaki fark",
    excerpt:
      "Ekibin yüzde kaçının yapay zekâ kullandığı tek başına bir şey söylemiyor. Benimsemeyi değerden ayırmadan sonuç görünmüyor.",
    category: "Yönetişim ve ölçüm",
    author: "Altmetry",
    date: "2026-11-12",
    readTime: "5 dk okuma",
    coverImage: unsplash("1531973576160-7125cd663d86"),
    content: [
      "“Ekibimizin %80'i yapay zekâ kullanıyor” güzel bir cümle. Ama o işlerin daha hızlı, daha ucuz ya da daha iyi yapılıp yapılmadığını söylemiyor.",
      "Büyük bir ekibin yapay zekâ dönüşümünü yönetirken öğrendiğimiz ilk şey şu oldu: insanların “kullanıyorum” demesi ile kullanım verisinin gösterdiği çoğu zaman farklıdır. İkinci şey: kullanmak her zaman değer üretmek anlamına gelmez.",
      "Bu yüzden iki şeyi ayrı ölçüyoruz. Benimseme: kim, ne sıklıkla, hangi işte kullanıyor? Değer: o iş daha hızlı, daha ucuz ya da daha iyi mi oldu? O dönüşümde ölçtüğümüz %40 net verimlilik artışını ancak bu ikisini ayırdıktan sonra görebildik.",
      "Bir KOBİ için başlangıçta üç ölçü yeter: seçilen işte harcanan süre, o işin hata ya da geri dönüş oranı ve ekibin aracı haftada kaç gün kullandığı. Üçü birlikte okunduğunda yapay zekânın nerede gerçekten işe yaradığı görünür.",
    ],
  },
  {
    slug: "teklif-hazirliginda-yapay-zeka",
    title: "Teklif hazırlığına yapay zekâ: en değerli veriniz geçmiş teklifleriniz",
    excerpt:
      "Bir teklifin büyük kısmı önceki tekliflerde zaten yazılmış durumda. Zaman yeniyi yazmaya değil, eskiyi bulup uyarlamaya gidiyor.",
    category: "Satış ve pazarlama",
    author: "Altmetry",
    date: "2026-11-05",
    readTime: "4 dk okuma",
    coverImage: unsplash("1553877522-43269d4ea984"),
    content: [
      "Yıllarca kurumsal projeler için RFP yanıtları ve teklifler hazırladık; üç ülkede, üç ayrı ofisle. Gördüğümüz şey şuydu: firma tanıtımı, referans kurgusu, kapsam maddeleri ve şartlar her teklifte büyük ölçüde tekrar ediyor.",
      "Zaman yeni bir şey yazmaya gitmiyor. Doğru eski dosyayı bulmaya, kopyalamaya, güncel olmayan kısmı fark etmeye ve biçimi düzeltmeye gidiyor.",
      "Yapay zekânın KOBİ'ler için en hızlı karşılık verdiği yerlerden biri bu. Geçmiş tekliflerden beslenen bir asistan müşteri talebini okuyup ilk taslağı çıkarır. Fiyat, özel şartlar ve son kontrol insanda kalır.",
      "Başlamak için önce kütüphane gerekir: son iki yılın tekliflerini tek bir yerde, düzenli ve güncel tutmak. Asistan ancak beslendiği kaynak kadar iyidir.",
    ],
  },
  {
    slug: "tek-sayfalik-ai-politikasi",
    title: "AI kullanım politikası: 10 kişilik şirket için tek sayfa",
    excerpt:
      "Küçük bir şirketin 40 sayfalık bir yönetmeliğe ihtiyacı yok. Dört soruya net cevap vermesi yeter.",
    category: "Yönetişim ve ölçüm",
    author: "Altmetry",
    date: "2026-10-29",
    readTime: "3 dk okuma",
    coverImage: unsplash("1461749280684-dccba630e2f6"),
    content: [
      "Ekibinizde birileri büyük ihtimalle yapay zekâ araçlarını kişisel hesaplarıyla kullanıyor. Bu kendi başına sorun değil. Sorun, müşteri verisinin nereye gittiğini kimsenin bilmemesi.",
      "Tek sayfalık bir politika dört soruya cevap verir. Hangi araçlar onaylı? Hangi veri hiçbir araca girmez (müşteri kişisel verisi, fiyat listeleri, sözleşmeler)? Bir yapay zekâ ajanı neye dokunabilir ve kim onaylar? Bir şey ters giderse kime haber verilir?",
      "Yetkiyi bir aç/kapa düğmesi olarak düşünmüyoruz. Bir ajanın yalnızca okuyabildiği, taslak hazırlayabildiği ve gerçekten işlem yapabildiği alanlar ayrıdır. Her basamakta onaylayan kişi bellidir.",
      "Politika yazıldıktan sonra ekiple birlikte bir kez okunmalı ve üç ayda bir güncellenmeli. Araçlar hızla değişiyor; kurallar da onlarla birlikte değişmeli.",
    ],
  },
];
