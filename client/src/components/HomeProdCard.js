import React from 'react';
import '../assets/babe.css';

function ProdCard(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={props.thumbnail} alt="" />
      <img className="w-full" src={props.img} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <div>{props.seller}</div>
        <p>{props.short}</p>
        <p className="text-gray-700 text-base">{props.description}</p>
        <div className="price">${props.price}</div>
        <div className="flex justify-between">{props.children}</div>
      </div>
    </div>
  );
}

export default ProdCard;
