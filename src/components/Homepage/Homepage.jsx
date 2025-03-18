import React from 'react';
import Header from "./Header";
import Services from "./Services";
import Properties from "./Properties";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsappButton from './WhatsappButton';

const Homepage = () => {
  return (
    <div className="font-poppins bg-gray-50" style={{overflowX: 'hidden'}}>
        <Header />
        <Services />
        <Properties />
        <Testimonials />
        <Contact />
        <WhatsappButton />
        <Footer />
    </div>
  );
};

export default Homepage;