import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FindYourOccasion from "@/components/FindYourOccasion";
import AboutVenue from "@/components/AboutVenue";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FindYourOccasion />
      <AboutVenue />
      <Stats />
      <Gallery />
      <Packages />
      {/* 
        Remaining sections if any:
        - Testimonials
        - BookingForm
      */}
      <Footer />
    </main>
  );
}
