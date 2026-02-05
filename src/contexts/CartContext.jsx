import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getGST = () => {
    const totalPrice = getTotalPrice();
    return totalPrice * 0.18;
  };

  const getDiscount = () => {
    const totalPrice = getTotalPrice();
    if (totalPrice >= 10000) {
      return totalPrice * 0.20;
    } else if (totalPrice >= 5000) {
      return totalPrice * 0.10;
    }
    return 0;
  };

  const getFinalAmount = () => {
    const totalPrice = getTotalPrice();
    const gst = getGST();
    const discount = getDiscount();
    return totalPrice + gst - discount;
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      getTotalQuantity,
      getTotalPrice,
      getGST,
      getDiscount,
      getFinalAmount
    }}>
      {children}
    </CartContext.Provider>
  );
};
