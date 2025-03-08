import React from "react";
import Footer from "../Homepage/Footer";
import Navbar from "../Homepage/Navbar";
import WhatsappButton from "../Homepage/WhatsappButton";

const About = () => {
  return (
    <>
      <div className="fixed w-full bg-gray-900 top-0 z-50">
        <div style={{ height: "70px", borderRadius: "20px" }}>
          <Navbar />
        </div>
      </div>
      <section className="py-20 bg-white" id="about-section">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="font-playfair text-5xl mb-6">
              Revolutionizing Real Estate Through Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At LuxePropTech, we combine cutting-edge technology with deep real estate
              expertise to transform property transactions into seamless, intelligent experiences.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-600">Premium Properties Listed</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold mb-2">$15B+</div>
              <div className="text-gray-600">In Property Transactions</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>

          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl">Our Journey</h2>
              <p className="text-gray-600">
                Founded in 2018 by real estate veterans and tech innovators, we recognized
                the need for a modern platform that bridges the gap between luxury real
                estate and digital transformation.
              </p>
              <p className="text-gray-600">
                Our AI-powered platform now serves clients in 12 countries, offering
                predictive analytics, virtual property tours, and smart contract solutions
                that redefine property transactions.
              </p>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img
                src="Amstoria_gallary2.jpg"
                alt="LuxePropTech Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-20">
            <h2 className="font-playfair text-4xl text-center">Our Core Values</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold">Innovation Driven</h3>
                <p className="text-gray-600">
                  Constantly pushing boundaries in proptech with AI, blockchain,
                  and immersive technologies.
                </p>
              </div>

              <div className="p-6 space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold">Trust & Transparency</h3>
                <p className="text-gray-600">
                  Blockchain-backed transactions and open communication form
                  the foundation of every deal.
                </p>
              </div>

              <div className="p-6 space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-2xl font-semibold">Client-Centric Approach</h3>
                <p className="text-gray-600">
                  24/7 personalized service with dedicated relationship managers
                  for every client.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20">
            <h2 className="font-playfair text-4xl text-center mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg">
                  <img
                    src={``}
                    alt="Team Member"
                    className="w-full h-96 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-white text-xl font-semibold">John Doe</h3>
                    <p className="text-gray-200">CEO & Founder</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gray-50 rounded-xl p-12 text-center">
            <h2 className="font-playfair text-4xl mb-6">Ready to Experience the Future of Real Estate?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who've transformed their property
              journey with our innovative platform.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default About;
