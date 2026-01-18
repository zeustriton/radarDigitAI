import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radar DigitAI - Propuestas Tecnológicas Electorales - Elecciones Perú 2026",
  description: "Análisis técnico de las propuestas tecnológicas y de Inteligencia Artificial en los planes de gobierno para las elecciones presidenciales de Perú 2026. Plataforma informativa independiente.",
  keywords: ["Elecciones Perú 2026", "Propuestas Tecnológicas", "Inteligencia Artificial", "IA", "Planes de Gobierno", "Tecnología Digital", "Análisis Técnico", "Perú", "Tecnología Electoral"],
  authors: [{ name: "Radar DigitAI" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Radar DigitAI - Propuestas Tecnológicas Electorales",
    description: "Análisis técnico de propuestas tecnológicas y de IA para elecciones Perú 2026",
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radar DigitAI - Propuestas Tecnológicas Electorales",
    description: "Análisis técnico de propuestas tecnológicas y de IA para elecciones Perú 2026",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
