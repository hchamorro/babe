import React from "react";
import { Link } from "react-router-dom";
import Babe from "../../assets/babe.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav>
      <Link to="/">B.A.B.E.</Link>
      <Link to="/About">About</Link>
      <Link to="/Products">Shop</Link>
      <Link to="/News">News</Link>
      <Link to="/Wellness">Wellness</Link>
      <Link to="/Cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
