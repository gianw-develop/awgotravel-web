import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
}

export function Logo({ className = "", variant = "full" }: LogoProps) {
  if (variant === "icon") {
    return <Image src="/awgotravel-mark.png" alt="AW GOTRAVEL" width={96} height={96} className={`object-contain ${className}`} />;
  }

  return <Image src="/awgotravel-logo.png" alt="AW GOTRAVEL — Private Travel Design" width={2048} height={682} priority className={`h-auto w-[154px] object-contain sm:w-[184px] ${className}`} />;
}