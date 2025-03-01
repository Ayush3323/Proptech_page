// import React from "react";

// const Services = () => {
//   const services = [
//     {
//       icon: "fas fa-crown",
//       title: "Unparalleled Amenities",
//       description: "From sparkling pools to state-of-the-art fitness centers",
//     },
//     {
//       icon: "fas fa-concierge-bell",
//       title: "Standard Convenience",
//       description: "24/7 concierge service and personalized attention",
//     },
//     {
//       icon: "fas fa-paint-brush",
//       title: "Thoughtful Design",
//       description: "Every aspect of our spaces is meticulously planned",
//     },
//     {
//       icon: "fas fa-gem",
//       title: "Exceptional Craftsmanship",
//       description: "Quality materials and attention to detail",
//     },
//   ];

//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="font-playfair text-4xl mb-4 " >
//             Crafting Exceptional Living Experiences
//           </h2>
//           <p className="text-gray-600">
//             From the pinnacle of integrated lifestyle communities, creating a world
//             where sophistication and wellbeing blend in Dubai
//           </p>
//         </div>
//         <div className="grid md:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition"
//             >
//               <i className={`${service.icon} text-custom text-2xl mb-4`}></i>
//               <h3 className="font-playfair text-xl mb-2" style={{color:"rebeccapurple",fontWeight:"500"}}>{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const services = [
    {
      icon: "fas fa-crown",
      title: "Unparalleled Amenities",
      description: "Experience sparkling pools, state-of-the-art fitness centers, and premium wellness facilities",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "fas fa-concierge-bell",
      title: "24/7 Luxury Service",
      description: "Personalized concierge, valet service, and bespoke lifestyle management",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: "fas fa-paint-brush",
      title: "Thoughtful Design",
      description: "Meticulously planned spaces blending ergonomics with aesthetic perfection",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: "fas fa-gem",
      title: "Premium Craftsmanship",
      description: "Hand-selected materials and artisanal attention to every detail",
      gradient: "from-orange-500 to-amber-400"
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h2 
            className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Exceptional
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Living Experiences
            </span>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Where cutting-edge innovation meets timeless elegance in world-class residential communities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5, type: "spring" }}
              className="group relative"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              <div className="relative h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out group-hover:-translate-y-2 p-6 md:p-8">
                <div className={`mb-6 w-14 h-14 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                  <i className={`${service.icon} text-white text-2xl`} />
                </div>
                
                <h3 className="font-playfair text-xl md:text-2xl mb-3 text-gray-900">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-100 rounded-full opacity-10 mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-20 w-96 h-96 bg-pink-100 rounded-full opacity-10 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
      </div>
    </section>
  );
};

export default Services;