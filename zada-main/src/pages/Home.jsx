// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import zadaLogo from "../assets/logos/zada-vector-logo.svg";
// import zadaText from "../assets/logos/zada-full-vector-logo.svg";
import "../styles/home.css";

function Home() {

  return (
    <>
      <section className="hero">
          <h4>Your beauty, styled by </h4>
          <h1>Zada Afrique</h1>
          <h4 className="tagline">For every woman</h4>
          <button className="hero-cta">
            SHOP NOW
          </button>
      </section>
      <section className="top-picks"></section>
      <section className="reviews"></section>
      <section className="inquiries"></section>
    </>
  );
}

export default Home;
