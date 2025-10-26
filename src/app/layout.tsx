import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "Al Thuraya Abayas | Virtual Stylist Agent",
  description:
    "Discover bespoke abaya styling with Al Thuraya's virtual stylist agent. Explore curated collections, fabric stories, and personalized recommendations.",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: "Al Thuraya Abayas",
    description:
      "Discover bespoke abaya styling with Al Thuraya's virtual stylist agent.",
    url: "https://agentic-5aa9bf76.vercel.app",
    siteName: "Al Thuraya Abayas",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Thuraya Abayas",
    description:
      "Discover bespoke abaya styling with Al Thuraya's virtual stylist agent."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
