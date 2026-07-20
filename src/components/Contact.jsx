import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
  MessageSquare,
  Calendar,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Globe
} from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0c0c0e]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-indigo-600/15 via-cyan-500/10 to-emerald-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="GET IN TOUCH"
          badgeVariant="live"
          badgeIcon={MessageSquare}
          title="Ready to Scale Your Business with"
          highlightText="AI & Growth Systems?"
          description="Whether you need Meta ad campaigns that deliver qualified leads or custom AI tools that automate operations, let's map out a strategy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Direct Action Buttons & Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-indigo-500/30 space-y-6 relative overflow-hidden">
              
              <div className="space-y-3">
                <Badge variant="live" ping>
                  Direct Booking Open
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Book a Free 30-Minute Growth Strategy Call
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  We'll evaluate your current acquisition channels, identify AI automation opportunities, and outline a clear action plan for your business.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Button
                  variant="emerald"
                  size="lg"
                  icon={Calendar}
                  onClick={() => {
                    window.open("mailto:m.binamir@growthwithmba.com?subject=Discovery%20Call%20Inquiry", "_blank");
                  }}
                  className="w-full text-base py-3.5 shadow-emerald-500/30"
                >
                  Book a Free Discovery Call
                </Button>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Button
                    variant="secondary"
                    size="md"
                    icon={Mail}
                    onClick={() => {
                      window.open("mailto:m.binamir@growthwithmba.com", "_blank");
                    }}
                    className="w-full text-xs"
                  >
                    Email Me
                  </Button>

                  <Button
                    variant="secondary"
                    size="md"
                    icon={Send}
                    onClick={() => {
                      window.open("https://wa.me/?text=Hi%20M.%20Bin%20Amir,%20I'd%20like%20to%20discuss%20a%20growth%20project.", "_blank");
                    }}
                    className="w-full text-xs hover:border-emerald-500/40"
                  >
                    WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    size="md"
                    icon={Globe}
                    onClick={() => {
                      window.open("https://linkedin.com", "_blank");
                    }}
                    className="w-full text-xs hover:border-indigo-500/40"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>

              {/* Trust Features */}
              <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400 font-medium">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" /> Guaranteed response within 24h
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" /> Confidential strategy discussion
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Professional Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-700/60 shadow-2xl relative space-y-6">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <h4 className="text-xl font-extrabold text-white">M. Bin Amir</h4>
                  <p className="text-xs font-mono text-indigo-400">GrowthWithMBA</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">Direct Email</div>
                  <a
                    href="mailto:m.binamir@growthwithmba.com"
                    className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors block"
                  >
                    m.binamir@growthwithmba.com
                  </a>
                </div>

                <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">Core Specialties</div>
                  <div className="text-xs text-zinc-300 font-medium">
                    Meta Ads • AI Automations • Lovable & Antigravity AI Products
                  </div>
                </div>

                <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">Availability</div>
                  <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Open for Selected Client Accounts
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center text-xs font-mono text-zinc-500">
                AI Growth Marketer • AI Product Builder
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
