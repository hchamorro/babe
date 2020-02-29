import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wellness from "./pages/Wellness";
import News from "./pages/News";
import { UserProvider } from "./utils/context/UserContextHc";
import Babe from "./assets/babe.css";
import logo from "./assets/BABE-logo192.png";
import shoppingCart from "./assets/shopping-cart-solid.svg";

function App() {
  return (
    <body>
      <Router>
        <Switch>
          <UserProvider>
            {/* logo header */}
            <header>
              <div>
                <img className="object-center" src={logo} alt="B.A.B.E. logo" />
              </div>
              {/* shopping cart */}
              <div>
                <button type="button">
                  <img className="h-6" src={shoppingCart} alt="cart" />
                </button>
              </div>
            </header>
            {/* nav bar */}
            <Nav>
              <Route exact path={["/"]} component={Home} />
              <Route exact path={["/products"]} component={Products} />
              <Route exact path={["/about"]} component={About} />
              <Route exact path={["/cart"]} component={Cart} />
              <Route exact path={["/wellness"]} component={Wellness} />
              <Route exact path={["/news"]} component={News} />
            </Nav>
          </UserProvider>
        </Switch>
      </Router>
    </body>
  );
}

export default App;
