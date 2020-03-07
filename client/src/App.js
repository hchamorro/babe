import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
                <img className="h-6" src={hamburger} alt="Home Button" />
              </div>
              {/* BABE Logo */}
              <div>
                <Link className="a" to="/">
                  <img className="w-48" src={logo} alt="B.A.B.E. logo" />
                </Link>
              </div>
              {/* shopping cart */}
              <div>
                <button type="button" className="cart block">
                  <Link className="a" to="/Cart">
                    <img className="cart h-8" src={shoppingBag} alt="cart" />
                  </Link>
                </button>
              </div>
            </header>
            {/* nav bar */}
            <Nav />

            {/* body of pages */}
            <Route exact path={["/"]} component={Home} />
            <Route exact path={["/shop"]} component={Shop} />
            <Route exact path={["/about"]} component={About} />
            <Route exact path={["/cart"]} component={Cart} />
            <Route exact path={["/wellness"]} component={Wellness} />
            <Route exact path={["/news"]} component={News} />
            <Route path={["/shop/:id"]} component={Products} />

            {/* footer */}
            <footer className="footer">
              <div className="py-6">
                {/* top part */}
                <div className="flex px-12 justify-between">
                  {/* about / contact / join newsletter */}
                  <div className="justify-start">
                    <Link className="footer-links a" to="/About">
                      About
                    </Link>
                    <p className="footer-links">Contact</p>
                    <p className="footer-links">Join Our Newsletter</p>
                  </div>
                  {/* center for spacing purposes */}
                  <div>&nbsp;</div>
                  {/* for BABES only */}
                  <div className="justify-end">
                    <p className="py-8 babes-only">For B.A.B.Es Only</p>
                  </div>
                </div>
                {/* copyright */}
                <div className="flex justify-center">
                  <p className="copyright">Copyright © 2020 B.A.B.E.</p>
                </div>
              </div>
            </footer>
          </CartProvider>
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default App;
