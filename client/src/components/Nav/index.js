import React from "react";
import { Link } from "react-router-dom";
import "../../assets/babe.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="borders flex justify-between px-64 py-10">
      <Link className="a" to="/About">
        About
      </Link>
      <Link className="a" to="/shop">
        Shop
      </Link>
      <Link className="a" to="/News">
        News
      </Link>
    </nav>
  );
}

export default Navbar;
