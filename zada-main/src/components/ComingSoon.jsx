import { motion as Motion } from "motion/react";
import { useState } from "react";
import { saveAnticipation } from "../services/firebaseService";
import "../styles/comingsoon.css";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);
      await saveAnticipation(email.trim());
      setEmail("");
      alert("You're on our anticipation list! We'll notify you when we launch");

    } catch (error) {
      console.error("Error saving email: ", error);
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comingsoon-container">
      {/* Floating Circles */}
      <Motion.div
        className="circle circle1"
        animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        className="circle circle2"
        animate={{ y: [0, 25, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        className="circle circle3"
        animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Text Content */}
      <div className="content">
        <h1>Coming Soon</h1>
        <p>
          Our Afrocentric collection and online shop is being worked on with elegance and detail.  
          Stay close — the wait will be worth it.
        </p>

        <form onSubmit={handleSubmit} className="subscribe">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : "NOTIFY ME"}
          </button>
        </form>

        <div className="socials">
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
    </div>
  );
};

export default ComingSoon;