import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoImg from "../../assets/logo.webp";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "approach", label: "Our Approach", href: "#approach" },
  { id: "why-us", label: "Why Climb Pact", href: "#why-us" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY < 120) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "services", "approach", "why-us", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-25% 0px -40% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    e.preventDefault();
    setActiveSection(item.id);
    setMobileMenuOpen(false);

    if (item.href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo on the Left Side */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, NAV_ITEMS[0])}
          className="flex items-center gap-1 group cursor-pointer"
        >
          {/* Logo Image */}
          <img
            src={logoImg}
            alt="ClimbPact Logo"
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative text-sm font-medium transition-colors py-1 cursor-pointer ${
                  isActive
                    ? "text-[#00876F] font-semibold"
                    : "text-[#183b60]/80 hover:text-[#001813]"
                }`}
              >
                {item.label}

                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00876F] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#001813] hover:bg-neutral-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-6 py-6 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-base font-medium py-1.5 flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-[#00876F] font-semibold pl-2 border-l-2 border-[#00876F]"
                        : "text-[#001813] hover:text-[#00876F]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};