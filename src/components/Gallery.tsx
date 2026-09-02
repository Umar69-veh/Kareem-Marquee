"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, ArrowRight } from "lucide-react";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-brand-light" id="gallery">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
            OUR GALLERY
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark">
            CRAFTED FOR MEMORIES
          </h2>
        </div>

        {/* 5 Images in a row (scrollable on mobile) */}
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex-none w-72 md:w-1/5 aspect-square rounded-2xl overflow-hidden snap-center cursor-zoom-in relative group"
              onClick={() => setLightboxImage(img)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${img}')` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 border border-brand-gold text-brand-dark px-8 py-3 text-sm font-semibold tracking-wide rounded-sm hover:bg-brand-gold hover:text-white transition-all">
            VIEW FULL GALLERY <LayoutGrid size={16} />
          </button>
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
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImage}
              alt="Enlarged gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            />
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
            >
              <ArrowRight size={32} className="rotate-45" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
