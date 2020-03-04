import React from 'react';

function CartCard(props) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img className="w-full" src={props.img} alt="" />
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex content-center flex-wrap leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {props.title}
          </div>
          <div className="flex content-between flex-wrap">
            <p className="text-gray-700 text-base">${props.price}</p>{' '}
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 text-base font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => props.remove(props.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
