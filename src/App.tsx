/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoStrip } from './components/QuickInfoStrip';
import { SignatureDishes } from './components/SignatureDishes';
import { FullMenuModal } from './components/FullMenuModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurStory } from './components/OurStory';
import { AmbianceBanner } from './components/AmbianceBanner';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ReservationSection } from './components/ReservationSection';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CustomCursorGlow } from './components/CustomCursorGlow';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOrder = () => {
    const el = document.getElementById('specials');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0A0A0B] text-[#F5F1EA] selection:bg-[#F28C28] selection:text-[#0A0A0B] bg-noise relative">
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Ambient Cursor Glow (Desktop) */}
        <CustomCursorGlow />

        {/* Sticky Navbar */}
        <Navbar
          onOpenReservation={handleOpenReservation}
          onOpenMenu={() => setIsMenuOpen(true)}
        />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero
            onOpenOrder={handleOpenOrder}
            onOpenReservation={handleOpenReservation}
          />

          {/* Quick Info Strip directly under Hero */}
          <QuickInfoStrip />

          {/* Signature Dishes Grid */}
          <SignatureDishes onOpenFullMenu={() => setIsMenuOpen(true)} />

          {/* Why Choose Us Feature Cards */}
          <WhyChooseUs />

          {/* Our Story & Culinary Philosophy */}
          <OurStory />

          {/* Ambiance Cinematic Banner */}
          <AmbianceBanner onOpenReservation={handleOpenReservation} />

          {/* Photo Gallery & Lightbox */}
          <Gallery />

          {/* Guest Reviews & Testimonials Carousel */}
          <Testimonials />

          {/* Table Reservation & Immediate Action CTA */}
          <ReservationSection />

          {/* Location Map & Contact Information */}
          <LocationAndContact />
        </main>

        {/* Site Footer */}
        <Footer
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenReservation={handleOpenReservation}
        />

        {/* Full Menu Modal */}
        <FullMenuModal
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />

        {/* Interactive Cart Slide-over Drawer */}
        <CartDrawer onOpenMenu={() => setIsMenuOpen(true)} />
      </div>
    </CartProvider>
  );
}
