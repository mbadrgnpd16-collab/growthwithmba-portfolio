import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { usePageSEO } from "../utils/usePageSEO";
import {
  MessageSquare,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Globe,
  PhoneCall,
  AlertCircle
} from "lucide-react";

// Formspree Form ID configured via Vite environment variable or fallback placeholder
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || "YOUR_FORMSPREE_FORM_ID";

export const Contact = () => {
  usePageSEO(
    "Contact M. Bin Amir | Get in Touch",
    "Get in touch with M. Bin Amir for AI product building, web applications, social media management, content strategy, or Meta advertising."
  );

  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service");

  const emailAddress = "growthwithmba@gmail.com";
  const displayWhatsApp = "+92 321 2594511";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    businessName: "",
    link: "",
    serviceNeeded: "",
    message: ""
  });

  useEffect(() => {
    if (serviceParam === "ai") {
      setFormState((prev) => ({ ...prev, serviceNeeded: "AI Product / Web App" }));
    } else if (serviceParam === "growth") {
      setFormState((prev) => ({ ...prev, serviceNeeded: "Social Media Management" }));
    }
  }, [serviceParam]);

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

    const endpoint = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...formState,
          _subject: `New Project Inquiry from ${formState.name} (${formState.serviceNeeded || "General"})`
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormState({
          name: "",
          email: "",
          businessName: "",
          link: "",
          serviceNeeded: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#09090b]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-indigo-600/15 via-cyan-500/10 to-emerald-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <SectionHeader
          badge="GET IN TOUCH"
          badgeVariant="live"
          badgeIcon={MessageSquare}
          title="Start a Project or Conversation"
          description="Whether you have an AI product idea to build or want to grow your brand through social media, send an inquiry below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 w-full"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/35 relative overflow-hidden">
              <div className="mb-6">
                <Badge variant="live" ping className="mb-2">
                  Project Form
                </Badge>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Project & Inquiry Details
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Fill out the details below and I will respond within 24 hours.
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
                  <h4 className="text-lg font-bold text-white">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-zinc-300">
                    Thanks! Your message has been received and I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-mono underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Business / Company Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formState.businessName}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Website or Social Link <span className="text-zinc-500">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="link"
                        value={formState.link}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="https:// or @handle"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                      What do you need help with? <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="serviceNeeded"
                      required
                      value={formState.serviceNeeded}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="" disabled>Select an option...</option>
                      <option value="AI Product / Web App">AI Product / Web App</option>
                      <option value="Website">Website</option>
                      <option value="AI Tool">AI Tool</option>
                      <option value="Chrome Extension">Chrome Extension</option>
                      <option value="Chatbot">Chatbot</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Growth Strategy">Growth Strategy</option>
                      <option value="Meta Advertising">Meta Advertising</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                      Tell me about your project or business <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      placeholder="Share details about your goals, product concept, or brand requirements..."
                    />
                  </div>

                  <Button
                    variant="emerald"
                    size="lg"
                    type="submit"
                    className="w-full mt-2"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Send Inquiry"}
                  </Button>

                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Form submission error. You can also email directly to growthwithmba@gmail.com.</span>
                    </div>
                  )}
                </form>
              )}

              <div className="pt-4 mt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400 font-medium">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" /> Response within 24 hours
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" /> Direct founder collaboration
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 w-full space-y-6"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-700/60 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <h4 className="text-xl font-extrabold text-white">M. Bin Amir</h4>
                  <p className="text-xs font-mono text-indigo-400">GrowthWithMBA</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-3">
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

                <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Direct
                  </div>
                  <a
                    href={`https://wa.me/923212594511?text=Hi%20M.%20Bin%20Amir,%20I'd%20like%20to%20discuss%20a%20project.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors block font-mono"
                  >
                    {displayWhatsApp}
                  </a>
                </div>
              </div>

              <div className="pt-2 text-center text-xs font-mono text-zinc-500">
                AI Product Building • Social Media • Growth Marketing
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
