import React from 'react';

function DetailsIE(props) {
  return (
    <div className="flex mb-4" key={props.id}>
      {/* image column */}
      <div className="w-1/2 h-12">
        {/* {props.img.map(i => {
                return <img src={i.img} />
            })} */}
        <img src={props.img} />
        {console.log(props.img)}
      </div>
      {/* title & Description column */}
      <div className="w-1/2 h-12">{props.title}</div>
      <div className="w-1/2 h-12">{props.description}</div>
      <div className="w-1/2 h-12">${props.price}</div>
      <div className="flex justify-between">
        <button
          onClick={() =>
            props.AddCart(props.id, props.qty, props.price, props.img)
          }
          className="add-to-cart bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0 px-2 border border-gray-400 rounded shadow"
        >
          Add to Cart
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default DetailsIE;
