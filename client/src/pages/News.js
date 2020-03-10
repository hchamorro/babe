import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import API from '../utils/API';

function News() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    //  findWomansHealth();
    //findWomanScience();
  }, []);

  function findWomansHealth() {
    API.newsAPI
      .getWomensHealth()
      .then(res => {
        console.log('this is the news res', res.data);
      })
      .catch(err => console.log(err));
  }

  function findWomanScience() {
    API.newsAPI
      .getWomenScience()
      .then(res => {
        console.log(('women and science!!', res.data));
        setResults(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3>
            docs.headline.main College Majors That Put Women on Equal Footing
            With Men
          </h3>
          <div className="mb-6 text-lg font-bold">
            <p className="block text-gray-700 text-base  mb-2">
              docs.snippett PayScale, a company that collects salary data,
              analyzed millions of employee profiles to see how the gender gap
              in pay varies by educational level and field.
            </p>

            <p className="block text-gray-700 text-sm font-bold mb-2">
              docs.web_url
              "https://economix.blogs.nytimes.com/2012/02/15/college-majors-that-put-women-on-equal-footing-with-men/"
            </p>
          </div>
        </div>
        <NewsCard />
      </div>
    </>
  );
}

export default News;
