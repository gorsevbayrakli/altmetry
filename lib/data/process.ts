export interface ProcessStep {
  letter: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const processFrameworkName = "SCALE yöntemi";

export const processSteps: ProcessStep[] = [
  {
    letter: "S",
    number: "01",
    title: "Dinle",
    subtitle: "Signal",
    description:
      "Ekiple birebir görüşüyoruz. Süreçleri, verileri ve kullanılan araçları inceliyor, zamanın gerçekte nereye gittiğini buluyoruz.",
  },
  {
    letter: "C",
    number: "02",
    title: "Önceliklendir",
    subtitle: "Calibrate",
    description:
      "Etkisi en yüksek 2–3 fırsatı seçiyor, her biri için başarı ölçüsünü baştan belirliyoruz.",
  },
  {
    letter: "A",
    number: "03",
    title: "Kur",
    subtitle: "Assemble",
    description:
      "Tek bir süreçte çalışan bir pilot kuruyoruz. Mevcut araçlarınızla, ekibinizin içinde.",
  },
  {
    letter: "L",
    number: "04",
    title: "Devreye al",
    subtitle: "Launch",
    description:
      "Pilotu gerçek işte çalıştırıyor, nerede aksadığını izliyor, düzeltiyoruz. Ekibi eğitiyor, kuralları yazıyoruz.",
  },
  {
    letter: "E",
    number: "05",
    title: "Büyüt",
    subtitle: "Expand",
    description:
      "Sayıları baştaki ölçüyle karşılaştırıyoruz. İşe yarayanı diğer ekiplere ve süreçlere taşıyoruz.",
  },
];
