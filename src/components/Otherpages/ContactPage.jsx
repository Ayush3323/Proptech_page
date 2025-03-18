import React from "react";
import Footer from "../Homepage/Footer";
import Navbar from "../Homepage/Navbar";
import WhatsappButton from "../Homepage/WhatsappButton";

const ContactPage = () => {
  return (
  <>
   <div className="fixed w-full bg-gray-900 top-0 z-50 " >
        <div style={{ height: "70px", borderRadius :"20px"}}>
        <Navbar />
        </div>
      </div>
    <section className="py-20 bg-white" id="contact-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="font-playfair text-4xl mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              We're here to assist you with any inquiries about our luxury
              properties and services. Reach out to us directly or fill out the form
              for prompt assistance.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-6 bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Headquarters</p>
                  <p className="text-gray-600">123 Luxury Avenue<br/>New Delhi, India 110001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Contact Number</p>
                  <p className="text-gray-600">+91 98999 08898<br/>Mon-Fri: 9am - 7pm IST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Email Address</p>
                  <p className="text-gray-600">jkhomesandrealty@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/mzzdlovd" 
              method="POST"
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
              {/* Optional: Set a custom subject for the email */}
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <button
                type="submit"
                className="!rounded-button bg-black text-white px-8 py-4 hover:bg-custom/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Map Section */}
          <div className="space-y-8">
            {/* <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-playfair text-2xl mb-4">Schedule a Consultation</h3>
              <p className="text-gray-600 mb-6">
                Book a private consultation with our luxury property specialists 
                to discuss your unique requirements.
              </p>
              <button className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Schedule Now
              </button>
            </div> */}
            <div className="h-[500px] rounded-lg overflow-hidden" style={{marginTop:'10%'}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95538794185!2d76.8130632078125!3d28.64428055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1644945248000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <WhatsappButton />
    <Footer />
    </>
  );
};

export default ContactPage;