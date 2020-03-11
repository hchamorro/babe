import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../utils/API';
import { CartContext } from '../utils/context/CartContextHc';
import { UserContext } from '../utils/context/UserContextHc';
import DetailsIE from '../components/DetailsIE';

function Products(props) {
  const [product, setProduct] = useState({});
  const [results, setResults] = useState({});
  const [cart, setCart] = useContext(CartContext);
  const [user, setUser] = useContext(UserContext);

  // When this component mounts, grab the product with the _id of props.match.params.id
  // e.g. http://localhost:3000/products/5e5185556eae2c3520e303e1
  const { id } = useParams(props);

  useEffect(() => {
    findProduct();
  }, []);

  function findProduct() {
    API.productsAPI
      .findProduct(id)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }

  function AddCart(id, qty, price, image) {
    handleCart(id, qty, price, image);
  }

  function updateUserDB(data) {
    if (user.isLoggedIn) console.log('trying to update db');
    const id = user.id;
    API.userAPI
      .updateUserCart(id, data)
      .then(res => {
        console.log('^^^^^^^^', res);
      })
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
      {console.log(
        '************************************Load Products by ID Here*********************************',
        product
      )}
      {product && product.img_URL && (
        <DetailsIE
          id={product._id}
          img={product.img_URL[0].img}
          title={product.title}
          seller={product.seller}
          description={product.description}
          price={product.price}
          qty={1}
          AddCart={AddCart}
        />
      )}
    </div>
  );
}

export default Products;

// {products.map(product => (
//     <DetailsIE
//         id={product._id}
//         img={product.img_URL[0].img}
//         title={product.title}
//         seller={product.seller}
//         description={product.description}
//         price={product.price}

//     >

//     </DetailsIE>
// ))}
