import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* --- HEADER --- */}
      <nav className="navbar">
        <div className="logo">TK ADVOCATES</div>
        <div className="hamburger" onClick={toggleMenu}>
          {/* Simple CSS Hamburger Icon */}
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="home" className="hero">
        <div className="hero-content">
          <h1>RELIABLE, CLIENT-FOCUSED LEGAL SERVICES</h1>
          <p>
            We combine experience, professionalism, and empathy to deliver
            practical solutions.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-gold">
              Get Advice
            </a>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          {/* PLACEHOLDER: Replace src with your photo of a lawyer later */}
          <img
            src="https://placehold.co/400x500/1B3F6B/white?text=Lawyer+Image"
            alt="Lawyer"
            className="hero-img"
          />
        </div>
      </header>

      {/* --- STATS / INTRO STRIP --- */}
      <section className="info-strip">
        <div className="info-box white-box">
          <h3>Why Choose Us?</h3>
          <p>Tailored legal solutions & transparent communication.</p>
        </div>
        <div className="info-box blue-box">
          <h3>Experience</h3>
          <p>Professionalism and empathy in every case.</p>
        </div>
        <div className="info-box white-box">
          <h3>Results</h3>
          <p>Commitment to fairness and results that matter.</p>
        </div>
      </section>

      {/* --- LATEST ADVICE (SERVICES GRID) --- */}
      <section id="services" className="latest-advice">
        <h2>Our Practice Areas</h2>
        <p className="subtitle">Comprehensive legal support for you.</p>

        <div className="advice-grid">
          {/* Card 1 */}
          <div className="advice-card">
            {/* PLACEHOLDER IMAGE */}
            <img
              src="https://placehold.co/600x400/D4AF37/white?text=Property"
              alt="Property"
            />
            <div className="card-content">
              <h4>Conveyancing</h4>
              <p>
                Guiding you through property purchases, sales and transfers.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="advice-card">
            {/* PLACEHOLDER IMAGE */}
            <img
              src="https://placehold.co/600x400/D4AF37/white?text=Family"
              alt="Family"
            />
            <div className="card-content">
              <h4>Family Law</h4>
              <p>
                Compassionate representation in divorce and custody matters.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="advice-card">
            {/* PLACEHOLDER IMAGE */}
            <img
              src="https://placehold.co/600x400/D4AF37/white?text=Wills"
              alt="Wills"
            />
            <div className="card-content">
              <h4>Wills & Trusts</h4>
              <p>
                Securing your legacy through well-structured estate planning.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="advice-card">
            {/* PLACEHOLDER IMAGE */}
            <img
              src="https://placehold.co/600x400/D4AF37/white?text=Injury"
              alt="Injury"
            />
            <div className="card-content">
              <h4>Personal Injury</h4>
              <p>Helping victims of accidents obtain fair compensation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO WE ARE --- */}
      <section id="about" className="who-we-are">
        <div className="content-side">
          <h2>Who We Are</h2>
          <p>
            At Thiong'o Kiragu & Co. Advocates, we provide reliable,
            client-focused legal services. We are dedicated to protecting your
            rights, property, and peace of mind.
          </p>
          <a href="#contact" className="btn btn-gold">
            Contact Us
          </a>
        </div>
        <div className="image-side">
          {/* PLACEHOLDER: Replace with a team photo or video thumbnail */}
          <img
            src="https://placehold.co/600x600/333/white?text=Team+Photo"
            alt="Team"
          />
        </div>
      </section>

      {/* --- CLIENT LOGOS (TRUST SIGNALS) --- */}
      <section className="clients">
        <p>Trusted Legal Representation</p>
        <div className="logo-row">
          {/* Simple text placeholders for logos - replace with SVGs later */}
          <span className="client-logo">Integrity</span>
          <span className="client-logo">Justice</span>
          <span className="client-logo">Trust</span>
          <span className="client-logo">Results</span>
        </div>
      </section>

      {/* --- GET IN TOUCH --- */}
      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        <p>Let us help you resolve your legal matters with confidence.</p>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="icon">📞</div>
            <h3>Call Us</h3>
            <p>0711 422 510</p>
            <p>+254 711 422 510</p>
          </div>

          <div className="contact-card blue-card">
            <div className="icon">📍</div>
            <h3>Visit Us</h3>
            <p>Desoto Square, Kimbo</p>
            <p>2nd Floor, Suite SF2</p>
          </div>

          <div className="contact-card">
            <div className="icon">📧</div>
            <h3>Email Us</h3>
            <p>itkadvocates@gmail.com</p>
            <p>iankthiongo@gmail.com</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Thiong'o Kiragu & Co.</h3>
          <p>Advocates & Commissioners for Oaths</p>
          <p>P.O. Box 55341-00200 Nairobi</p>
        </div>
        <div className="copyright">
          &copy; 2025 Thiong'o Kiragu & Co. Advocates. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
