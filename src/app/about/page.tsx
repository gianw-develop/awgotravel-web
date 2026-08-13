"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Target, Eye, Lock, Clock, Fingerprint, Globe, ShieldCheck, Building2 } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Lock,
    title: "Privacy",
    description:
      "Your itinerary, preferences, and personal details are never shared. Discretion is built into every engagement.",
  },
  {
    icon: Clock,
    title: "Precision",
    description:
      "Every hour of your journey is designed with intention. We eliminate friction so you can focus on what matters.",
  },
  {
    icon: Fingerprint,
    title: "Personalization",
    description:
      "No templates. No generic packages. Every experience is designed around your lifestyle, not the other way around.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "From the Maldives to the Swiss Alps, we coordinate private experiences across 50+ countries with vetted local partners.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About the Firm
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white mt-4 mb-5 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="font-medium">AW GOTRAVEL</span>
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A private travel design and lifestyle coordination firm for
            founders, executives, investors, and high-profile clients.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-navy mt-4 mb-6 tracking-tight">
                Not a Travel Agency.
                <br />
                <span className="font-medium">A Travel Design Firm.</span>
              </h2>
              <div className="space-y-4 text-slate leading-relaxed font-light">
                <p>
                  <strong className="text-navy font-medium">AW GOTRAVEL LLC</strong> is
                  a private travel design and lifestyle coordination firm
                  founded on July 1, 2026 and registered in the State of
                  Wyoming, United States.
                </p>
                <p>
                  We provide personalized travel planning, itinerary design,
                  destination research, and concierge-style coordination for
                  premium clients. Our clients are founders, executives,
                  investors, families, and high-profile individuals who value
                  privacy, precision, and access above all.
                </p>
                <p>
                  Every service we offer is performed directly by our team. We
                  are not a marketplace, not a payment intermediary, and not a
                  booking aggregator. When you engage AW GOTRAVEL, you pay for
                  our expertise in designing and coordinating private travel
                  experiences.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
                  alt="Private travel design"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold rounded-xl p-6 shadow-xl">
                  <div className="text-navy font-medium text-3xl">2026</div>
                  <div className="text-navy/60 text-xs uppercase tracking-wider">Est. Wyoming</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="w-7 h-7 text-gold shrink-0" />
                <h3 className="text-xl font-medium text-navy tracking-tight">
                  Company Information
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-slate mb-1 font-light">Legal Name</div>
                  <div className="text-navy font-medium">AW GOTRAVEL LLC</div>
                </div>
                <div>
                  <div className="text-slate mb-1 font-light">State of Formation</div>
                  <div className="text-navy font-medium">Wyoming, USA</div>
                </div>
                <div>
                  <div className="text-slate mb-1 font-light">Date of Formation</div>
                  <div className="text-navy font-medium">July 1, 2026</div>
                </div>
                <div>
                  <div className="text-slate mb-1 font-light">Business Type</div>
                  <div className="text-navy font-medium">
                    Private Travel Design &amp; Lifestyle Coordination
                  </div>
                </div>
                <div>
                  <div className="text-slate mb-1 font-light">Email</div>
                  <a href="mailto:sales@awgotravel.com" className="text-gold font-medium hover:underline">
                    sales@awgotravel.com
                  </a>
                </div>
                <div>
                  <div className="text-slate mb-1 font-light">Website</div>
                  <a href="https://www.awgotravel.com" className="text-gold font-medium hover:underline">
                    www.awgotravel.com
                  </a>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-slate text-sm leading-relaxed font-light">
                  AW GOTRAVEL LLC is a registered business entity. All services
                  are provided directly by our company. We maintain clear{" "}
                  <Link href="/terms" className="text-gold hover:underline">
                    Terms of Service
                  </Link>
                  ,{" "}
                  <Link href="/privacy" className="text-gold hover:underline">
                    Privacy Policy
                  </Link>
                  , and{" "}
                  <Link href="/refund-policy" className="text-gold hover:underline">
                    Refund &amp; Cancellation Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <AnimatedSection>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Target className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-navy mb-3 tracking-tight">
                    Our Mission
                  </h3>
                  <p className="text-slate leading-relaxed font-light">
                    To deliver world-class private travel design and lifestyle
                    coordination with full transparency, absolute discretion, and
                    the precision that high-performing clients expect. We manage
                    every detail so you can focus on the experience.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-navy mb-3 tracking-tight">
                    Our Vision
                  </h3>
                  <p className="text-slate leading-relaxed font-light">
                    To become the most trusted private travel design firm for
                    founders and executives — known for discretion, precision,
                    and creating journeys that are impossible to organize
                    independently.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-light text-navy tracking-tight">
              What We <span className="font-medium">Stand For</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h4 className="text-lg font-medium text-navy mb-3 tracking-tight">
                    {value.title}
                  </h4>
                  <p className="text-slate text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-5 tracking-tight">
              Let&apos;s Design Your Journey
            </h2>
            <p className="text-white/50 text-lg mb-10 font-light">
              Every engagement begins with a private consultation. Tell us what
              you&apos;re looking for.
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
