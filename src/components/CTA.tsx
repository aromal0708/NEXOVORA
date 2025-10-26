import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8">
            Join us in our mission to create impactful digital solutions that
            matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:bg-gray-200"
            >
              Join Our Team
            </Link>
            <Link
              to="/products"
              className="bg-gray-800 text-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:bg-gray-200"
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
