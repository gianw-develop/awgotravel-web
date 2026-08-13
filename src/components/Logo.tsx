import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
}

export function Logo({ className = "", variant = "full" }: LogoProps) {
  if (variant === "icon") {
    return <Image src="/awgotravel-mark.png" alt="AW GOTRAVEL" width={96} height={96} className={`object-contain ${className}`} />;
  }

  return (
    <Image
      src="/awgotravel-logo-transparent.png"
      alt="AW GOTRAVEL - Private Travel Design"
      width={1817}
      height={279}
      priority
      className={`h-auto w-[174px] object-contain sm:w-[210px] ${className}`}
    />
  );
}
