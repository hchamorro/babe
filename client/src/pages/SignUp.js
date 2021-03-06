import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../utils/context/UserContextHc";
import { CartContext } from "../utils/context/CartContextHc";

import API from "../utils/API";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [toHome, setToHome] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const [cart, setCart] = useContext(CartContext);

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassord = e => {
    setPassord(e.target.value);
  };

  const createUser = e => {
    e.preventDefault();
    if (password && email) {
      API.userAPI
        .createUser({
          password: password,
          email: email,
          cart: []
        })
        .then(res => {
          API.userAPI
            .logInUser({
              password: password,
              email: email,
              cart: []
            })
            .then(result => {
              setUser({
                isLoggedIn: true,
                email: result.data.user.email,
                id: result.data.user._id
              });

              const tempCart = [...cart, ...result.data.user.cart];
              const verifiedCart = tempCart.filter(isNotEmpty);
              function isNotEmpty(obj) {
                return Object.keys(obj).length > 0;
              }

              setCart(verifiedCart);
              setToHome(true);
            });
        })
        .catch(err => setError(true));
    }
  };

  return (
    <>
      {toHome ? <Redirect to="/" /> : null}
      <div className="px-8 py-8">
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={createUser}
          >
            <h3>Welcome, create your account:</h3>
            {error ? (
              <p className="inline-block align-baseline font-bold text-base text-red-500 hover:text-blue-800">
                * User Name Already Exists
              </p>
            ) : null}
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
                onClick={createUser}
              >
                Submit
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to="/login"
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUpForm;
