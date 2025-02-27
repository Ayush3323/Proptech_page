import React from 'react';

const Location = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Location</h2>
      <div className="relative h-[400px] mb-6">
        <img
          src="https://ai-public.creatie.ai/gen_page/map_placeholder_1280x720.png"
          alt="Location Map"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-2">Nearby Amenities</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <i className="fas fa-shopping-bag text-custom mr-2"></i>Shopping
              Center (0.5 mi)
            </li>
            <li className="flex items-center">
              <i className="fas fa-graduation-cap text-custom mr-2"></i>Schools
              (1.2 mi)
            </li>
            <li className="flex items-center">
              <i className="fas fa-hospital text-custom mr-2"></i>Medical Center
              (2.0 mi)
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">Transportation</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <i className="fas fa-subway text-custom mr-2"></i>Metro Station
              (0.8 mi)
            </li>
            <li className="flex items-center">
              <i className="fas fa-bus text-custom mr-2"></i>Bus Stop (0.3 mi)
            </li>
            <li className="flex items-center">
              <i className="fas fa-plane text-custom mr-2"></i>Airport (15 mi)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;