import Link from "next/link";
import { Logo } from "./Logo";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund & Cancellation Policy" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Logo light className="mb-6" />
            <p className="text-white/50 text-sm leading-relaxed mb-4 font-light">
              A private travel design and lifestyle coordination firm for
              founders, executives, and high-profile clients.
            </p>
            <p className="text-white/30 text-xs mb-6 font-light">
              Registered LLC - Wyoming, USA
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:sales@awgotravel.com"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                sales@awgotravel.com
              </a>
              <a href="tel:+14099953371" className="flex items-center gap-3 text-white/70 text-sm hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                +1 409 995-3371
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Wyoming, United States</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} AW GOTRAVEL LLC. All rights
            reserved. Registered in Wyoming, USA.
          </p>
          <div className="flex gap-6 text-white/50 text-xs">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
