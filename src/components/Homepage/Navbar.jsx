
// import React from 'react';
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useScroll, useMotionValueEvent } from "framer-motion";

// function Navbar() {
//   const [isScrolled, setIsScrolled] = React.useState(false);
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     setIsScrolled(latest > 50);
//   });

//   const navVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const linkVariants = {
//     hidden: { opacity: 0, x: 20 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const mobileMenuVariants = {
//     open: { x: 0 },
//     closed: { x: "100%" },
//   };

//   const links = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/prop", label: "Properties" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav 
//       className={`fixed w-full z-50 ${isScrolled || isMenuOpen ? 'bg-gray-900/95 backdrop-blur-sm' : ''} transition-all duration-300`}
//       initial="hidden"
//       animate="visible"
//       variants={navVariants}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-8xl mx-auto px-6">
//         <div className="flex justify-between items-center py-6">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Link to="/">
//               <motion.img 
//                 src="/J k homes1.png" 
//                 alt="Luxuar" 
//                 className="h-8 cursor-pointer"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               />
//             </Link>
//           </motion.div>

//           {/* Mobile Menu Button */}
//           <button
//             className={`md:hidden z-50 ${isScrolled || isMenuOpen ? 'text-white' : 'text-gray-900'}`}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8" style={{ fontSize: "large", fontWeight: "600" }}>
//             {links.map((link, index) => (
//               <motion.div
//                 key={link.path}
//                 variants={linkVariants}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link 
//                   to={link.path} 
//                   className={`${isScrolled ? 'text-white' : 'text-gray-900'} hover:text-custom transition relative group`}
//                 >
//                   {link.label}
//                   <motion.span 
//                     className="absolute left-0 -bottom-1 w-0 h-[2px] bg-custom transition-all group-hover:w-full"
//                     initial={{ width: 0 }}
//                     whileHover={{ width: "100%" }}
//                   />
//                 </Link>
//               </motion.div>
//             ))}
            
//             <motion.a 
//               href="#contact-section"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <button className={`${isScrolled ? 'text-white' : 'text-gray-900'} !rounded-button bg-custom px-6 py-2 hover:bg-custom/90 transition-transform`}>
//                 Get In Touch
//               </button>
//             </motion.a>
//           </div>
//         </div>

//         {/* Mobile Navigation - Fixed dark background */}
//         <motion.div
//           className="md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 z-40 shadow-xl"
//           initial="closed"
//           animate={isMenuOpen ? "open" : "closed"}
//           variants={mobileMenuVariants}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="h-full flex flex-col items-start justify-start space-y-6 pt-20 pl-6">
//             {links.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="text-xl text-white hover:text-custom transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <a 
//               href="#contact-section"
//               className="!rounded-button bg-custom text-white px-6 py-2 hover:bg-custom/90 mt-4"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Get In Touch
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </motion.nav>
//   );
// }

// export default Navbar;


import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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

  const mobileMenuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/prop", label: "Properties" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 ${isScrolled || isMenuOpen ? 'bg-gray-900/95 backdrop-blur-sm' : ''} transition-all duration-300`}
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

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 ${isScrolled || isMenuOpen ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" style={{ fontSize: "large", fontWeight: "600" }}>
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                variants={linkVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={link.path} 
                  className={`${isScrolled ? 'text-white' : 'text-gray-900'} hover:text-custom transition relative group`}
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
              <button className={`${isScrolled ? 'text-white' : 'text-gray-900'} !rounded-button bg-custom px-6 py-2 hover:bg-custom/90 transition-transform`}>
                Get In Touch
              </button>
            </motion.a>
          </div>
        </div>

        {/* Mobile Navigation - Fixed dark background */}
        <motion.div
          className="md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 z-40 shadow-xl"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full flex flex-col items-start justify-start space-y-6 pt-20 pl-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xl text-white hover:text-custom transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="#contact-section"
              className="!rounded-button bg-custom text-white px-6 py-2 hover:bg-custom/90 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;