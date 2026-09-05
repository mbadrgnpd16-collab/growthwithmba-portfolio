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
  CheckCircle2,
  Clock,
  ShieldCheck,
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

  const isGrowthContext = serviceParam === "growth";

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <SectionHeader
          badge="CONTACT"
          badgeVariant="default"
          badgeIcon={MessageSquare}
          title="Start a Project or Conversation"
          description="Whether you have an AI product idea to build or want to grow your brand through social media, send an inquiry below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 w-full"
          >
            <div className="bg-[#0d0d10] p-6 sm:p-8 rounded-xl border border-zinc-800 space-y-6">
              <div>
                <Badge variant={isGrowthContext ? "gold" : "ai"} className="mb-2">
                  Project Form
                </Badge>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Project & Inquiry Details
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-normal">
                  Fill out the details below and I will respond within 24 hours.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-zinc-300 font-normal">
                    Thanks! Your message has been received and I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-zinc-400 hover:text-white font-mono underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
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
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors"
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
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors"
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
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors"
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
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors"
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
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors"
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
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                      placeholder="Share details about your goals, product concept, or brand requirements..."
                    />
                  </div>

                  <Button
                    variant={isGrowthContext ? "gold" : "indigo"}
                    size="lg"
                    type="submit"
                    className="w-full mt-2"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Send Inquiry"}
                  </Button>

                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-zinc-900 border border-rose-900/50 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>Form submission error. You can also email directly to growthwithmba@gmail.com.</span>
                    </div>
                  )}
                </form>
              )}

              <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400 font-medium">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-zinc-500" /> Response within 24 hours
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-zinc-500" /> Direct founder collaboration
                </span>
              </div>
            </div>
          </motion.div>

          {/* Direct Details */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 w-full space-y-6"
          >
            <div className="bg-[#0d0d10] rounded-xl p-6 sm:p-8 border border-zinc-800 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">M. Bin Amir</h4>
                  <p className="text-xs font-mono text-zinc-400">GrowthWithMBA</p>
                </div>
                <Badge variant="default">Available</Badge>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 bg-zinc-900 rounded-lg border border-zinc-800 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-zinc-400" /> Direct Email
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-semibold text-white hover:text-zinc-300 transition-colors block font-mono"
                  >
                    {emailAddress}
                  </a>
                </div>

                <div className="p-3.5 bg-zinc-900 rounded-lg border border-zinc-800 space-y-1">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-zinc-400" /> WhatsApp Direct
                  </div>
                  <a
                    href={`https://wa.me/923212594511?text=Hi%20M.%20Bin%20Amir,%20I'd%20like%20to%20discuss%20a%20project.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors block font-mono"
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
