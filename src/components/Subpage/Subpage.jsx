import React from 'react';
import Navbar from './Navbar';
import PropertySlider from './PropertySlider';
import PropertyDetails from './PropertyDetails';
import PropertyImages from './PropertyImages';
import FloorPlan from './FloorPlan';
import Location from './Location';
import ContactAgent from './ContactAgent';
import Amenities from './Amenities';
import Footer from './Footer';

const Subpage = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PropertySlider />
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <PropertyDetails />
            <PropertyImages />
            <FloorPlan />
            <Location />
          </div>
          <div className="col-span-1">
            <ContactAgent />
            <Amenities />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subpage;