import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [enquiryType, setEnquiryType] = useState<"employer" | "candidate">("employer");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      // 1. Sends data directly to your Cloudflare Pages Function endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enquiryType,
          ...formData,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to deliver message");
      }

      // 2. Mark state as success and reset form inputs
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#f8fbfe] overflow-hidden py-20 lg:py-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#00876F]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00876F]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00876F]">
              Direct Connection
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00876F]" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#001813] tracking-tight leading-tight"
          >
            Start the <span className="text-[#00876F]">Conversation</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal"
          >
            Every great chapter starts with a simple conversation. Whether you are building an
            organization with vision or seeking an opportunity to realize your full potential,
            our team is ready to listen and build with you.
          </motion.p>
        </div>

        {/* 1. TOP: Direct Enquiries 3-Column Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {/* Email */}
          <div className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-[0_4px_18px_-2px_rgba(9,44,85,0.04)] flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#e8f7f6] flex items-center justify-center shrink-0 text-[#00876F]">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs text-neutral-400 font-medium">Email Us</span>
              <a
                href="mailto:hr@climbpact.com"
                className="text-sm font-semibold text-[#001813] hover:text-[#00876F] transition-colors truncate block"
              >
                hr@climbpact.com
              </a>
            </div>
          </div>

          {/* Phone (No Wrap) */}
          <div className="bg-white rounded-2xl p-3 border border-neutral-100 shadow-[0_4px_18px_-2px_rgba(9,44,85,0.04)] flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#e8f0fe] flex items-center justify-center shrink-0 text-[#1d4ed8]">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-xs text-neutral-400 font-medium">Call Our Advisory</span>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#001813] whitespace-nowrap overflow-hidden">
                <a href="tel:+919385544332" className="hover:text-[#00876F] transition-colors shrink-0">
                  +91 9385544332
                </a>
                <span className="text-neutral-300">|</span>
                <a href="tel:+918105557719" className="hover:text-[#00876F] transition-colors shrink-0">
                  +91 8105557719
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-[0_4px_18px_-2px_rgba(9,44,85,0.04)] flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#eaf8f0] flex items-center justify-center shrink-0 text-[#16a34a]">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-xs text-neutral-400 font-medium">Headquarters</span>
              <p className="text-sm font-semibold text-[#001813] truncate">
                Bangalore, Karnataka, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. BOTTOM: Interactive Form with Row-Specific Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-white rounded-3xl p-7 sm:p-10 border border-neutral-100 shadow-[0_12px_36px_-6px_rgba(9,44,85,0.08)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Type Switcher */}
            <div>
              <label className="block text-xs font-bold text-[#001813] uppercase tracking-wider mb-2.5">
                I am enquiring as:
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-100/80 rounded-xl max-w-md">
                <button
                  type="button"
                  onClick={() => setEnquiryType("employer")}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    enquiryType === "employer"
                      ? "bg-white text-[#00876F] shadow-sm ring-1 ring-[#00876F]/30"
                      : "text-neutral-500 hover:text-[#001813]"
                  }`}
                >
                  <Building className="w-4 h-4" />
                  <span>Business</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEnquiryType("candidate")}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    enquiryType === "candidate"
                      ? "bg-white text-[#00876F] shadow-sm ring-1 ring-[#00876F]/30"
                      : "text-neutral-500 hover:text-[#001813]"
                  }`}
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Job Seeker</span>
                </button>
              </div>
            </div>

            {/* 1st ROW: First Name | Last Name | Work Email (1/3 each on lg) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                  First Name <span className="text-[#00876F]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#00876F] focus:ring-2 focus:ring-[#00876F]/20 text-sm transition-all text-[#001813]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                  Last Name <span className="text-[#00876F]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vance"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#00876F] focus:ring-2 focus:ring-[#00876F]/20 text-sm transition-all text-[#001813]"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                  {enquiryType === "employer" ? "Work Email " : "Email "}
                  <span className="text-[#00876F]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#00876F] focus:ring-2 focus:ring-[#00876F]/20 text-sm transition-all text-[#001813]"
                />
              </div>
            </div>

            {/* 2nd ROW: Phone Number (same 1 col width as First Name) | Organization Name (wider 2 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-4">
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 (000) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#00876F] focus:ring-2 focus:ring-[#00876F]/20 text-sm transition-all text-[#001813]"
                />
              </div>

              <div className="lg:col-span-8">
                <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                  {enquiryType === "employer" ? "Organization Name" : "Current Role / Target Role"}
                </label>
                <input
                  type="text"
                  placeholder={
                    enquiryType === "employer"
                      ? "e.g. Apex Global Innovations"
                      : "e.g. Senior Product Manager"
                  }
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#00876F] focus:ring-2 focus:ring-[#00876F]/20 text-sm transition-all text-[#001813]"
                />
              </div>
            </div>

            {/* 3rd ROW: Message / Enquiry Details */}
            <div>
              <label className="block text-xs font-medium text-neutral-600 mb-1.5">
                Message / Enquiry Details <span className="text-[#00876F]">*</span>
              </label>
              <textarea
                rows={4}
                required
                placeholder={
                  enquiryType === "employer"
                    ? "Describe your talent requirements, headcount goals, or advisory needs..."
                    : "Describe your career background and what roles you are exploring..."
                }
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#00876F] focus:ring-2 focus:ring-[#00876F]/20 text-sm transition-all text-[#001813] resize-none"
              />
            </div>

            {/* Feedback status messages right above the button */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-center gap-2.5"
              >
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{"Unable to submit your enquiry at the moment. Please try again or contact our team directly via email or phone. We're here to help!"}</span>
              </motion.div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#00876F]" />
                <span>Your information is protected by executive confidentiality.</span>
              </div>

              <motion.button
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#00876F] hover:bg-[#068981] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-md shadow-[#00876F]/20 transition-all cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 rotate-12" />
                  </>
                )}
              </motion.button>
            </div>

            {/* Submit Action Row */}
            {/* <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#00876F]" />
                <span>Your information is protected by executive confidentiality.</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#00876F] hover:bg-[#068981] text-white font-semibold text-sm shadow-md shadow-[#00876F]/20 transition-all cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 rotate-12" />
              </motion.button>
            </div> */}

          </form>
        </motion.div>

      </div>
    </section>
  );
};