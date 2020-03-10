import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import API from '../utils/API';

function News() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // findWomansHealth();
    findWomanScience();
  }, []);

  function findWomansHealth() {
    API.newsAPI
      .getWomensHealth()
      .then(res => {
        setResults(res.data);
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
      {console.log('results wooOoo', results)}
      <div className="grid grid-cols-6 gap-4">
        <NewsCard
          headline="College Majors That Put Women on Equal Footing With
          Men"
          snippett="a company that collects salary data, analyzed
        millions of employee profiles to see how the gender gap in pay varies
        by educational level and field."
          web_url="https://economix.blogs.nytimes.com/2012/02/15/college-majors-that-put-women-on-equal-footing-with-men/"
        />
        {results.map(article => (
          <NewsCard
            headline={article.headline.main}
            snippet={article.snippet}
            web_url={article.web_url}
            key={results.length * Math.random()}
          />
        ))}
      </div>
    </>
  );
}

export default News;
