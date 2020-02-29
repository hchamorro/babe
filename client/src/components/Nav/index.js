import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/babe.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="flex justify-between px-64 py-10">
      <Link className="focus:text-white" to="/">
        B.A.B.E.
      </Link>
      <Link className="focus:text-white" to="/About">
        About
      </Link>
      <Link className="focus:text-white" to="/shop">
        Shop
      </Link>
      <Link className="focus:text-white" to="/News">
        News
      </Link>
      <Link className="focus:text-white" to="/Wellness">
        Wellness
      </Link>
      <Link className="focus:text-white" to="/Cart">
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;
