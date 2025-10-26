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
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-bold text-center text-white mb-4 tracking-widest">
            NEXOVORA
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gap-6"
        >
          <div className="flex flex-col gap-6">
            <span className="font-semibold text-3xl sm:text-xl md:text-2xl lg:text-4xl text-white">
              Intellegent Systems & Digital Solutions
            </span>
            <span className="font-normal text-xl sm:text-base md:text-lg lg:text-xl text-gray-400">
              We design and deploy robust full-stack applications and AI-driven
              products that solve your most complex challenges.
            </span>
          </div>
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
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:bg-gray-200"
          >
            What We Build
          </Link>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
