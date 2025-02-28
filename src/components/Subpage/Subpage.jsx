// // import React from 'react';
// // import Navbar from './Navbar';
// // import PropertySlider from './PropertySlider';
// // import PropertyDetails from './PropertyDetails';
// // import PropertyImages from './PropertyImages';
// // import FloorPlan from './FloorPlan';
// // import Location from './Location';
// // import ContactAgent from './ContactAgent';
// // import Amenities from './Amenities';
// // import Footer from './Footer';

// // const Subpage = () => {
// //   return (
// //     <div className="bg-gray-50">
// //       <Navbar />
// //       <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         <PropertySlider />
// //         <div className="grid grid-cols-3 gap-8">
// //           <div className="col-span-2">
// //             <PropertyDetails />
// //             <PropertyImages />
// //             <FloorPlan />
// //             <Location />
// //           </div>
// //           <div className="col-span-1">
// //             <ContactAgent />
// //             <Amenities />
// //           </div>
// //         </div>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Subpage;

// import React from 'react';
// import Navbar from './Navbar';
// import PropertySlider from './PropertySlider';
// import PropertyDetails from './PropertyDetails';
// import PropertyImages from './PropertyImages';
// import FloorPlan from './FloorPlan';
// import Location from './Location';
// import ContactAgent from './ContactAgent';
// import Amenities from './Amenities';
// import Footer from './Footer';
// import data from './data.json'; // Import the JSON file

// const Subpage = () => {
//   const { property } = data; // Destructure the property data

//   return (
//     <div className="bg-gray-50">
//       <Navbar />
//       <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <PropertySlider images={property.images.slider} />
//         <div className="grid grid-cols-3 gap-8">
//           <div className="col-span-2">
//             <PropertyDetails
//               title={property.title}
//               status={property.status}
//               price={property.price}
//               details={property.details}
//               description={property.description}
//               keyFeatures={property.keyFeatures}
//             />
//             <PropertyImages images={property.images.gallery} />
//             <FloorPlan floorPlan={property.floorPlan} />
//             <Location location={property.location} />
//           </div>
//           <div className="col-span-1">
//             <ContactAgent agent={property.agent} />
//             <Amenities amenities={property.amenities} />
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Subpage;


import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import PropertySlider from './PropertySlider';
import PropertyDetails from './PropertyDetails';
import PropertyImages from './PropertyImages';
import FloorPlan from './FloorPlan';
import Location from './Location';
import ContactAgent from './ContactAgent';
import Amenities from './Amenities';
import Footer from './Footer';
import data from '../data.json'; // Import the JSON file

const Subpage = () => {
  const { id } = useParams(); // Get id from route parameters

  // Find the property with the matching id
  const propertyData = data.find(item => item.property.id === id);

  if (!propertyData) {
    return <div>Property not found.</div>;
  }

  const { property } = propertyData;

  return (
    <div className="bg-gray-50">
      <Navbar />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PropertySlider images={property.images.slider} />
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <PropertyDetails
              title={property.title}
              status={property.status}
              price={property.price}
              details={property.details}
              description={property.description}
              keyFeatures={property.keyFeatures}
            />
            <PropertyImages images={property.images.gallery} />
            <FloorPlan floorPlan={property.floorPlan} />
            <Location location={property.location} />
          </div>
          <div className="col-span-1">
            <ContactAgent agent={property.agent} />
            <Amenities amenities={property.amenities} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subpage;
