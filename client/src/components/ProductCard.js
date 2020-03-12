import React from 'react';
import '../assets/babe.css';

function ProdCard(props) {
  return (
    <div class="w-1/3 mb-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={props.thumbnail} alt="" />
        <img className="w-full" src={props.img} alt="" />
        <div className="px-6 py-4">
          <div className="item-name text-xl mb-2">{props.title}</div>
          <div>{props.seller}</div>
          <p>{props.short}</p>
          <p className="text-gray-700 text-base">{props.description}</p>
          <div className="price">${props.price}</div>
          <div className="flex justify-between">
            <button
              onClick={() =>
                props.AddCart(props.id, props.qty, props.price, props.thumbnail)
              }
              className="add-to-cart bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0 px-2 border border-gray-400 rounded shadow"
            >
              Add to Cart
            </button>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdCard;
