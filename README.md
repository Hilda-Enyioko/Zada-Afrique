# Zada Afrique — E-commerce Fashion Platform

**Zada Afrique** is a modern fashion e-commerce web platform designed to showcase elegant, Afrocentric fashion pieces. Built with scalability in mind, the MVP allows users to browse products, contact the business owner via WhatsApp, and send feedback via a contact form.

**Follow brand on Instagram**: [@zadaafrique](https://instagram.com/zadaafrique)

## 📸 Live Demo

[🔗 Coming soon — Deployed via Vercel](#)

---

## 🛠️ Tech Stack

| Area         | Technology                         |
|--------------|------------------------------------|
| **Frontend** | Next.js, React, Tailwind CSS       |
| **Backend**  | Node.js (via Next.js API routes)   |
| **Database** | PostgreSQL                         |
| **Email**    | Nodemailer (SMTP Integration)      |
| **Deployment** | Vercel (frontend + API routes)   |
| **Version Control** | Git & GitHub                |

## 📂 Folder Structure

/components → Reusable UI components (Navbar, Footer, etc.)

/pages

├── /api → Backend logic (contact form handler)

├── index.js → Home page

├── products.js → All products page

├── /product → Dynamic product details

├── contact.js → Contact form

├── about.js → Optional brand page

/lib → DB connection and utilities

/prisma → Prisma schema and migrations

/public/images → Static assets

/styles → Tailwind & global styles

---

## ✅ Features

### 🛍️ User-Facing
- View product catalog with pricing and description
- Product detail page with “Order on WhatsApp” button
- Contact form for inquiries or feedback
- Mobile-first, responsive design

### 🛠️ Admin (Simple MVP)
- Manually add/edit/delete products via database
- Automatically receive email notifications for contact form submissions

---

## 🚧 Coming Soon (Post-MVP)
- Admin dashboard for product management
- Customer testimonials
- Newsletter integration
- Product filtering by category
- Instagram feed section
