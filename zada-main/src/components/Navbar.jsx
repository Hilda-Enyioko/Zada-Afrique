import { useState } from "react";
import "../styles/global.css";
import zadaLogo from "../assets/zada-vector-logo.svg";
import zadaText from "../assets/zada-full-vector-logo.svg";
import shoppingCart from "../assets/icons/cart.svg";

function Navbar() {
  return (
    <>
      <div id="nav">
        <div id="logo">
          <img id="zada-logo" src={zadaLogo} alt="Zada_Logo" loading="active" />

          <img
            id="zada-text"
            src={zadaText}
            alt="Zada Afrique"
            loading="active"
          />
        </div>

        <div id="nav-links">
          <a href="" className="nav-link">
            Home
          </a>

          <a href="" className="nav-link">
            About
          </a>

          <a href="" className="nav-link">
            Collections
          </a>

          <a href="" className="nav-link">
            Customer Service
          </a>

          <a className="nav-link cart">
            <img src={shoppingCart} alt="Shop Here" loading="active" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
