import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
  const [cart, setCart] = useState([
    {
      id: '5e61b2a963dd7a79fc745706',
      qty: 1,
      price: 185,
      thumbnail:
        'https://dto508s2j2p46.cloudfront.net/system/spree/products/4881/large/Hue_Necklace_White_Topaz-Single-Front.jpg?1558707721'
    }
  ]);
  // item id to hard code '5e5182070fa3d46f40e0486e'

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
