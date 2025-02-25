import React from "react";

const Services = () => {
  const services = [
    {
      icon: "fas fa-crown",
      title: "Unparalleled Amenities",
      description: "From sparkling pools to state-of-the-art fitness centers",
    },
    {
      icon: "fas fa-concierge-bell",
      title: "Standard Convenience",
      description: "24/7 concierge service and personalized attention",
    },
    {
      icon: "fas fa-paint-brush",
      title: "Thoughtful Design",
      description: "Every aspect of our spaces is meticulously planned",
    },
    {
      icon: "fas fa-gem",
      title: "Exceptional Craftsmanship",
      description: "Quality materials and attention to detail",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl mb-4">
            Crafting Exceptional Living Experiences
          </h2>
          <p className="text-gray-600">
            From the pinnacle of integrated lifestyle communities, creating a world
            where sophistication and wellbeing blend in Dubai
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition"
            >
              <i className={`${service.icon} text-custom text-2xl mb-4`}></i>
              <h3 className="font-playfair text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;