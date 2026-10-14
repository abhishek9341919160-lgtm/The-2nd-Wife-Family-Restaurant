import React from 'react';
import { MapPin, Clock, IndianRupee, Phone, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const QuickInfoStrip: React.FC = () => {
  return (
    <div className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#161618]/90 backdrop-blur-xl border border-[rgba(242,140,40,0.35)] rounded-2xl shadow-2xl p-4 sm:p-5 glow-orange-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[rgba(255,255,255,0.08)]">
          {/* Location */}
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start sm:items-center gap-3 group text-left hover:text-[#FFB15C] transition-colors p-2"
          >
            <div className="p-2.5 rounded-xl bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] text-[#F28C28] group-hover:border-[#F28C28] group-hover:scale-105 transition-all shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-wider text-[#B5AFA5] font-semibold flex items-center gap-1">
                <span>Location</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#F5F1EA] group-hover:text-[#FFB15C] line-clamp-2">
                Nai Bazar, near Hotel Hill, Sherghati
              </div>
            </div>
          </a>

          {/* Hours */}
          <div className="flex items-start sm:items-center gap-3 p-2 lg:pl-6 pt-3 sm:pt-2">
            <div className="p-2.5 rounded-xl bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] text-[#FFB15C] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-wider text-[#B5AFA5] font-semibold">
                Timing
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#F5F1EA]">
                {RESTAURANT_INFO.hoursShort}
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-start sm:items-center gap-3 p-2 lg:pl-6 pt-3 sm:pt-2">
            <div className="p-2.5 rounded-xl bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] text-[#E8C58A] shrink-0">
              <IndianRupee className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-wider text-[#B5AFA5] font-semibold">
                Price Range
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#F5F1EA]">
                {RESTAURANT_INFO.priceRange}
              </div>
            </div>
          </div>

          {/* Phone */}
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="flex items-start sm:items-center gap-3 group text-left hover:text-[#FFB15C] transition-colors p-2 lg:pl-6 pt-3 sm:pt-2"
          >
            <div className="p-2.5 rounded-xl bg-[#1F1F22] border border-[rgba(242,140,40,0.25)] text-[#F28C28] group-hover:border-[#F28C28] group-hover:scale-105 transition-all shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-wider text-[#B5AFA5] font-semibold">
                Call Table / Order
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#F5F1EA] group-hover:text-[#FFB15C]">
                {RESTAURANT_INFO.phone}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
