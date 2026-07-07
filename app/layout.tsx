import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Near Me Interiors | Premium Digital Marketing Agency for Interior Designers",
  description: "Near Me Interiors is a luxury-grade digital marketing agency helping interior designers and architects attract elite clients through high-performance SEO, Google Ads, Meta Ads, and bespoke web designs.",
  keywords: "interior design marketing, marketing for interior designers, SEO for interior designers, luxury interior design marketing agency, web design for architects",
  authors: [{ name: "Near Me Interiors Team" }],
  openGraph: {
    title: "Near Me Interiors | Premium Digital Marketing Agency for Interior Designers",
    description: "Attract elite residential and commercial clients. Bespoke growth marketing engineered for interior design studios.",
    type: "website",
    locale: "en_US",
    url: "https://auraarch.agency",
    siteName: "Near Me Interiors Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Near Me Interiors | Premium Digital Marketing Agency for Interior Designers",
    description: "Attract elite residential and commercial clients. Bespoke growth marketing engineered for interior design studios.",
  },
  metadataBase: new URL("https://auraarch.agency"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
