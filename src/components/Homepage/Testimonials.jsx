// import React from "react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       image: "234d7f58-421b-40ff-844f-db80c53f74b6.jpg",
//       name: "Sarah Johnson",
//       role: "CEO, Tech Corp",
//       quote:
//         "An absolutely magnificent experience. The attention to detail and level of service exceeded all expectations.",
//     },
//     {
//       image: "bc93e881-dabe-4d8b-a2fb-791c9cfe6202.jpg",
//       name: "Michael Chen",
//       role: "Executive Director",
//       quote: "The epitome of luxury living. Every moment spent here was pure perfection.",
//     },
//     {
//       image: "51f5ba96-ca13-4cd3-97c7-6bc8e2512610.jpg",
//       name: "Emily Martinez",
//       role: "Design Director",
//       quote:
//         "Impeccable service, stunning design, and unmatched hospitality. A truly remarkable experience.",
//     },
//   ];

//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="font-playfair text-4xl mb-4">Client Testimonials</h2>
//           <p className="text-gray-600">
//             What our esteemed guests say about their experience
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="p-8 bg-white rounded-lg shadow-sm">
//               <div className="flex items-center mb-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h4 className="font-semibold">{testimonial.name}</h4>
//                   <p className="text-gray-500">{testimonial.role}</p>
//                 </div>
//               </div>
//               <p className="text-gray-600">{testimonial.quote}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const testimonials = [
    {
      image: "/Testimg1.jpg",
      name: "Divyanshu",
      role: "Tech Corp",
      quote: "An absolutely magnificent experience. The attention to detail and level of service exceeded all expectations.",
    },
    {
      image: "/Testimg2.jpg",
      name: "Harinder",
      role: "Executive Director",
      quote: "The epitome of luxury living. Every moment spent here was pure perfection.",
    },
    {
      image: "/Testimg3.jpeg",
      name: "Mayank",
      role: "Design Director",
      quote: "Impeccable service, stunning design, and unmatched hospitality. A truly remarkable experience.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            className="font-playfair text-4xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Client
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hear from our valued clients about their exceptional experiences
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* User Info */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="relative">
                <svg className="w-8 h-8 text-purple-100 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic leading-relaxed before:content-['\201C'] after:content-['\201D']">
                  {testimonial.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
