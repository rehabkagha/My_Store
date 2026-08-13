import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // حالة اللغة (عربي / إنجليزي) مع التجاوب الفوري لتغييرات الناف بار
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('app_lang') || 'ar';
  });

  useEffect(() => {
    const handleLangChange = () => {
      setLang(localStorage.getItem('app_lang') || 'ar');
    };
    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === productId) {
          return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart, lang }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}