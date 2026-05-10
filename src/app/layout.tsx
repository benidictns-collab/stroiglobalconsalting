import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Стройглобалконсалтинг — Инновационный EPC-подрядчик",
  description:
    "ООО «Стройглобалконсалтинг» — инновационный российский EPC-подрядчик. Строительство магистральных трубопроводов, сварочное производство, полный цикл управления проектами.",
  keywords: [
    "Стройглобалконсалтинг",
    "СГК",
    "EPC",
    "трубопровод",
    "сварка",
    "строительство",
  ],
  authors: [{ name: "ООО Стройглобалконсалтинг" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
