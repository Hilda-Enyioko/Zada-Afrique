import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import zadaLogo from "../assets/logos/zada-vector-logo.svg";
import zadaText from "../assets/logos/zada-full-vector-logo.svg";
import "../styles/footer.css";

function Footer() {
  const handleSubmit = (e) => {
    e, preventDefault();
    const email = e.target.email.value;
    const subject = "Quote Request";
    const body = `Hello, \nI would like a quote for a custom outfit from Zada Afrique. \nMy email is: ${email}. \nMy measurements are:...`;

    window.location.href = `mailto:info@zadaafrique.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <div className="footer-logo">
              <NavLink id="small-logo" to="/" end>
                <img src={zadaLogo} alt="Zada_Logo" loading="active" />
              </NavLink>

              <NavLink id="logo-text" to="/" end>
                <img src={zadaText} alt="Zada Afrique" loading="active" />
              </NavLink>
            </div>

            <ul className="footer-nav">
              <li className="page-link">
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

              <li className="page-link">
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

              <li className="page-link">
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
