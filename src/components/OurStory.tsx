import React from 'react';

export const OurStory: React.FC = () => {
  const stats = [
    { label: 'Google Rating', value: '4.7★' },
    { label: 'Happy Reviews', value: '171+' },
    { label: 'Signature Dishes', value: '50+' },
    { label: 'Open Daily', value: '11 PM' },
  ];

  return (
    <section id="story" className="py-24 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#F28C28]/8 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#FFB15C] mb-3">
              <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
              <span>OUR STORY</span>
            </div>

            {/* Title */}
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1EA] tracking-tight mb-6">
              Passion in <span className="text-gradient-orange">Every Plate</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg text-[#B5AFA5] leading-relaxed mb-4 font-light">
              At The 2nd Wife Family Restaurant, Sherghati, food is not merely prepared—it is crafted with patience,
              traditional culinary heritage, and heartfelt family care. From the smoky embers of our authentic tandoor
              to the slow-simmered gravies infused with freshly pounded spices, every preparation reflects our commitment
              to genuine hospitality.
            </p>
            <p className="text-base sm:text-lg text-[#B5AFA5] leading-relaxed mb-6 font-light">
              We founded this sanctuary of flavors so local families and road travelers alike could experience a dining
              environment that feels as warm and comforting as eating at home.
            </p>

            {/* Script Signature */}
            <div className="font-script text-2xl sm:text-3xl text-[#FFB15C] mb-10 tracking-wide">
              — With love, The 2nd Wife Family
            </div>

            {/* Stats Row */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="font-serif-display text-2xl sm:text-3xl font-bold text-[#FFB15C] font-mono tabular-nums mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#B5AFA5] uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Large Main Photo: Chef Plating */}
              <div className="col-span-8 relative">
                <div className="rounded-3xl overflow-hidden border-2 border-[rgba(242,140,40,0.4)] shadow-2xl bg-[#161618] aspect-[4/5] sm:aspect-[4/4.5] group">
                  <img
                    src="/src/assets/images/chef_in_kitchen_1791878868430.jpg"
                    alt="Executive head chef carefully garnishing an Indian delicacy at The 2nd Wife Restaurant"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle caption pill */}
                  <div className="absolute bottom-3 left-3 bg-[#0A0A0B]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-[#F5F1EA]">
                    <span>Head Chef Raj & Kitchen Team</span>
                  </div>
                </div>
              </div>

              {/* Stacked Secondary Photos */}
              <div className="col-span-4 flex flex-col gap-4">
                {/* Secondary Photo 1: Interior Ambiance */}
                <div className="rounded-2xl overflow-hidden border border-[rgba(242,140,40,0.3)] shadow-xl bg-[#161618] aspect-square group">
                  <img
                    src="/src/assets/images/restaurant_ambiance_1791878867991.jpg"
                    alt="Warm cozy restaurant interior at The 2nd Wife Sherghati"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>

                {/* Secondary Photo 2: Dining Spread */}
                <div className="rounded-2xl overflow-hidden border border-[rgba(242,140,40,0.3)] shadow-xl bg-[#161618] aspect-square group">
                  <img
                    src="/src/assets/images/gallery_kebab_spread_1791879025657.jpg"
                    alt="Family dining table feast with fresh kebabs and drinks"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Established Badge Ornament */}
            <div className="absolute -bottom-4 -left-4 sm:left-4 bg-[#161618]/95 border border-[rgba(242,140,40,0.45)] px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#F28C28]" />
              <span className="text-xs font-semibold text-[#F5F1EA] tracking-wide">
                Fresh Spices · Daily Sourced Meat & Dairy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
