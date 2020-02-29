import React from "react";
import { Link } from "react-router-dom";
import Babe from "../../assets/babe.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="flex justify-between px-64 py-10">
      <Link className="font" to="/">
        B.A.B.E.
      </Link>
      <Link className="font" to="/About">
        About
      </Link>
      <Link className="font" to="/Products">
        Shop
      </Link>
      <Link className="font" to="/News">
        News
      </Link>
      <Link className="font" to="/Wellness">
        Wellness
      </Link>
      <Link className="font" to="/Cart">
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;
