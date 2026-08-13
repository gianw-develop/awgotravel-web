import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AW GOTRAVEL | Private Travel Design",
  description:
    "AW GOTRAVEL is a private travel design and lifestyle coordination firm for founders, executives, investors, and high-profile clients. We design private journeys around your lifestyle.",
  icons: {
    icon: "/awgotravel-mark.png",
    apple: "/awgotravel-mark.png",
  },
  keywords: [
    "private travel design",
    "luxury travel coordination",
    "executive travel planning",
    "lifestyle concierge",
    "AW GOTRAVEL",
    "bespoke travel experiences",
  ],
  openGraph: {
    title: "AW GOTRAVEL | Private Travel Design",
    description:
      "Private travel design and lifestyle coordination for people who prefer a considered way to move.",
    url: "https://www.awgotravel.com",
    siteName: "AW GOTRAVEL",
    type: "website",
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
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
