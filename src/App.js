import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* --- HEADER --- */}
      <nav className="navbar">
        <div className="brand">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo/logo.png`}
            alt="Ian Thiong'o Kiragu Advocates logo"
            className="brand-mark"
          />
          <span className="brand-name">TK ADVOCATES</span>
        </div>
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
          <h1>BE HEARD</h1>
          <p>
            Reliable Legal Services. Client-Focused Solutions.
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
          <img
            src={`${process.env.PUBLIC_URL}/assets/hero.jpg`}
            alt="Lawyer"
            className="hero-img"
          />
        </div>
        <svg className="hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64 C360,20 720,20 1080,64 C1260,86 1350,96 1440,96 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
        <div className={`scroll-indicator ${showScroll ? '' : 'hide'}`}>
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
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
          <div className="advice-card featured">
            <div className="advice-icon placeholder">Icon</div>
            <div className="card-content">
              <h4>Family Law</h4>
              <p>
                Compassionate representation in divorce and custody matters.
              </p>
            </div>
          </div>

          <div className="advice-card">
            <div className="advice-icon placeholder">Icon</div>
            <div className="card-content">
              <h4>Business Law</h4>
              <p>
                Clear guidance for contracts, compliance, and commercial
                matters.
              </p>
            </div>
          </div>

          <div className="advice-card featured">
            <div className="advice-icon placeholder">Icon</div>
            <div className="card-content">
              <h4>Trust & Estates</h4>
              <p>
                Estate planning that secures your legacy and your loved ones.
              </p>
            </div>
          </div>

          <div className="advice-card">
            <div className="advice-icon placeholder">Icon</div>
            <div className="card-content">
              <h4>Civil Litigation</h4>
              <p>
                Resolving disputes effectively through negotiation or the
                courts.
              </p>
            </div>
          </div>

          <div className="advice-card featured">
            <div className="advice-icon placeholder">Icon</div>
            <div className="card-content">
              <h4>Conveyancing</h4>
              <p>
                Guiding you through property purchases, sales, and transfers.
              </p>
            </div>
          </div>

          <div className="advice-card">
            <div className="advice-icon placeholder">Icon</div>
            <div className="card-content">
              <h4>Personal Injury</h4>
              <p>Helping victims of accidents obtain fair compensation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BUSINESS QUESTIONS SECTION --- */}
      <section className="business-questions">
        <div className="business-questions-bg">
          <div 
            className="city-background-faded"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/city_bg.jpg)` }}
          ></div>
          <div className="city-image-container">
            <img
              src={`${process.env.PUBLIC_URL}/assets/city_bg.jpg`}
              alt="City background"
              className="city-image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/city_bg.jpg`}
              alt="City reflection"
              className="city-mirror"
            />
          </div>
          <div className="left-bubble">
            <p>How do I trademark my brand name, logo, and slogans?</p>
          </div>
        </div>
        <div className="business-questions-content">
          <div className="header-text">
            <p className="small-header">NAIROBI LEGAL SERVICES & BUSINESS LAW FIRM:</p>
            <h2>
              <span className="law-office">Law Office of</span><br />
              <span className="firm-name">THIONG'O KIRAGU & CO.</span>
            </h2>
            <p className="tagline">Protect Your Name, Your Business & Your Profits</p>
          </div>
          <div className="intro-text">
            <p>
              You're operating in your Zone of Genius while running your thriving Nairobi small business. As you grow your business, you're bound to encounter business and legal issues — <strong>including trademark search, registration, and application questions needing your attention.</strong> I'm here to help whether you've been in business for twenty years or just opening your doors.
            </p>
          </div>
          <div className="right-bubbles">
            <div className="question-bubble">
              <p>Is my business vulnerable to claims of trademark infringement?</p>
            </div>
            <div className="question-bubble">
              <p>Should I form an LLC or a corporation for my business?</p>
            </div>
            <div className="question-bubble">
              <p>How can I create ironclad contracts for employees and independent contractors?</p>
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
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo/logo.png`}
              alt="Ian Thiong'o Kiragu Advocates logo"
              className="footer-mark"
            />
            <div className="footer-text">
              <h3>Thiong'o Kiragu & Co.</h3>
              <p>Advocates & Commissioners for Oaths</p>
              <p>P.O. Box 55341-00200 Nairobi</p>
            </div>
          </div>
          <div className="footer-meta">
            &copy; 2025 Thiong'o Kiragu & Co. Advocates. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
