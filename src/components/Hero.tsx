import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollIndicator from "./ScrollIndicator.tsx";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0F044C]/40 to-black">
        <div className="space-bg opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
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
            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-xl tracking-tight overflow-hidden rounded-full bg-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:bg-gray-50"
          >
            <span className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow duration-300"></span>
            
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(110deg, transparent, rgba(255,255,255,0.8), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite'
                  }}>
            </span>
            

            <span className="relative flex items-center gap-2 text-black font-bold">
              <span className="tracking-wider">What We Build</span>
              <svg 
                className="w-5 h-5 transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </span>
            
            <span className="absolute inset-[-3px] rounded-full opacity-0 focus-within:opacity-100 transition-opacity duration-300 border-2 border-white"></span>
          </Link>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
