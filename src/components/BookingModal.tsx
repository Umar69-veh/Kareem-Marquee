"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Clock, Mail, Phone, User, CheckCircle2, Sparkles } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "Wedding Event",
    guestCount: "300 - 500 Guests",
    eventDate: "",
    shift: "Evening / Night",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds on success
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-[#1C1C1C] border border-brand-gold/30 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold hover:text-black flex items-center justify-center transition-colors text-white/80"
          >
            <X size={20} />
          </button>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-serif text-white mb-2">Inquiry Submitted!</h3>
              <p className="text-gray-400 text-sm max-w-md mb-6 leading-relaxed">
                Thank you, <span className="text-brand-gold font-semibold">{formData.fullName || "Guest"}</span>. Our booking team at Kareem Palace Marquee will reach out to you within 24 hours to confirm venue availability.
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-gold bg-brand-gold/10 px-4 py-2 rounded-full">
                <Sparkles size={14} />
                <span>We look forward to creating your memorable event</span>
              </div>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                  <span>👑 KAREEM PALACE MARQUEE</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white">
                  Reserve Your Event
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  Fill out the details below to check dates and receive a tailored proposal.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-gold" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Muhammad Ali"
                        className="w-full bg-black/40 border border-white/15 focus:border-brand-gold rounded-lg py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-gold" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0300 1234567"
                        className="w-full bg-black/40 border border-white/15 focus:border-brand-gold rounded-lg py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-gold" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-black/40 border border-white/15 focus:border-brand-gold rounded-lg py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/15 focus:border-brand-gold rounded-lg py-2.5 px-3 text-sm text-white outline-none transition-colors"
                    >
                      <option value="Wedding Event" className="bg-[#1C1C1C]">Wedding Event (Barat / Walima)</option>
                      <option value="Mehndi / Sangeet" className="bg-[#1C1C1C]">Mehndi / Sangeet Ceremony</option>
                      <option value="Birthday Party" className="bg-[#1C1C1C]">Birthday Celebration</option>
                      <option value="Corporate Event" className="bg-[#1C1C1C]">Corporate Gala / Dinner</option>
                      <option value="Seminar / Conference" className="bg-[#1C1C1C]">Seminar & Conference</option>
                      <option value="Engagement / Other" className="bg-[#1C1C1C]">Engagement / Other Ceremony</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Guest Count */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Guests
                    </label>
                    <div className="relative">
                      <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gold" />
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/15 focus:border-brand-gold rounded-lg py-2.5 pl-9 pr-2 text-xs text-white outline-none transition-colors"
                      >
                        <option value="100 - 250" className="bg-[#1C1C1C]">100 - 250</option>
                        <option value="250 - 500" className="bg-[#1C1C1C]">250 - 500</option>
                        <option value="500 - 800" className="bg-[#1C1C1C]">500 - 800</option>
                        <option value="800 - 1200+" className="bg-[#1C1C1C]">800 - 1200+</option>
                      </select>
                    </div>
                  </div>

                  {/* Event Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gold" />
                      <input
                        type="date"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/15 focus:border-brand-gold rounded-lg py-2.5 pl-9 pr-2 text-xs text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Time Shift */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Time Slot
                    </label>
                    <div className="relative">
                      <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gold" />
                      <select
                        name="shift"
                        value={formData.shift}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/15 focus:border-brand-gold rounded-lg py-2.5 pl-9 pr-2 text-xs text-white outline-none transition-colors"
                      >
                        <option value="Evening / Night" className="bg-[#1C1C1C]">Evening (7pm - 11pm)</option>
                        <option value="Lunch / Afternoon" className="bg-[#1C1C1C]">Lunch (12pm - 4pm)</option>
                        <option value="Full Day" className="bg-[#1C1C1C]">Full Day</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                    Special Requests / Catering Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about decor preferences, stage requirements, or food menu..."
                    className="w-full bg-black/40 border border-white/15 focus:border-brand-gold rounded-lg p-3 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-brand-gold hover:bg-brand-gold-hover text-black py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors shadow-lg mt-2"
                >
                  Submit Booking Request →
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
