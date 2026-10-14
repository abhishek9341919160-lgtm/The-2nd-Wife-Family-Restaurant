import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dish, RESTAURANT_INFO } from '../data/restaurantData';

export interface CartItem {
  dish: Dish;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (dish: Dish) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  lastAddedDish: Dish | null;
  getWhatsAppOrderUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('the2ndwife_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAddedDish, setLastAddedDish] = useState<Dish | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('the2ndwife_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (dish: Dish) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
    setLastAddedDish(dish);
    // show brief feedback
    setTimeout(() => {
      setLastAddedDish(null);
    }, 2500);
  };

  const removeFromCart = (dishId: string) => {
    setCart((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.dish.id === dishId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);

  const getWhatsAppOrderUrl = () => {
    if (cart.length === 0) {
      return RESTAURANT_INFO.whatsappUrl;
    }
    const orderLines = cart.map(
      (item) => `• ${item.dish.name} x${item.quantity} = ₹${item.dish.price * item.quantity}`
    );
    const text = encodeURIComponent(
      `Hello The 2nd Wife Family Restaurant, Sherghati!\nI want to place an order:\n\n${orderLines.join(
        '\n'
      )}\n\n*Estimated Total: ₹${totalPrice}*\n\nPlease confirm availability and prep time.`
    );
    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        lastAddedDish,
        getWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
