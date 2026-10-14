import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F28C28]/6 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#FFB15C] mb-3">
              <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
              <span>WHAT OUR GUESTS SAY</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1EA] tracking-tight">
              Unforgettable <span className="text-gradient-orange">Experiences</span>
            </h2>
          </div>

          {/* Google Reviews Proof Lockup */}
          <div className="flex items-center gap-4 p-3 bg-[#161618] border border-[rgba(242,140,40,0.3)] rounded-2xl">
            {/* Avatar Stack */}
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#F28C28] to-[#FFB15C] flex items-center justify-center text-black font-bold text-xs ring-2 ring-[#161618]">
                RS
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#B85C0E] to-[#F28C28] flex items-center justify-center text-white font-bold text-xs ring-2 ring-[#161618]">
                NK
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#E8C58A] to-[#FFB15C] flex items-center justify-center text-black font-bold text-xs ring-2 ring-[#161618]">
                AN
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 text-[#FFB15C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-sm font-bold text-[#F5F1EA] ml-1 font-mono">4.7</span>
              </div>
              <div className="text-[11px] text-[#B5AFA5]">
                From 171+ verified Google reviews
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Grid / Slider */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const reviewIndex = (currentIndex + offset) % REVIEWS.length;
              const review = REVIEWS[reviewIndex];
              const isCenterCard = offset === 1;

              return (
                <div
                  key={review.id}
                  className={`bg-[#1F1F22] rounded-[22px] border transition-all duration-300 p-7 flex flex-col justify-between relative ${
                    isCenterCard
                      ? 'border-[#F28C28] md:-translate-y-2 shadow-[0_16px_40px_-10px_rgba(242,140,40,0.25)]'
                      : 'border-[rgba(242,140,40,0.3)] hover:border-[#FFB15C]'
                  }`}
                >
                  {/* Top Quote Icon */}
                  <Quote
                    className="absolute top-6 right-6 w-9 h-9 text-[#F28C28]/25 stroke-[1.5]"
                    aria-hidden="true"
                  />

                  <div>
                    {/* Reviewer Tag & Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-[#FFB15C]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#161618] border border-[rgba(242,140,40,0.35)] text-[#FFB15C] font-medium">
                        {review.tag}
                      </span>
                    </div>

                    {/* Review Body */}
                    <p className="text-sm sm:text-base text-[#F5F1EA]/90 leading-relaxed italic mb-6">
                      “{review.comment}”
                    </p>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#F28C28]/40 to-transparent mb-4" />

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F28C28] to-[#FFB15C] flex items-center justify-center text-black font-bold text-xs shadow-md">
                        {review.avatarText}
                      </div>
                      <div>
                        <div className="font-serif-display text-sm font-bold text-[#F5F1EA]">
                          {review.name}
                        </div>
                        <div className="text-xs text-[#B5AFA5]">
                          {review.role} · {review.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              aria-label="Previous Review"
              className="p-3 rounded-full bg-[#161618] border border-[rgba(242,140,40,0.3)] hover:border-[#F28C28] text-[#F5F1EA] hover:text-[#FFB15C] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Pagination */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 h-2 bg-[#F28C28]'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Review"
              className="p-3 rounded-full bg-[#161618] border border-[rgba(242,140,40,0.3)] hover:border-[#F28C28] text-[#F5F1EA] hover:text-[#FFB15C] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
