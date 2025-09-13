// import { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import zadaLogo from "../assets/logos/zada-vector-logo.svg";
import "../styles/footer.css";

function Footer() {
  // Handle Page Reload when Nav Link is active
  const navigate = useNavigate();
  
  const handleClick = (path) => {
    navigate(path);
  
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <div className="footer-logo">
              <NavLink 
                id="small-logo" 
                to="/" 
                end
                onClick={() => {
                    handleClick("/");
                }}
              >
                <img src={zadaLogo} alt="Zada_Logo" loading="active" />
              </NavLink>

              <NavLink id="logo-text" 
                to="/" 
                end
                onClick={() => {
                  handleClick("/");
                }}
              >
                <p>Zada Afrique</p>
              </NavLink>
            </div>

            <ul className="footer-nav">
              <li className="page-link">
                <NavLink
                  to="/collections"
                  onClick={() => {
                    handleClick("/collections");
                  }}
                >
                  Collections
                </NavLink>
              </li>

              <li className="page-link">
                <NavLink
                  to="/about"
                  onClick={() => {
                    handleClick("/about");
                  }}
                >
                  About
                </NavLink>
              </li>

              <li className="page-link">
                <NavLink
                  to="/contact"
                  onClick={() => {
                    handleClick("/contact");
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-socials">
            <a href="https://instagram.com/zadaafrique" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://wa.me/2347036612812" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a href="mailto:zadaafrique@gmail.com" target="_blank">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Zada Afrique. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
