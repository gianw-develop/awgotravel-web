import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AW GOTRAVEL | Private Travel Design & Lifestyle Coordination",
  description:
    "AW GOTRAVEL is a private travel design and lifestyle coordination firm for founders, executives, investors, and high-profile clients. We design private journeys around your lifestyle.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
    title: "AW GOTRAVEL | Private Travel Design & Lifestyle Coordination",
    description:
      "Private travel design for founders, executives & high-profile clients. We don't sell trips — we design private journeys around your lifestyle.",
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
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
