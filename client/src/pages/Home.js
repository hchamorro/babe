import React, { useEffect, useState } from "react";
import ProdCard from "../components/ProductCard";
import "../assets/babe.css";

function Home() {
  const [results, setResults] = useState({});

  useEffect(() => {}, []);

  return (
    // what's new section
    <section>
      <div className="flex justify-around subhead items-center py-8">
        what's new
      </div>
      <div className="flex items-center justify-between px-12 py-8">
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
      </div>
    </section>

    // what's trending
  );
}

export default Home;
