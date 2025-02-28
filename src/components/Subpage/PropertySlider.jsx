// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const PropertySlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//   };

//   return (
//     <div className="mb-8">
//       <Slider {...settings}>
//         <div>
//           <img
//             src="aa164369439820220201.jpg"
//             alt="Property Image 1"
//             className="w-full h-[600px] object-cover rounded-lg"
//           />
//         </div>
//         <div>
//           <img
//             src="aa164369439820220201.jpg"
//             alt="Property Image 2"
//             className="w-full h-[600px] object-cover rounded-lg"
//           />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default PropertySlider;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PropertySlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="mb-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Property Image ${index + 1}`}
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertySlider;