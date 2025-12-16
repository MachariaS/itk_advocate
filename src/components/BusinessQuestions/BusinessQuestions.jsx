import React from "react";
import "./BusinessQuestions.css";

const BusinessQuestions = () => {
  const questions = [
    "Is my business vulnerable to claims of trademark infringement?",
    "Should I form an LLC or a corporation for my business?",
    "How can I create ironclad contracts for employees and independent contractors?"
  ];

  return (
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
          {questions.map((question, index) => (
            <div key={index} className="question-bubble">
              <p>{question}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessQuestions;
