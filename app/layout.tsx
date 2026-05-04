import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yarl Table Toppers — Jaffna's Tabletop Community",
  description:
    "Play, connect, and strategize. The official hub for Jaffna's fastest-growing board game community in Sri Lanka.",
  keywords: [
    "board games",
    "Jaffna",
    "Sri Lanka",
    "tabletop",
    "Catan",
    "community",
    "Yarl",
  ],
  openGraph: {
    title: "Yarl Table Toppers",
    description: "The official hub for Jaffna's tabletop community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
