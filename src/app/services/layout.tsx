import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Travel Design Services",
  description: "Explore AW GOTRAVEL professional research, itinerary design, and lifestyle coordination services.",
  alternates: { canonical: "/services" },
};

export default function SectionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
