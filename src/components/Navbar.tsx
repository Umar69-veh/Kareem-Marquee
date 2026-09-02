"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Phone, Music, Menu, X } from "lucide-react";

// Inline SVG components for social icons
const Facebook = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "HOME", href: "#", active: true },
  { label: "ABOUT", href: "#about" },
  { label: "VENUE", href: "#venue" },
  { label: "SERVICES", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "PACKAGES", href: "#packages" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 border-b border-white/10 text-xs text-gray-300">
        <div className="flex items-center gap-2">
          <MapPin size={12} className="text-brand-gold" />
          <span>New Doctor City, Main Satayana Road, Opposite Defence City, Faisalabad</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-brand-gold" />
            <span>0307 4444636 | 0320 3039900</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
              <Facebook size={12} />
            </Link>
            <Link href="#" className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
              <Instagram size={12} />
            </Link>
            <Link href="#" className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors bg-white text-black">
              <Music size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 border border-brand-gold rounded-full flex items-center justify-center relative">
            <span className="absolute -top-3 text-brand-gold text-lg">👑</span>
            <span className="text-brand-gold font-serif text-xl">K</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-serif text-lg leading-tight tracking-wider">KAREEM PALACE</span>
            <span className="text-brand-gold text-[10px] tracking-[0.3em]">MARQUEE</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative ${
                link.active ? "text-brand-gold" : "text-white hover:text-brand-gold"
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-brand-gold flex items-center justify-center">
                   <span className="w-1 h-1 rounded-full bg-brand-gold absolute -bottom-1"></span>
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-brand-gold hover:bg-brand-gold-hover text-black px-6 py-2.5 text-sm font-semibold tracking-wide rounded-sm transition-colors">
            BOOK AN EVENT
          </button>
          
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-dark z-50 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-brand-gold rounded-full flex items-center justify-center relative">
                  <span className="absolute -top-3 text-brand-gold text-lg">👑</span>
                  <span className="text-brand-gold font-serif text-xl">K</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-serif text-lg leading-tight tracking-wider">KAREEM PALACE</span>
                  <span className="text-brand-gold text-[10px] tracking-[0.3em]">MARQUEE</span>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 items-center flex-1 justify-center">
              {LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-serif tracking-widest ${
                    link.active ? "text-brand-gold" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="mt-8 bg-brand-gold text-black px-8 py-3 text-sm font-semibold tracking-wide rounded-sm w-full max-w-xs">
                BOOK AN EVENT
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
