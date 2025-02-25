import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Properties from "./components/Properties";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Properties />
      <Testimonials />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;