import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, FileText } from "lucide-react";

// Inline SVG components for social icons
const Facebook = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsApp = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Tiktok = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 pt-20 pb-8 relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-brand-gold rounded-full flex items-center justify-center relative">
                <span className="absolute -top-3 text-brand-gold text-lg">👑</span>
                <span className="text-brand-gold font-serif text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif text-lg leading-tight tracking-wider">KAREEM PALACE</span>
                <span className="text-brand-gold text-[10px] tracking-[0.3em]">MARQUEE</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Kareem Palace Marquee is a premium event destination in Faisalabad, offering unmatched elegance, exceptional service and memorable experiences.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Facebook />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Instagram />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Tiktok />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-brand-gold text-sm font-bold tracking-wider mb-6 uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="#venue" className="hover:text-brand-gold transition-colors">Venue</Link></li>
              <li><Link href="#services" className="hover:text-brand-gold transition-colors">Our Services</Link></li>
              <li><Link href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
              <li><Link href="#packages" className="hover:text-brand-gold transition-colors">Packages</Link></li>
              <li><Link href="#contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-brand-gold text-sm font-bold tracking-wider mb-6 uppercase">Services</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Wedding Events</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Birthday Parties</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Corporate Events</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Catering</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Decor & Styling</Link></li>
              <li><Link href="#" className="hover:text-brand-gold transition-colors">Event Planning</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-brand-gold text-sm font-bold tracking-wider mb-6 uppercase">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold shrink-0 mt-1" />
                <span>New Doctor City,<br/>Main Satayana Road,<br/>Opposite Defence City,<br/>Faisalabad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <div className="flex flex-col">
                  <span>0307 4444636</span>
                  <span>0320 3039900</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold shrink-0" />
                <span>info@kareempalace.com</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Book Event */}
          <div className="lg:col-span-1">
            <h4 className="text-brand-gold text-sm font-bold tracking-wider mb-6 uppercase">Book Your Event</h4>
            <p className="text-sm leading-relaxed mb-6">
              Fill out the form and our team will get back to you.
            </p>
            <button className="bg-brand-gold hover:bg-brand-gold-hover text-black px-6 py-2.5 text-sm font-semibold tracking-wide rounded-sm transition-colors flex items-center justify-center gap-2">
              BOOK NOW <FileText size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Kareem Palace Marquee. All Rights Reserved.</p>
          <p>Designed with <span className="text-brand-gold">♥</span> for memorable events</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/923074444636" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <WhatsApp size={32} />
      </a>
    </footer>
  );
}
