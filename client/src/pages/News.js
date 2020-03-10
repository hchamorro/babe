import React, { useEffect, useState } from 'react';
import API from '../utils/API';

function News() {
  const [results, setResults] = useState({});

  useEffect(() => {
    //  findWomansHealth();
    findWomanScience();
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
      })
      .catch(err => console.log(err));
  }

  return <div className="body-2">Hello News</div>;
}

export default News;
