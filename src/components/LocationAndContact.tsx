import React from 'react';
import { MapPin, Phone, Clock, Compass, ExternalLink, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationAndContact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#1B1D22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#FFB15C] mb-3">
            <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
            <span>FIND US IN SHERGHATI</span>
            <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1EA] tracking-tight mb-4">
            Location & <span className="text-gradient-orange">Contact</span>
          </h2>
          <p className="text-[#B5AFA5] text-base sm:text-lg font-light">
            Conveniently situated near the Government Bus Stand in Sherghati, Bihar.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Styled Dark Google Map iframe */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-[rgba(242,140,40,0.35)] shadow-2xl bg-[#161618]">
              {/* Embedded Google Map with dark styling filter */}
              <iframe
                title="Google Map location of The 2nd Wife Family Restaurant Sherghati"
                src="https://maps.google.com/maps?q=The%202nd%20Wife%20Family%20Restaurant%20Sherghati%20Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(80%) invert(90%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating overlay badge */}
              <div className="absolute top-4 left-4 bg-[#0A0A0B]/90 backdrop-blur-md border border-[rgba(242,140,40,0.4)] px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F28C28] animate-ping" />
                <div className="text-xs font-semibold text-[#F5F1EA]">
                  The 2nd Wife Family Restaurant
                </div>
              </div>

              {/* Direct Map Button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A0A0B]/90 hover:bg-[#F28C28] text-xs font-semibold text-[#F5F1EA] hover:text-black border border-[rgba(242,140,40,0.3)] transition-all shadow-lg"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Address Card */}
            <div className="bg-[#161618] border border-[rgba(255,255,255,0.08)] hover:border-[#F28C28] rounded-2xl p-5 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] text-[#F28C28] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#B5AFA5] mb-1">
                    Address
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#F5F1EA] leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-[#FFB15C] mt-2 flex items-center gap-1.5 font-mono">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Plus Code: {RESTAURANT_INFO.plusCode}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#161618] border border-[rgba(255,255,255,0.08)] hover:border-[#F28C28] rounded-2xl p-5 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] text-[#FFB15C] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#B5AFA5] mb-1">
                    Phone & WhatsApp
                  </h3>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="text-base sm:text-lg font-bold text-[#F5F1EA] hover:text-[#FFB15C] transition-colors block font-mono"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-[#B5AFA5] mt-1">
                    Available for instant table booking and takeaway orders
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#161618] border border-[rgba(255,255,255,0.08)] hover:border-[#F28C28] rounded-2xl p-5 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] text-[#E8C58A] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#B5AFA5] mb-1">
                    Dining Hours
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#F5F1EA]">
                    {RESTAURANT_INFO.hours}
                  </p>
                  <p className="text-xs text-[#B5AFA5] mt-1">
                    Open all 7 days including festivals and holidays
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#FFB15C] text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#F28C28]/25 hover:brightness-110 transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>Get Directions to Restaurant</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
