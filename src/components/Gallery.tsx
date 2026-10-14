import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Food' | 'Ambiance' | 'Drinks'>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [selectedImageIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [selectedImageIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#FFB15C] mb-3">
              <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
              <span>VISUAL JOURNEY</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1EA] tracking-tight">
              Moments & <span className="text-gradient-orange">Flavours</span>
            </h2>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#161618] border border-[rgba(255,255,255,0.08)] rounded-xl self-start md:self-auto">
            {(['All', 'Food', 'Ambiance', 'Drinks'] as const).map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setSelectedImageIndex(null);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F28C28] to-[#FFB15C] text-black font-semibold shadow-sm'
                      : 'text-[#B5AFA5] hover:text-[#F5F1EA]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#161618] border border-[rgba(255,255,255,0.08)] hover:border-[#F28C28] transition-all cursor-pointer shadow-md hover:shadow-xl hover:shadow-[#F28C28]/15"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="self-end p-2 rounded-full bg-black/60 text-[#FFB15C] border border-white/10 backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#FFB15C] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-semibold text-[#F5F1EA] font-serif-display line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 p-3 rounded-full bg-[#161618] border border-white/10 text-[#F5F1EA] hover:text-[#F28C28] z-20 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#161618]/80 hover:bg-[#161618] border border-white/10 text-[#F5F1EA] hover:text-[#FFB15C] z-20 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next image button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#161618]/80 hover:bg-[#161618] border border-white/10 text-[#F5F1EA] hover:text-[#FFB15C] z-20 transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[72vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-[rgba(242,140,40,0.3)]"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-wider text-[#FFB15C] font-semibold">
                {filteredItems[selectedImageIndex].category}
              </span>
              <div className="font-serif-display text-lg font-bold text-[#F5F1EA]">
                {filteredItems[selectedImageIndex].title}
              </div>
              <div className="text-xs text-[#B5AFA5] mt-0.5">
                {selectedImageIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
