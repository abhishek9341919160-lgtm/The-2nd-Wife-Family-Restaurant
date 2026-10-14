import React, { useState } from 'react';
import { X, Download, Plus, Check } from 'lucide-react';
import { FULL_MENU_CATEGORIES, RESTAURANT_INFO, Dish } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('starters');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const { addToCart } = useCart();
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentCategory = FULL_MENU_CATEGORIES.find((cat) => cat.id === activeTab) || FULL_MENU_CATEGORIES[0];

  const handleDownload = () => {
    setDownloadSuccess(true);
    // Simulate menu PDF generation & download trigger
    const menuSummary = FULL_MENU_CATEGORIES.map(
      (cat) =>
        `=== ${cat.name} (${cat.hindiName}) ===\n` +
        cat.items.map((i) => `• [${i.isVeg ? 'VEG' : 'NON-VEG'}] ${i.name} - ₹${i.price}\n  ${i.description}`).join('\n')
    ).join('\n\n');

    const blob = new Blob(
      [
        `THE 2ND WIFE FAMILY RESTAURANT - SHERGHATI, BIHAR\n` +
          `Nai Bazar, near Hotel Hill, Govt. Bus Stand | Phone: 090971 60969\n\n` +
          menuSummary
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'The_2nd_Wife_Sherghati_Full_Menu.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleQuickAddFromMenu = (item: typeof currentCategory.items[0]) => {
    // parse price if string
    const numericPrice = typeof item.price === 'number' ? item.price : parseInt(String(item.price).split('/')[0].trim(), 10) || 150;
    const tempDish: Dish = {
      id: `menu-${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      name: item.name,
      category: activeTab as any,
      isVeg: item.isVeg,
      price: numericPrice,
      description: item.description,
      image: '/src/assets/images/hero_tandoor_spread_1791878866644.jpg'
    };
    addToCart(tempDish);
    setAddedItemName(item.name);
    setTimeout(() => setAddedItemName(null), 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-5xl bg-[#161618] border border-[rgba(242,140,40,0.35)] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[rgba(255,255,255,0.08)] bg-[#1F1F22] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-display text-xl sm:text-2xl font-bold text-[#F5F1EA]">
                The 2nd Wife
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#F28C28]/20 border border-[#F28C28]/40 text-[#FFB15C] font-mono">
                Full Menu
              </span>
            </div>
            <p className="text-xs text-[#B5AFA5] mt-0.5">
              Sherghati, Bihar · All dishes prepared fresh to order with pure ingredients
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu modal"
            className="p-2 text-[#B5AFA5] hover:text-[#F5F1EA] hover:bg-[#161618] rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Categories Tab Bar */}
        <div className="bg-[#121214] border-b border-[rgba(255,255,255,0.08)] px-4 sm:px-6 overflow-x-auto scrollbar-none flex gap-2 sm:gap-6">
          {FULL_MENU_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`py-3.5 px-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-all relative cursor-pointer ${
                  isActive ? 'text-[#FFB15C]' : 'text-[#B5AFA5] hover:text-[#F5F1EA]'
                }`}
              >
                <span>{cat.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#F28C28] to-[#FFB15C] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content: Two Columns with Dotted Leaders */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-[#161618]">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#F5F1EA]">
                {currentCategory.name}
              </h3>
              <p className="font-hindi text-xs sm:text-sm text-[#FFB15C] mt-0.5">
                {currentCategory.hindiName}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#B5AFA5]">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm border border-emerald-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>
                <span>Veg</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm border border-rose-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                </span>
                <span>Non-Veg</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {currentCategory.items.map((item, idx) => {
              const isAdded = addedItemName === item.name;

              return (
                <div
                  key={idx}
                  className="group p-3 rounded-xl hover:bg-[#1F1F22] border border-transparent hover:border-[rgba(242,140,40,0.2)] transition-all"
                >
                  {/* Name, Leader line & Price */}
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <div className="flex items-center gap-2 min-w-0">
                      {/* Veg / Non-Veg dot */}
                      <span
                        className={`w-3.5 h-3.5 rounded-sm border shrink-0 flex items-center justify-center ${
                          item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                      </span>
                      <span className="font-serif-display text-sm sm:text-base font-semibold text-[#F5F1EA] group-hover:text-[#FFB15C] transition-colors truncate">
                        {item.name}
                      </span>
                      {item.isRecommended && (
                        <span className="text-[10px] text-[#F28C28] shrink-0 font-medium font-sans">
                          ★ Must-Try
                        </span>
                      )}
                    </div>

                    {/* Dotted Leader Line */}
                    <span className="flex-1 border-b border-dotted border-[rgba(255,255,255,0.15)] mx-2 shrink opacity-40 group-hover:opacity-80" />

                    {/* Price and Add button */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm font-bold text-[#F5F1EA] font-mono tabular-nums">
                        ₹{item.price}
                      </span>
                      <button
                        onClick={() => handleQuickAddFromMenu(item)}
                        title="Add to order list"
                        className={`p-1 rounded-md transition-all ${
                          isAdded
                            ? 'bg-emerald-500 text-white'
                            : 'bg-[#2A2A2E] text-[#B5AFA5] hover:bg-[#F28C28] hover:text-black'
                        }`}
                      >
                        {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#B5AFA5] font-light pl-5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-5 bg-[#1F1F22] border-t border-[rgba(255,255,255,0.08)] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#B5AFA5]">
            GST & taxes as applicable · Takeaway packaging available
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[rgba(255,255,255,0.12)] hover:border-[#F28C28] text-xs font-medium text-[#F5F1EA] hover:bg-[#161618] transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download Menu'}</span>
            </button>

            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-md transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.972.536 1.956.824 3.149.825h.005c3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.767-5.773-5.767zm7.568 5.768c0 4.173-3.395 7.568-7.568 7.568-1.332 0-2.592-.352-3.693-.972l-5.138 1.348 1.371-5.011c-.694-1.157-1.071-2.486-1.071-3.933 0-4.173 3.395-7.568 7.568-7.568s7.531 3.395 7.531 7.568z" />
              </svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
