import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
  const [cart, setCart] = useState([
    {
      item: 'Nothing is in your cart'
    }
  ]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
