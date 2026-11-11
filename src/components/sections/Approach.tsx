import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface StepItem {
  number: string;
  badgeBg: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    badgeBg: "bg-[#183b60]",
    category: "STAGE 01",
    title: "Understand",
    tagline: "We begin by listening.",
    description:
      "We take time to understand your business goals, workplace culture, expectations and workforce challenges. This helps us see beyond the immediate requirement and understand what success truly looks like for you.",
  },
  {
    number: "02",
    badgeBg: "bg-[#00876F]",
    category: "STAGE 02",
    title: "Strategize",
    tagline: "We turn understanding into direction.",
    description:
      "We identify the right approach, define priorities and develop people-focused solutions aligned with your requirements, whether it involves talent acquisition, staffing or HR consulting.",
  },
  {
    number: "03",
    badgeBg: "bg-[#183b60]",
    category: "STAGE 03",
    title: "Connect",
    tagline: "We bring the right possibilities together.",
    description:
      "Through focused talent sourcing, thoughtful evaluation and clear communication, we connect organizations with professionals whose capabilities and aspirations align with the opportunity.",
  },
  {
    number: "04",
    badgeBg: "bg-[#00876F]",
    category: "STAGE 04",
    title: "Grow",
    tagline: "We build value beyond the first connection.",
    description:
      "We stay committed to meaningful relationships, supporting successful transitions and evolving workforce needs while creating opportunities for continued growth.",
  },
];

const WAY_FORWARD_STEPS = [
  { text: "Understand the Need" },
  { text: "Strategize the Approach" },
  { text: "Connect the Potential" },
  { text: "Grow Together" },
];

export const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Infinitely loop 0 -> 1 -> 2 -> 3 -> 0 every 1.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WAY_FORWARD_STEPS.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#f8fbfe] relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#00876F]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00876F]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00876F]">
              How We Work
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00876F]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-[#001813] leading-tight"
          >
            Four Steps. One Shared Direction.{" "}
            <span className="text-[#00876F]">Meaningful Progress.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl font-normal"
          >
            At Climb Pact, every successful partnership begins with understanding and grows
            through purposeful action. We follow a thoughtful four-step approach that brings
            business ambitions and human potential together.
          </motion.p>
        </div>

        {/* 4-Stage Connected Cards Container */}
        <div className="relative mt-16 sm:mt-20">
          {/* Subtle connection line behind the cards on desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#00876F]/25 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between rounded-2xl p-7 bg-gradient-to-b from-[#001813]/90 to-[#00876F]/90 border border-white/10 hover:border-[#00876F]/60 shadow-[0_12px_28px_-6px_rgba(9,44,85,0.35)] hover:shadow-[0_22px_44px_-8px_rgba(7,159,150,0.28)] transition-all duration-300 overflow-hidden"
              >
                {/* Ambient glow highlight on hover */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#00876F]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#f5a623] transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Tagline */}
                  {/* <p className="mt-1 text-xs font-semibold text-[#00876F]">
                    {step.tagline}
                  </p> */}

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* OUR WAY FORWARD Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-100 shadow-[0_8px_30px_rgba(9,44,85,0.06)] max-w-4xl mx-auto text-center relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00876F]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 mb-3.5">
            <Sparkles className="w-4 h-4 text-[#00876F]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00876F]">
              Our Way Forward
            </span>
          </div>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal max-w-2xl mx-auto">
            We believe the best outcomes are not created through transactions, but through
            trust, understanding and shared commitment.
          </p>

          {/* Continuous Loop Progression */}
          <div className="mt-6 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-[#001813]">
            {WAY_FORWARD_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <React.Fragment key={step.text}>
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      y: isActive ? -3 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative cursor-pointer"
                    onClick={() => setActiveStep(idx)}
                  >
                    <div
                      className={`relative px-4 py-2 rounded-full transition-all duration-300 select-none ${
                        isActive
                          ? "bg-[#00876F] text-white shadow-lg shadow-[#00876F]/30 ring-2 ring-[#00876F]/20 font-bold"
                          : isPast
                          ? "bg-[#00876F]/10 text-[#00876F] border border-[#00876F]/25 font-semibold"
                          : "bg-[#f8fbfe] text-[#001813] border border-neutral-200/80 font-medium hover:border-[#00876F]/30"
                      }`}
                    >
                      <span>{step.text}</span>
                    </div>
                  </motion.div>

                  {idx < WAY_FORWARD_STEPS.length - 1 && (
                    <motion.span
                      animate={{
                        x: isActive ? [0, 4, 0] : 0,
                        opacity: isActive || isPast ? 1 : 0.35,
                        color: isActive ? "#00876F" : isPast ? "#00876F" : "#cbd5e1",
                      }}
                      transition={{
                        repeat: isActive ? Infinity : 0,
                        duration: 1.2,
                        ease: "easeInOut",
                      }}
                      className="font-bold select-none text-base"
                    >
                      →
                    </motion.span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};