import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wamiti Foundation | Touching Lives, Growing Hope",
  description:
    "Wamiti Foundation is dedicated to transforming communities across Shinoyi Shikomari and beyond through sustainable projects, tree planting, and grassroots development.",
  keywords: "Wamiti Foundation, Shinoyi, Shikomari, community, Kenya, NGO, development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
