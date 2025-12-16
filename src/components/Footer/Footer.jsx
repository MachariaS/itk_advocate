import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
