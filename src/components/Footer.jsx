import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <img src="" alt="Luxuar" className="h-8 mb-6" />
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
          <div>
            <h4 className="font-playfair text-lg mb-4">Newsletter</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
              <button className="!rounded-button w-full bg-custom text-white py-4 hover:bg-custom/90 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Luxuar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;