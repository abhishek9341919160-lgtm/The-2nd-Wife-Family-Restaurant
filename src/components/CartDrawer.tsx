import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  onOpenMenu: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOpenMenu }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
    getWhatsAppOrderUrl,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#161618] border-l border-[rgba(242,140,40,0.3)] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[rgba(255,255,255,0.08)] bg-[#1F1F22] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#161618] border border-[rgba(242,140,40,0.3)] text-[#FFB15C]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-display text-lg font-bold text-[#F5F1EA]">
                  Your Order Selection
                </h3>
                <p className="text-xs text-[#B5AFA5]">
                  {totalItems} {totalItems === 1 ? 'dish' : 'dishes'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart drawer"
              className="p-2 text-[#B5AFA5] hover:text-[#F5F1EA] rounded-xl hover:bg-[#161618] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#1F1F22] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#B5AFA5] mb-4">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <h4 className="font-serif-display text-lg font-semibold text-[#F5F1EA] mb-2">
                  Your cart is empty
                </h4>
                <p className="text-xs text-[#B5AFA5] max-w-xs mb-6">
                  Add some sizzling tandoori items, rich curries, or crispy Indo-Chinese starters to get started.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onOpenMenu();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#FFB15C] text-black font-semibold text-xs shadow-md cursor-pointer"
                >
                  Explore Full Menu
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(255,255,255,0.06)]">
                  <span className="text-xs uppercase tracking-wider text-[#B5AFA5] font-semibold">
                    Selected Items
                  </span>
                  <button
                    onClick={clearCart}
                    className="text-xs text-[#B5AFA5] hover:text-rose-400 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.dish.id}
                    className="p-3.5 rounded-xl bg-[#1F1F22] border border-[rgba(255,255,255,0.06)] flex items-center gap-3"
                  >
                    {/* Thumbnail */}
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#161618] shrink-0 border border-white/5">
                      <img
                        src={item.dish.image}
                        alt={item.dish.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#F5F1EA] truncate font-serif-display">
                        {item.dish.name}
                      </h4>
                      <p className="text-xs text-[#FFB15C] font-mono tabular-nums font-semibold mt-0.5">
                        ₹{item.dish.price} each
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-[#161618] rounded-lg p-1 border border-[rgba(255,255,255,0.08)]">
                      <button
                        onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="p-1 text-[#B5AFA5] hover:text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#F5F1EA] w-5 text-center font-mono">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="p-1 text-[#B5AFA5] hover:text-[#FFB15C] transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.dish.id)}
                      aria-label="Remove item"
                      className="p-1 text-[#B5AFA5] hover:text-rose-400 transition-colors ml-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[rgba(255,255,255,0.08)] bg-[#1F1F22] space-y-4">
              <div className="space-y-1.5 text-xs text-[#B5AFA5]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono font-medium text-[#F5F1EA]">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST & Service:</span>
                  <span className="font-mono text-[#F5F1EA]">Included / At Restaurant</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-bold text-[#F5F1EA] pt-2 border-t border-[rgba(255,255,255,0.08)]">
                  <span>Estimated Total:</span>
                  <span className="font-mono text-[#FFB15C] text-lg">₹{totalPrice}</span>
                </div>
              </div>

              {/* Order on WhatsApp Button */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.972.536 1.956.824 3.149.825h.005c3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.767-5.773-5.773zm7.568 5.768c0 4.173-3.395 7.568-7.568 7.568-1.332 0-2.592-.352-3.693-.972l-5.138 1.348 1.371-5.011c-.694-1.157-1.071-2.486-1.071-3.933 0-4.173 3.395-7.568 7.568-7.568s7.531 3.395 7.531 7.568z" />
                </svg>
                <span>Send Order via WhatsApp</span>
              </a>

              {/* Call Instead */}
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-2.5 border border-[rgba(242,140,40,0.4)] text-[#F5F1EA] hover:bg-[#161618] font-medium rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
                <span>Call Restaurant: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
