"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            How we collect, use, and protect your personal information.
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
                  AW GOTRAVEL LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website at www.awgotravel.com (the &quot;Site&quot;) and use our travel planning, itinerary assistance, hotel and flight booking support, vacation package coordination, and customer travel consultation services (collectively, the &quot;Services&quot;). Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  2. Information We Collect
                </h2>
                <div className="text-slate leading-relaxed space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      2.1 Personal Information You Provide
                    </h3>
                    <p className="mb-2">
                      We may collect personal information that you voluntarily provide to us when you use our Services, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Full name, date of birth, and gender</li>
                      <li>Email address, phone number, and mailing address</li>
                      <li>Passport details and travel document information</li>
                      <li>Payment and billing information (credit card numbers, billing address)</li>
                      <li>Travel preferences, dietary requirements, and special requests</li>
                      <li>Emergency contact information</li>
                      <li>Communications and correspondence with our team</li>
                      <li>Account login credentials</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      2.2 Information Collected Automatically
                    </h3>
                    <p className="mb-2">
                      When you access our Site, we may automatically collect certain information, including:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>IP address and geographic location</li>
                      <li>Browser type, version, and language preferences</li>
                      <li>Operating system and device information</li>
                      <li>Pages visited, time spent on pages, and navigation paths</li>
                      <li>Referring website or source</li>
                      <li>Date and time of access</li>
                      <li>Click-stream data and interaction patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      2.3 Information from Third Parties
                    </h3>
                    <p>
                      We may receive information about you from third-party sources, including travel suppliers (airlines, hotels, tour operators), payment processors, marketing partners, and publicly available databases. We may combine this information with other data we collect about you.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-slate leading-relaxed mb-3">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-slate leading-relaxed space-y-2 ml-4">
                  <li>
                    <strong>Service Delivery:</strong> To process your travel bookings, create itineraries, coordinate vacation packages, and provide travel consultation services.
                  </li>
                  <li>
                    <strong>Payment Processing:</strong> To process payments, issue invoices, and manage billing for our Services.
                  </li>
                  <li>
                    <strong>Communication:</strong> To send you booking confirmations, travel documents, itinerary updates, and respond to your inquiries and requests.
                  </li>
                  <li>
                    <strong>Personalization:</strong> To tailor our Services and recommendations to your travel preferences and interests.
                  </li>
                  <li>
                    <strong>Marketing:</strong> To send you promotional offers, newsletters, and information about new destinations and services, subject to your communication preferences.
                  </li>
                  <li>
                    <strong>Site Improvement:</strong> To analyze usage patterns, improve our Site functionality, and enhance the overall user experience.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.
                  </li>
                  <li>
                    <strong>Fraud Prevention:</strong> To detect, prevent, and address fraud, security breaches, and other potentially prohibited or illegal activities.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  4. Cookies and Tracking Technologies
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    We use cookies, web beacons, pixels, and similar tracking technologies to collect information about your browsing activity on our Site. These technologies help us analyze website traffic, personalize content, remember your preferences, and improve our Services.
                  </p>
                  <p>
                    <strong>Types of cookies we use:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Essential Cookies:</strong> Required for the basic functionality of our Site, such as session management and security features.
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site by collecting and reporting information anonymously.
                    </li>
                    <li>
                      <strong>Functional Cookies:</strong> Enable enhanced functionality and personalization, such as remembering your language or region preferences.
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
                    </li>
                  </ul>
                  <p>
                    You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our Site.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  5. Sharing Your Information with Third Parties
                </h2>
                <p className="text-slate leading-relaxed mb-3">
                  We may share your personal information with the following categories of third parties:
                </p>
                <ul className="list-disc list-inside text-slate leading-relaxed space-y-2 ml-4">
                  <li>
                    <strong>Travel Suppliers:</strong> Airlines, hotels, car rental companies, tour operators, and other travel service providers necessary to fulfill your bookings.
                  </li>
                  <li>
                    <strong>Payment Processors:</strong> Third-party payment processing services (such as Stripe) to securely process your transactions. We do not store your full credit card information on our servers.
                  </li>
                  <li>
                    <strong>Technology Partners:</strong> Website hosting providers, email service providers, analytics platforms, and other technology partners that assist in operating our Site and Services.
                  </li>
                  <li>
                    <strong>Legal and Regulatory Authorities:</strong> When required by law, regulation, legal process, or governmental request, or to protect our rights, privacy, safety, or property.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction.
                  </li>
                </ul>
                <p className="text-slate leading-relaxed mt-3">
                  We do not sell your personal information to third parties for their direct marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  6. Data Security
                </h2>
                <p className="text-slate leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit (SSL/TLS), secure server infrastructure, access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  7. Data Retention
                </h2>
                <p className="text-slate leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period may vary depending on the context of the processing and our legal obligations. When your personal information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  8. Your Rights and Choices
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <p>
                    <strong>8.1 Access and Portability:</strong> You have the right to request a copy of the personal information we hold about you and to receive it in a structured, commonly used, and machine-readable format.
                  </p>
                  <p>
                    <strong>8.2 Correction:</strong> You have the right to request that we correct any inaccurate or incomplete personal information we hold about you.
                  </p>
                  <p>
                    <strong>8.3 Deletion:</strong> You have the right to request that we delete your personal information, subject to certain legal exceptions and retention requirements.
                  </p>
                  <p>
                    <strong>8.4 Opt-Out of Marketing:</strong> You may opt out of receiving marketing communications from us at any time by clicking the &quot;unsubscribe&quot; link in our emails or by contacting us at sales@awgotravel.com.
                  </p>
                  <p>
                    <strong>8.5 Do Not Sell My Personal Information:</strong> We do not sell your personal information. If you are a California resident, you have the right under the California Consumer Privacy Act (CCPA) to request information about our data collection practices and to opt out of any future sale of your personal information.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  9. California Privacy Rights (CCPA)
                </h2>
                <div className="text-slate leading-relaxed space-y-3">
                  <p>
                    If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with additional rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>The right to know what personal information we collect, use, disclose, and sell.</li>
                    <li>The right to request deletion of your personal information.</li>
                    <li>The right to opt out of the sale of your personal information.</li>
                    <li>The right to non-discrimination for exercising your CCPA rights.</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us at sales@awgotravel.com. We will respond to your request within 45 days as required by the CCPA. We may need to verify your identity before processing your request.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  10. Children&apos;s Privacy
                </h2>
                <p className="text-slate leading-relaxed">
                  Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18 without parental consent, we will take steps to delete that information promptly. If you believe we have collected information from a child under 18, please contact us at sales@awgotravel.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  11. International Data Transfers
                </h2>
                <p className="text-slate leading-relaxed">
                  Your personal information may be transferred to and processed in countries other than your country of residence, including the United States, where our servers and offices are located. These countries may have data protection laws that differ from those in your jurisdiction. By using our Services, you consent to the transfer of your information to the United States and other countries as necessary to provide our Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  12. Third-Party Links
                </h2>
                <p className="text-slate leading-relaxed">
                  Our Site may contain links to third-party websites, services, or applications. This Privacy Policy does not apply to those third-party sites. We are not responsible for the privacy practices or content of third-party websites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  13. Changes to This Privacy Policy
                </h2>
                <p className="text-slate leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will post the updated Privacy Policy on our Site and update the &quot;Effective Date&quot; at the top of this page. Your continued use of our Services after any changes constitutes your acceptance of the revised Privacy Policy. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-navy mb-4">
                  14. Contact Information
                </h2>
                <p className="text-slate leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
