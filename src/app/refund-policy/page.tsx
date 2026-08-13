"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function RefundPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="text-gold text-xs font-medium tracking-[0.4em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Legal
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Refund &amp; Cancellation Policy
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our policies regarding cancellations, refunds, and modifications to your travel bookings.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-slate text-sm mb-10">
              <strong>Effective Date:</strong> July 1, 2026
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  1. Overview
                </h2>
                <p className="text-slate leading-relaxed">
                  This Refund and Cancellation Policy (&quot;Policy&quot;) outlines the terms and conditions governing cancellations, refunds, and modifications for travel services booked through AW GOTRAVEL LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Policy applies to all services provided through our website at www.awgotravel.com, including online travel planning, itinerary assistance, hotel and flight booking support, vacation package coordination, and customer travel consultation services. By making a booking with us, you acknowledge and agree to the terms of this Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  2. Cancellation Timeframes and Fees
                </h2>
                <div className="text-slate leading-relaxed space-y-4">
                  <p>
                    Cancellation fees are determined by the timing of your cancellation request relative to the scheduled departure date or service start date. The following general cancellation schedule applies:
                  </p>

                  <div className="bg-cream rounded-xl p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">
                        2.1 More Than 60 Days Before Departure
                      </h3>
                      <p>
                        Full refund of the amount paid, minus a non-refundable administrative fee of $150 USD per booking. Any non-refundable deposits paid to third-party suppliers will also be deducted.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">
                        2.2 Between 30 and 60 Days Before Departure
                      </h3>
                      <p>
                        Refund of 75% of the total booking amount, minus the non-refundable administrative fee and any non-refundable third-party supplier costs already incurred.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">
                        2.3 Between 15 and 29 Days Before Departure
                      </h3>
                      <p>
                        Refund of 50% of the total booking amount, minus the non-refundable administrative fee and any non-refundable third-party supplier costs already incurred.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">
                        2.4 Between 7 and 14 Days Before Departure
                      </h3>
                      <p>
                        Refund of 25% of the total booking amount, minus the non-refundable administrative fee and any non-refundable third-party supplier costs already incurred.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">
                        2.5 Less Than 7 Days Before Departure or No-Show
                      </h3>
                      <p>
                        No refund will be issued. The full booking amount is non-refundable for cancellations made less than 7 days before the scheduled departure date or in the event of a no-show.
                      </p>
                    </div>
                  </div>

                  <p>
                    Please note that certain bookings may have different cancellation terms depending on the specific policies of third-party suppliers (airlines, hotels, tour operators, etc.). In such cases, the more restrictive cancellation policy will apply. We will inform you of any supplier-specific cancellation terms at the time of booking.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  3. Non-Refundable Items
                </h2>
                <p className="text-slate leading-relaxed mb-3">
                  The following items and fees are non-refundable under all circumstances:
                </p>
                <ul className="list-disc list-inside text-slate leading-relaxed space-y-2 ml-4">
                  <li>
                    <strong>Administrative and Service Fees:</strong> The non-refundable administrative fee of $150 USD per booking covers the cost of travel planning, research, consultation, and coordination services provided by our team.
                  </li>
                  <li>
                    <strong>Travel Consultation Fees:</strong> Fees paid for personalized travel consultation sessions are non-refundable once the consultation has been delivered.
                  </li>
                  <li>
                    <strong>Non-Refundable Supplier Costs:</strong> Any costs paid to third-party suppliers that are designated as non-refundable under their terms and conditions, including but not limited to non-refundable airline tickets, prepaid hotel reservations, and tour deposits.
                  </li>
                  <li>
                    <strong>Travel Insurance Premiums:</strong> If travel insurance was purchased through our Services, the insurance premium is non-refundable once the policy has been issued.
                  </li>
                  <li>
                    <strong>Visa and Documentation Fees:</strong> Any fees paid for visa processing, travel document assistance, or related services.
                  </li>
                  <li>
                    <strong>Custom Itinerary Planning Fees:</strong> Fees charged for bespoke itinerary creation and planning services that have already been completed.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  4. How to Request a Cancellation
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    To request a cancellation, please follow these steps:
                  </p>
                  <p>
                    <strong>Step 1:</strong> Send a written cancellation request to sales@awgotravel.com. Your request must include your full name, booking reference number, travel dates, and the reason for cancellation.
                  </p>
                  <p>
                    <strong>Step 2:</strong> Our team will acknowledge your cancellation request within 2 business days and provide you with a cancellation confirmation that outlines any applicable fees and the estimated refund amount.
                  </p>
                  <p>
                    <strong>Step 3:</strong> Review and confirm the cancellation terms provided by our team. Your cancellation will not be processed until you confirm your acceptance of the applicable fees and refund amount.
                  </p>
                  <p>
                    <strong>Step 4:</strong> Once confirmed, we will process the cancellation with all relevant third-party suppliers and initiate the refund process.
                  </p>
                  <p>
                    The cancellation date is determined by the date we receive your written cancellation request, not the date you verbally communicate your intent to cancel. We strongly recommend submitting cancellation requests as early as possible to maximize your refund eligibility.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  5. Refund Process
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    <strong>5.1 Refund Method:</strong> Refunds will be issued to the original payment method used at the time of booking. If you paid by credit card, the refund will be credited to the same credit card. If you paid by another method, we will arrange an appropriate refund method.
                  </p>
                  <p>
                    <strong>5.2 Processing Time:</strong> Refunds will be processed within 10 to 15 business days from the date your cancellation is confirmed. Please note that it may take an additional 5 to 10 business days for the refund to appear on your statement, depending on your financial institution.
                  </p>
                  <p>
                    <strong>5.3 Partial Refunds:</strong> If only a portion of your booking is cancelled (for example, cancelling a hotel reservation while keeping flight bookings), the refund will be calculated based on the cancellable portion of the booking, subject to the applicable cancellation fees and third-party supplier policies.
                  </p>
                  <p>
                    <strong>5.4 Refund Disputes:</strong> If you believe your refund amount is incorrect, please contact us at sales@awgotravel.com within 30 days of receiving your refund. We will review your case and provide a detailed explanation of the refund calculation.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  6. Modifications to Bookings
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    <strong>6.1 Change Requests:</strong> If you wish to modify your booking (such as changing travel dates, destinations, or traveler names), please contact us at sales@awgotravel.com as soon as possible. Modifications are subject to availability and may incur additional fees.
                  </p>
                  <p>
                    <strong>6.2 Modification Fees:</strong> A modification fee of $75 USD per change may apply, in addition to any fare differences or charges imposed by third-party suppliers. The total cost of the modification will be communicated to you before any changes are made.
                  </p>
                  <p>
                    <strong>6.3 Limitations:</strong> Some bookings may not be eligible for modification due to the terms and conditions of third-party suppliers. In such cases, the booking may need to be cancelled and rebooked, subject to the cancellation fees outlined in this Policy.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  7. Cancellations by AW GOTRAVEL LLC
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    <strong>7.1 Supplier Cancellations:</strong> In the event that a third-party supplier cancels a service (such as a flight cancellation by an airline or a hotel closure), we will make reasonable efforts to arrange alternative services of comparable quality. If no suitable alternative is available, we will process a full refund of the affected portion of your booking.
                  </p>
                  <p>
                    <strong>7.2 Force Majeure:</strong> If travel services are cancelled or significantly disrupted due to force majeure events (including but not limited to natural disasters, pandemics, war, terrorism, government travel restrictions, or severe weather), we will work with you and our suppliers to find alternative arrangements, issue travel credits, or process refunds as permitted by the applicable supplier policies. AW GOTRAVEL LLC is not liable for additional costs or damages resulting from force majeure events.
                  </p>
                  <p>
                    <strong>7.3 Company-Initiated Cancellations:</strong> In rare circumstances, AW GOTRAVEL LLC may need to cancel a booking due to operational reasons. In such cases, you will receive a full refund of all amounts paid, including any administrative fees.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  8. Travel Insurance Recommendation
                </h2>
                <p className="text-slate leading-relaxed">
                  We strongly recommend purchasing comprehensive travel insurance at the time of booking. Travel insurance can provide coverage for trip cancellation, trip interruption, medical emergencies, lost baggage, and other unforeseen events that may affect your travel plans. AW GOTRAVEL LLC is not a substitute for travel insurance, and our refund policy does not cover losses that would typically be covered by a travel insurance policy. We can assist you in identifying suitable travel insurance options upon request.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  9. Chargebacks and Payment Disputes
                </h2>
                <p className="text-slate leading-relaxed">
                  If you have a concern about a charge, we encourage you to contact us directly at sales@awgotravel.com before initiating a chargeback or payment dispute with your financial institution. Filing a chargeback without first attempting to resolve the issue with us may result in delays and additional fees. We are committed to resolving payment disputes promptly and fairly. Unauthorized chargebacks for services that were properly delivered may be contested and may result in collection actions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  10. Special Circumstances
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    <strong>10.1 Medical Emergencies:</strong> If you need to cancel due to a documented medical emergency, please contact us as soon as possible. We will review your case on an individual basis and may offer more favorable cancellation terms at our discretion, subject to documentation requirements.
                  </p>
                  <p>
                    <strong>10.2 Government Travel Advisories:</strong> If a government travel advisory is issued for your destination after your booking is confirmed, we will work with you to modify or cancel your booking in accordance with the applicable supplier policies and this Policy.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  11. Changes to This Policy
                </h2>
                <p className="text-slate leading-relaxed">
                  AW GOTRAVEL LLC reserves the right to modify this Refund and Cancellation Policy at any time. Changes will be effective immediately upon posting the updated Policy on our Site. The cancellation terms applicable to your booking are those in effect at the time your booking was confirmed. We encourage you to review this Policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  12. Contact Information
                </h2>
                <p className="text-slate leading-relaxed">
                  If you have any questions about this Refund and Cancellation Policy, need to request a cancellation, or wish to discuss a refund, please contact us:
                </p>
                <div className="mt-4 text-slate leading-relaxed">
                  <p className="font-semibold text-navy">AW GOTRAVEL LLC</p>
                  <p>State of Wyoming, United States</p>
                  <p>Email: sales@awgotravel.com</p>
                  <p>Website: www.awgotravel.com</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
