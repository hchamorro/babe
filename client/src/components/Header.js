import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/BABE-logo192.png";
import shoppingBag from "../assets/shopping-bag.svg";
import hamburger from "../assets/bars-solid.svg";
import { UserContext } from "../utils/context/UserContextHc";

import "../assets/babe.css";

function Header(props) {
  const [user, setUser] = useContext(UserContext);

  if (user.isLoggedIn === false) {
    return (
      <header className="flex items-center justify-between px-8 py-6">
        {/* login */}
        <div className="login">
          <Link className="a" to="/login">
            Login
          </Link>
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
    );
  } else {
    return (
      <header className="flex items-center justify-between px-8 py-6">
        {/* login */}
        <div className="login">{user.email}</div>
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
    );
  }
}

export default Header;
