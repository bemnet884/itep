'use client';

import React from 'react';

const teamMembers = [
  { name: 'AMERTI TSENA BENTI', department: 'CIVIL ENGINEERING', gender: 'F' },
  { name: 'BEMENET BEYENE HAMERETIBUB', department: 'SOFTWARE ENGINEERING', gender: 'F' },
  { name: 'EYOB TIGISTU TADESSE', department: 'CIVIL ENGINEERING', gender: 'M' },
  { name: 'FIKIR MOHAMMED DEMISSIE', department: 'ELECTRICAL AND COMPUTER ENGINEERING', gender: 'F' },
  { name: 'KALEB DEMISSIE GIZAW', department: 'SOFTWARE ENGINEERING', gender: 'M' },
  { name: 'MARIA ASFAW AYELE', department: 'ARCHITECTURE', gender: 'F' },
  { name: 'NETSANET AMANUEL MOGISO', department: 'ELECTRICAL AND COMPUTER ENGINEERING', gender: 'M' },
  { name: 'REDIET SELESHI TSEGA', department: 'ELECTRICAL AND COMPUTER ENGINEERING', gender: 'F' },
  { name: 'YIGERMAL ABEBE ABUYE', department: 'SOFTWARE ENGINEERING', gender: 'M' },
];

export default function TeamCarousel() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="relative overflow-hidden">
        <div className="flex gap-4 animate-loop">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] mx-4 bg-gray-800 rounded-lg p-6 shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold">{member.name}</h3>

              <p className="mt-1 text-gray-300">
                <span className="font-medium">Department:</span> {member.department}
              </p>

            </div>
          ))}
          {/* Duplicate the list for seamless looping */}
          {teamMembers.map((member, index) => (
            <div
              key={index + teamMembers.length}
              className="flex-shrink-0 w-[300px] mx-4 bg-gray-800 rounded-lg p-6 shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="mt-1 text-gray-300">
                <span className="font-medium">Department:</span> {member.department}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
