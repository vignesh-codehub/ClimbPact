import React from "react";
import { motion } from "framer-motion";
import { Send, Compass } from "lucide-react";
import heroImg from "../../assets/hero.webp";

interface MetricItem {
  value: string;
  label: string;
  accentColor?: string;
}

const METRICS: MetricItem[] = [
  { value: "98%", label: "Placement Retention" },
  { value: "500+", label: "Placements Placed" },
  { value: "100%", label: "Dedicated Advisory", accentColor: "#00876F" },
];

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff]/50 via-white to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#00876F]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 rounded-full bg-[#f5a623]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Vision Copy, CTAs & Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-[#001813] tracking-tight leading-[1.14]"
            >
              Building Partnerships.{" "}
              <span className="relative inline-block text-[#00876F]">
                Shaping Futures.
                {/* Subtle highlighter stroke */}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-1.5 left-0 h-2.5 bg-[#00876F]/20 -z-10 rounded-sm"
                />
              </span>
            </motion.h1>

            {/* Vision Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-[#183b60]/85 max-w-xl leading-relaxed"
            >
              To shape the future of work through strong partnerships, empowered people and
              innovative HR solutions that drive business growth and create meaningful opportunities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary Action */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#00876F] hover:bg-[#068981] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#00876F]/25 hover:shadow-xl hover:shadow-[#00876F]/30 transition-all duration-200"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4 rotate-12" />
              </motion.a>

              {/* Secondary Action */}
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border-2 border-[#001813] text-[#001813] hover:bg-[#001813] hover:text-white font-medium text-sm sm:text-base transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <Compass className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Divider Line */}
            <div className="mt-12 w-full max-w-lg h-px bg-neutral-200" />

            {/* Statistics Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 grid grid-cols-3 gap-6 max-w-lg"
            >
              {METRICS.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                    style={{ color: metric.accentColor || "#001813" }}
                  >
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-500 font-normal mt-1 leading-tight">
                    {metric.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[480px]"
            >
              <div className="absolute -inset-2.5 rounded-[2.5rem] bg-gradient-to-tr from-[#00876F]/20 via-transparent to-[#f5a623]/20 blur-lg" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl bg-neutral-100 aspect-[4/4.5]">
                <img
                  src={heroImg}
                  alt="Professional collaboration and partnership"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};