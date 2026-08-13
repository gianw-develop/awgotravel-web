"use client";

import Image from "next/image";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const allDestinations = [
  {
    title: "Maldives",
    region: "Indian Ocean",
    description: "Private overwater villas, personal butler service, and pristine reefs — total seclusion in paradise.",
    image: "/images/1514282401047-d79a71a590e8.jpg",
    type: "Island & Wellness",
  },
  {
    title: "Santorini",
    region: "Greece",
    description: "Cliffside suites with caldera views, private yacht charters, and curated Mediterranean dining.",
    image: "/images/1570077188670-e3a8d69ac5ff.jpg",
    type: "Culture & Coast",
  },
  {
    title: "Bali",
    region: "Indonesia",
    description: "Jungle retreats, private temple ceremonies, and wellness experiences for deep restoration.",
    image: "/images/1537996194471-e657df975ab4.jpg",
    type: "Wellness & Spirit",
  },
  {
    title: "Swiss Alps",
    region: "Switzerland",
    description: "Exclusive chalets, helicopter access, and Michelin-star alpine dining in absolute privacy.",
    image: "/images/1531366936337-7c912a4589a7.jpg",
    type: "Mountain & Luxury",
  },
  {
    title: "Cancún & Riviera Maya",
    region: "Mexico",
    description: "Private villas, cenote experiences, ancient ruins access, and Caribbean luxury with local immersion.",
    image: "/images/1552074284-5e88ef1aef18.jpg",
    type: "Beach & Culture",
  },
  {
    title: "Tokyo",
    region: "Japan",
    description: "Private ryokan stays, exclusive tea ceremonies, Michelin dining, and curated cultural journeys.",
    image: "/images/1540959733332-eab4deabeeaf.jpg",
    type: "Culture & Gastronomy",
  },
  {
    title: "Patagonia",
    region: "Argentina & Chile",
    description: "Remote luxury lodges, glacier expeditions, and private adventures at the edge of the world.",
    image: "/images/1531366936337-7c912a4589a7.jpg",
    type: "Adventure & Nature",
  },
  {
    title: "Paris",
    region: "France",
    description: "Private art tours, Michelin dining, luxury shopping coordination, and cultural immersion at its finest.",
    image: "/images/1502602898657-3e91760cbb34.jpg",
    type: "Culture & Lifestyle",
  },
  {
    title: "Dubai",
    region: "UAE",
    description: "Ultra-modern luxury, desert experiences, private yachts, and exclusive access to the Gulf's finest.",
    image: "/images/1512453979798-5ea266f8880c.jpg",
    type: "Urban Luxury",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/images/1488085061387-422e29b40080.jpg')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Where We Design
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white mt-4 mb-5 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Destinations
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Every destination is personally vetted. We design private
            experiences — not generic packages — in the world&apos;s most
            extraordinary locations.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map((dest, i) => (
              <AnimatedSection key={dest.title} delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={dest.image} alt={dest.title} width={800} height={600} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                      {dest.type}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">
                        {dest.region}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg font-medium text-navy mb-2 tracking-tight">
                      {dest.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed mb-5 font-light">
                      {dest.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-gold font-medium text-xs uppercase tracking-[0.2em] hover:gap-3 transition-all duration-300"
                    >
                      Design This Journey <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <p className="text-slate text-sm font-light mb-6">
              Don&apos;t see your destination? We design private experiences
              worldwide.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-medium px-10 py-4 rounded-full transition-all duration-300 text-xs uppercase tracking-[0.3em]"
            >
              Request a Custom Destination
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
