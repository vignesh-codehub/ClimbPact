import React from "react";
import { motion } from "framer-motion";
import {
  UserSearch,
  Search,
  UsersRound,
  TrendingUp,
  Share2,
  Building2,
} from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: <UserSearch className="w-5 h-5 text-[#001813]" />,
    title: "Recruitment & Talent Acquisition",
    description:
      "Tailored full-cycle recruitment identifying leaders and high-impact specialists aligned with your business culture, vision, and operational rhythm.",
  },
  {
    icon: <Search className="w-5 h-5 text-[#001813]" />,
    title: "Talent Sourcing",
    description:
      "Proactive talent mapping and pipeline development connecting organizations with passive, specialized, and niche industry candidates.",
  },
  {
    icon: <UsersRound className="w-5 h-5 text-[#001813]" />,
    title: "HR Consultancy",
    description:
      "Advisory services in workforce planning, organizational structure design, performance metrics architecture, and employee retention strategies.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#001813]" />,
    title: "Career Opportunities",
    description:
      "Personalized guidance and mentorship for professionals seeking their next career leap with matching forward-thinking top-tier organizations.",
  },
  {
    icon: <Share2 className="w-5 h-5 text-[#001813]" />,
    title: "Talent Solutions",
    description:
      "Flexible contingent staffing, interim leadership, project-based workforce arrangements, and specialized domain capability scaling.",
  },
  {
    icon: <Building2 className="w-5 h-5 text-[#001813]" />,
    title: "Business Partnership",
    description:
      "Long-term strategic HR collaboration acting as an authentic extension of your executive leadership team and talent function.",
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-[#f8fbfe] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#00876F]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Full-Width Section Header on Top */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00876F]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00876F]">
              What We Do
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
            We Bring Ambition and <span className="text-[#00876F]">Opportunity Together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal"
          >
            At Climb Pact, we believe that every business has a vision worth building and every
            individual has potential worth discovering.
          </motion.p>
        </div>

        {/* 2-Column Split: Equal Height Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: Context Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white rounded-2xl p-7 sm:p-8 border border-neutral-100 shadow-[0_4px_20px_-2px_rgba(9,44,85,0.05)] flex flex-col justify-between"
          >
            <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f7ff] text-[#001813] text-xs font-semibold w-fit">
                Our Foundation
              </div>
              <p>
                Our work begins with understanding what organizations aspire to achieve and what
                people bring to the table. We transform these understandings into meaningful
                professional connections through thoughtful talent acquisition, strategic
                workforce solutions and dedicated HR support.
              </p>
              <p>
                We don't see recruitment as simply matching a resume to a job description. We see
                it as understanding people, recognizing possibilities and bringing together the
                right capabilities to move businesses forward.
              </p>
              <p>
                From emerging businesses taking their first steps to established organizations
                preparing for their next chapter, we help create the people foundations behind
                their ambitions.
              </p>
            </div>

            <div className="mt-6 p-4 text-[#001813]">
              <p className="text-xs sm:text-sm font-semibold italic leading-relaxed">
                "We don't just help businesses find people. We help bring their ambitions to
                life through people."
              </p>
            </div>
          </motion.div>

          {/* RIGHT: 6 Service Cards (Icon and Heading on the same line) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 grid-rows-3 gap-4">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="group flex flex-col justify-between bg-white rounded-2xl p-5 border border-neutral-100 shadow-[0_4px_18px_-2px_rgba(9,44,85,0.04)] hover:shadow-[0_12px_24px_-4px_rgba(9,44,85,0.08)] hover:border-[#00876F]/30 transition-all duration-200"
              >
                <div>
                  {/* Same line: Icon + Heading */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#f0f7ff] group-hover:bg-[#00876F]/10 shrink-0 flex items-center justify-center transition-colors duration-200">
                      {service.icon}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#001813] tracking-tight group-hover:text-[#00876F] transition-colors duration-200 leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description below */}
                  <p className="mt-3 text-xs text-neutral-500 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};