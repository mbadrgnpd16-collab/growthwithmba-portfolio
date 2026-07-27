import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
  MessageSquare,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Globe,
  PhoneCall
} from "lucide-react";

// REPLACE THIS with your actual Formspree Form ID/Endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpznjepg"; 

export const Contact = () => {
  const emailAddress = "growthwithmba@gmail.com";
  const displayWhatsApp = "+92 321 2594511";
  
  const [formState, setFormState] = useState({
    name: "",
    businessName: "",
    email: "",
    instagramHandle: "",
    website: "",
    businessGoal: "",
    message: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...formState,
          _subject: `New Social Media Audit Request from ${formState.name}`
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormState({
          name: "",
          businessName: "",
          email: "",
          instagramHandle: "",
          website: "",
          businessGoal: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#0c0c0e]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-indigo-600/15 via-cyan-500/10 to-emerald-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="GET IN TOUCH"
          badgeVariant="live"
          badgeIcon={MessageSquare}
          title="Let's Grow Your Brand."
          highlightText=""
          description="Whether you're looking for consistent social media management, stronger Instagram growth, or better-performing campaigns, I'd love to learn more about your business and how I can help."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Formspree Audit Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 w-full"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/35 relative overflow-hidden">
              <div className="mb-6">
                <Badge variant="live" ping className="mb-2">
                  Free Assessment
                </Badge>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Get Your Free Social Media Audit
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Fill out the form below, and I will analyze your current presence and send you a custom growth roadmap.
                </p>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Audit Request Received!</h4>
                  <p className="text-xs text-zinc-300">
                    Thanks! I've received your request and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-mono underline cursor-pointer"
                  >
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Business Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formState.businessName}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="My Agency Ltd"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Business Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Instagram Handle <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="instagramHandle"
                        required
                        value={formState.instagramHandle}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="@mybrand"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                      Website URL <span className="text-zinc-600">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formState.website}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="https://example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                      What is your primary business goal? <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="businessGoal"
                      required
                      value={formState.businessGoal}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="" disabled>Select a goal...</option>
                      <option value="Increase Brand Reach">Increase Brand Reach</option>
                      <option value="Generate Inquiries & Leads">Generate Inquiries & Leads</option>
                      <option value="Grow Instagram Followers">Grow Instagram Followers</option>
                      <option value="Scale E-Commerce Store Sales">Scale E-Commerce Store Sales</option>
                      <option value="B2B Client Acquisition">B2B Client Acquisition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                      Message / Additional Notes
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      placeholder="Tell me about your product or service..."
                    />
                  </div>

                  <Button
                    variant="emerald"
                    size="lg"
                    type="submit"
                    className="w-full mt-2"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Submitting..." : "Get My Free Social Media Audit"}
                  </Button>

                  {status === "error" && (
                    <p className="text-center text-xs text-rose-400 font-mono mt-2">
                      Something went wrong. Please try again or email growthwithmba@gmail.com directly.
                    </p>
                  )}
                </form>
              )}

              {/* Trust Features */}
              <div className="pt-4 mt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400 font-medium">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" /> Audit delivered within 48 hours
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" /> 100% confidential brand analysis
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
            className="lg:col-span-5 w-full"
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
                {/* Direct Email Card */}
                <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" /> Direct Email
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors block font-mono"
                  >
                    {emailAddress}
                  </a>
                </div>

                {/* Direct WhatsApp Card */}
                <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Contact
                  </div>
                  <a
                    href={`https://wa.me/923212594511?text=Hi%20M.%20Bin%20Amir,%20I'd%20like%20to%20discuss%20a%20social%20media%20audit.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors block font-mono"
                  >
                    {displayWhatsApp}
                  </a>
                </div>

                {/* Direct LinkedIn Card */}
                <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-400" /> Professional Network
                  </div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors block font-mono"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="pt-2 text-center text-xs font-mono text-zinc-500">
                SMM • Growth Marketer • Meta Ads
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
