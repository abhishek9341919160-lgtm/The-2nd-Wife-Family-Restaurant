import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'specials', 'menu', 'story', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Menu', href: '#menu', id: 'menu', isActionModal: true },
    { label: 'Specials', href: '#specials', id: 'specials' },
    { label: 'Our Story', href: '#story', id: 'story' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isActionModal) {
      e.preventDefault();
      onOpenMenu();
      setIsMobileMenuOpen(false);
      return;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[rgba(242,140,40,0.2)] py-3 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Logo Lockup */}
          <a href="#home" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#F5F1EA] group-hover:text-[#FFB15C] transition-colors">
                  The 2nd Wife
                </span>
                {/* Crown/Fork ornament SVG */}
                <svg
                  className="w-4 h-4 text-[#F28C28] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l3 5 5-2-2 7H6L4 5l5 2 3-5z" />
                  <path d="M6 14h12l-1.5 6h-9L6 14z" />
                </svg>
              </div>
              <span className="text-[9px] tracking-[0.26em] text-[#F28C28] uppercase font-semibold font-sans">
                FAMILY RESTAURANT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-[13px] uppercase tracking-[0.1em] font-medium transition-all relative py-1 ${
                    isActive ? 'text-[#FFB15C]' : 'text-[#B5AFA5] hover:text-[#F5F1EA]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F28C28] to-[#FFB15C] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View Order Cart"
              className="relative p-2.5 rounded-full border border-[rgba(242,140,40,0.35)] hover:border-[#F28C28] bg-[#161618] hover:bg-[#1F1F22] text-[#F5F1EA] transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFB15C]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F28C28] text-black font-bold text-[11px] rounded-full flex items-center justify-center shadow-md animate-scale">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Call Now Button (Desktop) */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-wider font-medium text-[#F5F1EA] border border-[rgba(255,255,255,0.12)] hover:border-[#F28C28] bg-[#161618] hover:bg-[#1F1F22] rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Call Now</span>
            </a>

            {/* Reserve a Table CTA */}
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-black bg-gradient-to-r from-[#F28C28] to-[#FFB15C] hover:from-[#FFB15C] hover:to-[#F28C28] rounded-lg shadow-md shadow-[#F28C28]/25 hover:shadow-[#F28C28]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-black" />
              <span className="whitespace-nowrap">Reserve Table</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="lg:hidden p-2 rounded-lg text-[#F5F1EA] hover:text-[#F28C28] focus:outline-none"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#161618] border-l border-[rgba(242,140,40,0.3)] shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)]">
                <div>
                  <div className="font-serif-display text-lg font-bold text-[#F5F1EA]">The 2nd Wife</div>
                  <div className="text-[9px] tracking-widest text-[#F28C28] uppercase font-semibold">
                    FAMILY RESTAURANT
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-[#B5AFA5] hover:text-[#F5F1EA] rounded-md"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-4 py-8">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="font-serif-display text-2xl font-medium text-[#F5F1EA] hover:text-[#FFB15C] transition-colors py-1 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#F28C28]">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#F28C28] to-[#FFB15C] text-black font-semibold rounded-lg text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-2.5 border border-[rgba(242,140,40,0.4)] text-[#F5F1EA] hover:bg-[#1F1F22] font-medium rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F28C28]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.972.536 1.956.824 3.149.825h.005c3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.767-5.773-5.767zm7.568 5.768c0 4.173-3.395 7.568-7.568 7.568-1.332 0-2.592-.352-3.693-.972l-5.138 1.348 1.371-5.011c-.694-1.157-1.071-2.486-1.071-3.933 0-4.173 3.395-7.568 7.568-7.568s7.531 3.395 7.531 7.568z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
