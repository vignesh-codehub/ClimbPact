import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Approach } from "./components/sections/Approach";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-[#00876F] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}