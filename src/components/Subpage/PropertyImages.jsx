import React from 'react';

const PropertyImages = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6">Property Images</h2>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://creatie.ai/ai/api/search-image?query=Modern kitchen interior with marble countertops, high-end appliances, and minimalist design. The space features excellent lighting and a large island, photographed to showcase its premium finishes&width=600&height=400&orientation=landscape&flag=019363ed-fa18-46d6-9429-2a5d93b5e3c5"
          alt="Kitchen"
          className="rounded-lg"
        />
        <img
          src="https://creatie.ai/ai/api/search-image?query=Luxury master bedroom with en-suite bathroom, featuring a king-size bed, designer furniture, and large windows with scenic views. The room demonstrates high-end finishes and sophisticated design&width=600&height=400&orientation=landscape&flag=03a60507-e0e7-40b5-a767-51ee5b2b7bfd"
          alt="Master Bedroom"
          className="rounded-lg"
        />
        <img
          src="https://creatie.ai/ai/api/search-image?query=Modern bathroom interior with freestanding bathtub, double vanity, and premium fixtures. The space features marble tiles and excellent natural lighting&width=600&height=400&orientation=landscape&flag=4a0e5660-ef64-4196-93ce-513cf51381d5"
          alt="Bathroom"
          className="rounded-lg"
        />
        <img
          src="https://creatie.ai/ai/api/search-image?query=Outdoor pool area of a luxury villa with infinity pool, comfortable loungers, and landscaped gardens. The scene is captured during sunset to highlight the premium outdoor living space&width=600&height=400&orientation=landscape&flag=2be0502e-8e39-4646-ba3a-af1e15385123"
          alt="Pool"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default PropertyImages;