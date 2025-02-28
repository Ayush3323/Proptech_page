// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faShoppingBag,
//   faGraduationCap,
//   faHospital,
//   faSubway,
//   faBus,
//   faPlane,
// } from '@fortawesome/free-solid-svg-icons';

// const Location = () => {
//   return (
//     <div className="bg-white rounded-lg shadow p-6">
//       <h2 className="text-xl font-semibold mb-6">Location</h2>
//       <div className="relative h-[400px] mb-6">
//         <img
//           src="https://ai-public.creatie.ai/gen_page/map_placeholder_1280x720.png"
//           alt="Location Map"
//           className="absolute inset-0 w-full h-full object-cover rounded-lg"
//         />
//       </div>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <h3 className="font-medium mb-2">Nearby Amenities</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faShoppingBag} className="text-custom mr-2" />
//               Shopping Center (0.5 mi)
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faGraduationCap} className="text-custom mr-2" />
//               Schools (1.2 mi)
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faHospital} className="text-custom mr-2" />
//               Medical Center (2.0 mi)
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-medium mb-2">Transportation</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faSubway} className="text-custom mr-2" />
//               Metro Station (0.8 mi)
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faBus} className="text-custom mr-2" />
//               Bus Stop (0.3 mi)
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faPlane} className="text-custom mr-2" />
//               Airport (15 mi)
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBag,
  faGraduationCap,
  faHospital,
  faSubway,
  faBus,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';

const Location = ({ location }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Location</h2>
      <div className="relative h-[400px] mb-6">
        <img
          src={location.map}
          alt="Location Map"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-2">Nearby Amenities</h3>
          <ul className="space-y-2 text-gray-600">
            {location.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center">
                <FontAwesomeIcon icon={amenity.icon} className="text-custom mr-2" />
                {amenity.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">Transportation</h3>
          <ul className="space-y-2 text-gray-600">
            {location.transportation.map((transport, index) => (
              <li key={index} className="flex items-center">
                <FontAwesomeIcon icon={transport.icon} className="text-custom mr-2" />
                {transport.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;