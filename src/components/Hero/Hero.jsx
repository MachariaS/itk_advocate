import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm";
import "./Hero.css";

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);
  const [showContactOverlay, setShowContactOverlay] = useState(false);

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

  const handleGetAdviceClick = (e) => {
    e.preventDefault();
    setShowContactOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowContactOverlay(false);
  };

  return (
    <>
      <header id="home" className="hero">
        <div className="hero-content">
          <h1>BE HEARD</h1>
          <p>
            Reliable Legal Services. Client-Focused Solutions.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-gold" onClick={handleGetAdviceClick}>
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
      
      {showContactOverlay && (
        <ContactForm isOverlay={true} onClose={handleCloseOverlay} />
      )}
    </>
  );
};

export default Hero;
