"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";


interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelers: string;
  dates: string;
  budget: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  travelers: "2",
  dates: "",
  budget: "",
  message: "",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "sales@awgotravel.com",
    href: "mailto:sales@awgotravel.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 409 995-3371",
    href: "tel:+14099953371",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Wyoming, United States",
    href: null,
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Fri: 9AM-6PM MT",
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Private inquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent([
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Destination idea: ${form.destination || "Not provided"}`,
      `Travelers: ${form.travelers}`,
      `Dates: ${form.dates || "Not provided"}`,
      `Budget range: ${form.budget || "Not provided"}`,
      "",
      form.message || "No additional message provided.",
    ].join("\n"));
    window.location.href = `mailto:sales@awgotravel.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/images/1507525428034-b723cf961d3e.jpg')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Private Inquiry
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white mt-4 mb-5 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start a <span className="font-medium">Conversation</span>
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tell us what you&apos;re looking for. Our team will respond within
            24 hours with a private consultation and initial scope.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
                  <h2 className="text-2xl font-medium text-navy mb-2 tracking-tight">
                    Tell Us What You Need
                  </h2>
                  <p className="text-slate text-sm mb-8 font-light">
                    Share your preferences and our team will design a private
                    consultation tailored to your goals.
                  </p>

                  {status === "sent" ? (
                    <div className="text-center py-16">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-navy mb-2">
                        Thank You!
                      </h3>
                      <p className="text-slate">
                        Your email application has been opened with your inquiry ready to send.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 text-gold font-semibold hover:underline"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="full-name" className="block text-sm font-medium text-navy mb-2">Full Name *</label>
                          <input
                            id="full-name" type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-sm bg-white text-navy"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email-address" className="block text-sm font-medium text-navy mb-2">Email Address *</label>
                          <input
                            id="email-address" type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-sm bg-white text-navy"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone-number" className="block text-sm font-medium text-navy mb-2">Phone Number</label>
                          <input
                            id="phone-number" type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-sm bg-white text-navy"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="desired-destination" className="block text-sm font-medium text-navy mb-2">Desired Destination</label>
                          <input
                            id="desired-destination" type="text"
                            name="destination"
                            value={form.destination}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-sm bg-white text-navy"
                            placeholder="e.g., Maldives, Europe..."
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-6">
                        <div>
                          <label htmlFor="travelers" className="block text-sm font-medium text-navy mb-2">Travelers</label>
                          <select
                            id="travelers" name="travelers"
                            value={form.travelers}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-sm bg-white text-navy"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                              <option key={n} value={n}>
                                {n} {n === 1 ? "traveler" : "travelers"}
                              </option>
                            ))}
                            <option value="10+">10+ travelers</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="travel-dates" className="block text-sm font-medium text-navy mb-2">Travel Dates</label>
                          <input
                            id="travel-dates" type="text"
                            name="dates"
                            value={form.dates}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-sm bg-white text-navy"
                            placeholder="e.g., Dec 2026"
                          />
                        </div>
                        <div>
                          <label htmlFor="budget-range" className="block text-sm font-medium text-navy mb-2">Budget Range</label>
                          <select
                            id="budget-range" name="budget"
                            value={form.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-sm bg-white text-navy"
                          >
                            <option value="">Select budget</option>
                            <option value="3000-5000">$3,000 - $5,000</option>
                            <option value="5000-10000">$5,000 - $10,000</option>
                            <option value="10000-25000">$10,000 - $25,000</option>
                            <option value="25000-50000">$25,000 - $50,000</option>
                            <option value="50000+">$50,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="tell-us-about-your-dream-trip" className="block text-sm font-medium text-navy mb-2">Tell Us About Your Dream Trip</label>
                        <textarea
                          id="tell-us-about-your-dream-trip" name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors text-sm resize-none bg-white text-navy"
                          placeholder="Describe your ideal journey - interests, pace, people, and special occasions..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Open Email Inquiry
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy">
                            {info.title}
                          </div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-slate text-sm hover:text-gold transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-slate text-sm">
                              {info.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-navy rounded-xl p-8 text-center">
                    <h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                      Need Immediate Assistance?
                    </h3>
                    <p className="text-white/60 text-sm mb-5 font-light">
                      Our team is ready to help with any questions about our
                      services.
                    </p>
                    <a
                      href="mailto:sales@awgotravel.com"
                      className="inline-flex bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm"
                    >
                      Email Us Now
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
