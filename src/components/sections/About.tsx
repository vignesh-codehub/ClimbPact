import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, Users } from "lucide-react";
import aboutImg from "../../assets/about.webp";

interface FeatureCard {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: <Compass className="w-5 h-5 text-white" />,
    iconBg: "bg-[#001813]",
    title: "Our journey is driven by one purpose",
    description:
      "To build meaningful connections today that shape stronger organizations and brighter futures tomorrow.",
  },
  // {
  //   icon: <Target className="w-5 h-5 text-white" />,
  //   iconBg: "bg-[#00876F]",
  //   title: "Dedicated Career Advisory",
  //   description:
  //     "Empowering professionals with strategic coaching and candid guidance through every career milestone.",
  // },
  // {
  //   icon: <Compass className="w-5 h-5 text-white" />,
  //   iconBg: "bg-[#001813]",
  //   title: "Strategic Talent Alignment",
  //   description:
  //     "Precise matching ensuring cultural fit, leadership philosophy resonance, and operational execution.",
  // },
  // {
  //   icon: <Users className="w-5 h-5 text-white" />,
  //   iconBg: "bg-[#00876F]/80",
  //   title: "Human-Centric Consultation",
  //   description:
  //     "Navigating organizational scaling with transparent communication, integrity, and sustainable people practices.",
  // },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Ambient backdrop glow */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-[#00876F]/15 via-transparent to-[#001813]/10 blur-xl group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Main Visual Container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-100 bg-neutral-100 aspect-[4/4]">
                <img
                  src={aboutImg}
                  alt="ClimbPact team collaborating in conference room"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001813]/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Content & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col"
          >
            {/* Tagline Indicator */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-4 bg-[#00876F] rounded-full" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00876F]">
                About Climb Pact
              </span>
            </div>

            {/* Section Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-[1.18] text-[#001813]">
              Connecting People. Strengthening Businesses.{" "}
              <span className="text-[#00876F] block sm:inline">Shaping Futures.</span>
            </h2>

            {/* Narrative Story */}
            <div className="mt-6 space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              <p>
                Every great organization has a story shaped by its people. At Climb Pact, we strive to be part of that journey.
              </p>
              <p>
                We believe growth goes beyond finding talent—it means discovering potential, building trust and creating lasting professional relationships.
              </p>
              <p>
                Through our people-first approach to recruitment, staffing and HR consulting, we connect business ambitions with human potential, helping organizations grow and individuals move forward.
              </p>
            </div>

            {/* Supporting Highlight Cards */}
            <div className="mt-8 space-y-3.5">
              {FEATURE_CARDS.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.12 * index,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -2 }}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-[#f0f7ff]/50 hover:bg-[#e0effe]/60 border border-[#e0effe] hover:border-[#00876F]/30 shadow-sm transition-all duration-300"
                >
                  <div
                    className={`shrink-0 w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105`}
                  >
                    {card.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-[#001813] group-hover:text-[#00876F] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-neutral-600 leading-normal">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};