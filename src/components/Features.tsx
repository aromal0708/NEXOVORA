import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "College Incubated",
    description: "Born from academic excellence and innovative thinking",
    icon: "🎓",
  },
  {
    title: "Impact Driven",
    description: "Every solution we build aims to make a meaningful difference",
    icon: "💡",
  },
  {
    title: "Future Focused",
    description: "Pioneering technologies for tomorrow's challenges",
    icon: "🚀",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Who We Are</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Born from innovation and nurtured in academia, Nexovora represents
            the next generation of technology companies. We're not just building
            products—we're crafting solutions that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-neutral-800 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-gray-400">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
