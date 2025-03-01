

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import data from "../data.json"; // Import your JSON data
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();

  // Set filter states
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState(""); // New status filter

  // Get unique status values from the data
  const statuses = [...new Set(data.map(item => item.property.status))];

  // Get unique status values from the data
  const propertytypeuses = [...new Set(data.map(item => item.property.property_type))];

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to the Property page with filters as state
    navigate("/Property", { state: { propertyType, location, status } });
  };

  return (
    <header className="relative">
      <Navbar/>

      <div className="relative h-[80vh]">
        <img src="Banner_image.jpg" alt="Luxury Hotel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="font-[&#39;Playfair_Display&#39;] text-5xl md:text-7xl text-white mb-6">Elevating Your Lifestyle</h1>
            <p className="text-white text-xl md:text-2xl">Experience unparalleled luxury in the world's most coveted destinations</p>
            <div className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <form className="flex space-x-4 justify-center" onSubmit={handleSearch}>
                <select
                  className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                    
                  <option className="text-black" value="">Property Type</option>
                  {propertytypeuses.map((statusOption, index) => (
                    <option key={index} className="text-black" value={statusOption}>{statusOption}</option>
                  ))}

                </select>

                <select
                  className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option className="text-black" value="">Location</option>
                  <option className="text-black" value="Faridabad">Faridabad</option>
                  <option className="text-black" value="Noida">Noida</option>
                  <option className="text-black" value="Gurugram">Gurugram</option>
                </select>

                <select
                  className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option className="text-black" value="">Status</option>
                  {statuses.map((statusOption, index) => (
                    <option key={index} className="text-black" value={statusOption}>{statusOption}</option>
                  ))}
                </select>

                <button type="submit" className="bg-custom text-white px-6 py-2 rounded-md hover:bg-custom/90 transition" style={{background:"rebeccapurple",fontWeight:"500"}}>Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
