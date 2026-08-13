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
  metadataBase: new URL("https://www.awgotravel.com"),
  title: {
    default: "AW GOTRAVEL | Private Travel Design",
    template: "%s | AW GOTRAVEL",
  },
  description:
    "Private travel design and lifestyle coordination for founders, executives, investors, and high-profile clients.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "private travel design",
    "luxury travel coordination",
    "executive travel planning",
    "lifestyle coordination",
    "AW GOTRAVEL",
    "bespoke travel experiences",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "AW GOTRAVEL | Private Travel Design",
    description:
      "We design private journeys around your lifestyle. AW GOTRAVEL does not sell flights, rooms, tickets, or packages.",
    url: "/",
    siteName: "AW GOTRAVEL",
    images: [{ url: "/favicon.png", width: 512, height: 512, alt: "AW GOTRAVEL" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AW GOTRAVEL | Private Travel Design",
    description: "Private travel design and lifestyle coordination.",
    images: ["/favicon.png"],
  },
  robots: { index: true, follow: true },
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
