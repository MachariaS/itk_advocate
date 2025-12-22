import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({ isOverlay = false, onClose }) => {
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    topic: "",
    otherTopic: "",
    email: "",
    captcha: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [captchaText, setCaptchaText] = useState(generateCaptcha());

  const practiceAreas = [
    "Family Law",
    "Business Law",
    "Trust & Estates",
    "Civil Litigation",
    "Conveyancing",
    "Personal Injury",
    "Other, please specify..."
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.topic) newErrors.topic = "Please select a topic";
    if (formData.topic === "Other, please specify..." && !formData.otherTopic.trim()) {
      newErrors.otherTopic = "Please specify your topic";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.captcha.trim()) {
      newErrors.captcha = "Please enter the captcha";
    } else if (formData.captcha.toUpperCase() !== captchaText) {
      newErrors.captcha = "Captcha is incorrect";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Prepare email content
    const topic = formData.topic === "Other, please specify..." ? formData.otherTopic : formData.topic;
    const emailBody = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Topic: ${topic}

Message:
${formData.message}
    `.trim();

    try {
      // Using mailto link - opens user's email client
      const mailtoLink = `mailto:samwelkaranja322@gmail.com?subject=Inquiry: ${encodeURIComponent(topic)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          topic: "",
          otherTopic: "",
          email: "",
          captcha: "",
          message: ""
        });
        setSubmitSuccess(false);
        if (onClose) onClose();
      }, 2000);
    } catch (error) {
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`contact-form-wrapper ${isOverlay ? 'overlay' : ''}`}>
      {isOverlay && (
        <div className="overlay-backdrop" onClick={onClose}></div>
      )}
      <div className={`contact-form-container ${isOverlay ? 'overlay-form' : ''}`}>
        {isOverlay && (
          <button className="close-overlay" onClick={onClose} aria-label="Close">
            ×
          </button>
        )}
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className={errors.topic ? 'error' : ''}
            >
              <option value="">What would you like to discuss?</option>
              {practiceAreas.map((area, index) => (
                <option key={index} value={area}>{area}</option>
              ))}
            </select>
            {errors.topic && <span className="error-text">{errors.topic}</span>}
          </div>

          {formData.topic === "Other, please specify..." && (
            <div className="form-group">
              <input
                type="text"
                name="otherTopic"
                placeholder="Other, please specify..."
                value={formData.otherTopic}
                onChange={handleChange}
                className={errors.otherTopic ? 'error' : ''}
              />
              {errors.otherTopic && <span className="error-text">{errors.otherTopic}</span>}
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-row captcha-row">
            <div className="captcha-display">
              {captchaText}
            </div>
            <input
              type="text"
              name="captcha"
              placeholder="Type the text in the image here..."
              value={formData.captcha}
              onChange={handleChange}
              className={errors.captcha ? 'error' : ''}
            />
            {errors.captcha && <span className="error-text">{errors.captcha}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          {errors.submit && <div className="error-text submit-error">{errors.submit}</div>}
          {submitSuccess && <div className="success-text">Message sent! Opening your email client...</div>}

          <button 
            type="submit" 
            className="btn btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
