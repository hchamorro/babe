import React, { useEffect, useState } from 'react';
import ProdCard from '../components/ProdCard';
import { Link } from 'react-router-dom';
import API from '../utils/API';

function Products() {
  const [results, setResults] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    findAllProducts();
  }, []);

  function findAllProducts() {
    API.productsAPI
      .getProductsAPI()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }

  function AddCart() {
    //when this button is clicked, take the id of the product you clicked and add it to the product page
    console.log('*******Link Clicked*********');
  }

  return (
    <div>
      {/* <ProdCard >
      title="Title Placeholder" 
      seller="Seller Placeholder"
      short="Short Description Placeholder"
      price="Price Placeholder"
      <button onClick={AddCart} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      Add to Cart
    </button>
    </ProdCard> */}

      {products.map(product => (
        <ProdCard
          thumbnail={product.thumbnail}
          title={product.title}
          seller={product.seller}
          short={product.short_description}
          price={product.price}
          AddCart={AddCart}
          key={product.id}
        >
          {/* <Link to="">See More</Link> */}
        </ProdCard>
      ))}
      {console.log('We should see all the proucts here', products)}
    </div>
  );
}

export default Products;
