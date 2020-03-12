import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../utils/context/CartContextHc";
import { CartTotalContext } from "../utils/context/CartTotalContextIE";
import CartCard from "../components/CartCard";
import API from "../utils/API";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useContext(CartTotalContext);

  // const [results, setResults] = useState([]);
  // function getCartData() {
  //   return Promise.all(cart.map(p => fetchData(p.id)));
  // }
  // function fetchData(id) {
  //   return API.productsAPI.findProduct(id).then(res => {
  //     return res.data;
  //   });
  // }
  // useEffect(() => {
  //   getCartData().then(res => {
  //     setResults(res);
  //   });
  // }, []);

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  function removeItem(id) {
    const updatedCart = cart.filter(p => p.id !== id);
    setCart(updatedCart);
  }

  function addQty(id) {
    const existingProduct = cart.filter(p => p.id === id);
    if (existingProduct.length > 0) {
      const withoutExistingProduct = cart.filter(p => p.id !== id);
      const updatedQty = {
        ...existingProduct[0],
        qty: existingProduct[0].qty + 1
      };
      setCart([...withoutExistingProduct, updatedQty]);
    }
  }

  function subQty(id) {
    const existingProduct = cart.filter(p => p.id === id);
    if (existingProduct[0].qty < 1) {
      removeItem(id);
    } else if (existingProduct.length > 0) {
      const withoutExistingProduct = cart.filter(p => p.id !== id);
      const updatedQty = {
        ...existingProduct[0],
        qty: existingProduct[0].qty - 1
      };
      setCart([...withoutExistingProduct, updatedQty]);
    }
  }

  if (cart.length < 1) {
    return <div className="body-2 py-12 px-8">No Items in cart</div>;
  } else {
    return (
      <section className="body-2 px-12 py-12">
        <div className="flex justify-between">
          {/* cart item */}
          <div className="justify-start">
            {cart.map(result => (
              <CartCard
                title={result.title}
                price={result.price}
                key={result.length * Math.random()}
                id={result.id}
                img={result.thumbnail}
                remove={removeItem}
                qty={result.qty}
                addQty={addQty}
                subQty={subQty}
              />
            ))}
          </div>
          {/* total */}
          <div className="justify-end max-w-sm w-full lg:max-w-lg py-8">
            <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4  leading-normal ">
              <div className="mb-8">
                <div className="flex mb-4">
                  <div className="w-1/2  h-12 text-gray-900 font-bold text-xl mb-2">
                    Total
                  </div>
                  <div className="cart-price-2 w-1/2  h-12 text-gray-700 text-base">
                    ${totalPrice} {setTotal(totalPrice)}{" "}
                    {console.log(
                      "***************cart total*********************",
                      total
                    )}
                  </div>
                  <div className="checkout">
                    {/* link to checkout page */}
                    <button>Checkout Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      // <section className="body-2 px-12 py-12">
      //   <div className="">
      //     <div className="justify-start">
      //       {cart.map(result => (
      //         <CartCard
      //           title={result.title}
      //           price={result.price}
      //           key={result.length * Math.random()}
      //           id={result.id}
      //           img={result.thumbnail}
      //           remove={removeItem}
      //           qty={result.qty}
      //           addQty={addQty}
      //           subQty={subQty}
      //         />
      //       ))}
      //     </div>
      //     <div className="justify-end max-w-sm w-full lg:max-w-full py-8">
      //       <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4  leading-normal w-1/4">
      //         <div className="mb-8">
      //           <div className="flex mb-4">
      //             <div className="w-1/2  h-12 text-gray-900 font-bold text-xl mb-2">
      //               Total
      //             </div>
      //             <div className="cart-price-2 w-1/2  h-12 text-gray-700 text-base">
      //               ${totalPrice} {setTotal(totalPrice)}{" "}
      //               {console.log(
      //                 "***************cart total*********************",
      //                 total
      //               )}
      //             </div>
      //             <div className="checkout">
      //               {/* link to checkout page */}
      //               <button>Checkout Now</button>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}
export default Cart;
