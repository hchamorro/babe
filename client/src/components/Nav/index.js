import React from "react";
import { Link } from "react-router-dom";
import "../../assets/babe.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="borders flex justify-between px-64 py-10">
      <Link className="joanna" to="/">
        B.A.B.E.
      </Link>
      <Link className="joanna" to="/About">
        About
      </Link>
      <Link className="joanna" to="/shop">
        Shop
      </Link>
      <Link className="joanna" to="/News">
        News
      </Link>
      <Link className="joanna" to="/Wellness">
        Wellness
      </Link>
      <Link className="joanna" to="/Cart">
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;
