'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Home, Sun } from 'lucide-react'; // Import necessary Lucide icons

export default function InsightsPage() {
  const insights = [
    {
      title: "The Future of Motion-Sensor Technology",
      description:
        "Discover how motion sensors are revolutionizing energy-saving practices in homes and businesses.",
      icon: <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-4" />, // Use Lucide icon
      link: "#",
    },
    {
      title: "The Role of Smart Homes in Sustainability",
      description:
        "Learn how smart homes are reducing energy consumption and promoting sustainable living.",
      icon: <Home className="w-16 h-16 text-green-500 mx-auto mb-4" />, // Use Lucide icon
      link: "#",
    },
    {
      title: "Solar Integration in Smart Lighting",
      description:
        "Explore the benefits of combining solar panels with automated lighting systems.",
      icon: <Sun className="w-16 h-16 text-yellow-700 mx-auto mb-4" />, // Use Lucide icon
      link: "#",
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
        Insights
      </motion.h1>

      {/* Intro Section */}
      <motion.p
        className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Explore trends, technologies, and innovations that are shaping the future of energy
        efficiency and sustainable living.
      </motion.p>

      {/* Insights Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-48 flex justify-center items-center bg-gray-100">
              {insight.icon}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-800">{insight.title}</h2>
              <p className="text-gray-600 mb-4">{insight.description}</p>
              <a
                href={insight.link}
                className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
