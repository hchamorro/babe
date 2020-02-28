import React from "react";

function Nav() {
    return (
      <ul className="flex">
        <li className="mr-6">
            <a className="text-"  href="/">B.A.B.E.</a>
        </li>
        <li className="mr-6">
            <a href="/about">About</a>
        </li>
        <li className="mr-6">
            <a href="/wellness">Wellness</a>
        </li>
        <li className="mr-6">
            <a href="/news">News</a>
        </li>
        <li className="mr-6">
            <a href="/cart">Cart</a>
        </li>
      </ul>
    );
  }
  
  export default Nav;