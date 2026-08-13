import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LegacyAccessLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
