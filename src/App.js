import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoStrip from "./components/InfoStrip";
import Services from "./components/Services";
import BusinessQuestions from "./components/BusinessQuestions";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfoStrip />
      <Services />
      <BusinessQuestions />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
