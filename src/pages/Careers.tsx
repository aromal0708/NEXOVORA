import React from 'react';
import { motion } from 'framer-motion';

const Careers: React.FC = () => {
  const openRoles = [
    {
      title: 'Frontend Developer Intern',
      department: 'Engineering',
      type: 'Internship',
      location: 'On-site / Hybrid',
      description: 'Join our frontend team to build amazing user interfaces using React, TypeScript, and modern web technologies.',
      requirements: [
        'Pursuing degree in Computer Science or related field',
        'Experience with React and JavaScript',
        'Understanding of responsive design principles',
        'Passion for creating great user experiences'
      ],
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'On-site',
      description: 'Shape the visual identity and user experience of our products. Work closely with our engineering team to create intuitive, beautiful interfaces.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '2+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio showcasing mobile and web design'
      ],
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
    },
    {
      title: 'Backend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'On-site / Remote',
      description: 'Build scalable backend systems and APIs that power our innovative products. Work with cutting-edge technologies in a fast-paced environment.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years of backend development experience',
        'Experience with Node.js, Python, or similar',
        'Knowledge of database design and optimization'
      ],
      skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      title: 'AI/ML Engineer Intern',
      department: 'Research & Development',
      type: 'Internship',
      location: 'On-site',
      description: 'Work on our AI-powered products including traffic management and driver assistance systems. Contribute to cutting-edge research and development.',
      requirements: [
        'Pursuing Master\'s in Computer Science or AI/ML',
        'Strong background in machine learning',
        'Experience with TensorFlow or PyTorch',
        'Knowledge of computer vision is a plus'
      ],
      skills: ['Python', 'TensorFlow', 'Computer Vision', 'Data Analysis'],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      type: 'Full-time',
      location: 'On-site',
      description: 'Lead product strategy and roadmap for our portfolio of innovative solutions. Work with cross-functional teams to bring ideas to life.',
      requirements: [
        'MBA or equivalent experience',
        '3+ years of product management experience',
        'Experience with B2B or B2C products',
        'Strong analytical and communication skills'
      ],
      skills: ['Product Strategy', 'Analytics', 'User Research', 'Agile'],
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'On-site / Remote',
      description: 'Build and maintain our cloud infrastructure. Ensure our systems are reliable, scalable, and secure.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '2+ years of DevOps experience',
        'Experience with AWS, Docker, Kubernetes',
        'Knowledge of CI/CD pipelines'
      ],
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    },
  ];

  const benefits = [
    {
      title: 'Flexible Work Environment',
      description: 'Hybrid work options with modern office space',
      icon: '🏢',
    },
    {
      title: 'Learning & Development',
      description: 'Conference budgets, courses, and mentorship programs',
      icon: '📚',
    },
    {
      title: 'Competitive Compensation',
      description: 'Market-rate salaries plus equity participation',
      icon: '💰',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon: '🏥',
    },
    {
      title: 'Innovation Time',
      description: '20% time for personal projects and exploration',
      icon: '💡',
    },
    {
      title: 'Team Culture',
      description: 'Regular team events, hackathons, and celebrations',
      icon: '🎉',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-16 bg-primary">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="gradient-text text-glow">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-highlight max-w-3xl mx-auto">
              Be part of a team that's engineering impact and building the future. 
              Discover opportunities to grow, innovate, and make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose Nexovora?
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              We're more than just a company—we're a community of innovators, dreamers, 
              and problem-solvers united by a common purpose.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Impact-Driven Work',
                description: 'Every project you work on will have real-world impact, solving problems that matter.',
                icon: '🎯',
              },
              {
                title: 'Innovation First',
                description: 'Work with cutting-edge technologies and be at the forefront of technological advancement.',
                icon: '🚀',
              },
              {
                title: 'Growth Mindset',
                description: 'Continuous learning and development opportunities to accelerate your career.',
                icon: '📈',
              },
              {
                title: 'Collaborative Culture',
                description: 'Work alongside brilliant minds in an environment that values collaboration and creativity.',
                icon: '🤝',
              },
              {
                title: 'Academic Roots',
                description: 'Benefit from our strong academic connections and research-driven approach.',
                icon: '🎓',
              },
              {
                title: 'Future-Ready',
                description: 'Be part of building tomorrow\'s solutions with today\'s most advanced technologies.',
                icon: '🔮',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-white rounded-lg hover:shadow-white-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-primary text-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-highlight max-w-3xl mx-auto">
              Find your perfect role and join us in building the future of technology.
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
                className="glass-white text-primary rounded-xl p-8 shadow-white-glow hover:shadow-premium transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-primary text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {role.department}
                      </span>
                      <span className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {role.type}
                      </span>
                      <span className="bg-secondary text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {role.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-secondary mb-6">{role.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-1">
                    {role.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-sm text-secondary">
                        <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="glass-black text-accent px-2 py-1 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full btn-premium-dark text-accent py-3 rounded-lg font-semibold transition-all duration-200">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits 
              and a supportive work environment.
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
                className="text-center p-6 border border-tertiary glass-white rounded-lg hover:shadow-white-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-secondary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-highlight mb-8">
              Don't see a role that fits? We're always looking for talented individuals 
              who are passionate about innovation and making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Send Your Resume
              </button>
              <button className="border-2 border-accent text-accent hover:glass-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Learn More About Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
