"use client";

import React, { useState } from "react";
import { LayoutGrid, Heart, Gift, Briefcase, CalendarDays, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { id: "all", label: "ALL OCCASIONS", icon: LayoutGrid },
  { id: "weddings", label: "WEDDINGS", icon: Heart },
  { id: "birthdays", label: "BIRTHDAYS", icon: Gift },
  { id: "corporate", label: "CORPORATE EVENTS", icon: Briefcase },
  { id: "other", label: "OTHER EVENTS", icon: CalendarDays },
];

const DEFAULT_CARDS = [
  {
    id: "weddings",
    title: "WEDDINGS",
    subtitle: "Make your big day unforgettable",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "birthdays",
    title: "BIRTHDAY PARTIES",
    subtitle: "Celebrate your special moments",
    image: "https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "corporate",
    title: "CORPORATE EVENTS",
    subtitle: "Professional events in style",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "conferences",
    title: "CONFERENCES",
    subtitle: "Host impactful seminars",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "engagements",
    title: "ENGAGEMENTS",
    subtitle: "Start your journey beautifully",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "special",
    title: "SPECIAL OCCASIONS",
    subtitle: "Anniversaries and bespoke events",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
  },
];

// Curated high-quality marquee/banquet hall images
const CATEGORY_IMAGES: Record<string, string[]> = {
  weddings: [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
  ],
  birthdays: [
    "/images/birthday-1.jpg",
    "/images/birthday-2.jpg",
    "https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
  ],
  corporate: [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1475721028070-2051152a4db3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=800&auto=format&fit=crop",
  ],
  other: [
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533174000255-16361a9b2bdf?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470229722913-7c090be5f5ae?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
  ]
};

export default function FindYourOccasion() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = activeTab === "all" ? [] : CATEGORY_IMAGES[activeTab] || CATEGORY_IMAGES.weddings;

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            PLAN YOUR PERFECT EVENT
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">
            FIND YOUR OCCASION
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded text-sm font-medium transition-all duration-300
                  ${isActive 
                    ? "bg-brand-dark text-brand-gold shadow-lg scale-105" 
                    : "bg-white text-gray-500 border border-gray-200 hover:border-brand-gold hover:text-brand-dark"
                  }
                `}
              >
                <Icon size={16} className={isActive ? "text-brand-gold" : "text-gray-400"} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {activeTab === "all" ? (
              /* All Occasions (Cards) - EXACTLY 2 ROWS OF 3 CARDS AS REQUESTED */
              <motion.div
                key="cards"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {DEFAULT_CARDS.map((card, idx) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    onClick={() => setActiveTab(card.id === "conferences" || card.id === "engagements" || card.id === "special" ? "other" : card.id)}
                    className="bg-white rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] cursor-pointer group"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${card.image}')` }}
                      />
                    </div>
                    <div className="p-6 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold font-sans text-brand-dark mb-1">{card.title}</h3>
                        <p className="text-sm text-gray-500">{card.subtitle}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-2">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Filtered Category (8-9 High Quality Images) */
              <motion.div
                key="images"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {images.map((img, idx) => (
                  <motion.div
                    key={`${activeTab}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.4, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.03, zIndex: 10 }}
                    onClick={() => setLightboxImage(img)}
                    className="h-64 rounded-lg overflow-hidden shadow-md cursor-zoom-in relative group"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${img}')` }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                       <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100 font-medium tracking-widest border border-white px-4 py-2">VIEW</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImage}
              alt="Enlarged venue image"
              className="max-w-full max-h-[90vh] object-contain rounded"
            />
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <ArrowRight size={32} className="rotate-45" /> {/* Makeshift X since lucide X wasn't working if not imported */}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
