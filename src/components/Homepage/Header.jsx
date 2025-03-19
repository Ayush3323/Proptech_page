import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propertiesData from "../properties.json";
import Navbar from "./Navbar";

// Popup Modal Component
const LeadCaptureModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mzzdlovd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _subject: "New Lead Capture From Homepage Popup",
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        // Store in localStorage to prevent showing again
        localStorage.setItem("popupShown", "true");
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Stay Updated</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {submitted ? (
              <div className="text-center py-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h4 className="text-xl font-medium text-gray-800 mb-2">Thank You!</h4>
                <p className="text-gray-600">We'll keep you updated on our latest properties and offers.</p>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  Sign up to receive exclusive updates on new luxury properties and special offers.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom focus:border-transparent"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone Number"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom focus:border-transparent"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-custom text-white font-medium py-3 rounded-md hover:bg-opacity-90 transition-colors"
                    style={{ background: "rebeccapurple" }}
                  >
                    Subscribe
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By subscribing, you agree to our privacy policy and terms of service.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const [landmark, setLandmark] = useState("");
  const [layout, setLayout] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasBeenShown = localStorage.getItem("popupShown");
    
    if (!hasBeenShown) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Add custom CSS for slider dots
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .custom-dots li button {
        background: none;
        border: none;
      }
      .custom-dots li button:before {
        display: none;
      }
      .custom-dots li.slick-active button {
        transform: scale(1.3);
      }
      .custom-dots li.slick-active button > * {
        background-color: white !important;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.7) !important;
      }
      .custom-dots {
        bottom: 25px !important;
        z-index: 20;
      }
      /* Hide arrows */
      .slick-prev, .slick-next {
        display: none !important;
      }
      /* Add smooth transition to slides */
      .slick-slide {
        transition: opacity 0.5s ease;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const properties = propertiesData;
  const uniqueLandmarks = [...new Set(properties.map(property => property.Landmark))];
  const uniqueLayouts = [...new Set(properties.map(property => property.Layout))];

  const handleClearFilters = () => {
    setLandmark('');
    setLayout('');
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: "15px", width: "100%", textAlign: "center" }}>
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <button
        style={{
          width: "15px",
          height: "15px",
          margin: "0 5px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          border: "2px solid white",
          borderRadius: "50%",
          display: "inline-block",
          transition: "all 0.3s ease",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
          outline: "none",
          position: "relative"
        }}
      >
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    ),
    beforeChange: (current, next) => {
      // Animation logic can be added here if needed
    },
    afterChange: current => {
      setCurrentSlide(current);
    }
  };

  const bannerImages = [
    "Banner_image.jpg",
    "Banner_image_1.jpg",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ];

  return (
    <header className="relative">
      <Navbar />
      <div className="relative h-[80vh]" style={{ overflow: "hidden" }}>
        <Slider {...sliderSettings} className="h-full">
          {bannerImages.map((image, index) => (
            <div key={index} className="h-[80vh] focus:outline-none">
        <motion.img
                src={image}
                alt={`Luxury Property ${index + 1}`}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
            </div>
          ))}
        </Slider>
        
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="max-w-4xl px-6" style={{overflow:"auto"}}>
            <motion.h1
              className="font-['Playfair_Display'] text-5xl md:text-7xl text-white mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Elevating Your Lifestyle
            </motion.h1>
            <motion.p
              className="text-white text-xl md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Experience unparalleled luxury in the world's most coveted destinations
            </motion.p>

            {/* Filter Bar */}
            <motion.div
              className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <form className="flex space-x-4 justify-center" style={{ flexWrap: "wrap" }}>
                <motion.select
                  className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom cursor-pointer"
                  style={{ margin: "10px" }}
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                >
                  <option className="text-black" value="">All Landmarks</option>
                  {uniqueLandmarks.map((landmarkOption, index) => (
                    <option key={index} className="text-black" value={landmarkOption}>
                      {landmarkOption}
                    </option>
                  ))}
                </motion.select>

                <motion.select
                  className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom cursor-pointer"
                  style={{ margin: "10px" }}
                  value={layout}
                  onChange={(e) => setLayout(e.target.value)}
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                >
                  <option className="text-black" value="">All Layouts</option>
                  {uniqueLayouts.map((layoutOption, index) => (
                    <option key={index} className="text-black" value={layoutOption}>
                      {layoutOption}
                    </option>
                  ))}
                </motion.select>

                <motion.button
                  type="button"
                  onClick={handleClearFilters}
                  className="bg-transparent text-white border border-white px-6 py-2 rounded-md hover:bg-white/10 transition"
                  style={{ fontWeight: "500", margin: "10px" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Clear Filters
                </motion.button>

                <Link to={`/prop?landmark=${landmark}&layout=${layout}`}>
                  <motion.button
                    type="submit"
                    className="bg-custom text-white px-6 py-2 rounded-md hover:bg-custom/90 transition m-[10px]"
                    style={{ background: "rebeccapurple", fontWeight: "500" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Search
                  </motion.button>
                </Link>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Lead Capture Popup Modal */}
      <LeadCaptureModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </header>
  );
};

export default Header;