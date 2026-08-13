import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Design Inspiration",
  description: "Explore destination inspiration for private journeys designed around your interests, pace, and priorities.",
  alternates: { canonical: "/destinations" },
};

export default function SectionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
