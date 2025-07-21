import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description:
        "Nexovora was born in the college incubator with a vision to impact the world through technology.",
    },
    {
      year: "2024",
      title: "First Products",
      description:
        "Launched PrintSpark and began development on Mini ADAS and AI Traffic Controller.",
    },
    {
      year: "2025",
      title: "Scaling Up",
      description:
        "Expanding our team and preparing for market penetration with our innovative solutions.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-neutral-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-white">Story</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              From college dormitories to cutting-edge solutions, discover the
              journey that's shaping the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At Nexovora, we believe technology should solve real-world
                problems and create meaningful impact. Our mission is to develop
                innovative digital solutions that transform industries and
                improve lives across education, mobility, and infrastructure.
              </p>
              <p className="text-lg text-gray-400">
                Born from the collaborative spirit of academia, we combine fresh
                perspectives with cutting-edge technology to build products that
                matter.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-neutral-800 rounded-lg p-8 text-gray-200 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Our Values
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>{" "}
                    Innovation through collaboration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>{" "}
                    Impact over profit
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>{" "}
                    Sustainable technology solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>{" "}
                    Academic excellence in practice
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              From incubation to innovation, here's how we've grown and what
              lies ahead.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  } text-center md:text-left`}
                >
                  <div className="bg-neutral-800 text-white p-6 rounded-lg shadow-lg border border-gray-700">
                    <div className="text-gray-400 font-bold text-xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline dot - centered on mobile, positioned for desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full border-4 border-black hidden md:block"></div>
                <div className="w-4 h-4 bg-gray-500 rounded-full border-4 border-black md:hidden mb-4"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Story */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white">
              Incubated with{" "}
              <span className="text-white">Purpose</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-300 mb-6">
                Nexovora was born in the heart of academic excellence, where
                innovation meets opportunity. Our college incubation program
                provided not just resources, but a community of forward-thinking
                mentors and peers who believed in our vision.
              </p>
              <p className="text-lg sm:text-xl text-gray-400 mb-8">
                This unique environment allowed us to take calculated risks,
                experiment with cutting-edge technologies, and most importantly,
                focus on creating solutions that address real-world challenges
                rather than just chasing market trends.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { number: "8", label: "Team Members", icon: "👥" },
                  { number: "3", label: "Products Launched", icon: "🚀" },
                  { number: "2", label: "Years of Innovation", icon: "⏰" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
