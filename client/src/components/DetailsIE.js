import React from "react";

function DetailsIE(props) {
  return (
    <div className="flex mb-4" key={props.id}>
      {/* image column */}
      <div className="w-1/2 h-12 shadow-lg">
        {/* {props.img.map(i => {
                return <img src={i.img} />
            })} */}
        <img className="shadow-lg w-auto" src={props.img} />
        {console.log(props.img)}
      </div>
      {/* title & Description column */}
      <div className="flex px-4">
        <div className="item-name px-12">{props.title}</div>
        <div className="description px-12 w-1/2 h-12">{props.description}</div>
        <div className="price px-12">${props.price}</div>
        <div className="px-12">
          <button
            onClick={() =>
              props.AddCart(props.id, props.qty, props.price, props.thumbnail)
            }
            className="add-to-cart-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow"
          >
            Add to Cart
          </button>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default DetailsIE;
