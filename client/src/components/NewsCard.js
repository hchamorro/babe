import React from 'react';

function NewsCard(props) {
  return (
    <div className="col-start-2 col-span-4  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3>{props.headline}</h3>
      <div className="mb-6 text-lg font-bold">
        <p className="block text-gray-700 text-base  mb-2">{props.snippet}</p>
        <p className="block text-gray-700 text-base  mb-2">{props.paragraph}</p>

        <p className="block text-gray-700 text-sm font-bold mb-2">
          <a href={props.web_url}> {props.web_url} </a>
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
