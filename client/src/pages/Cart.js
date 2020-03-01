import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../utils/context/CartContextHc';

function Cart() {
  const [results, setResults] = useState({});

  useEffect(() => {}, []);

  return <div>Hello Cart</div>;
}

export default Cart;
