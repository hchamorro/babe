import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import logo from '../assets/BABE-logo192.png';
import shoppingBag from '../assets/shopping-bag.svg';
import hamburger from '../assets/bars-solid.svg';

import '../assets/babe.css';

function Header(props) {
  return (
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
  );
}

export default Header;
