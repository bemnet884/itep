'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Bolt, Leaf, Settings, Globe, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "Smart Automation",
      description: "Advanced motion-sensor lighting systems for modern homes and offices.",
      icon: <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-4" />,
    },
    {
      title: "Energy Efficiency",
      description: "Solutions that reduce energy consumption by up to 40%.",
      icon: <Bolt className="w-16 h-16 text-green-500 mx-auto mb-4" />,
    },
    {
      title: "Eco-Friendly Design",
      description: "Sustainable technologies that align with global environmental goals.",
      icon: <Leaf className="w-16 h-16 text-green-700 mx-auto mb-4" />,
    },
    {
      title: "Custom Solutions",
      description: "Tailored systems for residential, commercial, and industrial spaces.",
      icon: <Settings className="w-16 h-16 text-blue-500 mx-auto mb-4" />,
    },
    {
      title: "Global Impact",
      description: "Innovative technologies designed to make a difference worldwide.",
      icon: <Globe className="w-16 h-16 text-purple-500 mx-auto mb-4" />,
    },
    {
      title: "Safety & Security",
      description: "Reliable and secure systems to ensure peace of mind.",
      icon: <ShieldCheck className="w-16 h-16 text-red-500 mx-auto mb-4" />,
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "The smart automation solutions have revolutionized how we manage lighting in our office. Highly recommended!",
    },
    {
      name: "Jane Smith",
      feedback: "Thanks to their energy-efficient designs, our energy bills have significantly reduced while staying environmentally friendly.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24 text-gray-800">
      {/* Page Header */}
      <motion.h1
        className="text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What We Do
      </motion.h1>

      {/* Intro Section */}
      <motion.p
        className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our mission is to create smarter, safer, and more sustainable living and working spaces.
        We offer a wide range of services tailored to meet the unique needs of our clients, from
        cutting-edge automation to eco-friendly designs.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {service.icon}
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>


    </section>
  );
}
