import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AW GOTRAVEL",
  description: "Learn how AW GOTRAVEL approaches private travel design, research, and lifestyle coordination.",
  alternates: { canonical: "/about" },
};

export default function SectionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
