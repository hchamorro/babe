import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../utils/context/UserContextHc';
import { CartContext } from '../utils/context/CartContextHc';
import API from '../utils/API';

const LogIm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
  const [user, setUser] = useContext(UserContext);
  const [cart, setCart] = useContext(CartContext);

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassord = e => {
    setPassord(e.target.value);
  };

  const logIn = e => {
    e.preventDefault();
    if (password && email) {
      API.userAPI
        .logInUser({
          password: password,
          email: email,
          cart: []
        })
        .then(res => {
          console.log(res);
          setUser({
            isLoggedIn: true,
            email: res.data.user.email,
            id: res.data.user._id,
            cart: res.data.user.cart
          });

          setCart([...cart, ...res.data.user.cart]);
        })
        .catch(err => console.log(err));
    }
    // setUser({ isLoggedIn: true, email: email, id: '' });
  };
  return (
    <div className="w-full max-w-xs">
      {console.log('cart on the LOGIN--WELLNESS PAGE', cart)}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={logIn}
      >
        <h3>Log In</h3>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
            value={email}
            onChange={updateEmail}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="password"
            value={password}
            onChange={updatePassord}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={logIn}
          >
            Submit
          </button>

          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIm;
