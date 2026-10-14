import React from 'react';
import { Flame, Users, Clock, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Fresh Tandoor",
      description: "Smoky, juicy tandoori favourites baked live straight from our intensely heated clay oven.",
      icon: Flame,
    },
    {
      title: "Family Friendly",
      description: "A clean, comfortable, and kid-friendly dining space thoughtfully arranged for every celebration.",
      icon: Users,
    },
    {
      title: "Quick & Warm Service",
      description: "Friendly attentive staff and food prepared fresh to order, always genuinely worth the wait.",
      icon: Clock,
    },
    {
      title: "Authentic Flavours",
      description: "Signature Kali Mirch chicken, charcoal tikkas, and rich slow-simmered North Indian gravies.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 bg-[#1B1D22] relative overflow-hidden">
      {/* Background radial accent glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#F28C28]/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#FFB15C] mb-3">
            <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
            <span>THE 2ND WIFE EXPERIENCE</span>
            <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1EA] tracking-tight mb-4">
            Why Sherghati <span className="text-gradient-orange">Loves Us</span>
          </h2>
          <p className="text-[#B5AFA5] text-base sm:text-lg font-light">
            Crafting memories around authentic recipes, hygienic preparation, and warm hospitable service.
          </p>
        </div>

        {/* 4 Glassmorphism Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#161618]/70 backdrop-blur-md rounded-[20px] p-7 border border-[rgba(255,255,255,0.08)] hover:border-[#F28C28] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_-10px_rgba(242,140,40,0.35)] flex flex-col justify-between"
              >
                {/* Subtle top inner highlight */}
                <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-[#FFB15C]/30 to-transparent group-hover:via-[#F28C28]" />

                <div>
                  {/* Icon */}
                  <div className="w-13 h-13 rounded-2xl bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] flex items-center justify-center text-[#F28C28] group-hover:text-[#FFB15C] group-hover:border-[#F28C28] group-hover:shadow-[0_0_20px_-3px_rgba(242,140,40,0.5)] transition-all mb-6">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-lg font-semibold text-[#F5F1EA] uppercase tracking-wide mb-3 group-hover:text-[#FFB15C] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#B5AFA5] leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
