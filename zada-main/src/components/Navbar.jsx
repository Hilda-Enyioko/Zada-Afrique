import { useState } from "react";
import zadaLogo from "../assets/zada-vector-logo.svg";
import zadaText from "../assets/zada-full-vector-logo.svg";

function Navbar() {
  return (
    <>
      <div id="nav-element">
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
        </div>
      </div>
    </>
  );
}

export default Navbar;
