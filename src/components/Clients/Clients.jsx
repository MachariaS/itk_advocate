import React from "react";
import "./Clients.css";

const Clients = () => {
  const trustSignals = ["Integrity", "Justice", "Trust", "Results"];

  return (
    <section className="clients">
      <p>Trusted Legal Representation</p>
      <div className="logo-row">
        {trustSignals.map((signal, index) => (
          <span key={index} className="client-logo">{signal}</span>
        ))}
      </div>
    </section>
  );
};

export default Clients;
