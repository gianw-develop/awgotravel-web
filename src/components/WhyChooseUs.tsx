"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Check, Lock, Clock, ShieldCheck, Fingerprint } from "lucide-react";
import Link from "next/link";

const reasons = [
  "Registered LLC — Wyoming, United States",
  "All services designed and delivered directly by our team",
  "Transparent pricing with clear scope documentation",
  "Strict confidentiality — your itinerary is never shared",
  "Dedicated travel director assigned to every engagement",
  "Secure payments with full cancellation and refund policies",
];

export function WhyChooseUs() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/1507525428034-b723cf961d3e.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-navy/92" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase">
              Why AW GOTRAVEL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mt-4 mb-6 tracking-tight">
              Not a Travel Agency.
              <br />
              <span className="font-medium">A Private Travel Design Firm.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
              AW GOTRAVEL LLC is a registered company providing personalized
              travel design, itinerary coordination, destination research, and
              concierge-style support for premium clients. Every service is
              performed directly by our team.
            </p>
            <ul className="space-y-4 mb-10">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm font-light">{reason}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-medium px-10 py-4 rounded-full transition-all duration-300 text-xs uppercase tracking-[0.3em]"
            >
              About the Firm
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Lock,
                  title: "Privacy",
                  desc: "Your journey stays private",
                },
                {
                  icon: Clock,
                  title: "Precision",
                  desc: "Every detail engineered",
                },
                {
                  icon: Fingerprint,
                  title: "Access",
                  desc: "Experiences you can't Google",
                },
                {
                  icon: ShieldCheck,
                  title: "Trust",
                  desc: "Registered & fully compliant",
                },
              ].map((stat) => (
                <div
                  key={stat.title}
                  className="glass-card rounded-2xl p-8 text-center hover:bg-white/12 transition-all duration-300"
                >
                  <stat.icon className="w-7 h-7 text-gold mx-auto mb-4" />
                  <div className="text-lg font-medium text-white mb-1 tracking-tight">
                    {stat.title}
                  </div>
                  <div className="text-white/40 text-xs font-light">{stat.desc}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
