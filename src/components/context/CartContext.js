import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext({
  cart: [],
  onAddItem: () => {},
  removeItem: () => {},
  updateCart: () => {},
  clearCart: () => {},
});

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const onAddItem = (id, quantity, precio, titulo) => {
    if (!isInCart(id)) {
      setCart(prev => [...prev, { id, quantity, precio, titulo }]);
    } else {
      console.error('El producto ya fue agregado');
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(item => item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, onAddItem, removeItem, updateCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
