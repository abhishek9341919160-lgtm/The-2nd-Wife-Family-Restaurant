import React from 'react';
import { ArrowRight, Calendar, Star, UtensilsCrossed, Users } from 'lucide-react';

interface HeroProps {
  onOpenOrder: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onOpenReservation }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-24 overflow-hidden bg-[#0A0A0B]"
    >
      {/* Background Soft Orange Radial Glows */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F28C28]/12 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#F28C28]/8 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Mobile Plate Display (on small screens, placed above text) */}
          <div className="lg:hidden flex justify-center">
            <div className="relative w-64 sm:w-80 aspect-square">
              {/* Radial glow backdrop */}
              <div className="absolute inset-0 bg-[#F28C28]/25 rounded-full blur-2xl transform scale-90" />
              <img
                src="/src/assets/images/hero_tandoor_spread_1791878866644.jpg"
                alt="Signature Tandoori spread at The 2nd Wife Family Restaurant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full shadow-2xl ring-2 ring-[#F28C28]/40 animate-float-plate"
              />
              {/* Rotating badge */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#161618]/95 border border-[rgba(242,140,40,0.4)] shadow-xl flex items-center justify-center p-1.5 backdrop-blur-md">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full animate-spin-slow text-[#FFB15C]" viewBox="0 0 100 100">
                    <path
                      id="circlePathMobile"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    />
                    <text className="text-[9.5px] uppercase tracking-[0.18em] fill-[#FFB15C] font-semibold">
                      <textPath href="#circlePathMobile">
                        OPEN TILL 11 PM · SHERGHATI · DINING ·
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute w-7 h-7 rounded-full bg-[#F28C28]/20 flex items-center justify-center">
                    <span className="text-xs">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Editorial & Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#FFB15C] mb-4">
              <span className="w-6 h-[1px] bg-[#F28C28]/60 inline-block" />
              <span>SHERGHATI’S FAVOURITE FAMILY RESTAURANT</span>
              <span className="w-6 h-[1px] bg-[#F28C28]/60 inline-block lg:hidden" />
            </div>

            {/* Main Headline H1 */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-[#F5F1EA] tracking-tight leading-[1.08] mb-3 max-w-2xl text-balance">
              Where Every Meal Feels Like <span className="text-gradient-orange">Home</span>
            </h1>

            {/* Hindi Restaurant Name */}
            <div className="font-hindi text-lg sm:text-xl font-medium text-[#B5AFA5] mb-5 tracking-wide">
              द सेकंड वाइफ फैमिली रेस्टोरेंट
            </div>

            {/* Divider with small ornament */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#F28C28]" />
              <div className="w-2 h-2 rotate-45 bg-[#F28C28]" />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#F28C28]" />
            </div>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-[#B5AFA5] leading-relaxed max-w-xl mb-8 font-light">
              Fresh smoky tandoor, rich North Indian curries, and sizzling Indo-Chinese favourites, cooked fresh to
              order and served with genuine family warmth. Perfect for dinners, birthdays, and joyful family gatherings.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenOrder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm sm:text-base font-semibold text-black bg-gradient-to-r from-[#F28C28] via-[#FF9C38] to-[#FFB15C] hover:brightness-110 rounded-xl shadow-lg shadow-[#F28C28]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#F5F1EA] hover:text-[#FFB15C] border border-[rgba(242,140,40,0.45)] hover:border-[#FFB15C] bg-[#161618]/70 hover:bg-[#1F1F22] rounded-xl transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#F28C28]" />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* 3 Trust Badges with Hairline Dividers */}
            <div className="w-full max-w-xl pt-6 border-t border-[rgba(255,255,255,0.08)] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
              {/* Badge 1 */}
              <div className="flex items-center justify-center lg:justify-start gap-2.5 sm:pr-3">
                <div className="p-2 rounded-lg bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] text-[#F28C28] shrink-0">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#F5F1EA]">Fresh Ingredients</div>
                  <div className="text-[11px] text-[#B5AFA5]">Cooked to Order</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center justify-center lg:justify-start gap-2.5 sm:px-3 sm:border-l sm:border-[rgba(242,140,40,0.25)]">
                <div className="p-2 rounded-lg bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] text-[#FFB15C] shrink-0">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#F5F1EA]">4.7★ Google Rated</div>
                  <div className="text-[11px] text-[#B5AFA5]">171+ Happy Reviews</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center justify-center lg:justify-start gap-2.5 sm:pl-3 sm:border-l sm:border-[rgba(242,140,40,0.25)]">
                <div className="p-2 rounded-lg bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] text-[#F28C28] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#F5F1EA]">Family Friendly</div>
                  <div className="text-[11px] text-[#B5AFA5]">Clean & Kid-Friendly</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Floating Ceramic Platter (Desktop) */}
          <div className="hidden lg:col-span-5 lg:flex items-center justify-center relative">
            {/* Ambient amber backdrop glow */}
            <div className="absolute w-[440px] h-[440px] bg-gradient-to-tr from-[#F28C28]/30 via-[#FFB15C]/20 to-transparent rounded-full blur-3xl pointer-events-none transform -translate-x-4 -translate-y-4" />

            <div className="relative w-[420px] xl:w-[480px] aspect-square">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[rgba(242,140,40,0.3)] animate-spin-slow scale-105 pointer-events-none" />

              {/* Platter Image */}
              <img
                src="/src/assets/images/hero_tandoor_spread_1791878866644.jpg"
                alt="Signature North Indian tandoori feast platter at The 2nd Wife Family Restaurant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-2 ring-[rgba(242,140,40,0.45)] animate-float-plate"
              />

              {/* Rotating Circular Stamp Badge */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 xl:w-36 xl:h-36 rounded-full bg-[#161618]/95 border-2 border-[rgba(242,140,40,0.5)] shadow-2xl flex items-center justify-center p-2 backdrop-blur-md">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full animate-spin-slow text-[#FFB15C]" viewBox="0 0 100 100">
                    <path
                      id="circlePathDesktop"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text className="text-[8.5px] uppercase tracking-[0.2em] fill-[#FFB15C] font-semibold">
                      <textPath href="#circlePathDesktop">
                        OPEN TILL 11 PM · SHERGHATI · FAMILY DINING ·
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute w-9 h-9 rounded-full bg-[#F28C28]/20 border border-[#F28C28]/40 flex items-center justify-center text-[#FFB15C]">
                    <span className="text-sm">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
