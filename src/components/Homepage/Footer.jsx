import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12">
          <div>
            <img src="/J k homes1.png" alt="Luxuar" className="h-8 mb-6" />
            <p className="text-gray-400">
              Elevating the standards of luxury living across the globe
            </p>
          </div>
          <div>
            <h4 className="font-playfair text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-custom transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom transition">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-playfair text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-custom transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-custom transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          
          {/* New section for cities */}
        <div >
          <h4 className="font-playfair text-lg mb-4">Our Cities</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-custom transition">
                Noida
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-custom transition">
                Faridabad
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-custom transition">
                Gurugram
              </a>
            </li>
          </ul>
        </div>

          <div>
            <h4 className="font-playfair text-lg mb-4">Contact Us</h4>
            <div className="space-y-4">
              <p className="text-white">Email: <a href="mailto:jkhomesandrealty@gmail.com" className="text-custom">jkhomesandrealty@gmail.com</a></p>
              <p className="text-white">Phone: <a href="tel:9318463745" className="text-custom">+91 9318463745</a></p>
            </div>
          </div>

        </div>

        

        {/* New section for contributions */}
        <div className="mt-12 text-center">
          <h4 className="font-playfair text-lg mb-4">Contributors</h4>
          <p className="text-gray-400">
            Developed by  
          </p>
          <div className="space-x-4">
            <a href="https://www.linkedin.com/in/ayush-tiwari-a80b86248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-custom transition">Ayush Tiwari</a>
            <a href="https://www.linkedin.com/in/ravindra-jha75" className="text-gray-400 hover:text-custom transition">Ravindra Nath Jha</a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <a href="https://maydiv.com/"><p className="text-gray-400">© 2024 MAYDIV Infotech. All rights reserved.</p></a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
