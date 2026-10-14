import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface AmbianceBannerProps {
  onOpenReservation: () => void;
}

export const AmbianceBanner: React.FC<AmbianceBannerProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#0A0A0B]">
      {/* Background Cinematic Photo with Left-to-Right Scrim */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/restaurant_ambiance_1791878867991.jpg"
          alt="Warm luxury dining ambiance at The 2nd Wife Family Restaurant Sherghati"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#FFB15C] mb-4">
            <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
            <span>OUR AMBIANCE</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1EA] tracking-tight mb-5 leading-tight text-balance">
            Designed for Celebrations, <span className="text-gradient-orange">Cherished Together</span>
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-[#B5AFA5] leading-relaxed mb-8 font-light">
            Cozy, clean, and welcoming, with an inviting café vibe and comfortable family booths that make every casual
            lunch or special dinner unforgettable.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-[#F28C28] to-[#FFB15C] hover:brightness-110 shadow-lg shadow-[#F28C28]/25 transition-all transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>Visit Us Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-[#F5F1EA] border border-[rgba(255,255,255,0.15)] hover:border-[#F28C28] bg-[#161618]/60 backdrop-blur-sm transition-all"
            >
              <MapPin className="w-4 h-4 text-[#F28C28]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
