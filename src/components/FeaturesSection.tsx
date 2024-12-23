import { FaLeaf, FaBolt, FaCogs } from 'react-icons/fa';
import MaxWidthWrapper from './MaxWidthWrapper';

export default function FeaturesSection() {
  const features = [
    {
      title: "Energy Efficient",
      description: "Save up to 40% of your energy consumption with our smart lighting system, designed for optimal performance.",
      icon: <FaBolt className="text-yellow-400 text-4xl" />,
    },
    {
      title: "Automated",
      description: "Experience hands-free convenience with motion-sensor-based automation that activates only when needed.",
      icon: <FaCogs className="text-blue-400 text-4xl" />,
    },
    {
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint with eco-conscious technology that aligns with global sustainability goals.",
      icon: <FaLeaf className="text-green-400 text-4xl" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-200 via-gray-100 to-white text-center">
      <MaxWidthWrapper>
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Key Features</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
        Our system is designed to deliver unparalleled energy efficiency, automation, and sustainability.
        Here’s what makes it stand out:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-3">{feature.description}</p>
          </div>
        ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
