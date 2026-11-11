import React from "react";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import footerImg from "../../assets/footer.webp";

const QUICK_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Why Climb Pact", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const SERVICES_LINKS = [
  { label: "Recruitment & Talent Acquisition", href: "#services" },
  { label: "Talent Sourcing", href: "#services" },
  { label: "HR Consultancy", href: "#services" },
  { label: "Career Opportunities", href: "#services" },
  { label: "Talent Solutions", href: "#services" },
  { label: "Business Partnership", href: "#services" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051d38] text-white pt-10 pb-2 border-t border-[#183b60]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-8 border-b border-[#183b60]/60">
          
          {/* Column 1: Brand & Narrative */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-5">
            {/* White Logo Card */}
            <div className="w-80 flex items-center justify-center">
              <div className="flex items-center gap-1 font-bold text-xs tracking-tight text-[#001813]">
                <img
                  src={footerImg}
                  alt="Footer logo"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm font-normal">
              A people-first HR consultancy dedicated to shaping the future of work by bridging ambition with opportunity, nurturing human potential, and building enduring business partnerships.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h5 className="text-base font-bold text-white tracking-tight mb-5">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 hover:text-[#00876F] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3">
            <h5 className="text-base font-bold text-white tracking-tight mb-5">
              Our Services
            </h5>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm text-neutral-300 hover:text-[#00876F] transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h5 className="text-base font-bold text-white tracking-tight mb-5">
              Contact Info
            </h5>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00876F] shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300 leading-snug">
                  Bangalore, Karnataka, India
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#00876F] shrink-0" />
                <a
                  href="tel:+919385544332"
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  +91 9385544332
                </a>
                <span className="text-neutral-300">|</span>
                <a
                  href="tel:+918105557719"
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  +91 8105557719
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00876F] shrink-0" />
                <a
                  href="mailto:contact@climbpact.com"
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  hr@climbpact.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center text-center text-xs text-neutral-300">
          <p>© 2026 Climb Pact Solutions. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};