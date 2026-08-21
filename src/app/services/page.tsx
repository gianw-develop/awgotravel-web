"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Compass,
  Briefcase,
  Crown,
  Lock,
  ArrowRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Compass,
    title: "Founder Escape Design",
    price: "$1,500",
    tagline: "Strategic Rest for High-Performers",
    description:
      "For founders, entrepreneurs, and executives who need to disconnect without losing control. This is not a vacation — it is a strategically designed escape built around your pace, preferences, and need for privacy.",
    includes: [
      "Private destination strategy & selection",
      "Accommodation research and shortlist design",
      "Mobility and ground transportation coordination",
      "Restaurant and dining recommendations",
      "Exclusive experiences & local access",
      "Quiet workspaces & connectivity planning",
      "Wellness & recovery integration",
      "Full itinerary documentation",
    ],
    invoice: "Founder Private Escape Design & Coordination",
  },
  {
    icon: Briefcase,
    title: "Executive Lifestyle Journey",
    price: "$2,500",
    tagline: "Business Meets Leisure, Seamlessly",
    description:
      "For business + pleasure trips, networking events, conferences, private meetings, or premium vacations. The client pays because they don't want to waste a single hour searching, comparing, or organizing.",
    includes: [
      "Complete itinerary design & day planning",
      "Hotel and villa research",
      "Private dining and restaurant recommendations",
      "Premium transfers & car services",
      "Local experiences & cultural access",
      "Flexible agenda management",
      "Pre-trip concierge support",
      "Provider research and decision support",
    ],
    invoice: "Executive Lifestyle Journey Planning & Coordination",
  },
  {
    icon: Crown,
    title: "Private Luxury Experience",
    price: "$4,000",
    tagline: "High-Level, Fully Designed Experiences",
    description:
      "For clients who want a truly elevated experience: private travel, celebrations, anniversaries, family office travel, villas, yachts, private chefs, wellness retreats, exclusive events, art, fashion, and luxury destinations.",
    includes: [
      "End-to-end experience design",
      "Premium provider sourcing & coordination",
      "Personalized agenda & scheduling",
      "Concierge support before and during travel",
      "Itinerary adaptation and change planning",
      "Complete follow-up & documentation",
      "Multi-party coordination (families, groups)",
      "Access to exclusive events & venues",
    ],
    invoice: "Private Luxury Travel Experience Coordination",
  },
  {
    icon: Lock,
    title: "Ultra-Private Bespoke Travel",
    price: null,
    tagline: "Available by Private Request Only",
    description:
      "For high-profile clients, complex multi-country journeys, private groups, jets, villas, security, staff, private events, closed experiences, or sensitive logistics. This tier is not publicly priced — it is scoped and quoted privately.",
    includes: [
      "Custom scope definition & planning",
      "Multi-destination coordination",
      "Private aviation and ground logistics research",
      "Villa, yacht and property research",
      "Security and privacy logistics",
      "Dedicated on-trip travel director",
      "Staff & service team coordination",
      "Fully confidential documentation",
    ],
    invoice: "Ultra-Private Bespoke Travel & Lifestyle Coordination",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/images/1507525428034-b723cf961d3e.jpg')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Private Travel Services
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white mt-4 mb-5 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What We <span className="font-medium">Design</span>
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We don&apos;t sell generic trips. We design private travel
            experiences for clients who value time, privacy, precision, and
            access.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service) => (
              <AnimatedSection key={service.title} delay={100}>
                <div className="border border-gray-100 rounded-2xl p-8 sm:p-12 hover:border-gold/20 hover:shadow-lg transition-all duration-500">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                        <service.icon className="w-7 h-7 text-navy" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-medium text-navy tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-slate text-sm mt-1 font-light">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 hidden sm:block">
                      {service.price ? (
                        <div className="text-2xl font-medium text-gold">
                          {service.price}
                        </div>
                      ) : (
                        <div className="text-sm text-gold font-medium tracking-wide">
                          Custom Quote
                        </div>
                      )}
                    </div>
                  </div>

                  {service.price && (
                    <div className="sm:hidden mb-4">
                      <span className="text-xl font-medium text-gold">
                        {service.price}
                      </span>
                    </div>
                  )}

                  <p className="text-slate leading-relaxed mb-8 font-light">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.includes.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-navy/70 font-light">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="text-[10px] text-slate uppercase tracking-[0.2em] font-light hidden sm:block">
                      Invoice: {service.invoice}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-gold font-medium text-xs uppercase tracking-[0.2em] hover:gap-3 transition-all duration-300"
                    >
                      {service.price
                        ? "Begin Planning"
                        : "Request Access"}{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
                <h3 className="text-lg font-medium text-navy tracking-tight">
                  How It Works
                </h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-8 text-sm">
                <div>
                  <div className="text-gold font-medium mb-2">01 — Inquiry</div>
                  <p className="text-slate font-light leading-relaxed">
                    Submit a private inquiry. We respond within 24 hours with
                    an initial consultation.
                  </p>
                </div>
                <div>
                  <div className="text-gold font-medium mb-2">02 — Design</div>
                  <p className="text-slate font-light leading-relaxed">
                    We design your journey — destination, accommodation,
                    experiences, logistics, and schedule.
                  </p>
                </div>
                <div>
                  <div className="text-gold font-medium mb-2">03 — Travel</div>
                  <p className="text-slate font-light leading-relaxed">
                    You travel. We coordinate, support, and manage everything
                    before and during your journey.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="planning-modules" className="py-16 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl border border-gray-100 bg-cream p-8 sm:p-10">
              <span className="text-gold text-[10px] font-medium tracking-[0.4em] uppercase">Scoped Professional Work</span>
              <h2 className="text-2xl sm:text-3xl font-light text-navy mt-3 mb-4 tracking-tight">Individual Planning Modules</h2>
              <p className="text-slate font-light leading-relaxed max-w-3xl">
                For narrowly scoped needs, AW GOTRAVEL offers individual research, itinerary-design, and coordination deliverables from $5 to $200. These are professional service fees only. We do not sell or book flights, rooms, tickets, travel packages, reservations, or third-party inventory.
              </p>
              <div className="mt-7 divide-y divide-gray-200 border-y border-gray-200">
                {[
                  ["Travel essentials", "$5–$15 USD", "Readiness, destination, mobility, dining and accommodation research briefs.", "PDF by email · 1–2 business days"],
                  ["Focused itinerary planning", "$20–$30 USD", "Day routes, experience outlines, contingency maps and itinerary audits.", "PDF by email · 2–4 business days"],
                  ["Executive travel briefs", "$40–$55 USD", "Founder resets, meeting-day logistics and private celebration concepts.", "PDF by email · 4–5 business days"],
                  ["Private journey design", "$75–$95 USD", "Five-day and dual-destination private itinerary design.", "PDF by email · 5–6 business days"],
                  ["Complex planning blueprints", "$150–$200 USD", "Executive escape foundations and multi-destination planning systems.", "PDF by email · 7–8 business days"],
                ].map(([title, range, detail, delivery], index) => <article key={title} className="grid gap-2 py-5 sm:grid-cols-[36px_1fr_.8fr_.55fr_1fr] sm:items-center sm:gap-5"><span className="text-[10px] font-medium text-gold">0{index + 1}</span><h3 className="font-medium text-navy">{title}</h3><p className="text-sm leading-relaxed text-slate">{detail}</p><strong className="text-sm font-medium text-gold">{range}</strong><small className="text-xs leading-relaxed text-slate">{delivery}</small></article>)}
              </div>
              <p className="text-xs text-slate mt-5 leading-relaxed">All prices are in USD. Final scope, deliverables and payment amount are confirmed before work begins. AW GOTRAVEL provides research, design and coordination services only; clients purchase third-party travel directly. <Link href="/refund-policy" className="text-gold hover:underline">Refund Policy</Link><span className="mx-2">·</span><Link href="/refund-policy" className="text-gold hover:underline">Cancellation Policy</Link></p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-5 tracking-tight">
              Ready to Start?
            </h2>
            <p className="text-white/50 text-lg mb-10 font-light">
              Tell us what you&apos;re looking for. Every engagement begins with
              a private consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-gold hover:bg-gold-dark text-navy font-medium px-12 py-4 rounded-full transition-all duration-300 text-xs uppercase tracking-[0.3em]"
            >
              Private Inquiry
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
