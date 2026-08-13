import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><Logo className="mb-5" /><p className="max-w-xs text-sm leading-6 text-white/60">Private travel design and lifestyle coordination, shaped with discretion and intention.</p></div>
        <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Navigate</p><div className="grid gap-3 text-sm text-white/65"><Link href="/about" className="hover:text-gold">Philosophy</Link><Link href="/destinations" className="hover:text-gold">The process</Link><Link href="/services" className="hover:text-gold">Practice</Link><Link href="/contact" className="hover:text-gold">Private inquiry</Link></div></div>
        <div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Contact</p><a href="mailto:sales@awgotravel.com" className="mb-3 flex items-center gap-3 text-sm text-white/65 hover:text-gold"><Mail size={15} />sales@awgotravel.com</a><a href="tel:+14099953371" className="flex items-center gap-3 text-sm text-white/65 hover:text-gold"><Phone size={15} />+1 409 995-3371</a></div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[10px] uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8"><span>© {new Date().getFullYear()} AW GOTRAVEL LLC</span><div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refund-policy">Service policy</Link></div></div></div>
    </footer>
  );
}