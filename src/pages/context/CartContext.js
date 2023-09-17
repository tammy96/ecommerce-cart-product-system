import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

//   const addToCart = (products, index) => {
//     const updatedCart = [...cart];
//     const existingItemIndex = updatedCart.findIndex(
//       (item) => item.index === index
//     );

const addToCart = (product, index) => {
  // Check if the product is already in the cart
  const existingItemIndex = cart.findIndex((item) => item.index === index);

  if (existingItemIndex !== -1) {
    // If the product is already in the cart, update its quantity
    const updatedCart = [...cart];
    updatedCart[existingItemIndex].quantity += 1;
    setCart(updatedCart);
  } else {
    // If the product is not in the cart, add it with quantity 1 and a unique identifier
    const uniqueItemId = uuidv4(); // Use uuidv4 to generate a unique identifier
    setCart([...cart, { ...product, index, quantity: 1, uniqueId: uniqueItemId }]);
  }
};
      

  const incrementItemQuantity = (index) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.index === index);

    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    }
  };

  const decrementItemQuantity = (index) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.index === index);

    if (itemIndex !== -1 && updatedCart[itemIndex].quantity >= 1) {
      updatedCart[itemIndex].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (index) => {
    setCart((cart) => cart.filter((item) => item.index !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, incrementItemQuantity, decrementItemQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCart };
