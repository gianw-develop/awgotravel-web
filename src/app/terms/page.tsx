import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing AW GOTRAVEL private travel design and lifestyle coordination services.",
  alternates: { canonical: "/terms" },
};

const contact = <p><strong>AW Gotravel LLC</strong><br />Wyoming, United States<br /><a className="text-gold hover:underline" href="mailto:sales@awgotravel.com">sales@awgotravel.com</a><br /><a className="text-gold hover:underline" href="tel:+14099953371">+1 409 995-3371</a></p>;

export default function TermsPage() {
  return <LegalPage eyebrow="Legal" title="Terms of Service" intro="The terms governing our private travel design and lifestyle coordination engagements." effectiveDate="August 13, 2026" sections={[
    { title: "1. About these terms", content: <p>These Terms govern your use of awgotravel.com and any private travel design or lifestyle coordination engagement accepted by AW Gotravel LLC. A written proposal, scope, or invoice may add engagement-specific terms. If there is a conflict, the signed or accepted engagement document controls for that engagement.</p> },
    { title: "2. Our role", content: <><p>AW GOTRAVEL provides research, itinerary design, recommendations, sequencing, timing, and lifestyle coordination. We are not a travel agency, tour operator, airline, hotel, ticket seller, or reseller of travel inventory.</p><p>You retain control of purchasing decisions and make payments for flights, accommodations, tickets, tours, transportation, and other third-party services directly to the provider unless a separate written agreement expressly states otherwise.</p></> },
    { title: "3. Engagement and fees", content: <><p>Work begins after we accept your inquiry and confirm scope, timing, deliverables, and fees in writing. Fees pay for professional time, research, design, and coordination rather than travel inventory.</p><p>You agree to provide accurate information and timely decisions. Material changes, additional destinations, accelerated deadlines, or work outside the agreed scope may require a revised fee approved before the additional work begins.</p></> },
    { title: "4. Third-party information and purchases", content: <><p>Recommendations may include independent third parties. Availability, pricing, safety, entry requirements, operating conditions, and provider terms can change without notice. You are responsible for reviewing and accepting each provider&apos;s terms before purchasing.</p><p>AW GOTRAVEL is not a party to contracts between you and third-party providers and is not responsible for their acts, omissions, cancellations, delays, insolvency, or service quality.</p></> },
    { title: "5. Client responsibilities", content: <p>You are responsible for passports, visas, health requirements, insurance, payment methods, legal compliance, and confirming that purchased services meet your needs. You must promptly review deliverables and report any material error.</p> },
    { title: "6. Intellectual property", content: <p>The website, branding, and original materials are owned by AW Gotravel LLC or its licensors. Upon payment, you may use itinerary and planning deliverables for the private purpose for which they were prepared. They may not be resold, published, or commercially reused without permission.</p> },
    { title: "7. Confidentiality and privacy", content: <p>We handle client preferences and journey details with discretion. Personal information is processed as described in our <Link className="text-gold hover:underline" href="/privacy">Privacy Policy</Link>. You should avoid sending passports, payment card information, medical records, or other highly sensitive information through the public inquiry form.</p> },
    { title: "8. Disclaimers and limitation", content: <><p>Designs and recommendations are prepared with reasonable professional care, but no particular outcome, availability, price, or uninterrupted journey is guaranteed. To the extent permitted by law, AW GOTRAVEL is not liable for indirect or consequential loss or for events outside its reasonable control.</p><p>Any liability arising from our professional services will not exceed the fees paid to AW GOTRAVEL for the affected engagement, except where applicable law does not permit that limitation.</p></> },
    { title: "9. Governing law", content: <p>These Terms are governed by the laws of the State of Wyoming, without regard to conflict-of-law rules. The parties will first attempt to resolve disputes informally in good faith before pursuing available legal remedies.</p> },
    { title: "10. Changes and contact", content: <><p>We may update these Terms prospectively by posting a new effective date. Changes do not retroactively alter an accepted engagement unless agreed in writing.</p>{contact}</> },
  ]} />;
}