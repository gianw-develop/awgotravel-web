"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function TermsPage() {
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
            Terms of Service
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Please read these terms carefully before using our services.
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
                  1. Introduction
                </h2>
                <p className="text-slate leading-relaxed">
                  Welcome to AW GOTRAVEL LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website located at www.awgotravel.com (the &quot;Site&quot;) and all related services, including online travel planning, itinerary assistance, hotel and flight booking support, vacation package coordination, and customer travel consultation services (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  2. Company Information
                </h2>
                <p className="text-slate leading-relaxed">
                  AW GOTRAVEL LLC is a limited liability company registered in the State of Wyoming, United States. For any questions or concerns regarding these Terms, you may contact us at sales@awgotravel.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  3. Description of Services
                </h2>
                <p className="text-slate leading-relaxed mb-4">
                  AW GOTRAVEL LLC provides the following travel-related services:
                </p>
                <ul className="list-disc list-inside text-slate leading-relaxed space-y-2 ml-4">
                  <li>
                    <strong>Online Travel Planning:</strong> Comprehensive travel planning services delivered through our website and digital communication channels.
                  </li>
                  <li>
                    <strong>Itinerary Assistance:</strong> Custom itinerary creation, day-by-day scheduling, and destination recommendations tailored to your preferences.
                  </li>
                  <li>
                    <strong>Hotel and Flight Booking Support:</strong> Assistance with researching, comparing, and facilitating reservations for accommodations and air travel through our network of trusted partners.
                  </li>
                  <li>
                    <strong>Vacation Package Coordination:</strong> Bundled travel packages that may include flights, hotels, transfers, tours, and activities coordinated on your behalf.
                  </li>
                  <li>
                    <strong>Customer Travel Consultation:</strong> Personalized one-on-one consultation sessions to discuss your travel goals, budget, and preferences.
                  </li>
                </ul>
                <p className="text-slate leading-relaxed mt-4">
                  We act as an intermediary between you and third-party travel suppliers (airlines, hotels, tour operators, etc.). We do not own, operate, or control the travel services provided by these third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  4. Eligibility
                </h2>
                <p className="text-slate leading-relaxed">
                  You must be at least 18 years of age and have the legal capacity to enter into binding agreements to use our Services. By using our Services, you represent and warrant that you meet these eligibility requirements. If you are using our Services on behalf of another person or entity, you represent that you have the authority to bind that person or entity to these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  5. Account Registration
                </h2>
                <p className="text-slate leading-relaxed">
                  Certain features of our Services may require you to create an account or provide personal information. You agree to provide accurate, current, and complete information during the registration or booking process and to update such information as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  6. Booking Process
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    When you request a booking through our Services, the following process applies:
                  </p>
                  <p>
                    <strong>6.1 Inquiry and Consultation:</strong> You submit a travel inquiry through our website, email, or other communication channels. Our travel consultants will review your request and provide recommendations, options, and pricing.
                  </p>
                  <p>
                    <strong>6.2 Proposal and Confirmation:</strong> Once you approve a travel proposal, we will provide a detailed itinerary and cost breakdown. Your confirmation of the proposal constitutes your acceptance of the travel arrangements and associated costs.
                  </p>
                  <p>
                    <strong>6.3 Booking Execution:</strong> Upon your confirmation and receipt of payment, we will proceed to book the agreed-upon travel services with our third-party suppliers. Bookings are subject to availability and supplier confirmation.
                  </p>
                  <p>
                    <strong>6.4 Documentation:</strong> You will receive booking confirmations, e-tickets, vouchers, and other relevant travel documents via email or through your account on our Site.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  7. Payment Terms
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    <strong>7.1 Pricing:</strong> All prices displayed on our Site or communicated during the consultation process are quoted in United States Dollars (USD) unless otherwise specified. Prices are subject to change without notice until a booking is confirmed and payment is received.
                  </p>
                  <p>
                    <strong>7.2 Payment Methods:</strong> We accept payments via major credit cards (Visa, Mastercard, American Express), debit cards, and other payment methods as indicated on our Site. All payments are processed securely through our third-party payment processor.
                  </p>
                  <p>
                    <strong>7.3 Deposits and Final Payments:</strong> Depending on the nature of your booking, a deposit may be required at the time of confirmation. The remaining balance must be paid by the due date specified in your booking confirmation. Failure to make timely payments may result in cancellation of your booking.
                  </p>
                  <p>
                    <strong>7.4 Service Fees:</strong> AW GOTRAVEL LLC may charge service fees, consultation fees, or planning fees in addition to the cost of travel services. All applicable fees will be clearly disclosed before you confirm your booking.
                  </p>
                  <p>
                    <strong>7.5 Taxes and Surcharges:</strong> Prices may be subject to applicable taxes, government fees, fuel surcharges, and other charges imposed by third-party suppliers or governmental authorities. These will be included in your final invoice where applicable.
                  </p>
                  <p>
                    <strong>7.6 Currency and Exchange Rates:</strong> For international bookings, currency conversion rates may apply. Any differences in exchange rates between the time of quotation and the time of payment are your responsibility.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  8. Cancellations and Refunds
                </h2>
                <p className="text-slate leading-relaxed">
                  Cancellations and refunds are governed by our separate Refund and Cancellation Policy, which is incorporated into these Terms by reference. Please review our Refund and Cancellation Policy for detailed information regarding cancellation timeframes, refund eligibility, and the process for requesting cancellations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  9. Travel Documents and Requirements
                </h2>
                <p className="text-slate leading-relaxed">
                  You are solely responsible for ensuring that you possess valid travel documents, including but not limited to passports, visas, health certificates, and vaccination records required for your travel destinations. AW GOTRAVEL LLC may provide general guidance regarding travel document requirements, but we do not guarantee the accuracy or completeness of such information. We are not liable for any consequences arising from your failure to obtain or maintain proper travel documentation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  10. Travel Insurance
                </h2>
                <p className="text-slate leading-relaxed">
                  We strongly recommend that you purchase comprehensive travel insurance to cover trip cancellation, medical emergencies, lost luggage, and other unforeseen events. AW GOTRAVEL LLC is not an insurance provider and does not assume any liability for losses that could have been covered by travel insurance. We may assist you in identifying suitable travel insurance options, but the decision to purchase insurance is solely yours.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  11. Limitation of Liability
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    <strong>11.1 Intermediary Role:</strong> AW GOTRAVEL LLC acts as an intermediary between you and third-party travel suppliers. We are not liable for any acts, omissions, defaults, negligence, or breaches by airlines, hotels, tour operators, transportation providers, or any other third-party suppliers.
                  </p>
                  <p>
                    <strong>11.2 Force Majeure:</strong> We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, epidemics, war, terrorism, civil unrest, government actions, strikes, weather conditions, or other force majeure events.
                  </p>
                  <p>
                    <strong>11.3 Limitation of Damages:</strong> To the maximum extent permitted by applicable law, AW GOTRAVEL LLC&apos;s total liability to you for any claims arising out of or related to these Terms or our Services shall not exceed the total amount you paid to us for the specific booking giving rise to the claim. In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages.
                  </p>
                  <p>
                    <strong>11.4 No Warranty:</strong> Our Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, express or implied, regarding the quality, accuracy, reliability, or availability of our Services or the travel services provided by third-party suppliers.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  12. Indemnification
                </h2>
                <p className="text-slate leading-relaxed">
                  You agree to indemnify, defend, and hold harmless AW GOTRAVEL LLC, its members, managers, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to your use of our Services, your violation of these Terms, your violation of any applicable law, or your infringement of any rights of a third party.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  13. Intellectual Property
                </h2>
                <p className="text-slate leading-relaxed">
                  All content on our Site, including but not limited to text, graphics, logos, images, photographs, videos, software, and the overall design and layout, is the property of AW GOTRAVEL LLC or its licensors and is protected by United States and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise use any content from our Site without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  14. User Conduct
                </h2>
                <p className="text-slate leading-relaxed mb-3">
                  When using our Services, you agree not to:
                </p>
                <ul className="list-disc list-inside text-slate leading-relaxed space-y-2 ml-4">
                  <li>Provide false, misleading, or inaccurate information.</li>
                  <li>Use our Services for any unlawful or fraudulent purpose.</li>
                  <li>Interfere with or disrupt the operation of our Site or Services.</li>
                  <li>Attempt to gain unauthorized access to our systems or networks.</li>
                  <li>Use automated tools, bots, or scrapers to access or collect data from our Site.</li>
                  <li>Transmit any viruses, malware, or other harmful code.</li>
                  <li>Violate any applicable local, state, national, or international law or regulation.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  15. Third-Party Links and Services
                </h2>
                <p className="text-slate leading-relaxed">
                  Our Site may contain links to third-party websites, applications, or services that are not owned or controlled by AW GOTRAVEL LLC. We are not responsible for the content, privacy practices, or terms of use of any third-party sites. Your interactions with third-party sites are governed by their respective terms and policies. We encourage you to review the terms and privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  16. Privacy
                </h2>
                <p className="text-slate leading-relaxed">
                  Your use of our Services is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. By using our Services, you consent to the practices described in our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  17. Modifications to Terms
                </h2>
                <p className="text-slate leading-relaxed">
                  AW GOTRAVEL LLC reserves the right to modify, update, or revise these Terms at any time. Changes will be effective immediately upon posting the updated Terms on our Site. The &quot;Effective Date&quot; at the top of these Terms will be updated accordingly. Your continued use of our Services after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  18. Termination
                </h2>
                <p className="text-slate leading-relaxed">
                  We reserve the right to suspend or terminate your access to our Services at any time, with or without cause, and with or without notice. Upon termination, your right to use our Services will immediately cease. Any provisions of these Terms that by their nature should survive termination shall survive, including but not limited to limitation of liability, indemnification, and governing law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  19. Dispute Resolution
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    <strong>19.1 Informal Resolution:</strong> Before initiating any formal dispute resolution proceedings, you agree to first contact us at sales@awgotravel.com to attempt to resolve the dispute informally. We will make reasonable efforts to resolve any dispute within thirty (30) days of receiving your written notice.
                  </p>
                  <p>
                    <strong>19.2 Binding Arbitration:</strong> If a dispute cannot be resolved informally, you and AW GOTRAVEL LLC agree that any dispute, claim, or controversy arising out of or relating to these Terms or our Services shall be resolved through binding arbitration administered in accordance with the rules of the American Arbitration Association. The arbitration shall take place in the State of Wyoming, and the arbitrator&apos;s decision shall be final and binding.
                  </p>
                  <p>
                    <strong>19.3 Class Action Waiver:</strong> You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  20. Governing Law
                </h2>
                <p className="text-slate leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law principles. Any legal action or proceeding not subject to arbitration shall be brought exclusively in the state or federal courts located in the State of Wyoming, and you consent to the personal jurisdiction of such courts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  21. Severability
                </h2>
                <p className="text-slate leading-relaxed">
                  If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  22. Entire Agreement
                </h2>
                <p className="text-slate leading-relaxed">
                  These Terms, together with our Privacy Policy and Refund and Cancellation Policy, constitute the entire agreement between you and AW GOTRAVEL LLC regarding your use of our Services and supersede all prior agreements, understandings, and communications, whether written or oral.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  23. Contact Information
                </h2>
                <p className="text-slate leading-relaxed">
                  If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:
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
