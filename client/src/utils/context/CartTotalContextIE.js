import React, { createContext, useState } from 'react';

export const CartTotalContext = createContext();

export const CartTotalProvider = props => {
  const [total, setTotal] = useState();

  return (
    <CartTotalContext.Provider value={[total, setTotal]}>
      {props.children}
    </CartTotalContext.Provider>
  );
};