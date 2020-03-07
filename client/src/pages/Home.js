import React, { useEffect, useState } from "react";
import ProdCard from "../components/ProductCard";
import "../assets/babe.css";

function Home() {
  const [results, setResults] = useState({});

  useEffect(() => {}, []);

  return (
    <section className="main body-2">
      {/* what's new */}
      <div className="flex justify-around subhead items-center py-8">
        what's new
      </div>
      <div className="flex items-center justify-around px-12 py-8">
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
      </div>
      {/* trending */}
      <div className="flex justify-around subhead-2 items-center py-8">
        trending
      </div>
      <div className="flex items-center justify-between px-12 py-8">
        trending story here
      </div>
    </section>
  );
}

export default Home;
