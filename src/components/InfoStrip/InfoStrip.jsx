import React from "react";
import "./InfoStrip.css";

const InfoStrip = () => {
  return (
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
  );
};

export default InfoStrip;
