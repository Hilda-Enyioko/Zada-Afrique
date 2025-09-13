// import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  //  Handle Page Reload when a Nav Link is active
  const handleClick = (path) => {
    navigate(path);

    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (
    <>
      <section className="hero">
          <h4>Your beauty, styled by </h4>
          <h1>Zada Afrique</h1>
          <h4 className="tagline">For every woman</h4>
          <NavLink 
            to="/Shop"
            onClick={() => {
              handleClick("/Shop")
            }}
          >
            <button className="hero-cta">
              SHOP NOW
            </button>
          </NavLink>
      </section>
      <section className="top-picks">
        <div className="home-header"> </div>
      </section>
      <section className="reviews"></section>
      <section className="inquiries"></section>
    </>
  );
}

export default Home;
