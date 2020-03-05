import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../utils/context/CartContextHc';
import CartCard from '../components/CartCard';
import API from '../utils/API';

function Cart() {
  const [results, setResults] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [totalCost, setTotalCost] = useState();

  function getCartData() {
    return Promise.all(cart.map(fetchData));
  }
  function fetchData(cart) {
    return API.productsAPI.findProduct(cart).then(res => {
      return res.data;
    });
  }

  useEffect(() => {
    getCartData().then(res => {
      setResults(res);
      let total = 0;
      for (var i = 0; i < res.length; i++) {
        total += res[i].price;
      }
      console.log('total', total);
      setTotalCost(total);
    });
  }, []);

  // getCartProducts(cart).then((products) => {
  //   let total = 0;
  //   for (var i = 0; i < products.length; i++) {
  //     total += products[i].price * products[i].qty;
  //   }
  //   this.setState({ products, total });
  //   });

  function removeItem(id) {
    let resultsArray = results.filter(result => result._id !== id);
    console.log('results array after filtering', resultsArray);
    console.log('ID______________', id);
    setResults(resultsArray);
    setCart(resultsArray);
  }

  if (results.length < 1) {
    return (
      <div>
        {console.log('~~~~~~~~~~~~~~~~~~~~~~~~~results', results)}
        No Items in cart
      </div>
    );
  } else {
    return (
      <div>
        {console.log('-------cart--------', cart)}
        {console.log('~~~~~~~~~~~~~~~~~~~~~~~~~results', results)}

        {results.map(result => (
          <CartCard
            title={result.title}
            seller={result.seller}
            short={result.short_description}
            price={result.price}
            key={result.length * Math.random()}
            id={result._id}
            img={result.img_URL[0].img}
            remove={removeItem}
          />
        ))}

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
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4  leading-normal w-1/4">
            <div class="mb-8">
              <div class="flex  mb-4">
                <div class="w-1/2  h-12 text-gray-900 font-bold text-xl mb-2">
                  Total
                </div>
                <div class="w-1/2  h-12 text-gray-700 text-base">
                  ${totalCost}
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
