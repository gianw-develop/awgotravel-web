import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Service Cancellation & Refund Policy",
  description: "Cancellation and refund terms for AW GOTRAVEL professional design and coordination fees.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return <LegalPage eyebrow="Legal" title="Service Cancellation & Refund Policy" intro="How cancellations, completed work, and professional service fees are handled." effectiveDate="August 13, 2026" sections={[
    { title: "1. Scope", content: <><p>This policy applies only to fees paid directly to AW Gotravel LLC for private travel design, research, itinerary development, and lifestyle coordination.</p><p>AW GOTRAVEL does not sell flights, hotel rooms, tickets, tours, or travel packages. Refunds for purchases you make from third-party providers are governed solely by those providers&apos; terms.</p></> },
    { title: "2. Before work begins", content: <p>If you cancel before substantive work begins, any prepaid professional fee will be refunded, less any clearly disclosed non-refundable payment-processing charge actually incurred.</p> },
    { title: "3. Work in progress", content: <p>After work begins, fees are earned in proportion to research, consultation, design, coordination, and deliverables completed. If you cancel, we will provide a reasonable accounting and refund any unearned prepaid balance. Completed work and delivered consultation time are non-refundable.</p> },
    { title: "4. Completed deliverables", content: <p>Once the agreed itinerary, brief, research, or other deliverable has been substantially completed or delivered, the associated professional fee is non-refundable. This does not limit any remedy available for a material failure to provide the agreed service.</p> },
    { title: "5. Scope and date changes", content: <p>We will reasonably accommodate changes within the accepted scope. Material changes, pauses, new destinations, additional travelers, or accelerated deadlines may require a revised scope and fee approved before additional work begins.</p> },
    { title: "6. Third-party purchases", content: <p>You remain responsible for changing or cancelling purchases made with airlines, accommodation providers, ticket sellers, tour operators, transportation companies, insurers, or other third parties. AW GOTRAVEL may provide coordination support if included in your scope, but cannot promise a provider refund, credit, or exception.</p> },
    { title: "7. How to request cancellation", content: <p>Email <a className="text-gold hover:underline" href="mailto:sales@awgotravel.com">sales@awgotravel.com</a> with your name and engagement details. We will acknowledge the request and explain completed work, remaining deliverables, and any refundable balance. Approved refunds are returned to the original payment method where practical.</p> },
    { title: "8. Contact", content: <p>Questions may be directed to AW Gotravel LLC at <a className="text-gold hover:underline" href="mailto:sales@awgotravel.com">sales@awgotravel.com</a> or <a className="text-gold hover:underline" href="tel:+14099953371">+1 409 995-3371</a>.</p> },
  ]} />;
}