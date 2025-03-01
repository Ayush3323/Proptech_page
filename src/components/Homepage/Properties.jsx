// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Slider from "react-slick"; // Import react-slick
// import data from "../data.json"; // Import JSON file
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBed, faBath, faVectorSquare } from "@fortawesome/free-solid-svg-icons";

// const Properties = () => {
//   const navigate = useNavigate();

//   // Set up filter state for selected city
//   const [selectedCity, setSelectedCity] = useState("All");

//   // Extract property objects from the JSON data
//   const properties = data.map(item => item.property);

//   // Get all unique cities from the properties
//   const cities = ["All", ...new Set(properties.map(property => property.city))];

//   // Filter properties based on selected city
//   const filteredProperties = selectedCity === "All"
//     ? properties
//     : properties.filter(property => property.city === selectedCity);

//   // Slider settings for showing 3 slides at a time
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768, // for mobile devices
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="font-playfair text-4xl mb-4">Featured Properties</h2>
//           <p className="text-gray-600">
//             Discover our hand-picked selection of luxury properties
//           </p>
//         </div>

//         {/* Filter Section */}
//         <div className="flex justify-center mb-8">
//           {cities.map((city, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 mx-2 rounded-lg ${selectedCity === city ? 'bg-custom text-black' : 'bg-gray-200 text-gray-600'} hover:bg-custom/80 transition`}
//               onClick={() => setSelectedCity(city)}
//             >
//               {city}
//             </button>
//           ))}
//         </div>

//         <Slider {...settings}>
//           {filteredProperties.map((property, index) => {
//             // Create a string for location display.
//             const locationText =
//               typeof property.location?.map === "string"
//                 ? property.location.map
//                 : "Location not available";
//             return (
//               <div
//                 key={property.id || index}
//                 className="px-3" // adds some spacing between slides
//               >
//                 <div
//                   className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
//                   onClick={() => navigate(`/Secondpage/${property.id}`)}
//                 >
//                   <img
//                     src={property.images?.slider?.[0] || "fallback-image.jpg"}
//                     alt={property.title}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="font-playfair text-2xl mb-2">
//                       {property.title}
//                     </h3>
//                     {/* Location Address */}
//                     <p className="text-gray-600 mb-4">{property.address}</p>

//                     {/* Property details: Bedrooms, Baths, Area */}
//                     <div className="flex items-center gap-6 mb-5">
//                       <div className="flex items-center gap-2">
//                         <FontAwesomeIcon icon={faBed} className="text-gray-400" />
//                         <span className="text-sm text-gray-600">{property.details.bedrooms} Beds</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <FontAwesomeIcon icon={faBath} className="text-gray-400" />
//                         <span className="text-sm text-gray-600">{property.details.baths} Baths</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <FontAwesomeIcon icon={faVectorSquare} className="text-gray-400" />
//                         <span className="text-sm text-gray-600">{property.details.area}</span>
//                       </div>
//                     </div>

//                     <div className="flex justify-between items-center">
//                       <span className="text-2xl text-custom">
//                         {property.price}
//                       </span>
//                       <button
//                         className="!rounded-button bg-custom text-white px-6 py-2 hover:bg-custom/90 transition"
//                         onClick={(e) => {
//                           e.stopPropagation(); // Prevent parent's onClick from firing
//                           navigate(`/Secondpage/${property.id}`);
//                         }}
//                       >
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Properties;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faVectorSquare, faHeart } from "@fortawesome/free-solid-svg-icons";

const Properties = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const properties = data.map(item => item.property);
  const cities = ["All", ...new Set(properties.map(property => property.city))];
  const filteredProperties = selectedCity === "All" ? properties : properties.filter(property => property.city === selectedCity);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: false }
      }
    ],
    appendDots: dots => (
      <div className="custom-dots">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="custom-dot"></div>
    )
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h2 
            className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-4"
            variants={itemVariants}
          >
            Featured Properties
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Discover our hand-picked selection of luxury properties
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12"
          variants={containerVariants}
        >
          {cities.map((city, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                selectedCity === city 
                ? 'bg-custom text-black shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCity(city)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {city}
            </motion.button>
          ))}
        </motion.div>

        {/* Property Slider */}
        <Slider {...settings}>
          {filteredProperties.map((property, index) => (
            <div key={property.id || index} className="px-2 lg:px-3">
              <motion.div
                className="relative bg-white text-gray-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => navigate(`/Secondpage/${property.id}`)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Favorite Button */}
                {/* <button 
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add favorite logic here
                  }}
                >
                  <FontAwesomeIcon 
                    icon={faHeart} 
                    className={`text-lg ${
                      hoveredCard === index ? 'text-red-500' : 'text-gray-400'
                    } transition`}
                  />
                </button> */}

                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={property.images?.slider?.[0] || "fallback-image.jpg"}
                    alt={property.title}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl md:text-2xl mb-2 text-gray-900">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4 truncate">{property.address}</p>

                  <div className="flex flex-wrap gap-4 md:gap-6 mb-5">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faBed} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{property.details.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faBath} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{property.details.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faVectorSquare} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{property.details.area}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl md:text-2xl font-semibold text-custom">
                      {property.price}
                    </span>
                    <button
                      className="bg-custom text-white px-4 py-2 rounded-lg hover:bg-custom/90 transition-transform duration-200 hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/Secondpage/${property.id}`);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom CSS for Slider Dots */}
      <style jsx>{`
        .custom-dots {
          position: relative;
          bottom: -30px;
        }
        .custom-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #CBD5E0;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        .slick-active .custom-dot {
          background: #7C3AED;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default Properties;