"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PackagesProps {
  onOpenBooking?: () => void;
}

export default function Packages({ onOpenBooking }: PackagesProps) {
  return (
    <section className="bg-[#1C1C1C] relative overflow-hidden" id="packages">
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-5/12 p-12 md:p-20 lg:p-24 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              OUR PACKAGES
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-snug mb-6">
              CHOOSE YOUR PERFECT PACKAGE
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
              We offer customized packages to make your event seamless and memorable.
            </p>
            <button 
              onClick={onOpenBooking}
              className="bg-brand-gold hover:bg-brand-gold-hover text-black px-8 py-3.5 text-sm font-semibold tracking-wide rounded-sm transition-colors flex items-center justify-center gap-2 w-fit"
            >
              VIEW PACKAGES <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Right Image Area */}
        <div className="w-full lg:w-7/12 h-[400px] lg:h-auto relative">
          {/* Gradient fade to blend the image into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] to-transparent z-10 w-32 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] to-transparent z-10 h-32 mt-auto block lg:hidden" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center lg:bg-left"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop')" }}
          />
        </div>

      </div>
    </section>
  );
}
