import { Hero } from "@/components/Hero";
import { FeaturedDestinations } from "@/components/FeaturedDestinations";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
