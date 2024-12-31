'use client';

import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'AMERTI TSENA BENTI', department: 'CIVIL ENGINEERING', gender: 'F' },
  { name: 'BEMENET BEYENE HAMERETIBUB', department: 'SOFTWARE ENGINEERING', gender: 'F' },
  { name: 'EYOB TIGISTU TADESSE', department: 'CIVIL ENGINEERING', gender: 'M' },
  { name: 'FIKIR MOHAMMED DEMISSIE', department: 'ELECTRICAL AND COMPUTER ENGINEERING', gender: 'F' },
  { name: 'KALEB DEMISSIE GIZAW', department: 'SOFTWARE ENGINEERING', gender: 'M' },
  { name: 'MARIA ASFAW AYELE', department: 'ARCHITECTURE', gender: 'F' },
  { name: 'REDIET SELESHI TSEGA', department: 'ELECTRICAL AND COMPUTER ENGINEERING', gender: 'F' },
  { name: 'YIGERMAL ABEBE ABUYE', department: 'SOFTWARE ENGINEERING', gender: 'M' },
  { name: 'YOSEPH MELESE KEBEDE', department: 'ELECTRO-MECHANICAL ENGINEERING', gender: 'M' },
];

export default function TeamCarousel() {
  return (
    <motion.section
      className="py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Meet Our Team
      </motion.h2>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-4 animate-loop"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[300px] mx-4 bg-gray-800 rounded-lg p-6 shadow-lg text-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3
                className="text-xl font-semibold"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {member.name}
              </motion.h3>

              <p className="mt-1 text-gray-300">
                <span className="font-medium">Department:</span> {member.department}
              </p>
            </motion.div>
          ))}

          {/* Duplicate the list for seamless looping */}
          {teamMembers.map((member, index) => (
            <motion.div
              key={index + teamMembers.length}
              className="flex-shrink-0 w-[300px] mx-4 bg-gray-800 rounded-lg p-6 shadow-lg text-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3
                className="text-xl font-semibold"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {member.name}
              </motion.h3>
              <p className="mt-1 text-gray-300">
                <span className="font-medium">Department:</span> {member.department}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
