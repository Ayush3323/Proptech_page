import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/prop", label: "Properties" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'} transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/">
              <motion.img 
                src="/J k homes1.png" 
                alt="Luxuar" 
                className="h-8 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8" style={{ fontSize: "large", fontWeight: "600" }}>
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                variants={linkVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={link.path} 
                  className="text-white hover:text-custom transition relative group"
                >
                  {link.label}
                  <motion.span 
                    className="absolute left-0 -bottom-1 w-0 h-[2px] bg-custom transition-all group-hover:w-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
            
            <motion.a 
              href="#contact-section"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button className="!rounded-button bg-custom text-white px-6 py-2 hover:bg-custom/90 transition-transform">
                Get In Touch
              </button>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;