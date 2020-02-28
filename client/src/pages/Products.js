import React, { useEffect, useState } from 'react';
import ProdCard from '../components/ProdCard';
import API from '../utils/API';

function Products() {
  const [results, setResults] = useState({});
  const [products, setProducts] = useState([]);


  useEffect(() => {findAllProducts()}, []);

  function findAllProducts() {
    console.log("i'm clicked!");
    API.productsAPI
      .getProductsAPI()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }

  return (
    <div>
      {products.map(product => (
        <ProdCard 
          image={product.img_URL[0].img} 
          title={product.title} 
          seller={product.seller} 
          short={product.description} 
          price={product.price} 
          key={product.id}/>
        ))
      }
      {console.log('We should see all the proucts here', products)}
    </div>
  );
}

export default Products;
