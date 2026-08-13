import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AW GOTRAVEL collects, uses, protects, and retains personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage eyebrow="Legal" title="Privacy Policy" intro="How we handle information shared through our website and private inquiries." effectiveDate="August 13, 2026" sections={[
    { title: "1. Who we are", content: <p>AW Gotravel LLC is a Wyoming limited liability company providing private travel design and lifestyle coordination. Questions about this policy may be sent to <a className="text-gold hover:underline" href="mailto:sales@awgotravel.com">sales@awgotravel.com</a>.</p> },
    { title: "2. Information we collect", content: <><p>We collect information you choose to provide, including your name, email address, phone number, general destination interests, approximate dates, party size, budget range, preferences, and inquiry message.</p><p>Our hosting provider may automatically process limited technical information such as IP address, browser type, requested pages, timestamps, and security logs needed to deliver and protect the website.</p></> },
    { title: "3. How we use information", content: <p>We use information to respond to inquiries, assess fit, prepare and deliver agreed services, communicate about an engagement, maintain business records, secure the website, and comply with legal obligations. We do not sell personal information.</p> },
    { title: "4. Sharing", content: <><p>Information may be processed by service providers that support hosting, communications, professional advice, or business administration under appropriate obligations. We may disclose information when required by law or to protect legal rights.</p><p>We do not send personal information to a travel provider merely because you submit an inquiry. If an accepted engagement requires coordination involving a third party, we will share only information reasonably necessary and with your knowledge or direction.</p></> },
    { title: "5. Data minimization and sensitive information", content: <p>Please do not submit passports, government identifiers, payment card information, medical records, account passwords, or other highly sensitive information through the public form. We collect only the information reasonably needed for the inquiry or engagement.</p> },
    { title: "6. Retention and security", content: <><p>We retain inquiry and engagement records only as long as reasonably necessary for the purposes described, legal obligations, accounting, and dispute resolution. We use reasonable administrative and technical safeguards, but no internet transmission is completely secure.</p></> },
    { title: "7. Your choices", content: <p>You may request access, correction, or deletion of information we control, subject to legal and recordkeeping requirements. You may also opt out of non-essential marketing communications at any time by contacting us.</p> },
    { title: "8. International visitors and children", content: <p>The website is operated from the United States. Information may be processed in the United States or other locations used by our providers. The website is not directed to children under 18, and we do not knowingly collect their information through the inquiry form.</p> },
    { title: "9. Changes and contact", content: <p>We may update this policy prospectively and will post the effective date above. Contact AW Gotravel LLC at <a className="text-gold hover:underline" href="mailto:sales@awgotravel.com">sales@awgotravel.com</a> or <a className="text-gold hover:underline" href="tel:+14099953371">+1 409 995-3371</a>.</p> },
  ]} />;
}