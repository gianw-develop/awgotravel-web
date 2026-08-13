import Link from "next/link";
import { Logo } from "./Logo";
import { MapPin, Phone, Mail } from "lucide-react";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIcons = [FacebookIcon, InstagramIcon, XIcon];

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
              Registered LLC — Wyoming, USA
            </p>
            <div className="flex gap-4">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
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
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                Available upon request
              </div>
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
