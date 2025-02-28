// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBed,
//   faBath,
//   faVectorSquare,
//   faCalendar,
//   faCheck,
// } from '@fortawesome/free-solid-svg-icons';

// const PropertyDetails = () => {
//   return (
//     <div className="bg-white rounded-lg shadow p-6 mb-8">
//       <h1 className="text-3xl font-bold mb-4">Modern Luxury Villa</h1>
//       <div className="flex items-center space-x-4 mb-6">
//         <span className="bg-custom/10 text-custom px-3 py-1 rounded-full text-sm font-medium">
//           For Sale
//         </span>
//         <span className="text-2xl font-bold text-custom">$2,500,000</span>
//       </div>
//       <div className="grid grid-cols-4 gap-4 mb-6">
//         <div className="text-center">
//           <FontAwesomeIcon icon={faBed} className="text-gray-400 text-xl mb-2" />
//           <p className="text-sm text-gray-600">4 Bedrooms</p>
//         </div>
//         <div className="text-center">
//           <FontAwesomeIcon icon={faBath} className="text-gray-400 text-xl mb-2" />
//           <p className="text-sm text-gray-600">3.5 Baths</p>
//         </div>
//         <div className="text-center">
//           <FontAwesomeIcon icon={faVectorSquare} className="text-gray-400 text-xl mb-2" />
//           <p className="text-sm text-gray-600">4,200 sq ft</p>
//         </div>
//         <div className="text-center">
//           <FontAwesomeIcon icon={faCalendar} className="text-gray-400 text-xl mb-2" />
//           <p className="text-sm text-gray-600">Built 2022</p>
//         </div>
//       </div>
//       <p className="text-gray-600 leading-relaxed mb-6">
//         This stunning modern villa offers the perfect blend of luxury and
//         comfort. Featuring an open-concept design with floor-to-ceiling windows
//         that flood the space with natural light. The gourmet kitchen boasts
//         premium appliances and a large island, perfect for entertaining. The
//         primary suite includes a spa-like bathroom and walk-in closet. The
//         outdoor space features a heated pool and landscaped gardens.
//       </p>
//       <div className="border-t pt-6">
//         <h2 className="text-xl font-semibold mb-4">Key Features</h2>
//         <ul className="grid grid-cols-2 gap-4">
//           <li className="flex items-center">
//             <FontAwesomeIcon icon={faCheck} className="text-custom mr-2" />
//             Smart Home Technology
//           </li>
//           <li className="flex items-center">
//             <FontAwesomeIcon icon={faCheck} className="text-custom mr-2" />
//             Wine Cellar
//           </li>
//           <li className="flex items-center">
//             <FontAwesomeIcon icon={faCheck} className="text-custom mr-2" />
//             Home Theater
//           </li>
//           <li className="flex items-center">
//             <FontAwesomeIcon icon={faCheck} className="text-custom mr-2" />
//             3-Car Garage
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faBath,
  faVectorSquare,
  faCalendar,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const PropertyDetails = ({
  title,
  status,
  price,
  details,
  description,
  keyFeatures,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="flex items-center space-x-4 mb-6">
        <span className="bg-custom/10 text-custom px-3 py-1 rounded-full text-sm font-medium">
          {status}
        </span>
        <span className="text-2xl font-bold text-custom">{price}</span>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <FontAwesomeIcon icon={faBed} className="text-gray-400 text-xl mb-2" />
          <p className="text-sm text-gray-600">{details.bedrooms} Bedrooms</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faBath} className="text-gray-400 text-xl mb-2" />
          <p className="text-sm text-gray-600">{details.baths} Baths</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faVectorSquare} className="text-gray-400 text-xl mb-2" />
          <p className="text-sm text-gray-600">{details.area}</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faCalendar} className="text-gray-400 text-xl mb-2" />
          <p className="text-sm text-gray-600">Built {details.yearBuilt}</p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="grid grid-cols-2 gap-4">
          {keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FontAwesomeIcon icon={faCheck} className="text-custom mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetails;