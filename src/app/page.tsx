"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FindYourOccasion from "@/components/FindYourOccasion";
import AboutVenue from "@/components/AboutVenue";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-screen">
      <Navbar onOpenBooking={handleOpenBooking} />
      <Hero onOpenBooking={handleOpenBooking} />
      <FindYourOccasion />
      <AboutVenue onOpenBooking={handleOpenBooking} />
      <Stats />
      <Gallery />
      <Packages onOpenBooking={handleOpenBooking} />
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Luxury Event Booking Application Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
