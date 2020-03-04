import React, { useEffect, useState } from "react";
import ProdCard from "../components/ProductCard";
import "../assets/babe.css";

function Home() {
  const [results, setResults] = useState({});

  useEffect(() => {}, []);

  return (
    <div className="flex items-center justify-between px-12 py-8">
      <ProdCard />
      <ProdCard />
      <ProdCard />
      <ProdCard />
    </div>
  );
}

export default Home;
