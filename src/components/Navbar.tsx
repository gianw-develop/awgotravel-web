"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "/about", label: "Philosophy" },
  { href: "/destinations", label: "The Process" },
  { href: "/services", label: "Practice" },
  { href: "/contact", label: "Inquiry" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/70 backdrop-blur-md">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="AW GOTRAVEL home" onClick={() => setOpen(false)}><Logo /></Link>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:text-gold">{link.label}</Link>)}
          <Link href="/contact" className="border border-gold/70 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold transition hover:bg-gold hover:text-navy">Request a consultation</Link>
        </div>
        <button className="p-2 text-white lg:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-navy px-5 py-5 lg:hidden"><div className="grid gap-4">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-2 text-sm uppercase tracking-[0.15em] text-white/85">{link.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="mt-2 bg-gold px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-navy">Request a consultation</Link></div></div>}
    </header>
  );
}