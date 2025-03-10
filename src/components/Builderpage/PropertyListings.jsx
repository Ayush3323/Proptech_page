// import { useState, useEffect } from "react";
// import propertiesData from "../properties.json"; // Import the JSON data
// import { FaPhoneAlt } from 'react-icons/fa';
// import Contact from "../Homepage/Contact";
// import Footer from "../Homepage/Footer";
// import Navbar from "../Homepage/Navbar";


// const PropertyListings = () => {
//   const [landmark, setLandmark] = useState('');
//   const [layout, setLayout] = useState('');

//   const properties = propertiesData;

//   // Get unique landmarks and layouts from properties
//   const uniqueLandmarks = [...new Set(properties.map(property => property.Landmark))];
//   const uniqueLayouts = [...new Set(properties.map(property => property.Layout))];

//   const clearFilters = () => {
//     setLandmark('');
//     setLayout('');
//   };

//   const filteredProperties = properties.filter(property => {
//     return (
//       (landmark ? property.Landmark === landmark : true) &&
//       (layout ? property.Layout === layout : true)
//     );
//   });

//   return (
//     <>
//     <Navbar />
//     <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="mb-8 mt-12">
//         <h1 style={{textAlign:'center'}} className="text-3xl font-bold text-gray-900 mb-6">Builder Property </h1>
        
//         <div className="bg-white p-4 rounded-lg shadow-sm flex flex-wrap gap-4 items-center">
//           <div className="flex-1 min-w-[200px]">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Landmark</label>
//             <select 
//               className="w-full border-gray-300 rounded-md shadow-sm !rounded-button"
//               value={landmark}
//               onChange={(e) => setLandmark(e.target.value)}
//             >
//               <option value="">All Landmarks</option>
//               {uniqueLandmarks.map((landmarkOption, index) => (
//                 <option key={index} value={landmarkOption}>
//                   {landmarkOption}
//                 </option>
//               ))}
//             </select>
//           </div>
          
//           <div className="flex-1 min-w-[200px]">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Layout</label>
//             <select 
//               className="w-full border-gray-300 rounded-md shadow-sm !rounded-button"
//               value={layout}
//               onChange={(e) => setLayout(e.target.value)}
//             >
//               <option value="">All BHK</option>
//               {uniqueLayouts.map((layoutOption, index) => (
//                 <option key={index} value={layoutOption}>
//                   {layoutOption}
//                 </option>
//               ))}
//             </select>
//           </div>
          
//           <button 
//             className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors mt-6 !rounded-button"
//             onClick={clearFilters}
//           >
//             <i className="fas fa-times mr-2"></i>Clear Filters
//           </button>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProperties.map(property => (
//           <PropertyCard key={property.id} property={property} />
//         ))}
//       </div>
      
//     </div>
//       <Contact />
//       <Footer />
//     </>
//   );
// };

// const PropertyCard = ({ property }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // If no images are provided, display a default placeholder image
//   const defaultImage = "https://placehold.co/600x400";
//   const images = property.images.length > 0 ? property.images : [defaultImage];

//   return (
//     <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
//       <div className="p-6 space-y-4">
//         <div className="relative w-full h-64 overflow-x-auto snap-x snap-mandatory flex">
//           {images.map((img, index) => (
//             <img 
//               key={index}
//               src={img}
//               className="w-full h-full object-cover flex-shrink-0 snap-center"
//               alt={`Property Image ${index + 1}`}
//             />
//           ))}
//           <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//             {images.map((_, index) => (
//               <span 
//                 key={index}
//                 className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white/70'}`}
//               />
//             ))}
//           </div>
//         </div>
//         <div style={{minHeight:"330px"}}>
//         <div className="flex justify-between items-start mb-4">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900">{property.Name}</h3>
//             {/* <p className="text-sm text-gray-500">Property ID: {property.id}</p> */}
//           </div>
//           {property.TrakingNo && (
//             <div className="text-sm text-gray-500">
//               Tracking #{property.TrakingNo}
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-2 gap-2 mb-4">
//           <div>
//             <p className="text-sm text-gray-500">Property Type</p>
//             <p className="font-medium">{property["Property Type"]}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Floor Availability</p>
//             <p className="font-medium">{property["Floor Availability"]}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Layout</p>
//             <p className="font-medium text-custom">{property.Layout}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Size</p>
//             <p className="font-medium">{property.Size}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Landmark</p>
//             <p className="font-medium">{property.Landmark}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Price</p>
//             <p className="font-semibold text-custom">{property.Price}</p>
//           </div>
//         </div>

//         <div className="mb-4">
//           <p className="text-sm text-gray-500 mb-1">Address & Other Details</p>
//           <p className="text-sm">{property["Address & Other Details"]}</p>
//         </div>

//         {property.Remarks && (
//           <div className="mb-4">
//             <p className="text-sm text-gray-500 mb-1">Remarks</p>
//             <p className="text-sm">{property.Remarks}</p>
//           </div>
//         )}

//         </div>
//         <button className="w-full bg-gray-900/95 text-white py-3 px-4 rounded-md 
//                  hover:bg-gray-900/95 transition-all 
//                  duration-200 active:scale-[0.98] 
//                  flex items-center justify-center gap-2">
//   <FaPhoneAlt className="text-white inline-block" />
//   <span>Contact Agent</span>
// </button>
//       </div>
//     </div>
//   );
// };

// export default PropertyListings;


import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaPhoneAlt } from 'react-icons/fa';
import propertiesData from "../properties.json";
import Contact from "../Homepage/Contact";
import Footer from "../Homepage/Footer";
import Navbar from "../Homepage/Navbar";
import WhatsappButton from "../Homepage/WhatsappButton";

const PropertyListings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [landmark, setLandmark] = useState(searchParams.get("landmark") || '');
  const [layout, setLayout] = useState(searchParams.get("layout") || '');

  // Sync state with URL parameters
  useEffect(() => {
    const params = {};
    if (landmark) params.landmark = landmark;
    if (layout) params.layout = layout;
    setSearchParams(params);
  }, [landmark, layout, setSearchParams]);

  // Get unique filters
  const uniqueLandmarks = [...new Set(propertiesData.map(property => property.Landmark))];
  const uniqueLayouts = [...new Set(propertiesData.map(property => property.Layout))];

  // Filter properties
  const filteredProperties = propertiesData.filter(property => {
    const matchesLandmark = landmark ? property.Landmark === landmark : true;
    const matchesLayout = layout ? property.Layout === layout : true;
    return matchesLandmark && matchesLayout;
  });

  // Clear filters handler
  const clearFilters = () => {
    setLandmark('');
    setLayout('');
    setSearchParams({});
  };

  return (
    <>
      <Navbar />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 mt-12">
          <h1 style={{ textAlign: 'center' }} className="text-3xl font-bold text-gray-900 mb-6">
            Builder Properties
          </h1>
          
          {/* Filters Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Landmark</label>
              <select 
                className="w-full border-gray-300 rounded-md shadow-sm"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              >
                <option value="">All Landmarks</option>
                {uniqueLandmarks.map((landmarkOption, index) => (
                  <option key={index} value={landmarkOption}>
                    {landmarkOption}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Layout</label>
              <select 
                className="w-full border-gray-300 rounded-md shadow-sm"
                value={layout}
                onChange={(e) => setLayout(e.target.value)}
              >
                <option value="">All BHK</option>
                {uniqueLayouts.map((layoutOption, index) => (
                  <option key={index} value={layoutOption}>
                    {layoutOption}
                  </option>
                ))}
              </select>
            </div>
            
            <button 
              className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors mt-6"
              onClick={clearFilters}
            >
              <i className="fas fa-times mr-2"></i>Clear Filters
            </button>
          </div>
        </div>
        
        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
      <WhatsappButton />
      <Contact />
      <Footer />
    </>
  );
};

// PropertyCard component remains the same
const PropertyCard = ({ property }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const defaultImage = "https://placehold.co/600x400";
  const images = property.images.length > 0 ? property.images : [defaultImage];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-6 space-y-4">
        <div className="relative w-full h-64 overflow-x-auto snap-x snap-mandatory flex">
          {images.map((img, index) => (
            <img 
              key={index}
              src={img}
              className="w-full h-full object-cover flex-shrink-0 snap-center"
              alt={`Property Image ${index + 1}`}
            />
          ))}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <span 
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white/70'}`}
              />
            ))}
          </div>
        </div>
        <div style={{ minHeight: "330px" }}>
          <div className="flex justify-between items-start mb-4">
            <div>
              {/* <h3 className="text-lg font-semibold text-gray-900">{property.Name}</h3> */}
              <h3 className="text-lg font-semibold text-gray-900">J K Homes</h3>
            </div>
            {property.TrakingNo && (
              <div className="text-sm text-gray-500">
                Tracking #{property.TrakingNo}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div>
              <p className="text-sm text-gray-500">Property Type</p>
              <p className="font-medium">{property["Property Type"]}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Floor Availability</p>
              <p className="font-medium">{property["Floor Availability"]}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Layout</p>
              <p className="font-medium text-custom">{property.Layout}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Size</p>
              <p className="font-medium">{property.Size}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Landmark</p>
              <p className="font-medium">{property.Landmark}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="font-semibold text-custom">{property.Price}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">Address & Other Details</p>
            <p className="text-sm">{property["Address & Other Details"]}</p>
          </div>

          {property.Remarks && (
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">Remarks</p>
              <p className="text-sm">{property.Remarks}</p>
            </div>
          )}
        </div>
        <a href="tel:9899908898">
          <button className="w-full bg-gray-900/95 text-white py-3 px-4 rounded-md 
                        hover:bg-gray-900/95 transition-all duration-200 active:scale-[0.98] 
                        flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-white inline-block" />
            <span>Contact Agent</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default PropertyListings;