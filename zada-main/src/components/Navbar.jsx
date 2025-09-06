import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import zadaLogo from "../assets/logos/zada-vector-logo.svg";
import zadaText from "../assets/logos/zada-full-vector-logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle Page Reload when Nav Link is active
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav id="nav">
      <div id="logo">
        <NavLink id="zada-logo" to="/" end>
          <img src={zadaLogo} alt="Zada_Logo" loading="active" />
        </NavLink>

        <NavLink id="zada-text" to="/" end>
          <img src={zadaText} alt="Zada Afrique" loading="active" />
        </NavLink>
      </div>

      <div id="navbar">
        <div
          id="hamburger-menu"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <span className="material-symbols-outlined">dehaze</span>
        </div>

        <ul id="nav-links" className={`${isOpen ? "active" : ""}`}>
          <div
            id="close-menu"
            onClick={() => {
                setIsOpen(false);
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </div>

          <li className="nav-link">
            <NavLink
              to="/"
              end
              onClick={() => {
                setIsOpen(false);
                handleClick("/");
              }}
            >
              Home
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink
              to="/collections"
              onClick={() => {
                setIsOpen(false);
                handleClick("/collections");
              }}
            >
              Collections
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink
              to="/about"
              onClick={() => {
                setIsOpen(false);
                handleClick("/about");
              }}
            >
              About
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink
              to="/contact"
              onClick={() => {
                setIsOpen(false);
                handleClick("/contact");
              }}
            >
              Contact
            </NavLink>
          </li>

            <li className="nav-link cart">
              <NavLink
                to="/shop"
                onClick={() => {
                  setIsOpen(false);
                  handleClick("/shop");
                }}
              >
                <span className="material-symbols-outlined">shopping_cart</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
