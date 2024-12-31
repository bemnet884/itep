'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Smile, Box } from 'lucide-react';

export default function ResultsSection() {
  const results = [
    {
      stat: "40%",
      description: "Reduction in energy consumption in test scenarios.",
      icon: <Lightbulb className="w-12 h-12 text-yellow-300 mx-auto" />,
    },
    {
      stat: "98%",
      description: "Customer satisfaction with automation systems.",
      icon: <Smile className="w-12 h-12 text-yellow-300 mx-auto" />,
    },
    {
      stat: "30+",
      description: "Prototypes tested in various environments.",
      icon: <Box className="w-12 h-12 text-yellow-300 mx-auto" />,
    },
  ];



  return (
    <section className="container mx-auto px-6 py-24 text-gray-800">
      {/* Page Header */}
      <motion.h1
        className="text-5xl font-bold mb-12 text-center text-yellow-500"
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
            className="bg-gray-900 text-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-all"
          >
            {result.icon}
            <h2 className="text-5xl font-bold mt-4">{result.stat}</h2>
            <p className="text-lg mt-4">{result.description}</p>
          </div>
        ))}
      </motion.div>


    </section>
  );
}
