// import React from 'react';

// const Amenities = () => {
//   return (
//     <div className="bg-white rounded-lg shadow p-6">
//       <h2 className="text-xl font-semibold mb-6">Amenities</h2>
//       <ul className="space-y-4">
//         <li className="flex items-center">
//           <i className="fas fa-swimming-pool text-custom mr-3"></i>Heated Pool
//         </li>
//         <li className="flex items-center">
//           <i className="fas fa-dumbbell text-custom mr-3"></i>Fitness Center
//         </li>
//         <li className="flex items-center">
//           <i className="fas fa-car text-custom mr-3"></i>3-Car Garage
//         </li>
//         <li className="flex items-center">
//           <i className="fas fa-shield-alt text-custom mr-3"></i>24/7 Security
//         </li>
//         <li className="flex items-center">
//           <i className="fas fa-wine-glass text-custom mr-3"></i>Wine Cellar
//         </li>
//         <li className="flex items-center">
//           <i className="fas fa-film text-custom mr-3"></i>Home Theater
//         </li>
//         <li className="flex items-center">
//           <i className="fas fa-home text-custom mr-3"></i>Smart Home System
//         </li>
//         <li className="flex items-center">
//           <i className="fas fa-fan text-custom mr-3"></i>Central Air
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Amenities;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Amenities = ({ amenities }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Amenities</h2>
      <ul className="space-y-4">
        {amenities.map((amenity, index) => (
          <li key={index} className="flex items-center">
            <FontAwesomeIcon icon={amenity.icon} className="text-custom mr-3" />
            {amenity.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;