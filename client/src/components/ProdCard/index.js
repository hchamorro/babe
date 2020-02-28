import React from "react";

function ProdCard() {
  return (
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://images.unsplash.com/photo-1561828995-aa79a2db86dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80" alt="Sunset in the mountains"></img>
      <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
    </div>
  </div>
  );
}

export default ProdCard;