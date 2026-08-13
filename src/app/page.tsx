import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MoveRight } from "lucide-react";

const process = [
  ["01", "Private brief", "A focused conversation about your pace, priorities, context and what the journey should make possible."],
  ["02", "The journey on paper", "A considered itinerary shaped around sequence, timing and the details that make it distinctly yours."],
  ["03", "Coordination in motion", "We align the moving parts around the choices you make so the experience holds together with ease."],
  ["04", "A plan that can change", "Quiet, thoughtful support when a day, a meeting or the wider plan needs to move."],
];

const creates = ["Private travel design", "Bespoke itineraries", "Lifestyle coordination", "Research and timing", "Experience recommendations", "On-trip support"];
const notSold = ["Flights", "Hotels or rooms", "Tickets", "Tours as inventory", "Travel packages", "Retail travel bookings"];

export default function Home() {
  return (
    <>
      <section className="home-hero" id="top">
        <Image src="/hero-amalfi-sail.png" alt="Sailing at blue hour on the Amalfi Coast" fill priority sizes="100vw" className="home-hero-image" />
        <div className="home-hero-shade" />
        <div className="home-shell home-hero-content">
          <p className="eyebrow">Private travel design</p>
          <h1>Leave the<br className="hidden sm:block" /> ordinary behind.</h1>
          <Link href="/contact" className="gold-button">Request a private consultation <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="manifesto">
        <div className="home-shell"><span className="gold-rule" /><h2>Every departure begins with a point of view.</h2></div>
      </section>

      <section className="identity-section" id="philosophy">
        <div className="identity-image"><Image src="/coast-overlook.png" alt="Quiet Mediterranean coast" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="identity-copy"><div><span className="gold-rule" /><p className="identity-kicker">A private point of view</p><h2>We are not a travel agency.</h2><p className="identity-lead">We are private travel designers and lifestyle coordinators.</p><p>We design a private journey around you: your interests, your pace, your people and your sense of place. You retain control of booking decisions; we create the plan and coordinate the details around it.</p></div></div>
      </section>

      <section className="process-section" id="process">
        <div className="home-shell"><p className="eyebrow centered">Our process. Thoughtfully by design.</p><div className="process-grid">{process.map(([number, title, body]) => <article key={number} className="process-item"><p className="process-number">{number}</p><h3>{title}</h3><p>{body}</p></article>)}</div></div>
      </section>

      <section className="story-image" aria-label="A quiet Mediterranean coastline"><Image src="/coast-overlook.png" alt="Mediterranean coastline at sunrise" fill sizes="100vw" /></section>

      <section className="scope-section" id="scope">
        <div className="home-shell"><p className="eyebrow centered">Clear by design</p><h2>What we create. What we do not sell.</h2><div className="scope-grid"><div><p className="scope-label">What we create</p>{creates.map((item) => <p className="scope-line" key={item}><Check size={16} aria-hidden="true" />{item}</p>)}</div><div><p className="scope-label">What we do not sell</p>{notSold.map((item) => <p className="scope-line muted" key={item}><span aria-hidden="true">×</span>{item}</p>)}</div></div></div>
      </section>

      <section className="inquiry-section" id="inquiry"><div className="inquiry-gradient" /><div className="home-shell inquiry-content"><div><p className="eyebrow">Private inquiry</p><h2>Your journey begins with a private conversation.</h2><p className="inquiry-contact"><a href="mailto:sales@awgotravel.com">sales@awgotravel.com</a><br /><a href="tel:+14099953371">+1 409 995-3371</a></p></div><Link href="/contact" className="outline-button">Start a private brief <MoveRight size={16} /></Link></div></section>
    </>
  );
}