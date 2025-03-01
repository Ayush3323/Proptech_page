// import React from "react";

// const Contact = () => {
//   return (
//     <section className="py-20 bg-white" id="contact-section">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <h2 className="font-playfair text-4xl mb-4">Get in Touch</h2>
//             <p className="text-gray-600">
//               We're here to assist you with any inquiries about our luxury
//               properties and services.
//             </p>
//             <form
//               action="https://formspree.io/f/mzzdlovd" 
//               method="POST"
//               className="space-y-6"
//             >
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   className="w-full p-4 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   className="w-full p-4 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   rows="4"
//                   className="w-full p-4 border border-gray-300 rounded-lg"
//                 ></textarea>
//               </div>
//               {/* Optional: Set a custom subject for the email */}
//               <input type="hidden" name="_subject" value="New Contact Form Submission" />
//               <button
//                 type="submit"
//                 className="!rounded-button bg-black text-white px-8 py-4 hover:bg-custom/90 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//           <div className="h-[500px] rounded-lg overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95538794185!2d76.8130632078125!3d28.64428055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1644945248000!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const mapVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section 
      className="py-20 bg-white" 
      id="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.h2 
              className="font-playfair text-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h2>
            
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We're here to assist you with any inquiries about our luxury
              properties and services.
            </motion.p>

            <motion.form
              action="https://formspree.io/f/mzzdlovd" 
              method="POST"
              className="space-y-6"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              ref={ref}
            >
              <motion.div variants={formVariants}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div variants={formVariants}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div variants={formVariants}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                ></textarea>
              </motion.div>

              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              
              <motion.div variants={formVariants}>
                <motion.button
                  type="submit"
                  className="!rounded-button bg-black text-white px-8 py-4 hover:bg-custom/90 transition-all transform hover:scale-105 active:scale-95"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </div>

          <motion.div 
            className="h-[500px] rounded-lg overflow-hidden shadow-xl"
            variants={mapVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95538794185!2d76.8130632078125!3d28.64428055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1644945248000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg transform hover:scale-105 transition-transform duration-300"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;