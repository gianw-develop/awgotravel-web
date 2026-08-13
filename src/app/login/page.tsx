"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white flex overflow-auto">
      <div
        className="hidden lg:flex lg:w-1/2 relative items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-md px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-light text-white tracking-tight mb-4">
              Welcome to Your
              <br />
              <span className="font-medium gradient-text">Private Portal</span>
            </h2>
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Access your travel itineraries, documents, and communicate
              directly with your dedicated travel director.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <Link href="/" className="inline-block mb-8">
              <Logo />
            </Link>
            <h1 className="text-2xl font-light text-navy tracking-tight">
              Client <span className="font-medium">Sign In</span>
            </h1>
            <p className="text-slate text-sm font-light mt-2">
              Access your private travel portal
            </p>
          </div>

          {submitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                <Lock className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-medium text-navy mb-2 tracking-tight">
                Portal Coming Soon
              </h3>
              <p className="text-slate text-sm font-light leading-relaxed mb-6">
                Our private client portal is currently under development.
                Please contact your travel director directly for itinerary
                access and updates.
              </p>
              <a
                href="mailto:sales@awgotravel.com"
                className="inline-flex items-center gap-2 text-gold font-medium text-xs uppercase tracking-[0.2em] hover:gap-3 transition-all duration-300"
              >
                Contact Us <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-navy mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-sm bg-white text-navy font-light"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-navy mb-2 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/50" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-sm bg-white text-navy font-light"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate/50 hover:text-navy transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold/20"
                  />
                  <span className="text-slate font-light text-xs">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="text-gold text-xs font-medium hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-light text-white font-medium py-3.5 rounded-xl transition-all duration-300 text-xs uppercase tracking-[0.2em]"
              >
                Sign In
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-4 bg-white text-slate/50 font-light">or</span>
                </div>
              </div>

              <p className="text-center text-sm text-slate font-light">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-gold font-medium hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </form>
          )}

          <div className="mt-10 pt-6 border-t border-gray-100 text-center">
            <Link
              href="/"
              className="text-slate/50 text-xs font-light hover:text-navy transition-colors"
            >
              &larr; Back to awgotravel.com
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
