import React from "react";
import "./Contact.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      title: "Call Us",
      details: ["0711 422 510", "+254 711 422 510"],
      isBlue: false
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: ["Desoto Square, Kimbo", "2nd Floor, Suite SF2"],
      isBlue: true
    },
    {
      icon: "📧",
      title: "Email Us",
      details: ["itkadvocates@gmail.com", "iankthiongo@gmail.com"],
      isBlue: false
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <p>Let us help you resolve your legal matters with confidence.</p>

      <div className="contact-grid">
        {contactInfo.map((info, index) => (
          <div key={index} className={`contact-card ${info.isBlue ? 'blue-card' : ''}`}>
            <div className="icon">{info.icon}</div>
            <h3>{info.title}</h3>
            {info.details.map((detail, idx) => (
              <p key={idx}>{detail}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
