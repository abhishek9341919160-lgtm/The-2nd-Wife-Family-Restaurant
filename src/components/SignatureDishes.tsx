import React, { useState } from 'react';
import { Plus, Check, ArrowRight } from 'lucide-react';
import { SIGNATURE_DISHES, Dish } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface SignatureDishesProps {
  onOpenFullMenu: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onOpenFullMenu }) => {
  const { addToCart } = useCart();
  const [addedDishId, setAddedDishId] = useState<string | null>(null);

  const handleAdd = (dish: Dish) => {
    addToCart(dish);
    setAddedDishId(dish.id);
    setTimeout(() => {
      setAddedDishId(null);
    }, 1200);
  };

  return (
    <section id="specials" className="py-24 bg-[#0A0A0B] relative">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#F28C28]/6 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#FFB15C] mb-3">
            <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
            <span>CHEF’S FAVOURITES</span>
            <span className="w-5 h-[1px] bg-[#F28C28]/60 inline-block" />
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1EA] tracking-tight mb-4">
            Our <span className="text-gradient-orange">Signature Dishes</span>
          </h2>
          <p className="text-[#B5AFA5] text-base sm:text-lg">
            Handpicked favourites, cooked fresh to order with rich house spices and served piping hot.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SIGNATURE_DISHES.map((dish) => {
            const isJustAdded = addedDishId === dish.id;

            return (
              <div
                key={dish.id}
                className="group bg-[#1F1F22] rounded-[20px] border border-[rgba(242,140,40,0.35)] p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[#F28C28] hover:shadow-[0_12px_30px_-8px_rgba(242,140,40,0.3)] relative"
              >
                <div>
                  {/* Photo Frame with Aspect Square & Zoom */}
                  <div className="relative aspect-square w-full rounded-[14px] overflow-hidden bg-[#161618] mb-4">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />

                    {/* Veg / Non-Veg Indicator Badge on top-left */}
                    <div className="absolute top-2.5 left-2.5 bg-[#0A0A0B]/85 backdrop-blur-sm p-1 rounded-md border border-white/10 shadow">
                      <div
                        className={`w-3 h-3 border flex items-center justify-center ${
                          dish.isVeg ? 'border-emerald-500' : 'border-rose-500'
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            dish.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Badge if any */}
                    {dish.badge && (
                      <div className="absolute top-2.5 right-2.5 bg-[#0A0A0B]/85 backdrop-blur-sm border border-[rgba(242,140,40,0.4)] px-2 py-0.5 rounded-full text-[10px] font-semibold text-[#FFB15C]">
                        {dish.badge}
                      </div>
                    )}
                  </div>

                  {/* Title & Hindi Subtitle */}
                  <div className="mb-2">
                    <h3 className="font-serif-display text-lg font-bold text-[#F5F1EA] group-hover:text-[#FFB15C] transition-colors line-clamp-1">
                      {dish.name}
                    </h3>
                    {dish.hindiName && (
                      <p className="font-hindi text-xs text-[#B5AFA5] font-normal">
                        {dish.hindiName}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#B5AFA5] leading-relaxed line-clamp-2 mb-4 font-light">
                    {dish.description}
                  </p>
                </div>

                {/* Bottom Row: Price & Quick Add Button */}
                <div className="pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#B5AFA5] uppercase tracking-wider block">Price</span>
                    <span className="text-lg font-bold text-[#F5F1EA] font-mono tabular-nums">
                      {dish.priceDisplay || `₹${dish.price}`}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(dish)}
                    aria-label={`Add ${dish.name} to order`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md ${
                      isJustAdded
                        ? 'bg-emerald-500 text-white scale-105'
                        : 'bg-gradient-to-tr from-[#F28C28] to-[#FFB15C] text-black hover:brightness-110 hover:scale-105 hover:shadow-orange-500/30'
                    }`}
                  >
                    {isJustAdded ? (
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border border-[rgba(242,140,40,0.45)] hover:border-[#FFB15C] bg-[#161618] hover:bg-[#1F1F22] text-[#F5F1EA] hover:text-[#FFB15C] font-semibold text-sm tracking-wide transition-all shadow-lg hover:shadow-[#F28C28]/20 group cursor-pointer"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 text-[#F28C28] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
