import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../utils/context/CartContextHc';
import CartCard from '../components/CartCard';
import API from '../utils/API';

function Cart() {
  const [results, setResults] = useState([]);
  const [cart, setCart] = useContext(CartContext);

  function getCartData() {
    return Promise.all(cart.map(p => fetchData(p.id)));
  }

  function fetchData(id) {
    return API.productsAPI.findProduct(id).then(res => {
      return res.data;
    });
  }

  useEffect(() => {
    getCartData().then(res => {
      setResults(res);
    });
  }, []);

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  // getCartProducts(cart).then((products) => {
  //   let total = 0;
  //   for (var i = 0; i < products.length; i++) {
  //     total += products[i].price * products[i].qty;
  //   }
  //   this.setState({ products, total });
  //   });

  function removeItem(id) {
    const resultsArray = results.filter(result => result._id !== id);
    const updatedCart = cart.filter(p => p.id !== id);
    setResults(resultsArray);
    setCart(updatedCart);
  }

  function resQty(_id) {
    let qty = 0;
    cart.forEach(p => {
      if (_id === p.id) {
        qty = p.qty;
      }
    });
    console.log('this is the quantitiy', _id, qty);
    return qty;
  }

  function addQty(id) {
    cart.forEach(p => {
      if (id === p.id) {
        p.qty = p.qty + 1;
      }
    });
    resQty(id);
    setCart(cart);
  }

  if (results.length < 1) {
    return (
      <div>
        {console.log('-------cart--------', cart)}
        {console.log('~~~~~~~~~~~~~~~~~~~~~~~~~results', results)}
        No Items in cart
      </div>
    );
  } else {
    return (
      <div>
        {console.log('-------cart--------', cart)}
        {console.log('~~~~~~~~~~~~~~~~~~~~~~~~~results', results)}

        {results.map(
          result => (
            resQty(result._id),
            (
              <CartCard
                title={result.title}
                seller={result.seller}
                short={result.short_description}
                price={result.price}
                key={result.length * Math.random()}
                id={result._id}
                img={result.img_URL[0].img}
                remove={removeItem}
                qty={resQty(result._id)}
                addQty={addQty}
                // subQty={subQty}
              />
            )
          )
        )}

        {/* <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          // style="background-image: url('/img/card-left.jpg')"
          // title="Woman holding a mug"
        >
          <img
            className="w-full"
            src="https://dto508s2j2p46.cloudfront.net/system/spree/products/4881/large/Hue_Necklace_White_Topaz-Single-Front.jpg?1558707721"
            alt=""
          />
        </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex content-center flex-wrap leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">Title</div>
            <div className="flex content-between flex-wrap">
              <p class="text-gray-700 text-base">$100</p>{' '}
              <button className="bg-white hover:bg-gray-100 text-gray-800 text-base font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div> */}

        <div className="max-w-sm w-full lg:max-w-full ">
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4  leading-normal w-1/4">
            <div className="mb-8">
              <div className="flex  mb-4">
                <div className="w-1/2  h-12 text-gray-900 font-bold text-xl mb-2">
                  Total
                </div>
                <div className="w-1/2  h-12 text-gray-700 text-base">
                  ${totalPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
