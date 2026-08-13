"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  light?: boolean;
}

export function Logo({ className = "", variant = "full", light = false }: LogoProps) {
  const textColor = light ? "#FFFFFF" : "#0B1D3A";

  if (variant === "icon") {
    return (
      <Image src="/favicon.png" alt="AW GOTRAVEL" width={40} height={40} sizes="40px" className={`w-10 h-10 object-contain ${className}`} />
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image src="/favicon.png" alt="AW GOTRAVEL" width={48} height={48} sizes="(max-width: 640px) 40px, 48px" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
      <div className="flex flex-col">
        <span
          className="text-lg sm:text-xl font-medium tracking-[0.15em] leading-tight"
          style={{ color: textColor, fontFamily: "var(--font-heading)" }}
        >
          AW <span style={{ color: "#C9A84C" }}>GO</span>TRAVEL
        </span>
        <span
          className="text-[7px] sm:text-[8px] tracking-[0.35em] uppercase font-medium"
          style={{ color: light ? "rgba(255,255,255,0.6)" : "#64748B", fontFamily: "var(--font-sans)" }}
        >
          Private Travel Design
        </span>
      </div>
    </div>
  );
}
