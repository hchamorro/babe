import React, { useEffect, useState, useContext } from "react";
import ProdCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { CartContext } from "../utils/context/CartContextHc";
import { UserContext } from "../utils/context/UserContextHc";
import "../assets/babe.css";

function Shop() {
  const [results, setResults] = useState({});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    findAllProducts();
  }, []);

  function findAllProducts() {
    API.productsAPI
      .getAllProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }

  function AddCart(id) {
    setCart([...cart, id]);
    if (user.isLoggedIn) {
      console.log("trying to update db");
      const id = user.id;
      API.userAPI
        .updateUserCart(id, cart)
        .then(res => {
          console.log("^^^^^^^^", res);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div>
      {/* <ProdCard
        title="Title Placeholder"
        seller="Seller Placeholder"
        short="Short
        Description Placeholder"
        price="Price Placeholder"
      >
        <button
          onClick={AddCart}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Add to Cart
        </button>
      </ProdCard> */}
      {console.log(" this is what the cart looks like on SHOP PAGE", cart)}
      {products.map(product => (
        <ProdCard
          thumbnail={product.thumbnail}
          title={product.title}
          seller={product.seller}
          // short={product.short_description}
          price={product.price}
          AddCart={AddCart}
          key={product._id}
          id={product._id}
        >
          {/* <Link to="">See More</Link> */}

          <Link className="a" to={"/shop/" + product._id}>
            <strong>
              See More
              {console.log(
                "***************product detail page opened by id*****************"
              )}
            </strong>
          </Link>
        </ProdCard>
      ))}
    </div>
  );
}

export default Shop;
