import React, { useEffect, useState, useContext } from 'react';
import ProdCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import { CartContext } from '../utils/context/CartContextHc';

function Shop() {
  const [results, setResults] = useState({});
  const [products, setProducts] = useState([]);
  const [Cart, setCart] = useContext(CartContext);

  useEffect(() => {
    findAllProducts();
  }, []);

  function findAllProducts() {
    API.productsAPI
      .getProductsAPI()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }

  function AddCart(id) {
    //when this button is clicked, take the id of the product you clicked and add it to the product page
    console.log('*******hopefully id is here*********', id);
    setCart([...Cart, id]);
  }

  return (
    <div>
      <ProdCard
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
      </ProdCard>
      {console.log(
        '~~~~~~~~~~~~~~~~~~~~~~~~CART~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`',
        Cart
      )}
      {console.log('^^^^Products^^^^^', products)}
      {products.map(product => (
        <ProdCard
          thumbnail={product.thumbnail}
          title={product.title}
          seller={product.seller}
          short={product.short_description}
          price={product.price}
          AddCart={AddCart}
          key={product._id}
          id={product._id}
        >
          {/* <Link to="">See More</Link> */}
            <Link to={"/products/" + product._id}>
                <strong>
                  See More
                </strong>
            </Link>
        </ProdCard>
      ))}
    </div>
  );
}

export default Shop;
