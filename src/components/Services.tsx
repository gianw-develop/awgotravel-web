"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Compass, Briefcase, Crown, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Compass,
    title: "Founder Escape Design",
    price: "$1,500",
    description:
      "For founders and executives who need to disconnect without losing control. A private, high-level escape designed around your pace — not a vacation, a strategic reset.",
    includes: [
      "Private destination strategy",
      "Premium accommodation",
      "Workspace-ready environments",
      "Wellness & dining curation",
    ],
  },
  {
    icon: Briefcase,
    title: "Executive Lifestyle Journey",
    price: "$2,500",
    description:
      "Business meets leisure. Designed for networking trips, conferences, private meetings, or premium vacations where every hour matters.",
    includes: [
      "Full itinerary design",
      "Transfer and accommodation research",
      "Private dining coordination",
      "Flexible agenda management",
    ],
  },
  {
    icon: Crown,
    title: "Private Luxury Experience",
    price: "$4,000",
    description:
      "High-level private experiences — celebrations, family office travel, wellness retreats, villas, yachts, and exclusive access to events, art, and culture.",
    includes: [
      "End-to-end experience design",
      "Premium provider coordination",
      "Concierge support throughout",
      "Full change management",
    ],
  },
  {
    icon: Lock,
    title: "Ultra-Private Bespoke Travel",
    price: "By Application",
    description:
      "For complex, multi-country, high-security, or ultra-private journeys. Jets, villas, staff, private events, and sensitive logistics handled with absolute discretion.",
    includes: [
      "Custom scope & planning",
      "Multi-destination coordination",
      "Private security logistics",
      "Dedicated travel director",
    ],
  },
];

export function Services() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase">
            What We Design
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-navy mt-4 mb-5 tracking-tight">
            Your Journey Is Not Booked.{" "}
            <span className="font-medium">It Is Designed.</span>
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We don&apos;t sell travel inventory. We design private journeys
            experiences for clients who value time, privacy, and precision.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100}>
              <div className="group p-8 sm:p-10 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-500 bg-white h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <span className="text-gold font-medium text-sm tracking-wide">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-navy mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-6 font-light flex-1">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-navy/70"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold font-medium text-xs uppercase tracking-[0.2em] hover:gap-3 transition-all duration-300"
                >
                  {service.price === "By Application"
                    ? "Request Access"
                    : "Begin Planning"}{" "}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-navy hover:bg-navy text-navy hover:text-white font-medium px-10 py-4 rounded-full transition-all duration-300 text-xs uppercase tracking-[0.3em]"
          >
            View All Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
