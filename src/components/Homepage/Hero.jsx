import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[80vh]">
      <img
        src="Banner_image.jpg"
        alt="Luxury Hotel"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-4xl px-6">
          <h1 className="font-playfair text-5xl md:text-7xl text-white mb-6">
            Elevating Your Lifestyle
          </h1>
          <p className="text-white text-xl md:text-2xl">
            Experience unparalleled luxury in the world's most coveted destinations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;