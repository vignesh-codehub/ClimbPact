import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Handshake,
  ArrowUpRight,
  BarChart3,
  Globe2,
} from "lucide-react";

interface WhyUsItem {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

const WHY_US_ITEMS: WhyUsItem[] = [
  {
    icon: <Users className="w-5 h-5" />,
    iconBg: "bg-[#e8f7f6]",
    iconColor: "text-[#00876F]",
    title: "Right Talent Match",
    description:
      "Connecting the right skills with the right opportunities.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    iconBg: "bg-[#e8f0fe]",
    iconColor: "text-[#1d4ed8]",
    title: "Efficient Hiring",
    description:
      "Making recruitment smoother and faster.",
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    iconBg: "bg-[#fef3e2]",
    iconColor: "text-[#f5a623]",
    title: "Trusted Partnerships",
    description:
      "Building relationships through trust and commitment.",
  },
  {
    icon: <ArrowUpRight className="w-5 h-5" />,
    iconBg: "bg-[#eaf8f0]",
    iconColor: "text-[#16a34a]",
    title: "People Focused",
    description:
      "Empowering professionals with strategic coaching, interview mentorship, and career-defining placements with top enterprises.",
  },
  {
    icon: <Globe2 className="w-5 h-5" />,
    iconBg: "bg-[#e0f7f6]",
    iconColor: "text-[#0d9488]",
    title: "Clear Communication",
    description:
      "Keeping every step transparent.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    iconBg: "bg-[#eff2fe]",
    iconColor: "text-[#4f46e5]",
    title: "Growth Together",
    description:
      "Supporting long-term professional growth.",
  },
];

export const WhyChooseUs: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <section id="why-us" className="pt-14 lg:pt-18 bg-white relative overflow-hidden">
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
              Why Climb Pact
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
            Building Success Through People and Partnerships.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl"
          >
            Progress begins when potential finds purpose. Explore how Climb Pact brings them together.
          </motion.p>
        </div>

        {/* 2x3 Interactive Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {WHY_US_ITEMS.map((item, index) => {
            const isSelected = activeCard === index;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                onMouseEnter={() => setActiveCard(index)}
                className={`group relative flex flex-col justify-start rounded-2xl p-5 sm:p-6 bg-white transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-2 border-[#00876F] shadow-[0_10px_28px_-4px_rgba(7,159,150,0.18)]"
                    : "border-2 border-transparent shadow-[0_4px_18px_-2px_rgba(9,44,85,0.05)] hover:border-[#00876F]/40"
                }`}
              >
                {/* Icon & Heading in the Same Row */}
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 leading-snug ${
                      isSelected ? "text-[#00876F]" : "text-[#001813] group-hover:text-[#00876F]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="mt-3 text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Banner */}
     <div className="relative mt-24 overflow-hidden bg-gradient-to-br from-[#001813] via-[#003B30] to-[#001813] px-6 py-20 sm:px-8 lg:px-12">
  {/* Gradient glow effects */}
  <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#00A889]/20 blur-[100px]" />

  <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#00876F]/20 blur-[100px]" />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-4xl text-center">
    <span className="mb-4 inline-block rounded-full border border-[#00A889]/30 bg-[#00876F]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#35D6B2]">
      Let's Build Together
    </span>

    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
      Ready to Bring Ambition and{" "}
      <span className="bg-gradient-to-r from-[#35D6B2] via-[#00A889] to-[#7CEBD0] bg-clip-text text-transparent">
        Opportunity Together?
      </span>
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
      Let’s connect to build enduring partnerships, nurture human potential,
      and shape the future of your organization.
    </p>
  </div>
</div>
    </section>
  );
};