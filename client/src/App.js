import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Wellness from "./pages/Wellness";
import News from "./pages/News";
import { UserProvider } from "./utils/context/UserContextHc";
import logo from "./assets/BABE-192-logo.png";
import "./assets/babe.css";
import shoppingBag from "./assets/shopping-bag.svg";
import hamburger from "./assets/bars-solid.svg";
import { CartProvider } from "./utils/context/CartContextHc";

function App() {
  return (
    <Router>
      <Switch>
        <UserProvider>
          <CartProvider>
            {/* logo header */}
            <header className="flex items-center justify-between px-8 py-6">
              {/* home button */}
              <div>
                <button type="button" className="cart block">
                  <img className="h-6" src={hamburger} alt="Home Button" />
                </button>
              </div>
              {/* BABE Logo */}
              <div>
                <img className="w-48" src={logo} alt="B.A.B.E. logo" />
              </div>
              {/* shopping cart */}
              <div>
                <button type="button" className="cart block">
                  <img className="cart h-8" src={shoppingBag} alt="cart" />
                </button>
              </div>
            </header>
            {/* nav bar */}
            <Nav />

            <Route exact path={["/"]} component={Home} />
            <Route exact path={["/shop"]} component={Shop} />
            <Route exact path={["/about"]} component={About} />
            <Route exact path={["/cart"]} component={Cart} />
            <Route exact path={["/wellness"]} component={Wellness} />
            <Route exact path={["/news"]} component={News} />
            <Route path={["/shop/:id"]} component={Products} />

            {/* footer */}
            <footer className="flex footer">
              <div></div>
              <div></div>
            </footer>
          </CartProvider>
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default App;
