"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BACKGROUND_IMAGES = [
  "/images/hero-1.png",
  "/images/hero-2.png"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);
  };

  // Automatically transition only the background image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-brand-dark">
      {/* Background Slider - Only Image changes every 3s */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[currentSlide]}')` }}
          />
          {/* Gradients to match the dark/gold luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content - Completely static so only image changes */}
      <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-16 lg:px-24 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-white text-lg md:text-xl tracking-[0.2em] font-medium mb-2 uppercase">
              WHERE EVERY
            </h3>
            
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
              MOMENT BECOMES <br />
              <span className="text-brand-gold">A MEMORY</span>
            </h1>

            {/* Decorative divider */}
            <div className="flex items-center gap-2 mb-6 opacity-70">
              <div className="h-[1px] w-12 bg-brand-gold"></div>
              <div className="text-brand-gold text-sm">⚜</div>
              <div className="h-[1px] w-12 bg-brand-gold"></div>
            </div>

            <p className="text-gray-300 text-sm md:text-base max-w-md mb-10 leading-relaxed">
              From dream weddings to elegant celebrations, Kareem Palace Marquee turns your special moments into unforgettable memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-gold hover:bg-brand-gold-hover text-black px-8 py-3.5 text-sm font-semibold tracking-wide rounded-sm transition-colors flex items-center justify-center gap-2">
                EXPLORE VENUE <ArrowRight size={16} />
              </button>
              <button className="border border-white hover:border-brand-gold text-white hover:text-brand-gold px-8 py-3.5 text-sm font-semibold tracking-wide rounded-sm transition-colors flex items-center justify-center gap-2">
                BOOK A VISIT <Calendar size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side Video CTA */}
      <div className="absolute right-8 md:right-16 bottom-24 z-20 flex flex-col items-center gap-4">
        <button className="w-16 h-16 rounded-full border border-brand-gold flex items-center justify-center group hover:bg-brand-gold/10 transition-colors">
          <Play size={20} className="text-brand-gold ml-1 group-hover:scale-110 transition-transform" />
        </button>
        <span className="text-white text-xs font-semibold tracking-widest text-center">
          WATCH<br />FULL TOUR
        </span>
      </div>

      {/* Slider Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-20">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-20 hidden md:flex">
         <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {BACKGROUND_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 transition-all duration-300 rounded-full ${
              currentSlide === idx ? "w-8 bg-brand-gold" : "w-4 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
