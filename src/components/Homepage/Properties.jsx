import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"; // Import react-slick
import data from "../data.json"; // Import JSON file
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faVectorSquare } from "@fortawesome/free-solid-svg-icons";

const Properties = () => {
  const navigate = useNavigate();

  // Set up filter state for selected city
  const [selectedCity, setSelectedCity] = useState("All");

  // Extract property objects from the JSON data
  const properties = data.map(item => item.property);

  // Get all unique cities from the properties
  const cities = ["All", ...new Set(properties.map(property => property.city))];

  // Filter properties based on selected city
  const filteredProperties = selectedCity === "All"
    ? properties
    : properties.filter(property => property.city === selectedCity);

  // Slider settings for showing 3 slides at a time
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl mb-4">Featured Properties</h2>
          <p className="text-gray-600">
            Discover our hand-picked selection of luxury properties
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex justify-center mb-8">
          {cities.map((city, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-2 rounded-lg ${selectedCity === city ? 'bg-custom text-black' : 'bg-gray-200 text-gray-600'} hover:bg-custom/80 transition`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>

        <Slider {...settings}>
          {filteredProperties.map((property, index) => {
            // Create a string for location display.
            const locationText =
              typeof property.location?.map === "string"
                ? property.location.map
                : "Location not available";
            return (
              <div
                key={property.id || index}
                className="px-3" // adds some spacing between slides
              >
                <div
                  className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/Secondpage/${property.id}`)}
                >
                  <img
                    src={property.images?.slider?.[0] || "fallback-image.jpg"}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-playfair text-2xl mb-2">
                      {property.title}
                    </h3>
                    {/* Location Address */}
                    <p className="text-gray-600 mb-4">{property.address}</p>

                    {/* Property details: Bedrooms, Baths, Area */}
                    <div className="flex items-center gap-6 mb-5">
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
                      <span className="text-2xl text-custom">
                        {property.price}
                      </span>
                      <button
                        className="!rounded-button bg-custom text-white px-6 py-2 hover:bg-custom/90 transition"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent parent's onClick from firing
                          navigate(`/Secondpage/${property.id}`);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Properties;
