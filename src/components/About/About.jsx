import React from "react";
import "./About.css";

const About = () => {
  return (
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
        <img
          src="https://placehold.co/600x600/333/white?text=Team+Photo"
          alt="Team"
        />
      </div>
    </section>
  );
};

export default About;
