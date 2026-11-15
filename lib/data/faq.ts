export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Şirketimiz küçük. Yapay zekâ bize göre mi?",
    answer:
      "Küçük ekiplerde etki daha hızlı görünür, çünkü bir kişinin haftada kazandığı 5 saat tüm ekibe yansır. Başlamak için büyük bir bütçe ya da veri ekibi gerekmez.",
  },
  {
    question: "Teknik ekibimiz yok. Sorun olur mu?",
    answer:
      "Olmaz. Kurulumu biz yapıyoruz, ekibinizi araçları tek başına kullanacak kadar eğitiyoruz. Gerekirse yarı zamanlı teknoloji liderliğini de üstleniyoruz.",
  },
  {
    question: "Verilerimiz güvende mi?",
    answer:
      "Hangi verinin hangi araca gideceğini ve hangisinin şirket dışına çıkmayacağını işe başlamadan yazılı olarak belirliyoruz. KVKK'ya uygun kurgu temel şartımız.",
  },
  {
    question: "Ne kadar sürede sonuç görürüz?",
    answer:
      "Teşhis 1 hafta, ilk pilot 4–6 hafta sürer. Pilotun sonunda, başta belirlediğimiz ölçüyle karşılaştırılmış bir sonucunuz olur.",
  },
  {
    question: "Hangi araçları kullanıyorsunuz?",
    answer:
      "Belirli bir araca bağlı değiliz. Önce mevcut sistemlerinizi kullanıyoruz: ERP, CRM, e-posta, ortak klasörler. Yeni araç ancak gerçekten gerekiyorsa gelir.",
  },
  {
    question: "Ekibim işini kaybeder mi?",
    answer:
      "Amacımız insanları tekrar eden işten kurtarıp müşteriye, satışa ve karar vermeye ayırdıkları zamanı artırmak. Önceki deneyimimizde gördüğümüz verimlilik artışı ekibi küçültmeden, aynı ekiple daha fazla iş yapılarak geldi.",
  },
  {
    question: "Fiyatlandırma nasıl?",
    answer:
      "Teşhis ve pilot sabit fiyatlıdır. AI Ortaklığı aylık ücretlidir. Ön görüşmeden sonra size hangi modelin uyduğunu söylüyoruz.",
  },
  {
    question: "İki kişilik bir ekiple nasıl çalışıyorsunuz?",
    answer:
      "Kurucular her projede doğrudan çalışır. Gerektiğinde güvendiğimiz uzmanlardan oluşan bir ağ devreye girer. Kimin çalışacağını baştan söyleriz.",
  },
];
