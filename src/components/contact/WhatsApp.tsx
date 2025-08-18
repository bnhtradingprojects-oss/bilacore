"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Main App component containing the form
export default function WhatsApp() {
  // State to hold the user's message input
  const [message, setMessage] = useState('');
  // State to handle the error message display
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior (reloading the page)
    event.preventDefault();

    // Check if the message is not empty
    if (message.trim() === '') {
      setError('Please enter a message to send.');
      return;
    }

    // Clear any previous error messages
    setError('');

    // Replace the phone number below with the desired WhatsApp phone number, including the country code
    // Example: 12345678901 (for a number in the US, with country code 1)
    const phoneNumber = '27659664121'; // South Africa country code +27

    // Encode the message to be safe for a URL
    const encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp API URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open the URL in a new browser tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_0%_0%,_#facc15_0%,_transparent_50%)] opacity-20" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle_at_100%_100%,_#eab308_0%,_transparent_50%)] opacity-20" />
        {/* A simple grid pattern can be created with a repeating gradient */}
        <div className="absolute inset-0 [mask-image:radial-gradient(circle,_transparent_1px,_#000_1px)] [background-size:20px_20px] opacity-5" />
      </div>

     <section className="section-padding relative overflow-hidden"> <div className="flex items-center space-x-4">
          {/* WhatsApp Icon from a simple SVG for a clean look */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-10 h-10 text-green-400"
          >
            <path
              fill="currentColor"
              d="M380.9 97.1C339.4 54.4 280.9 33.1 224.2 33c-97.8 0-177.3 79.5-177.3 177.3 0 49.3 20.3 93.3 53.6 125.8l-34.9 122.9 126.9-34.8c30.2 16.5 64 25.1 98.4 25.1 97.8 0 177.3-79.5 177.3-177.3 0-56.6-21.3-115.1-64-156.6zM224.2 411.7c-31.8 0-63.5-9.2-90.8-26.6l-6.4-3.8-66.2 18.2 18.2-66.2-3.8-6.4c-17.4-27.3-26.6-59-26.6-90.8 0-82.9 67.4-150.3 150.3-150.3s150.3 67.4 150.3 150.3c0 82.9-67.4 150.3-150.3 150.3zm79.1-105.7c-4.4-2.2-26.1-13-30.1-14.4s-6.9-2.2-9.8 2.2c-2.9 4.4-11.2 14.4-13.7 17.3s-4.9 3.3-9.1 1.1c-4.2-2.2-17.7-6.5-33.8-20.9-12.5-11.1-20.9-27.9-23.4-32.3s-.2-6.6 1.9-8.7c1.9-1.9 4.4-4.8 6.6-7.2s2.9-4.4 4.4-7.2c1.4-2.7 1.1-5.1-.2-7.2-1.4-2.2-13.4-32.2-18.4-44.1s-5-10.1-6.9-11c-1.9-1-4.2-1.6-6.6-1.6-2.4 0-4.9.4-7.2 1.6s-8 4-11.2 7.2c-3.2 3.2-6.9 7-10.1 10.6-3.2 3.6-6.4 7.2-12.8 13.9-6.4 6.7-12.8 13.5-18.4 19.3-1.6 1.9-3.3 3.9-4.8 5.8-15.1 18.5-27.7 41.5-35.8 68.7s-10.8 56.6-6.7 87.5c4.1 30.9 16.4 56.8 35.8 77.2 19.4 20.4 45.4 32.7 77.2 36.8s66.6-2.5 87.5-6.7c31.8-4.1 54.8-16.7 73.3-31.8l5.8-4.8c1.9-1.6 3.9-3.3 5.8-4.8 5.8-5.6 12.6-11.9 19.3-18.4 6.7-6.4 10.6-10.2 13.9-12.8 3.6-3.2 7.2-6.4 10.6-10.1 3.2-3.2 6.1-8.1 7.2-11.2 1.1-3.2 1.6-5.7 1.6-8.1 0-2.4-.4-4.8-1.6-7.2zm-28.7 8.7c-.5.5-.9 1.1-1.4 1.6-2.9 2.9-6.4 5.9-9.9 8.6-3.6 2.7-7.2 5.2-11.1 7.4-3.9 2.2-8.3 4.2-12.8 5.7s-9.3 2.5-14 2.5c-4.7 0-9.4-.8-13.9-2.5s-8.7-3.5-12.8-5.7c-3.9-2.2-7.7-4.7-11.1-7.4s-6.9-5.7-9.9-8.6c-2.9-2.9-5.4-6.1-7.7-9.4-2.2-3.2-4-6.7-5.5-10.2-1.4-3.6-2.4-7.4-2.9-11.2s-1.1-8-1.1-12.1v-2.2c0-4.1.4-8 1.1-12.1.5-3.8 1.4-7.6 2.9-11.2 1.4-3.5 3.3-6.9 5.5-10.2s4.8-6.1 7.7-9.4c2.9-2.9 6.4-5.9 9.9-8.6 3.6-2.7 7.2-5.2 11.1-7.4 3.9-2.2 8.3-4.2 12.8-5.7s9.3-2.5 14-2.5c4.7 0 9.4.8 13.9 2.5s8.7 3.5 12.8 5.7c3.9 2.2 7.7 4.7 11.1 7.4s6.9 5.7 9.9 8.6c2.9 2.9 5.4 6.1 7.7 9.4 2.2 3.2 4 6.7 5.5 10.2 1.4 3.6 2.4 7.4 2.9 11.2s1.1 8 1.1 12.1v2.2c0 4.1-.4 8-1.1 12.1-.5 3.8-1.4 7.6-2.9 11.2-1.4 3.5-3.3 6.9-5.5 10.2s-4.8 6.1-7.7 9.4z"/>
          </svg>
          <h1 className="text-2xl font-bold text-yellow-500">
            Send a WhatsApp Message
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Enter your message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
            placeholder="Type your message here..."
          />
          {error && (
            <div className="text-sm text-red-400 font-medium">
              {error}
            </div>
          )}
          <motion.button
            type="submit"
            className="w-full px-4 py-2 text-white font-semibold rounded-md bg-green-600 hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send via WhatsApp
          </motion.button>
        </form>
      </section>
    </div>
  );
}
