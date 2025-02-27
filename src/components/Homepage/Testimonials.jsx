import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "234d7f58-421b-40ff-844f-db80c53f74b6.jpg",
      name: "Sarah Johnson",
      role: "CEO, Tech Corp",
      quote:
        "An absolutely magnificent experience. The attention to detail and level of service exceeded all expectations.",
    },
    {
      image: "bc93e881-dabe-4d8b-a2fb-791c9cfe6202.jpg",
      name: "Michael Chen",
      role: "Executive Director",
      quote: "The epitome of luxury living. Every moment spent here was pure perfection.",
    },
    {
      image: "51f5ba96-ca13-4cd3-97c7-6bc8e2512610.jpg",
      name: "Emily Martinez",
      role: "Design Director",
      quote:
        "Impeccable service, stunning design, and unmatched hospitality. A truly remarkable experience.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl mb-4">Client Testimonials</h2>
          <p className="text-gray-600">
            What our esteemed guests say about their experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;