import React from "react";

const Header = () => {
  return (
    <header class="relative">
        <nav class="absolute w-full z-10 bg-transparent">
            <div class="max-w-8xl mx-auto px-6">
                <div class="flex justify-between items-center py-6">
                    <div class="flex items-center">
                        <img src="" alt="Luxuar"
                            class="h-8" />
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#" class="text-white hover:text-custom transition">Home</a>
                        <a href="#" class="text-white hover:text-custom transition">About</a>
                        <a href="#" class="text-white hover:text-custom transition">Properties</a>
                        <a href="#" class="text-white hover:text-custom transition">Contact</a>
                        <button
                            class="!rounded-button bg-custom text-white px-6 py-2 hover:bg-custom/90 transition">Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        
        <div class="relative h-[80vh]">
            <img src="Banner_image.jpg" alt="Luxury Hotel" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-center">
                <div class="max-w-4xl px-6">
                    <h1 class="font-[&#39;Playfair_Display&#39;] text-5xl md:text-7xl text-white mb-6">Elevating Your Lifestyle</h1>
                    <p class="text-white text-xl md:text-2xl">Experience unparalleled luxury in the world's most coveted destinations</p>
                    <div class="mt-8 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                        <form class="flex space-x-4 justify-center">
                            <select class="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom">
                                <option value="">Property Type</option>
                                <option value="residential">Residential</option>
                                <option value="commercial">Commercial</option>
                            </select>
                            <select class="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom">
                                <option value="">Location</option>
                                <option value="faridabad">Faridabad</option>
                                <option value="noida">Noida</option>
                                <option value="gurugram">Gurugram</option>
                            </select>
                            <select class="bg-transparent text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-custom">
                                <option value="">Price Range</option>
                                <option value="0-50">0 - 50 Lakhs</option>
                                <option value="50-100">50 Lakhs - 1 Cr</option>
                                <option value="100-150">1 Cr - 1.5 Cr</option>
                                <option value="150-200">1.5 Cr - 2 Cr</option>
                                <option value="200+">2 Cr & Above</option>
                            </select>
                            <button type="submit" class="bg-custom text-white px-6 py-2 rounded-md hover:bg-custom/90 transition">Search</button>
                        </form>
                    </div>                    
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;