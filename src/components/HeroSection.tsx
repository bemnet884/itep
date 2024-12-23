'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import emailjs from 'emailjs-com';
import MaxWidthWrapper from './MaxWidthWrapper';

interface FormData {
  name: string;
  email: string;
  location: string;
  message: string;
}

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    location: '',
    message: '',
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convert formData to a plain object
    const emailJsData: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      location: formData.location,
      message: formData.message,
    };

    emailjs
      .send(
        'service_woj3sk9', // Replace with your EmailJS service ID
        'template_4rfivlc', // Replace with your EmailJS template ID
        emailJsData, // Pass the converted object
        '5njePOeA6jKl3xD86' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
          alert('Your order has been submitted successfully!');
          setIsModalOpen(false);
          setFormData({ name: '', email: '', location: '', message: '' });
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('There was an error submitting your order. Please try again.');
        }
      );
  };


  return (
    <>
      <section className="h-screen relative flex items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6 px-4 md:px-8 bg-black/50 h-full text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              Revolutionize Your Lighting <br />
              <span className="text-yellow-400">Effortlessly</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Save energy and transform your space with our motion-sensor-based lighting automation.
              Smart, efficient, and eco-friendly.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={toggleModal}
                className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg shadow-lg transition duration-200"
              >
                Get Started Now
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden relative md:flex justify-center items-center">
            <iframe
              src="https://my.spline.design/lightningbulb-eb51a014009101aed3f430bac39b17b4/"
              className="w-full h-full md:h-[100%] rounded-none md:rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <MaxWidthWrapper>
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-yellow-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-yellow-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-gray-700 font-medium">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-yellow-400"
                  placeholder="Your Location"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-yellow-400"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
          </div>
        </MaxWidthWrapper>
      )}
    </>
  );
}
