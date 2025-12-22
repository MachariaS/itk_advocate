import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Family Law",
      description: "Compassionate representation in divorce and custody matters.",
      featured: true,
      icon: `${process.env.PUBLIC_URL}/assets/icons/defend_family.svg`
    },
    {
      title: "Business Law",
      description: "Clear guidance for contracts, compliance, and commercial matters.",
      featured: false,
      icon: `${process.env.PUBLIC_URL}/assets/icons/business_law.svg`
    },
    {
      title: "Trust & Estates",
      description: "Estate planning that secures your legacy and your loved ones.",
      featured: true,
      icon: `${process.env.PUBLIC_URL}/assets/icons/trust_estates.svg`
    },
    {
      title: "Civil Litigation",
      description: "Resolving disputes effectively through negotiation or the courts.",
      featured: false,
      icon: `${process.env.PUBLIC_URL}/assets/icons/civil_law.svg`
    },
    {
      title: "Conveyancing",
      description: "Guiding you through property purchases, sales, and transfers.",
      featured: true,
      icon: `${process.env.PUBLIC_URL}/assets/icons/real_estate.svg`
    },
    {
      title: "Personal Injury",
      description: "Helping victims of accidents obtain fair compensation.",
      featured: false,
      icon: `${process.env.PUBLIC_URL}/assets/icons/personal_injury.svg`
    }
  ];

  return (
    <section id="services" className="latest-advice">
      <h2>Our Practice Areas</h2>
      <p className="subtitle">Comprehensive legal support for you.</p>

      <div className="advice-grid">
        {services.map((service, index) => (
          <div key={index} className={`advice-card ${service.featured ? 'featured' : ''}`}>
            <div className="advice-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <div className="card-content">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
