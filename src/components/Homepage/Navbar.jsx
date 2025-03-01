import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="absolute w-full by-gray-900 z-10 bg-transparent">
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
            <Link to="/">
                <img src="/J k homes1.png" alt="Luxuar" className="h-8 cursor-pointer" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-custom transition">Home</Link>
              <Link to="/about" className="text-white hover:text-custom transition">About</Link>
              <Link to="/Property" className="text-white hover:text-custom transition">Properties</Link>
              <Link to="/contact" className="text-white hover:text-custom transition">Contact</Link>
              <a href="#contact-section">
                <button className="!rounded-button bg-custom text-white px-6 py-2 hover:bg-custom/90 transition">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
