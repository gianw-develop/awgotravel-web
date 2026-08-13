"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function AirplaneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M38 20L28 26L20 22L8 28L10 24L18 20L10 16L8 12L20 18L28 14L38 20Z" />
    </svg>
  );
}

function CloudShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="70" cy="50" rx="60" ry="25" fill="currentColor" />
      <ellipse cx="110" cy="40" rx="50" ry="30" fill="currentColor" />
      <ellipse cx="140" cy="50" rx="45" ry="22" fill="currentColor" />
      <ellipse cx="50" cy="45" rx="35" ry="20" fill="currentColor" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/1507525428034-b723cf961d3e.jpg')`,
        }}
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-fly-across absolute top-[15%]">
          <AirplaneIcon className="w-8 h-8 text-white/30" />
        </div>
        <div className="animate-fly-across-reverse absolute top-[35%]">
          <AirplaneIcon className="w-5 h-5 text-gold/20" />
        </div>
        <div className="animate-fly-across absolute top-[55%]" style={{ animationDelay: "4s" }}>
          <AirplaneIcon className="w-6 h-6 text-white/15" />
        </div>
        <div className="animate-cloud-drift absolute top-[20%] text-white/5 w-48">
          <CloudShape />
        </div>
        <div
          className="animate-cloud-drift absolute top-[60%] text-white/3 w-64"
          style={{ animationDelay: "-15s", animationDuration: "40s" }}
        >
          <CloudShape />
        </div>
      </div>

      <div className="absolute top-[10%] right-[10%] w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent animate-float" />
      <div
        className="absolute bottom-[20%] left-[15%] w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-gold text-[10px] sm:text-xs font-medium tracking-[0.5em] uppercase mb-8 border border-gold/30 px-6 py-2.5 rounded-full">
            Private Travel Design &amp; Lifestyle Coordination
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Beyond Travel.
          <br />
          <span className="gradient-text font-medium">Private Experiences</span>
          <br />
          <span className="font-light">Designed Around You.</span>
        </motion.h1>

        <motion.p
          className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          AW GOTRAVEL is a boutique travel design firm creating private, high-end
          experiences for executives, founders, and discerning travelers. Every
          journey is designed with privacy, precision, and intention.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/services"
            className="bg-gold hover:bg-gold-dark text-navy font-medium px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 text-xs uppercase tracking-[0.3em] animate-pulse-glow"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="border border-white/30 hover:border-white text-white font-medium px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/10 text-xs uppercase tracking-[0.3em]"
          >
            Private Inquiry
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-center gap-16 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { number: "Private", label: "Travel Design" },
            { number: "Global", label: "Coordination" },
            { number: "24/7", label: "Concierge" },
          ].map((stat) => (
            <div key={stat.label} className="text-center hidden sm:block">
              <div className="text-lg md:text-xl font-medium text-gold tracking-wide">
                {stat.number}
              </div>
              <div className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}
