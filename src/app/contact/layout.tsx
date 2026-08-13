import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Inquiry",
  description: "Contact AW GOTRAVEL to begin a private travel design and lifestyle coordination conversation.",
  alternates: { canonical: "/contact" },
};

export default function SectionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
