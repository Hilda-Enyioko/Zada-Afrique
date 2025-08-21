import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import zadaLogo from "../assets/logos/zada-vector-logo.svg";
import zadaText from "../assets/logos/zada-full-vector-logo.svg";
import heroImage from "../assets/product-images/two-piece2-far.jpg"
import "../styles/home.css";

function Home() {
  return (
    <>
      <section className="hero-section">

        <div className="hero-image">
          <img src={ heroImage } loading="active" alt="Shop Zada Afrique" />
        </div>

        <div className="hero-overlay">
          <p>Timeless African Elegance</p>
          <button className="hero-cta">
            Shop Now
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>

      </section>
      <section className="top-picks"></section>
      <section className="reviews"></section>
      <section className="inquiries"></section>
    </>
  );
}

export default Home;
