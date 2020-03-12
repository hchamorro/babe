import React, { useEffect, useState, useContext } from "react";
import ProdCard from "../components/ProductCard";
import HomeProdCard from "../components/HomeProdCard";
import NewsCard from "../components/NewsCard";
import "../assets/babe.css";
import API from "../utils/API";
import { CartContext } from "../utils/context/CartContextHc";
import { UserContext } from "../utils/context/UserContextHc";
import { Link } from "react-router-dom";

function Home() {
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [newsResults, setNewsResults] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    findAllProducts();
    findWomanScience();
  }, []);

  function findAllProducts() {
    API.productsAPI
      .getAllProducts()
      .then(res => {
        setProducts(res.data);
        const tempArr = res.data;
        console.log(tempArr);
        const filterArray = tempArr.filter(prod => {
          if (prod.tags.toLowerCase() === "jewelry") {
            return true;
          }
          return false;
        });
        setResults(filterArray);
      })
      .catch(err => console.log(err));
  }

  function findWomanScience() {
    API.newsAPI
      .getWomenScience()
      .then(res => {
        setNewsResults(res.data);
      })
      .catch(err => console.log(err));
  }

  const articleNews = newsResults.map(article => (
    <NewsCard
      headline={article.headline.main}
      snippet={article.snippet}
      web_url={article.web_url}
      paragraph={article.lead_paragraph}
      key={results.length * Math.random()}
    />
  ));

  return (
    <section className="main body-2">
      {/* what's new */}
      <div className="flex justify-around subhead items-center py-8">
        what's new
      </div>
      <div className="flex items-center justify-around px-12 py-8">
        {results.map(product => (
          <HomeProdCard
            thumbnail={product.thumbnail}
            title={product.title}
            price={product.price}
            key={product._id}
            id={product._id}
          >
            <Link to={"/shop/" + product._id}>
              <strong>See More</strong>
            </Link>
          </HomeProdCard>
        ))}
      </div>
      {/* trending */}
      <div className="flex justify-around subhead items-center py-8">
        trending
      </div>
      <div className="flex items-center justify-between px-12 py-2">
        <div className="body-2 grid grid-cols-6 gap-4 px-64 py-2">
          <Link className="a" to="/News">
            {articleNews[0]}
          </Link>
          <Link className="a" to="/News">
            {articleNews[1]}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
