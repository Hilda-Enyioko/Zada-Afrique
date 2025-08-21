import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import zadaLogo from "../assets/zada-vector-logo.svg";
import zadaText from "../assets/zada-full-vector-logo.svg";
import "../styles/home.css";

function Home() {
  return(
    <>
      <section className="hero-section"></section>
      <section className="top-picks"></section>
      <section className="inquiries"></section>
    </>
  )
}

export default Home;