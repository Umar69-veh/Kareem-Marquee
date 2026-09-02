"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Inline SVGs for the icons shown in the screenshot
const Icons = {
  Spacious: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
    </svg>
  ),
  Catering: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Decor: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  ),
  Parking: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 22h14M8 2v20M16 2v20" />
      <path d="M19 17l-3-3M5 17l3-3" />
    </svg>
  ),
  Service: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

const FEATURES = [
  { icon: Icons.Spacious, label: "Spacious &\nElegant Halls" },
  { icon: Icons.Catering, label: "Premium\nCatering" },
  { icon: Icons.Decor, label: "Exquisite\nDécor" },
  { icon: Icons.Parking, label: "Ample\nParking" },
  { icon: Icons.Service, label: "Professional\nService" },
];

export default function AboutVenue() {
  return (
    <section className="py-24 bg-brand-light" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              ABOUT KAREEM PALACE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight mb-4">
              A VENUE THAT DEFINES <br />
              <span className="text-brand-gold">LUXURY & ELEGANCE</span>
            </h2>
            
            {/* Decorative Divider */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="h-[1px] w-8 bg-brand-gold"></div>
              <div className="text-brand-gold text-xs">⚜</div>
              <div className="h-[1px] w-8 bg-brand-gold"></div>
            </div>

            <p className="text-gray-600 text-sm md:text-base mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Kareem Palace Marquee is designed to turn your dream events into reality. From royal weddings to intimate gatherings and corporate events, we offer the perfect blend of elegance, space and hospitality.
            </p>

            {/* Features Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 mb-12">
              {FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex flex-col items-center gap-3 w-20">
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700">
                      <Icon />
                    </div>
                    <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider text-center whitespace-pre-line leading-tight">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <button className="bg-brand-gold hover:bg-brand-gold-hover text-black px-8 py-3.5 text-sm font-semibold tracking-wide rounded-sm transition-colors uppercase">
              Discover More →
            </button>
          </motion.div>

          {/* Right Image/Video Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[600px] w-full group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop')" }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} className="text-white ml-2" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
