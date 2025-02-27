import React from 'react';
import Header from "./Header";
import Services from "./Services";
import Properties from "./Properties";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="font-poppins bg-gray-50">
        <Header />
        <Services />
        <Properties />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  );
};

export default Homepage;