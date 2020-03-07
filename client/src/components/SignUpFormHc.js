import React, { useState, useContext } from 'react';
import { UserContext } from '../utils/context/UserContextHc';
import API from '../utils/API';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
  const [user, setUser] = useContext(UserContext);
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
        .then(res => console.log('it should be saved'))
        .catch(err => console.log(err));
    }
    setUser({ isLoggedIn: true, email: email });
  };
  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={createUser}
      >
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
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Already Member
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
