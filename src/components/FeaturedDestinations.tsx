"use client";

import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    title: "The Maldives",
    region: "Indian Ocean",
    description: "Private overwater villas, personal butler, and pristine reefs — designed for total seclusion",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Santorini",
    region: "Greece",
    description: "Cliffside suites, private yacht charters, and curated Mediterranean experiences",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bali",
    region: "Indonesia",
    description: "Jungle retreats, private ceremonies, and wellness experiences for deep restoration",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Swiss Alps",
    region: "Switzerland",
    description: "Exclusive chalets, helicopter access, and Michelin-star alpine dining in total privacy",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Amalfi Coast",
    region: "Italy",
    description: "Cliffside villas, private boats, and curated gastronomic journeys through the Mediterranean",
    image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tokyo",
    region: "Japan",
    description: "Ryokan retreats, private tea ceremonies, and exclusive cultural immersion with local guides",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
  },
];

export function FeaturedDestinations() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase">
            Destinations We Design For
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-navy mt-4 mb-5 tracking-tight">
            Where We <span className="font-medium">Create Experiences</span>
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Each destination is personally vetted. We coordinate every detail —
            from accommodation and transport to private access and local expertise.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <AnimatedSection key={dest.title} delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
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
                  <p className="text-slate text-sm mb-5 leading-relaxed font-light">
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

        <AnimatedSection className="text-center mt-14">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-medium px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl text-xs uppercase tracking-[0.3em]"
          >
            All Destinations <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
