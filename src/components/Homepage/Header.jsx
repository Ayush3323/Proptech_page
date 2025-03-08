// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, wrap } from "framer-motion";
// import { useScroll, useMotionValueEvent } from "framer-motion";

// import data from "../data.json";
// import Navbar from "./Navbar";

// const Header = () => {
//   const navigate = useNavigate();
//   const [propertyType, setPropertyType] = useState("");
//   const [location, setLocation] = useState("");
//   const [status, setStatus] = useState("");
  
//   const statuses = [...new Set(data.map((item) => item.property.status))];
//   const propertyTypes = [...new Set(data.map((item) => item.property.property_type))];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate("/Property", { state: { propertyType, location, status } });
//   };

//   return (
//     <header className="relative">
//       <Navbar />
//       <div className="relative h-[80vh]">
//         <motion.img
//           src="Banner_image.jpg"
//           alt="Luxury Hotel"
//           className="w-full h-full object-cover"
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1 }}
//         />
//         <div className="absolute inset-0 bg-black/30"></div>
//         <motion.div
//           className="absolute inset-0 flex items-center justify-center text-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <div className="max-w-4xl px-6" style={{overflow:"auto"}}>
//             <motion.h1
//               className="font-[\'Playfair_Display\'] text-5xl md:text-7xl text-white mb-6"
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             >
//               Elevating Your Lifestyle
//             </motion.h1>
//             <motion.p
//               className="text-white text-xl md:text-2xl"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.7 }}
//             >
//               Experience unparalleled luxury in the world's most coveted destinations
//             </motion.p>
//             <motion.div
//               className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 1 }}
//             >
//               <form className="flex space-x-4 justify-center" onSubmit={handleSearch} style={{flexWrap:"wrap"}}>
//                 {[propertyTypes, ["Faridabad", "Noida", "Gurugram"], statuses].map((options, i) => (
//                   <motion.select
//                     key={i}
//                     className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom cursor-pointer"
//                     style={{margin:"10px"}}
//                     value={i === 0 ? propertyType : i === 1 ? location : status}
//                     onChange={(e) =>
//                       i === 0 ? setPropertyType(e.target.value) : i === 1 ? setLocation(e.target.value) : setStatus(e.target.value)
//                     }
//                     whileHover={{ scale: 1.05 }}
//                     whileFocus={{ scale: 1.05 }}
//                   >
//                     <option className="text-black" value="">
//                       {i === 0 ? "Property Type" : i === 1 ? "Location" : "Status"}
//                     </option>
//                     {options.map((option, index) => (
//                       <option key={index} className="text-black" value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </motion.select>
//                 ))}
//                 <motion.button
//                   type="submit"
//                   className="bg-custom text-white px-6 py-2 rounded-md hover:bg-custom/90 transition"
//                   style={{ background: "rebeccapurple", fontWeight: "500" }}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   Search
//                 </motion.button>
//               </form>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// ------------------------------------both search bar-------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import data from "../data.json";
// import propertiesData from "../properties.json";
// import Navbar from "./Navbar";

// const Header = () => {
//   const navigate = useNavigate();
//   const [propertyType, setPropertyType] = useState("");
//   const [location, setLocation] = useState("");
//   const [status, setStatus] = useState("");
//   const [landmark, setLandmark] = useState("");
//   const [layout, setLayout] = useState("");

//   const properties = propertiesData;
  
//   // Data filters
//   const statuses = [...new Set(data.map((item) => item.property.status))];
//   const propertyTypes = [...new Set(data.map((item) => item.property.property_type))];
//   const uniqueLandmarks = [...new Set(properties.map(property => property.Landmark))];
//   const uniqueLayouts = [...new Set(properties.map(property => property.Layout))];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate("/Property", { state: { propertyType, location, status } });
//   };

//   const handleClearFilters = () => {
//     setLandmark('');
//     setLayout('');
//   };

//   return (
//     <header className="relative">
//       <Navbar />
//       <div className="relative h-[80vh]">
//         <motion.img
//           src="Banner_image.jpg"
//           alt="Luxury Hotel"
//           className="w-full h-full object-cover"
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1 }}
//         />
//         <div className="absolute inset-0 bg-black/30"></div>
//         <motion.div
//           className="absolute inset-0 flex items-center justify-center text-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <div className="max-w-4xl px-6" style={{overflow:"auto"}}>
//             <motion.h1
//               className="font-['Playfair_Display'] text-5xl md:text-7xl text-white mb-6"
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             >
//               Elevating Your Lifestyle
//             </motion.h1>
//             <motion.p
//               className="text-white text-xl md:text-2xl"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.7 }}
//             >
//               Experience unparalleled luxury in the world's most coveted destinations
//             </motion.p>

//             {/* Original Search Form */}
//             <motion.div
//               className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 1 }}
//             >
//               <form className="flex space-x-4 justify-center" onSubmit={handleSearch} style={{flexWrap:"wrap"}}>
//                 {[propertyTypes, ["Faridabad", "Noida", "Gurugram"], statuses].map((options, i) => (
//                   <motion.select
//                     key={i}
//                     className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom cursor-pointer"
//                     style={{margin:"10px"}}
//                     value={i === 0 ? propertyType : i === 1 ? location : status}
//                     onChange={(e) =>
//                       i === 0 ? setPropertyType(e.target.value) : i === 1 ? setLocation(e.target.value) : setStatus(e.target.value)
//                     }
//                     whileHover={{ scale: 1.05 }}
//                     whileFocus={{ scale: 1.05 }}
//                   >
//                     <option className="text-black" value="">
//                       {i === 0 ? "Property Type" : i === 1 ? "Location" : "Status"}
//                     </option>
//                     {options.map((option, index) => (
//                       <option key={index} className="text-black" value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </motion.select>
//                 ))}
//                 <motion.button
//                   type="submit"
//                   className="bg-custom text-white px-6 py-2 rounded-md hover:bg-custom/90 transition m-[10px]"
//                   style={{ background: "rebeccapurple", fontWeight: "500" }}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   Search
//                 </motion.button>
//               </form>
//             </motion.div>

//             {/* New Filter Bar */}
//             <motion.div
//               className="mt-4 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//             >
//               <form className="flex space-x-4 justify-center" style={{ flexWrap: "wrap" }}>
//                 <motion.select
//                   className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom cursor-pointer"
//                   style={{ margin: "10px" }}
//                   value={landmark}
//                   onChange={(e) => setLandmark(e.target.value)}
//                   whileHover={{ scale: 1.05 }}
//                   whileFocus={{ scale: 1.05 }}
//                 >
//                   <option className="text-black" value="">All Landmarks</option>
//                   {uniqueLandmarks.map((landmarkOption, index) => (
//                     <option key={index} className="text-black" value={landmarkOption}>
//                       {landmarkOption}
//                     </option>
//                   ))}
//                 </motion.select>

//                 <motion.select
//                   className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom cursor-pointer"
//                   style={{ margin: "10px" }}
//                   value={layout}
//                   onChange={(e) => setLayout(e.target.value)}
//                   whileHover={{ scale: 1.05 }}
//                   whileFocus={{ scale: 1.05 }}
//                 >
//                   <option className="text-black" value="">All Layouts</option>
//                   {uniqueLayouts.map((layoutOption, index) => (
//                     <option key={index} className="text-black" value={layoutOption}>
//                       {layoutOption}
//                     </option>
//                   ))}
//                 </motion.select>

//                 <motion.button
//                   type="button"
//                   onClick={handleClearFilters}
//                   className="bg-transparent text-white border border-white px-6 py-2 rounded-md hover:bg-white/10 transition"
//                   style={{ fontWeight: "500", margin: "10px" }}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   Clear Filters
//                 </motion.button>

//                 <Link to="/prop">
//                 <motion.button
//                   type="submit"
//                   className="bg-custom text-white px-6 py-2 rounded-md hover:bg-custom/90 transition m-[10px]"
//                   style={{ background: "rebeccapurple", fontWeight: "500" }}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
                  
//                 >
//                   Search
//                 </motion.button>
//                 </Link>
//               </form>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import propertiesData from "../properties.json";
import Navbar from "./Navbar";

const Header = () => {
  const [landmark, setLandmark] = useState("");
  const [layout, setLayout] = useState("");

  const properties = propertiesData;
  const uniqueLandmarks = [...new Set(properties.map(property => property.Landmark))];
  const uniqueLayouts = [...new Set(properties.map(property => property.Layout))];

  const handleClearFilters = () => {
    setLandmark('');
    setLayout('');
  };

  return (
    <header className="relative">
      <Navbar />
      <div className="relative h-[80vh]">
        <motion.img
          src="Banner_image.jpg"
          alt="Luxury Hotel"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="max-w-4xl px-6" style={{overflow:"auto"}}>
            <motion.h1
              className="font-['Playfair_Display'] text-5xl md:text-7xl text-white mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Elevating Your Lifestyle
            </motion.h1>
            <motion.p
              className="text-white text-xl md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Experience unparalleled luxury in the world's most coveted destinations
            </motion.p>

            {/* Filter Bar */}
            <motion.div
              className="mt-8 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <form className="flex space-x-4 justify-center" style={{ flexWrap: "wrap" }}>
                <motion.select
                  className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom cursor-pointer"
                  style={{ margin: "10px" }}
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                >
                  <option className="text-black" value="">All Landmarks</option>
                  {uniqueLandmarks.map((landmarkOption, index) => (
                    <option key={index} className="text-black" value={landmarkOption}>
                      {landmarkOption}
                    </option>
                  ))}
                </motion.select>

                <motion.select
                  className="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom cursor-pointer"
                  style={{ margin: "10px" }}
                  value={layout}
                  onChange={(e) => setLayout(e.target.value)}
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                >
                  <option className="text-black" value="">All Layouts</option>
                  {uniqueLayouts.map((layoutOption, index) => (
                    <option key={index} className="text-black" value={layoutOption}>
                      {layoutOption}
                    </option>
                  ))}
                </motion.select>

                <motion.button
                  type="button"
                  onClick={handleClearFilters}
                  className="bg-transparent text-white border border-white px-6 py-2 rounded-md hover:bg-white/10 transition"
                  style={{ fontWeight: "500", margin: "10px" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Clear Filters
                </motion.button>

                <Link to={`/prop?landmark=${landmark}&layout=${layout}`}>
                  <motion.button
                    type="submit"
                    className="bg-custom text-white px-6 py-2 rounded-md hover:bg-custom/90 transition m-[10px]"
                    style={{ background: "rebeccapurple", fontWeight: "500" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Search
                  </motion.button>
                </Link>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;