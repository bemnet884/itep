'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="container mx-auto px-6 pt-24 pb-16 text-gray-800">
      {/* Page Header */}
      <motion.h1
        className="text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Smart Light System
      </motion.h1>

      {/* Intro Section */}
      <motion.p
        className="text-lg leading-relaxed text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        The <span className="text-yellow-500 font-semibold">Smart Light System</span> is an innovative
        project designed to address energy inefficiency in residential homes by using
        motion-sensor-based lighting automation. By integrating Arduino technology and solar power,
        the system automates lighting control, reducing unnecessary energy usage.
      </motion.p>

      {/* Vision and Mission */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To contribute to a sustainable future by promoting energy-efficient smart home technologies
            that align with global environmental goals.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To design and implement a cost-effective lighting automation system that enhances energy
            efficiency, lowers electricity costs, and integrates seamlessly into modern homes.
          </p>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-yellow-500 text-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Energy Efficiency</h3>
            <p>
              Save up to <span className="font-semibold">40%</span> on electricity bills with our
              smart, automated lighting solutions.
            </p>
          </div>
          <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
            <p>
              Reduce your carbon footprint with eco-friendly, solar-integrated lighting systems.
            </p>
          </div>
          <div className="bg-yellow-500 text-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p>
              Powered by the latest Arduino and motion-sensor technology for smarter living.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Key Features */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-all">
            <h3 className="text-xl font-bold mb-4">Motion-Sensor Automation</h3>
            <p>Automatic light control with motion detection for optimal energy use.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-all">
            <h3 className="text-xl font-bold mb-4">Solar Panel Integration</h3>
            <p>Energy-saving technology with renewable power sources.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-all">
            <h3 className="text-xl font-bold mb-4">Customizable Settings</h3>
            <p>Adjustable settings to suit different lighting needs and preferences.</p>
          </div>
        </div>
      </motion.div>

      {/* Core Values */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1 }}
      >
        <h2 className="text-4xl font-bold mb-8">Our Core Values</h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          At <span className="text-yellow-500 font-semibold">Smart Light System</span>, we are guided
          by innovation, sustainability, and excellence. We strive to deliver energy-efficient
          solutions that enhance the quality of life while preserving the planet.
        </p>
      </motion.div>
    </section>
  );
}
