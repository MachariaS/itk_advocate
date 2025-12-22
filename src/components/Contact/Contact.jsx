import React from "react";
import ContactForm from "../ContactForm";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <p>Let us help you resolve your legal matters with confidence.</p>

      <div className="contact-content">
        <div className="contact-info-side">
          <div className="contact-card map-card">
            <div className="icon">📍</div>
            <h3>Visit Us</h3>
            <p>Desoto Square, Kimbo</p>
            <p>2nd Floor, Suite SF2</p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.062287595977!2d36.9127!3d-1.1677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTAnMDMuNyJTIDM2wrA1NCc0NS43IkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="contact-form-side">
          <h3>Send Us a Message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
