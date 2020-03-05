import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
  const [cart, setCart] = useState([
    {
      id: '5e5182070fa3d46f40e0486e',
      qty: 1,
      price: 185
    }
  ]);
  // item id to hard code '5e5182070fa3d46f40e0486e'

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
