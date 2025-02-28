// import React from 'react';

// const FloorPlan = () => {
//   return (
//     <div className="bg-white rounded-lg shadow p-6 mb-8">
//       <h2 className="text-xl font-semibold mb-6">Floor Plan</h2>
//       <img
//         src="https://creatie.ai/ai/api/search-image?query=Modern architectural floor plan with detailed room layouts, measurements, and annotations. The design shows a spacious open-concept living area, multiple bedrooms, and outdoor spaces&width=1000&height=600&orientation=landscape&flag=0a313062-175d-4273-9e35-9238d40cabbb"
//         alt="Floor Plan"
//         className="w-full rounded-lg"
//       />
//     </div>
//   );
// };

// export default FloorPlan;

import React from 'react';

const FloorPlan = ({ floorPlan }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6">Floor Plan</h2>
      <img
        src={floorPlan}
        alt="Floor Plan"
        className="w-full rounded-lg"
      />
    </div>
  );
};

export default FloorPlan;