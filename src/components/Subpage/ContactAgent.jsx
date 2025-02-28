// import React from 'react';

// const ContactAgent = () => {
//   return (
//     <div className="bg-white rounded-lg shadow p-6 mb-8 sticky top-8">
//       <h2 className="text-xl font-semibold mb-6">Contact Agent</h2>
//       <div className="flex items-center space-x-4 mb-6">
//         <img
//           src="https://creatie.ai/ai/api/search-image?query=Professional headshot of a real estate agent, well-dressed in business attire with a warm, friendly smile. The photo is taken against a neutral background with studio lighting&width=100&height=100&orientation=squarish&flag=31ecff3d-7b0a-4756-b149-c81cab03642e"
//           alt="Agent"
//           className="w-16 h-16 rounded-full"
//         />
//         <div>
//           <h3 className="font-medium">Sarah Johnson</h3>
//           <p className="text-sm text-gray-600">Luxury Property Specialist</p>
//           <div className="flex items-center mt-1">
//             <i className="fas fa-star text-yellow-400"></i>
//             <i className="fas fa-star text-yellow-400"></i>
//             <i className="fas fa-star text-yellow-400"></i>
//             <i className="fas fa-star text-yellow-400"></i>
//             <i className="fas fa-star text-yellow-400"></i>
//           </div>
//         </div>
//       </div>
//       <form className="space-y-4">
//         <div>
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full border-gray-300 rounded-lg"
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full border-gray-300 rounded-lg"
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             placeholder="Your Phone"
//             className="w-full border-gray-300 rounded-lg"
//           />
//         </div>
//         <div>
//           <textarea
//             placeholder="Message"
//             rows="4"
//             className="w-full border-gray-300 rounded-lg"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="!rounded-button w-full bg-custom text-white py-2 font-medium"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactAgent;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ContactAgent = ({ agent }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8 sticky top-8">
      <h2 className="text-xl font-semibold mb-6">Contact Agent</h2>
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-medium">{agent.name}</h3>
          <p className="text-sm text-gray-600">{agent.title}</p>
          <div className="flex items-center mt-1">
            {[...Array(agent.rating)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border-gray-300 rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          className="!rounded-button w-full bg-custom text-white py-2 font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactAgent;