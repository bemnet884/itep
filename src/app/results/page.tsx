'use client';

import { motion } from 'framer-motion';

export default function ResultsPage() {
  const results = [
    {
      stat: "40%",
      description: "Reduction in energy consumption in test scenarios.",
    },
    {
      stat: "98%",
      description: "Customer satisfaction with automation systems.",
    },
    {
      stat: "30+",
      description: "Prototypes tested in various environments.",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Project Initiation",
      details: "Conceptualized and began development of the Smart Light System.",
    },
    {
      year: "2023",
      title: "Pilot Testing",
      details: "Conducted prototype testing in residential and industrial settings.",
    },
    {
      year: "2024",
      title: "Full Deployment",
      details: "Deployed the system to 30+ homes and received outstanding feedback.",
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
        Our Results
      </motion.h1>

      {/* Key Results */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-yellow-500 text-black rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-all"
          >
            <h2 className="text-5xl font-bold">{result.stat}</h2>
            <p className="text-lg mt-4">{result.description}</p>
          </div>
        ))}
      </motion.div>

      {/* Milestones */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Project Milestones</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center gap-6 bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all"
            >
              <div className="text-4xl font-bold text-yellow-500">{milestone.year}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                <p className="text-gray-600 mt-2">{milestone.details}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Charts Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Energy Savings</h3>
            <img
              src="/images/energy-chart.jpg"
              alt="Energy Savings Chart"
              className="w-full h-48 object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Satisfaction</h3>
            <img
              src="/images/satisfaction-chart.jpg"
              alt="Customer Satisfaction Chart"
              className="w-full h-48 object-contain"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
