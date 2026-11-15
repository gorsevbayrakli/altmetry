import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import HomeMotion from "@/components/home/HomeMotion";

const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Altmetry · Elle yapılan işi yapay zekâya devredin",
  description:
    "Altmetry, 20–250 kişilik firmaların sipariş girişi, teklif hazırlama ve raporlama gibi tekrar eden işlerini yapay zekâyla otomatikleştirir. Bir hafta teşhis, 4–6 hafta pilot; son karar her zaman sizde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${mona.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Hareket azaltma kapalıysa animasyonlu öğeler ilk boyamadan gizli başlasın. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion')}",
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-dark-deep text-dark-ink">
        <SmoothScrollProvider>
          <HomeMotion />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
