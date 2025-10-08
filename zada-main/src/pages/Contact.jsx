import React, { useState } from "react";
import "../styles/contact.css";
import contactImage from "/product-images/two-piece1.jpg";
import { saveContactRecord } from "../services/firebaseService";
import emailjs from "@emailjs/browser";

// SECURE KEYS
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const contactTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await emailjs.send(
              serviceId,
              contactTemplateId,
              form,
              publicKey
            );
        console.log("Email sent successfully!");
        alert("Message sent! We'll get back to you soon.");
        
        //2. Save to Firestore
        await saveContactRecord(form);
        console.log("Contact record saved!");
        alert("Thank you for reaching out! We'll get back to you soon.");

        setForm({ name: "", email: "", message: "" });
    } catch (error) {
        console.error("Error sending email:", error);
        alert("There was an error submitting the form. Please try again later.");
        throw error
    }
  };

  return (
    <section className="contact-wrapper">
      {/* Left Image */}
      <div className="contact-image">
        <img src={contactImage} alt="Zada Afrique Fashion" />
      </div>

      {/* Right Form */}
      <div className="contact-content">
        <h2 className="section-header">Contact Us</h2>
        <div className="contact-main">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit">CONTACT US</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h4>Contact</h4>
          <p>zadaafrique@gmail.com</p>
          <h4>Located at</h4>
          <p>Lagos, Nigeria,</p>
          <div className="social-icons">
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
      </div>
    </section>
  );
}

export default Contact;
