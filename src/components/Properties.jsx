import React from "react";

const Properties = () => {
  const properties = [
    {
      image: "4c2eeea4-a011-498c-a20a-84a2a094158b.jpg",
      title: "Luxury Penthouse",
      location: "Manhattan, New York",
      price: "$5,200,000",
    },
    {
      image: "3338efd2-220b-4a31-b05c-4d684577a054.jpg",
      title: "Beachfront Villa",
      location: "Palm Jumeirah, Dubai",
      price: "$8,500,000",
    },
    {
      image: "7bfac5c6-7f98-4561-8526-aa4fd3f90f8c.jpg",
      title: "Smart Residence",
      location: "London, UK",
      price: "$3,800,000",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl mb-4">Featured Properties</h2>
          <p className="text-gray-600">
            Discover our hand-picked selection of luxury properties
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair text-2xl mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-custom">
                    {property.price}
                  </span>
                  <button className="!rounded-button bg-custom text-white px-6 py-2 hover:bg-custom/90 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;