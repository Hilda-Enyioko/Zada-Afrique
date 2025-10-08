import React from "react";
import "../styles/about.css";
import aboutImage from "/product-images/zada-founder-pose2.jpg";

function About() {
  return (
    <section className="about-wrapper">
      {/* Left Image */}
      <div className="about-image">
        <img src={aboutImage} alt="Zada Afrique Fashion" />
      </div>

      {/* Right Content */}
      <div className="about-content">
        <h2 className="section-header">About Us</h2>
        <div className="about-main">
          <div className="about-text">
            <p>
              At <span className="highlight">Zada Afrique</span>, we redefine
              fashion by blending timeless African heritage with modern elegance. 
              Our collections are carefully crafted to celebrate individuality, 
              confidence, and luxury — while staying rooted in authenticity.
            </p>

            <p>
              From bold statement pieces to refined everyday wear, every design 
              tells a story of culture, creativity, and sophistication. 
            </p>

            <p>
              Based in Lagos, Nigeria, Zada Afrique is more than a brand —
              it’s a movement to showcase African fashion on the global stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
