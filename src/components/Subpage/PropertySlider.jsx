import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';

const PropertySlider = () => {
  useEffect(() => {
    new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      autoplay: 5000,
    }).mount();
  }, []);

  return (
    <div className="glide mb-8">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <img
              src="https://creatie.ai/ai/api/search-image?query=A luxurious modern villa exterior with clean architectural lines, featuring large windows, a manicured lawn, and a contemporary design aesthetic. The property is photographed during golden hour with perfect lighting conditions, showcasing its high-end finishes and premium materials&width=1280&height=600&orientation=landscape&flag=815a3ec8-2e6e-4ea6-aec2-0acc6fef701a"
              alt="Property Image 1"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </li>
          <li className="glide__slide">
            <img
              src="https://creatie.ai/ai/api/search-image?query=Modern villa interior living room with floor-to-ceiling windows, minimalist furniture, and natural light flooding in. The space features high ceilings, premium finishes, and a seamless indoor-outdoor connection&width=1280&height=600&orientation=landscape&flag=5d0afbcd-3885-4322-9371-f1dcfa95fad3"
              alt="Property Image 2"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </li>
        </ul>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
      </div>
    </div>
  );
};

export default PropertySlider;