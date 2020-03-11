import React, { useEffect, useState, useContext } from "react";
import ProdCard from "../components/ProductCard";
import "../assets/babe.css";
import API from "../utils/API";
import { CartContext } from "../utils/context/CartContextHc";
import { UserContext } from "../utils/context/UserContextHc";
import { Link } from "react-router-dom";

function Home() {
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
    handleCart(id, qty, price, image);
  }

  function updateUserDB(data) {
    if (user.isLoggedIn) {
      const id = user.id;
      API.userAPI
        .updateUserCart(id, data)
        .then(res => {})
        .catch(err => console.log(err));
    }
  }

  function handleCart(id, qty, price, thumbnail) {
    const existingProduct = cart.filter(p => p.id === id);
    if (existingProduct.length > 0) {
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
    <section className="main body-2">
      {/* what's new */}
      <div className="flex justify-around subhead items-center py-8">
        what's new
      </div>
      <div className="flex items-center justify-around px-12 py-8">
        {results.map(product => (
          <ProdCard
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
            AddCart={AddCart}
            key={product._id}
            id={product._id}
            qty={1}
          >
            <Link to={"/shop/" + product._id}>
              <strong>See More</strong>
            </Link>
          </ProdCard>
        ))}
      </div>
      {/* trending */}
      <div className="flex justify-around subhead items-center py-8">
        trending
      </div>
      <div className="flex items-center justify-between px-12 py-8">
        trending story here
      </div>
    </section>
  );
}

export default Home;
