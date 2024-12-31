// app/components/HeroSection.js
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ReusableHeroSection({ title, subtitle, url }: {
  title: string,
  subtitle: string,
  url: string;
}) {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-900 text-white py-16 px-6">
      {/* Left: Hero Image */}
      <motion.div
        className="w-full md:w-1/2 mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={url}
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Hero Text */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-right md:pl-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-300 leading-relaxed">{subtitle}</p>
      </motion.div>
    </section>
  );
}
