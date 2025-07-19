import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const products = [
    {
      name: "PrintSpark",
      description:
        "Digital print management platform revolutionizing campus printing",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl float-animation"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl float-animation"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl float-animation"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Blurred blue gradients on sides */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-blue-400 to-blue-700 opacity-40 blur-3xl rounded-full -z-10" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-bl from-blue-400 to-blue-700 opacity-40 blur-3xl rounded-full -z-10" />
        {/* Main Title */}
        <div className="relative z-10 text-center text-primary px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-8xl font-extrabold text-center text-white mb-4 tracking-widest">
              NEXOVORA
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text ">Engineering Impact.</span>
            <br />
            <span className="text-accent">Building the Future.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-highlight max-w-3xl mx-auto"
          ></motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="btn-premium text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Products
            </Link>
            <Link
              to="/about"
              className="btn-premium-dark text-accent hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-accent rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Born from innovation and nurtured in academia, Nexovora represents
              the next generation of technology companies. We're not just
              building products—we're crafting solutions that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "College Incubated",
                description:
                  "Born from academic excellence and innovative thinking",
                icon: "🎓",
              },
              {
                title: "Impact Driven",
                description:
                  "Every solution we build aims to make a meaningful difference",
                icon: "💡",
              },
              {
                title: "Future Focused",
                description:
                  "Pioneering technologies for tomorrow's challenges",
                icon: "🚀",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-primary/90 rounded-xl hover:shadow-white-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-highlight">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Innovation Portfolio
            </h2>
            <p className="text-xl text-highlight max-w-3xl mx-auto">
              Discover our cutting-edge products that are transforming
              industries and improving lives across education, mobility, and
              infrastructure.
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
                className="bg-white rounded-xl p-8 shadow-premium hover:shadow-white-glow transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center text-2xl mb-6 text-accent shimmer">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {product.name}
                </h3>
                <p className="text-secondary mb-6">{product.description}</p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-primary hover:text-tertiary font-semibold transition-colors duration-200"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-secondary mb-8">
              Join us in our mission to create impactful digital solutions that
              matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="btn-premium text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Join Our Team
              </Link>
              <Link
                to="/contact"
                className="glass-white border-2 border-white/30 text-primary hover:glass-black hover:text-accent px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
