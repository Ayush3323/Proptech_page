import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-20"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-5 gap-12"
          variants={containerVariants}
        >
          {/* Logo Section */}
          <motion.div variants={staggerVariants}>
            <motion.img 
              src="/J k homes1.png" 
              alt="Luxuar" 
              className="h-8 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Elevating the standards of luxury living across the globe
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerVariants}>
            <h4 className="font-playfair text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Properties', 'Services', 'Contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-custom transition transform hover:translate-x-2 block">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div variants={staggerVariants}>
            <h4 className="font-playfair text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              {[      { name: 'Instagram', link: 'https://www.instagram.com/jkhomesandconstructions?igsh=MTBuYTM5ZWhmb2ljZg==' },
                      { name: 'Facebook', link: '#' },
                      { name: 'Twitter', link: '#' },
                      { name: 'LinkedIn', link: '#' }].map((social, index) => (
                <motion.li 
                  key={social.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <a 
                    href={social.link} 
                    className="text-gray-400 hover:text-custom transition transform hover:translate-x-2 block"
                    whileHover={{ scale: 1.05 }}
                  >
                    {social.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Cities Section */}
          <motion.div variants={staggerVariants}>
            <h4 className="font-playfair text-lg mb-4">Our Cities</h4>
            <ul className="space-y-2">
              {['Noida', 'Faridabad', 'Gurugram'].map((city, index) => (
                <motion.li 
                  key={city}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-custom transition transform hover:translate-x-2 block">
                    {city}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={staggerVariants}>
            <h4 className="font-playfair text-lg mb-4">Contact Us</h4>
            <div className="space-y-4">
              <motion.p 
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Email: <a href="mailto:jkhomesandrealty@gmail.com" className="text-custom hover:underline">jkhomesandrealty@gmail.com</a>
              </motion.p>
              <motion.p 
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Phone: <a href="tel:98999 08898" className="text-custom hover:underline">+91 98999 08898</a>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contributors Section */}
        {/* <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="font-playfair text-lg mb-4">Contributors</h4>
          <p className="text-gray-400">Developed by</p>
          <div className="space-x-4 mt-2">
            {[
              { name: "Ayush Tiwari", link: "https://www.linkedin.com/in/ayush-tiwari-a80b86248" },
              { name: "Ravindra Nath Jha", link: "https://www.linkedin.com/in/ravindra-jha75" }
            ].map((contributor, index) => (
              <motion.a
                key={contributor.name}
                href={contributor.link}
                className="text-gray-400 hover:text-custom transition inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="hover:underline">{contributor.name}</span>
                {index < 1 && <span className="mx-2">|</span>}
              </motion.a>
            ))}
          </div>
        </motion.div> */}

        {/* Copyright Section */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="">
            <motion.p 
              className="text-gray-400 hover:text-custom transition"
              whileHover={{ scale: 1.02 }}
            >
              © 2024 . All rights reserved.
            </motion.p>
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;