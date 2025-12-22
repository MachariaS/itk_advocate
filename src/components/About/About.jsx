import React, { useState } from "react";
import ContactForm from "../ContactForm";
import "./About.css";

const About = () => {
  const [showContactOverlay, setShowContactOverlay] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowContactOverlay(false);
  };

  return (
    <>
      <section id="about" className="who-we-are">
        <div className="content-side">
          <h2>Who We Are</h2>
          <p>
            At Thiong'o Kiragu & Co. Advocates, we provide reliable,
            client-focused legal services. We are dedicated to protecting your
            rights, property, and peace of mind.
          </p>
          <a href="#contact" className="btn btn-gold" onClick={handleContactClick}>
            Contact Us
          </a>
        </div>
        <div className="image-side">
          <img
            src="https://placehold.co/600x600/333/white?text=Team+Photo"
            alt="Team"
          />
        </div>
      </section>

      {showContactOverlay && (
        <ContactForm isOverlay={true} onClose={handleCloseOverlay} />
      )}
    </>
  );
};

export default About;
