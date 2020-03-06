import React, { useEffect, useState, useContext } from 'react';
import ProdCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import { CartContext } from '../utils/context/CartContextHc';
import { UserContext } from '../utils/context/UserContextHc';
import '../assets/babe.css';

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

  // function AddCart(id) {
  //   setCart([...cart, id]);
  //   if (user.isLoggedIn) {
  //     updateUserDB();
  //   }
  // }

  function AddCart(id, qty, price) {
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

    handleCart(id, qty, price);
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

  function handleCart(id, qty, price) {
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
      setCart([...cart, { id, qty, price }]);
      let tempArr = cart;
      tempArr.push({ id, qty, price });
      updateUserDB(tempArr);
    }
  }
  // function updateUserDbCart(id) {
  //   return new Promise(resolve => {
  //     setCart([...cart, id]);
  //     updateUserDbCart();
  //   });
  // }
  // async function AddCart() {
  //   const cart = await updateUserDbCart();
  //   if (user.isLoggedIn) {
  //     console.log('trying to update db');
  //     const id = user.id;
  //     API.userAPI
  //       .updateUserCart(id, cart)
  //       .then(res => {
  //         console.log('^^^^^^^^', res);
  //       })
  //       .catch(err => console.log(err));
  //   }
  // }

  return (
    <div>
      {console.log(' this is what the cart looks like on SHOP PAGE', cart)}
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
          qty={1}
        >
          {/* <Link to="">See More</Link> */}

          <Link className="a" to={'/shop/' + product._id}>
            <strong>See More</strong>
          </Link>
        </ProdCard>
      ))}
    </div>
  );
}

export default Shop;
