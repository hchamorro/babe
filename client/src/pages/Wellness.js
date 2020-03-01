import React, { useState, useContext } from 'react';
import { UserContext } from '../utils/context/UserContextHc';
import SignUpForm from '../components/SignUpFormHc';
import API from '../utils/API';

function Wellness() {
  const [user, setUser] = useContext(UserContext);
  const [products, setProducts] = useState([]);

  function findAllProducts() {
    API.productsAPI
      .getProductsAPI()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }

  return (
    <div>
      {console.log('We should see all the proucts here', products)}
      {user.email}
      <SignUpForm />
      Hello Wellness
      <button onClick={findAllProducts}>Push</button>
    </div>
  );
}

export default Wellness;
