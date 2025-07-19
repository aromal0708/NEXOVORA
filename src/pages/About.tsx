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
    <div className="min-h-screen pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text text-glow">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-highlight max-w-3xl mx-auto">
              From college dormitories to cutting-edge solutions, discover the
              journey that's shaping the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F0F23] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[#1A1A2E] mb-6">
                At Nexovora, we believe technology should solve real-world
                problems and create meaningful impact. Our mission is to develop
                innovative digital solutions that transform industries and
                improve lives across education, mobility, and infrastructure.
              </p>
              <p className="text-lg text-[#1A1A2E]">
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
              <div className="bg-white rounded-lg p-8 text-accent shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-[#0F0F23]">
                  Our Values
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-[#1A1A2E]">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Innovation through collaboration
                  </li>
                  <li className="flex items-center text-[#1A1A2E]">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Impact over profit
                  </li>
                  <li className="flex items-center text-[#1A1A2E]">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Sustainable technology solutions
                  </li>
                  <li className="flex items-center text-[#1A1A2E]">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Academic excellence in practice
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-primary text-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Journey
            </h2>
            <p className="text-xl text-highlight max-w-3xl mx-auto">
              From incubation to innovation, here's how we've grown and what
              lies ahead.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white text-[#0F0F23] p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="text-[#34699A] font-bold text-xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-[#1A1A2E]">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Story */}
      <section className="py-20 bg-white text-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0F0F23]">
              Incubated with{" "}
              <span className="gradient-text text-glow">Purpose</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-[#1A1A2E] mb-6">
                Nexovora was born in the heart of academic excellence, where
                innovation meets opportunity. Our college incubation program
                provided not just resources, but a community of forward-thinking
                mentors and peers who believed in our vision.
              </p>
              <p className="text-xl text-[#1A1A2E] mb-8">
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
                    <div className="text-4xl font-bold text-[#0F0F23] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[#1A1A2E]">{stat.label}</div>
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
