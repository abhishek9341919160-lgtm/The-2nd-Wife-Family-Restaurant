import React, { useState } from 'react';
import { Phone, MapPin, Clock, ArrowUp, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenMenu: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMenu, onOpenReservation }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070708] relative pt-16 pb-24 lg:pb-12 border-t border-[rgba(242,140,40,0.35)]">
      {/* Top thin orange gradient line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F28C28] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand & Socials */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-display text-2xl font-bold tracking-tight text-[#F5F1EA]">
                  The 2nd Wife
                </span>
                <span className="text-xs text-[#F28C28]">✦</span>
              </div>
              <div className="text-[10px] tracking-[0.24em] text-[#F28C28] uppercase font-semibold">
                FAMILY RESTAURANT
              </div>
              <div className="font-hindi text-xs text-[#B5AFA5] mt-1">
                द सेकंड वाइफ फैमिली रेस्टोरेंट
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B5AFA5] leading-relaxed font-light">
              Fresh flavours. Family warmth. Every single day. Sherghati's beloved fine family dining destination.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[rgba(242,140,40,0.4)] hover:border-[#FFB15C] flex items-center justify-center text-[#F28C28] hover:text-[#FFB15C] hover:bg-[#161618] transition-all"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[rgba(242,140,40,0.4)] hover:border-[#FFB15C] flex items-center justify-center text-[#F28C28] hover:text-[#FFB15C] hover:bg-[#161618] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-[rgba(242,140,40,0.4)] hover:border-[#FFB15C] flex items-center justify-center text-[#F28C28] hover:text-[#FFB15C] hover:bg-[#161618] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.972.536 1.956.824 3.149.825h.005c3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.767-5.773-5.773zm7.568 5.768c0 4.173-3.395 7.568-7.568 7.568-1.332 0-2.592-.352-3.693-.972l-5.138 1.348 1.371-5.011c-.694-1.157-1.071-2.486-1.071-3.933 0-4.173 3.395-7.568 7.568-7.568s7.531 3.395 7.531 7.568z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-[rgba(242,140,40,0.4)] hover:border-[#FFB15C] flex items-center justify-center text-[#F28C28] hover:text-[#FFB15C] hover:bg-[#161618] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02l-.01-6.54 5.71 3.27-5.7 3.27z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-bold text-[#FFB15C] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#B5AFA5]">
              <li>
                <a href="#home" className="hover:text-[#F5F1EA] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenMenu}
                  className="hover:text-[#F5F1EA] transition-colors cursor-pointer text-left"
                >
                  Full Menu & Specials
                </button>
              </li>
              <li>
                <a href="#specials" className="hover:text-[#F5F1EA] transition-colors">
                  Chef's Signature Dishes
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F5F1EA] transition-colors">
                  Our Culinary Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F5F1EA] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-[#F5F1EA] transition-colors cursor-pointer text-left"
                >
                  Reserve a Table
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5F1EA] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-bold text-[#FFB15C] mb-4">
              Restaurant Info
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#B5AFA5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {RESTAURANT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F28C28] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:text-[#F5F1EA] transition-colors font-mono font-medium"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & Special Offers */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] font-bold text-[#FFB15C] mb-4">
              Special Offers & Deals
            </h4>
            <p className="text-xs text-[#B5AFA5] mb-4 leading-relaxed font-light">
              Subscribe for festive discounts, chef special weekend items, and family dining coupons.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-stretch rounded-xl overflow-hidden border border-[rgba(255,255,255,0.12)] focus-within:border-[#F28C28] bg-[#161618]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 bg-transparent text-xs text-[#F5F1EA] placeholder-[#B5AFA5]/50 focus:outline-none flex-1 min-w-0"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-gradient-to-r from-[#F28C28] to-[#FFB15C] text-black font-bold text-xs hover:brightness-110 transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  {isSubscribed ? <Check className="w-4 h-4" /> : 'Subscribe'}
                </button>
              </div>
              {isSubscribed && (
                <p className="text-[11px] text-emerald-400">
                  ✓ Thank you! You're now on our VIP family list.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B5AFA5]">
          <div>
            © 2026 The 2nd Wife Family Restaurant. All Rights Reserved. Sherghati, Bihar.
          </div>
          <div className="flex items-center gap-6">
            <span>Price Range: {RESTAURANT_INFO.priceRange}</span>
            <span>·</span>
            <span>Rating: {RESTAURANT_INFO.rating}★ ({RESTAURANT_INFO.reviewsCount}+ Reviews)</span>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button (Desktop) */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#161618] border border-[rgba(242,140,40,0.4)] text-[#FFB15C] hover:bg-[#F28C28] hover:text-black shadow-xl transition-all cursor-pointer hidden md:flex items-center justify-center"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Mobile Sticky Bottom Bar (strictly ≤ 15% viewport height) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#161618]/95 backdrop-blur-md border-t border-[rgba(242,140,40,0.3)] p-2.5 flex items-center justify-between gap-3 md:hidden">
        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="flex-1 py-2.5 rounded-lg border border-[rgba(242,140,40,0.4)] text-[#F5F1EA] text-xs font-semibold flex items-center justify-center gap-1.5 bg-[#1F1F22]"
        >
          <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
          <span>Call Now</span>
        </a>

        <a
          href={RESTAURANT_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.972.536 1.956.824 3.149.825h.005c3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.767-5.773-5.773zm7.568 5.768c0 4.173-3.395 7.568-7.568 7.568-1.332 0-2.592-.352-3.693-.972l-5.138 1.348 1.371-5.011c-.694-1.157-1.071-2.486-1.071-3.933 0-4.173 3.395-7.568 7.568-7.568s7.531 3.395 7.531 7.568z" />
          </svg>
          <span>WhatsApp Order</span>
        </a>
      </div>
    </footer>
  );
};
