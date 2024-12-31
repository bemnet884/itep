// app/pricing/page.js
export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "6,400 Br.",
      features: [
        "Motion-sensor lighting",
        "Energy-saving automation",
        "Easy installation",
      ],
    },
    {
      name: "Premium",
      price: "10,300 Br.",
      features: [
        "Includes solar panel integration",
        "Scalable to larger homes",
        "Enhanced motion detection accuracy",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Tailored for large facilities",
        "Multiple motion sensors",
        "Real-time energy monitoring",
      ],
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24 text-gray-800">
      <h1 className="text-5xl font-bold mb-12 text-center text-yellow-500">
        Pricing Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-gray-900 text-white rounded-lg shadow-md p-8 text-center hover:shadow-2xl transition-all"
          >
            <h2 className="text-3xl font-bold">{plan.name}</h2>
            <p className="text-4xl font-extrabold text-yellow-400 mt-4">
              {plan.price}
            </p>
            <ul className="mt-8 space-y-4 text-lg">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-2"
                >
                  <span className="text-yellow-400">&#x2713;</span> {feature}
                </li>
              ))}
            </ul>
            <button className="mt-8 px-6 py-3 bg-yellow-500 text-gray-900 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-colors">
              Get Started
            </button>
            {plan.name === "Enterprise" && (
              <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Custom
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
