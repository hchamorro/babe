import React, { useState, useContext } from 'react';
import { UserContext } from '../utils/context/UserContextHc';
import SignUpForm from '../components/SignUpFormHc';
import LoginForm from '../components/LoginFormHc';
import API from '../utils/API';

function Wellness() {
  const [user, setUser] = useContext(UserContext);
  const [products, setProducts] = useState([]);

  function findAllProducts() {
    API.productsAPI
      .getAllProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }

  return (
    <div>
      {user.email}
      <SignUpForm />
      <LoginForm />
      Hello Wellness
      <button onClick={findAllProducts}>Push</button>
    </div>
  );
}

export default Wellness;
