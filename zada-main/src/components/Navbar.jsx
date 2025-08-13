import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import zadaLogo from "../assets/zada-vector-logo.svg";
import zadaText from "../assets/zada-full-vector-logo.svg";

function Navbar() {
  return (
    <>
      <div id="nav">
        <div id="logo">
          <a id="zada-logo" href="#">
            <img src={zadaLogo} alt="Zada_Logo" loading="active" />
          </a>

          <a id="zada-text" href="#">
            <img src={zadaText} alt="Zada Afrique" loading="active" />
          </a>
        </div>

        <div id="navbar">
          <div id="hamburger-menu">
            <span class="material-symbols-outlined">
              dehaze
            </span>
          </div>

          <ul id="nav-links">
            <div id="close-menu">
              <span class="material-symbols-outlined">
                close
              </span>
            </div>
              
            <li className="nav-link">
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/collections">Collections</NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/about">About</NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li className="nav-link cart">
              <NavLink to="/shop">
                <span className="material-symbols-outlined">shopping_cart</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
