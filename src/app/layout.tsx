import type { Metadata } from "next";
import { Bodoni_Moda, Work_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wamiti Foundation | Touching Lives, Growing Hope",
  description: "Wamiti Foundation is dedicated to transforming communities across Shinoyi Shikomari and beyond through sustainable projects, tree planting, and grassroots development.",
  keywords: "Wamiti Foundation, Shinoyi, Shikomari, community, Kenya, NGO, development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodoni.variable} ${workSans.variable} ${nunitoSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
