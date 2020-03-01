import React, { useEffect, useState } from 'react';
import ProdCard from '../components/ProductCard';

function Home() {
  const [results, setResults] = useState({});

  useEffect(() => {}, []);

  return (
    <div>
      <ProdCard />
      <ProdCard />
    </div>
  );
}

export default Home;
