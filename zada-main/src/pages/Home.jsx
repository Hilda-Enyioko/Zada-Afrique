import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import zadaLogo from "../assets/logos/zada-vector-logo.svg";
import zadaText from "../assets/logos/zada-full-vector-logo.svg";
import heroImage from "../assets/product-images/IMG-20250820-WA0065_2.jpg";
import "../styles/home.css";

function Home() {
  const [isSlide, setIsSlide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsSlide(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-image">
          <img src={heroImage} loading="active" alt="Shop Zada Afrique" />
        </div>

        <div className={`hero-overlay ${isSlide ? "slide-in" : "slide-in"}`}>
          <h1 className="hero-text">
            Timeless African <br /> Elegance
          </h1>
          <button className="hero-cta">SHOP NOW</button>
        </div>
      </section>
      <section className="top-picks"></section>
      <section className="reviews"></section>
      <section className="inquiries"></section>
    </>
  );
}

export default Home;
