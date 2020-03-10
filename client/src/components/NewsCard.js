import React from 'react';

function NewsCard(props) {
  return (
    <div className="col-start-2 col-span-4  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3>
        docs.headline.main College Majors That Put Women on Equal Footing With
        Men
      </h3>
      <div className="mb-6 text-lg font-bold">
        <p className="block text-gray-700 text-base  mb-2">
          docs.snippett PayScale, a company that collects salary data, analyzed
          millions of employee profiles to see how the gender gap in pay varies
          by educational level and field.
        </p>

        <p className="block text-gray-700 text-sm font-bold mb-2">
          docs.web_url
          "https://economix.blogs.nytimes.com/2012/02/15/college-majors-that-put-women-on-equal-footing-with-men/"
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
