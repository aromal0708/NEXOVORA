import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    name: "PrintSpark",
    description: "Digital print management platform revolutionizing campus printing",
    icon: "🖨️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Mini ADAS",
    description: "Driver assistance prototype enhancing road safety",
    icon: "🚗",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "AI Traffic Controller",
    description: "Smart signal management optimizing traffic flow",
    icon: "🚦",
    color: "from-yellow-500 to-orange-500",
  },
];

const ProductsPreview: React.FC = () => {
  return (
    <section className="relative py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Our Innovation Portfolio</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our cutting-edge products that are transforming industries
            and improving lives across education, mobility, and infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-lg bg-neutral-900 flex items-center justify-center text-2xl mb-6 text-gray-400">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{product.name}</h3>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <Link
                to="/products"
                className="inline-flex items-center text-white hover:text-gray-400 font-semibold transition-colors duration-200"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
