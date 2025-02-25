import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="font-playfair text-4xl mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              We're here to assist you with any inquiries about our luxury
              properties and services.
            </p>
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
          <div className="h-[500px] rounded-lg overflow-hidden">
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
    </section>
  );
};

export default Contact;
