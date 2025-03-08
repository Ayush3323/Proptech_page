import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../data.json"; // Import JSON data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Homepage/Footer"; // Import Footer component
import Navbar from "../Homepage/Navbar"; // Import Navbar
import Contact from "../Homepage/Contact";
import WhatsappButton from "../Homepage/WhatsappButton";

const Properties = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract filters from location state
  const { propertyType, location: selectedLocation, status } = location.state || {};

  // Set up local state for filters
  const [searchPropertyType, setSearchPropertyType] = useState(propertyType || "");
  const [searchLocation, setSearchLocation] = useState(selectedLocation || "");
  const [searchStatus, setSearchStatus] = useState(status || "");

  // Extract property objects from JSON data
  const properties = data.map(item => item.property);

  // Get unique property types and statuses from the data
  const propertyTypes = [...new Set(data.map(item => item.property.property_type))];
  const statuses = [...new Set(data.map(item => item.property.status))];
  
  // Filter properties based on the selected filters
  const filteredProperties = properties.filter(property => {
    const matchesPropertyType = searchPropertyType ? property.property_type === searchPropertyType : true;
    const matchesLocation = searchLocation ? property.city === searchLocation : true;
    const matchesStatus = searchStatus ? property.status === searchStatus : true;
    return matchesPropertyType && matchesLocation && matchesStatus;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Pass the selected filters to the location state to navigate
    navigate("/Property", { state: { propertyType: searchPropertyType, location: searchLocation, status: searchStatus } });
  };

  return (
    <>
      {/* Navbar Section */}
      <div className="fixed w-full bg-gray-900 top-0 z-50 " >
        <div style={{ height: "70px", borderRadius :"20px"}}>
        <Navbar />
        </div>
      </div>

      <div className="pt-24"> 
      {/* Search Form Section */}
      <section className="py-6 mt-10 bg-gray-100" style={{ borderRadius: "25px", padding: "5px 0px 5px 0px", margin: "10px 25% 10px 25%" }}>
        <div className="max-w-7xl mx-auto px-6">
          <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center" onSubmit={handleSearch}>
            <select
              className="bg-white text-gray-700 border border-gray-300 rounded-md px-6 py-3 focus:outline-none focus:ring-2 focus:ring-custom transition"
              value={searchPropertyType}
              onChange={(e) => setSearchPropertyType(e.target.value)}
            >
              <option value="">Property Type</option>
              {propertyTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>

            <select
              className="bg-white text-gray-700 border border-gray-300 rounded-md px-6 py-3 focus:outline-none focus:ring-2 focus:ring-custom transition"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            >
              <option value="">Location</option>
              <option value="Faridabad">Faridabad</option>
              <option value="Noida">Noida</option>
              <option value="Gurugram">Gurugram</option>
            </select>

            <select
              className="bg-white text-gray-700 border border-gray-300 rounded-md px-6 py-3 focus:outline-none focus:ring-2 focus:ring-custom transition"
              value={searchStatus}
              onChange={(e) => setSearchStatus(e.target.value)}
            >
              <option value="">Status</option>
              {statuses.map((statusOption, index) => (
                <option key={index} value={statusOption}>{statusOption}</option>
              ))}
            </select>

            <button type="submit" className="bg-custom text-white px-6 py-3 rounded-md hover:bg-custom/90 transition duration-300" style={{ background: "rebeccapurple", fontWeight: "500" }}>
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Properties Listing Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl mb-4">Featured Properties</h2>
            <p className="text-gray-600">Discover our hand-picked selection of luxury properties</p>
          </div>

          {/* Properties Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length === 0 ? (
              <p>No properties found based on the filters.</p>
            ) : (
              filteredProperties.map((property, index) => (
                <div key={property.id || index} className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer">
                  <img
                    src={property.images?.slider?.[0] || "fallback-image.jpg"}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-playfair text-2xl mb-2">{property.title}</h3>
                    <p className="text-gray-600 mb-4">{property.address}</p>
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
                      <span className="text-2xl text-custom">{property.price}</span>
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
              ))
            )}
          </div>
        </div>
      </section>
      </div>
      <WhatsappButton />
      <Contact />
      <Footer />
    </>
  );
};

export default Properties;
