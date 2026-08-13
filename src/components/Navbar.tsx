"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          <Logo light />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 text-white hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-sm font-medium tracking-wide uppercase transition-colors duration-300 text-white hover:text-gold"
          >
            Client Portal
          </Link>
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-dark text-navy font-medium text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg uppercase tracking-[0.15em]"
          >
            Inquire
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white text-lg font-medium tracking-wide py-2 border-b border-white/10 hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block text-white text-lg font-medium tracking-wide py-2 border-b border-white/10 hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Client Portal
            </Link>
            <Link
              href="/contact"
              className="block text-center bg-gold hover:bg-gold-dark text-navy font-medium py-3 rounded-full mt-4 uppercase tracking-[0.2em] text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inquire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
