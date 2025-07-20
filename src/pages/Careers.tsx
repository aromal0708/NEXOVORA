import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Careers: React.FC = () => {
  const openRoles = [
    {
      title: "Frontend Developer Intern",
      department: "Engineering",
      type: "Internship",
      location: "On-site / Hybrid",
      description:
        "Join our frontend team to build amazing user interfaces using React, TypeScript, and modern web technologies.",
      requirements: [
        "Pursuing degree in Computer Science or related field",
        "Experience with React and JavaScript",
        "Understanding of responsive design principles",
        "Passion for creating great user experiences",
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "Git"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "On-site",
      description:
        "Shape the visual identity and user experience of our products. Work closely with our engineering team to create intuitive, beautiful interfaces.",
      requirements: [
        "Bachelor's degree in Design or related field",
        "2+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio showcasing mobile and web design",
      ],
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "On-site / Remote",
      description:
        "Build scalable backend systems and APIs that power our innovative products. Work with cutting-edge technologies in a fast-paced environment.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "3+ years of backend development experience",
        "Experience with Node.js, Python, or similar",
        "Knowledge of database design and optimization",
      ],
      skills: ["Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "AI/ML Engineer Intern",
      department: "Research & Development",
      type: "Internship",
      location: "On-site",
      description:
        "Work on our AI-powered products including traffic management and driver assistance systems. Contribute to cutting-edge research and development.",
      requirements: [
        "Pursuing Master's in Computer Science or AI/ML",
        "Strong background in machine learning",
        "Experience with TensorFlow or PyTorch",
        "Knowledge of computer vision is a plus",
      ],
      skills: ["Python", "TensorFlow", "Computer Vision", "Data Analysis"],
    },
    {
      title: "Product Manager",
      department: "Product",
      type: "Full-time",
      location: "On-site",
      description:
        "Lead product strategy and roadmap for our portfolio of innovative solutions. Work with cross-functional teams to bring ideas to life.",
      requirements: [
        "MBA or equivalent experience",
        "3+ years of product management experience",
        "Experience with B2B or B2C products",
        "Strong analytical and communication skills",
      ],
      skills: ["Product Strategy", "Analytics", "User Research", "Agile"],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "On-site / Remote",
      description:
        "Build and maintain our cloud infrastructure. Ensure our systems are reliable, scalable, and secure.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "2+ years of DevOps experience",
        "Experience with AWS, Docker, Kubernetes",
        "Knowledge of CI/CD pipelines",
      ],
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    },
  ];

  const benefits = [
    {
      title: "Flexible Work Environment",
      description: "Hybrid work options with modern office space",
      icon: "🏢",
    },
    {
      title: "Learning & Development",
      description: "Conference budgets, courses, and mentorship programs",
      icon: "📚",
    },
    {
      title: "Competitive Compensation",
      description: "Market-rate salaries plus equity participation",
      icon: "💰",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      icon: "🏥",
    },
    {
      title: "Innovation Time",
      description: "20% time for personal projects and exploration",
      icon: "💡",
    },
    {
      title: "Team Culture",
      description: "Regular team events, hackathons, and celebrations",
      icon: "🎉",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const navigate = useNavigate();
  // Modal state for resume upload
  const [showResumeModal, setShowResumeModal] = React.useState(false);
  const [resumeFile, setResumeFile] = React.useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = React.useState<string>("");

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf") {
        setResumeFile(file);
        setUploadMessage("");
      } else {
        setResumeFile(null);
        setUploadMessage("Please upload a PDF file only.");
      }
    }
  };

  const handleResumeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setUploadMessage("Please select a PDF file to upload.");
      return;
    }
    // Simulate upload
    setUploadMessage("Resume uploaded successfully! (Demo only)");
    setTimeout(() => {
      setShowResumeModal(false);
      setResumeFile(null);
      setUploadMessage("");
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16 bg-neutral-900 text-white">
      {/* Hero Section - Black background, white text */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-white">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's engineering impact and building the
              future. Discover opportunities to grow, innovate, and make a
              difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section - Black background, white text */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Nexovora?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're more than just a company—we're a community of innovators,
              dreamers, and problem-solvers united by a common purpose.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Impact-Driven Work",
                description:
                  "Every project you work on will have real-world impact, solving problems that matter.",
                icon: "🎯",
              },
              {
                title: "Innovation First",
                description:
                  "Work with cutting-edge technologies and be at the forefront of technological advancement.",
                icon: "🚀",
              },
              {
                title: "Growth Mindset",
                description:
                  "Continuous learning and development opportunities to accelerate your career.",
                icon: "📈",
              },
              {
                title: "Collaborative Culture",
                description:
                  "Work alongside brilliant minds in an environment that values collaboration and creativity.",
                icon: "🤝",
              },
              {
                title: "Academic Roots",
                description:
                  "Benefit from our strong academic connections and research-driven approach.",
                icon: "🎓",
              },
              {
                title: "Future-Ready",
                description:
                  "Be part of building tomorrow's solutions with today's most advanced technologies.",
                icon: "🔮",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-neutral-800 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions - White background, black text */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Open Positions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find your perfect role and join us in building the future of
              technology.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white text-black rounded-xl p-8 shadow-2xl hover:shadow-lg border-2 border-gray-200 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {role.department}
                      </span>
                      <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {role.type}
                      </span>
                      <span className="bg-gray-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                        {role.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{role.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-1">
                    {role.requirements.map((req, reqIndex) => (
                      <li
                        key={reqIndex}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <svg
                          className="w-4 h-4 text-gray-900 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900">
                    Key Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-200 text-gray-900 px-3 py-1 rounded font-semibold text-sm border-2 border-gray-300 shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold transition-all duration-200 border border-gray-900 hover:bg-gray-800">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Black background, white text */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive
              benefits and a supportive work environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border border-gray-700 bg-neutral-800 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - White background, black text */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Don't see a role that fits? We're always looking for talented
              individuals who are passionate about innovation and making a
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border border-gray-900 hover:bg-gray-800"
                onClick={() => setShowResumeModal(true)}
              >
                Send Your Resume
              </button>
              <button
                className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border border-gray-900 hover:bg-black"
                onClick={() => navigate("/about")}
              >
                Learn More About Us
              </button>
            </div>
          </motion.div>
        </div>
        {/* Resume Upload Modal */}
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
              <button
                className="absolute top-4 right-4 text-[#F39C12] hover:text-black text-2xl font-bold focus:outline-none"
                onClick={() => {
                  setShowResumeModal(false);
                  setResumeFile(null);
                  setUploadMessage("");
                }}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-[#0F0F23] mb-4 text-center">
                Upload Your Resume (PDF)
              </h3>
              <form onSubmit={handleResumeSubmit} className="space-y-6">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleResumeChange}
                  className="block w-full text-sm text-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-accent hover:file:bg-[#0F0F23]"
                />
                {resumeFile && (
                  <div className="text-green-600 text-sm">
                    Selected: {resumeFile.name}
                  </div>
                )}
                {uploadMessage && (
                  <div
                    className={`text-center text-sm ${
                      uploadMessage.includes("success")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {uploadMessage}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full btn-premium-dark text-accent py-3 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  Upload Resume
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Careers;
