// app/layout.tsx
import type { Metadata } from "next";
import { Vazirmatn, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
});

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-nastaliq",
});

export const metadata: Metadata = {
  title: "دعوتنامه شب یلدا - Homeenger",
  description: "دعوت به مهمانی شب یلدا توسط هومنگر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} ${nastaliq.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
