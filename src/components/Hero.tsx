import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollIndicator from "./ScrollIndicator.tsx";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-center text-white mb-4 tracking-widest">
            NEXOVORA
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="text-white">Engineering Impact.</span>
          <br />
          <span className="text-gray-400">Building the Future.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
        ></motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/products"
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:bg-gray-200"
          >
            Explore Our Products
          </Link>
          <Link
            to="/about"
            className="bg-gray-800 text-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:bg-gray-200"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
