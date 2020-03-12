import React, { useEffect, useState, useContext } from 'react';
import ProdCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import { CartContext } from '../utils/context/CartContextHc';
import { UserContext } from '../utils/context/UserContextHc';
import '../assets/babe.css';

function Shop() {
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    findAllProducts();
  }, []);

  function findAllProducts() {
    API.productsAPI
      .getAllProducts()
      .then(res => {
        setProducts(res.data);
        setResults(res.data);
      })
      .catch(err => console.log(err));
  }

  function AddCart(id, qty, price, image) {
    // let p1 = new Promise((resolve, reject) => {
    //   // handleQty(id, qty, price);
    //   // setCart([...cart, id]);

    //   resolve(setCart([...cart, { id, qty, price }]));
    // });
    // p1.then(() => {
    //   console.log('complete cart', cart);
    //   updateUserDB(cart);
    // });

    // setCart([...cart, { id, qty, price }]);
    // let tempArr = cart;
    // tempArr.push({ id, qty, price });
    // console.log('this is temp arr', tempArr);

    handleCart(id, qty, price, image);
  }

  function sortProducts(value) {
    const filterArray = products.filter(prod => {
      if (prod.tags.toLowerCase() === value) {
        return true;
      }
      return false;
    });
    setResults(filterArray);
  }

  function sortSubProducts(value) {
    const filterArray = products.filter(prod => {
      if (prod.tagstwo.toLowerCase() === value) {
        return true;
      }
      return false;
    });
    setResults(filterArray);
  }

  function updateUserDB(data) {
    if (user.isLoggedIn) console.log('trying to update db');
    const id = user.id;
    API.userAPI
      .updateUserCart(id, data)
      .then(res => {})
      .catch(err => console.log(err));
  }

  function handleCart(id, qty, price, thumbnail) {
    const existingProduct = cart.filter(p => p.id === id);
    if (existingProduct.length > 0) {
      console.log('you already have this in cart');
      const withoutExistingProduct = cart.filter(p => p.id !== id);
      const updatedQty = {
        ...existingProduct[0],
        qty: existingProduct[0].qty + qty
      };
      setCart([...withoutExistingProduct, updatedQty]);
      let tempArr = cart;
      tempArr.push([...withoutExistingProduct, updatedQty]);
      updateUserDB(tempArr);
    } else {
      setCart([...cart, { id, qty, price, thumbnail }]);
      let tempArr = cart;
      tempArr.push({ id, qty, price });
      updateUserDB(tempArr);
    }
  }

  return (
    <div className="body-2 py-12 px-8">
      <nav className="borders-2 flex justify-between">
        <div onClick={() => sortProducts('jewelry')}>Jewelry</div>

        <div onClick={() => sortProducts('clothing')}>Clothing</div>

        <div onClick={() => sortProducts('health and wellness')}>
          Health and Wellness
        </div>
        <div onClick={() => sortProducts('beauty')}>Beauty</div>
      </nav>

      <section className="px-12 py-8">
        <div className="flex flex-wrap -mb-4">
          {results.map(product => (
            <ProdCard
              thumbnail={product.thumbnail}
              title={product.title}
              seller={product.seller}
              short={product.short_description}
              price={product.price}
              AddCart={AddCart}
              key={product._id}
              id={product._id}
              qty={1}
            >
              <Link to={'/shop/' + product._id}>
                <strong>See More</strong>
              </Link>
            </ProdCard>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Shop;
