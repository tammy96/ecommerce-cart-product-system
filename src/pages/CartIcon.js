import React from 'react';
import { useCart } from './context/CartContext';

const CartIcon = () => {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      {totalQuantity > 0 && (
        <span className="cart-badge text-lg">{totalQuantity}</span>
      )}
    </div>
  );
};

export default CartIcon;
