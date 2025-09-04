import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import zadaLogo from "../assets/logos/zada-vector-logo.svg";
import zadaText from "../assets/logos/zada-full-vector-logo.svg";
import heroImage from "../assets/product-images/IMG-20250820-WA0065_2.jpg";
import "../styles/home.css";

function Home() {
  const [slideText, setSlideText] = useState(false);
  const [slideCta, setSlideCta] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setSlideText(true), 300);
    const ctaTimer = setTimeout(() => setSlideCta(true), 800);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-image">
          <img src={heroImage} loading="active" alt="Shop Zada Afrique" />
        </div>

        <div className="hero-overlay">
          <h1 className={`hero-text ${slideText ? "hero-slide-in" : ""}`}>
            Timeless African <br /> Elegance
          </h1>
          <button className={`hero-cta ${slideCta ? "hero-slide-in" : ""}`}>
            SHOP NOW
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
