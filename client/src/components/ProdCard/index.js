import React from "react";

function ProdCard(props) {
  return (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={props.thumbnail} alt=""/>
      <img className="w-full" src={props.image} alt="" />
      <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.title} Title Placeholder</div>
        <div>{props.seller} Seller Placeholder</div>
        <p>{props.short} Short Description Placeholder</p>
        <p className="text-gray-700 text-base">{props.description} Description Placeholder</p>
        <div>{props.price} Price Placeholder</div>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Add to Cart
        </button>
    </div>
    
  </div>
  );
}

export default ProdCard;