import React from 'react';
import { motion } from 'framer-motion';

const Products: React.FC = () => {
  const products = [
    {
      name: 'PrintSpark',
      tagline: 'Revolutionizing Campus Printing',
      description: 'A comprehensive digital print management platform that transforms how educational institutions handle printing services. From queue management to cost optimization, PrintSpark makes printing smart, efficient, and user-friendly.',
      features: [
        'Smart queue management system',
        'Real-time printer status monitoring',
        'Cost tracking and budget controls',
        'Mobile app for seamless printing',
        'Analytics dashboard for administrators',
        'Eco-friendly printing suggestions'
      ],
      icon: '🖨️',
      color: 'from-blue-500 to-cyan-500',
      category: 'Education Technology',
      status: 'Live',
    },
    {
      name: 'Mini ADAS',
      tagline: 'Advanced Driver Assistance System',
      description: 'A prototype driver assistance system that enhances road safety through real-time monitoring and intelligent alerts. Mini ADAS represents our commitment to making transportation safer and smarter.',
      features: [
        'Lane departure warning system',
        'Forward collision detection',
        'Blind spot monitoring',
        'Driver drowsiness detection',
        'Real-time traffic analysis',
        'Emergency response integration'
      ],
      icon: '🚗',
      color: 'from-green-500 to-emerald-500',
      category: 'Mobility Solutions',
      status: 'Prototype',
    },
    {
      name: 'AI Traffic Controller',
      tagline: 'Intelligent Signal Management',
      description: 'An AI-powered traffic management system that optimizes signal timing and traffic flow in real-time. This smart solution reduces congestion, improves safety, and creates more efficient urban mobility.',
      features: [
        'Real-time traffic flow optimization',
        'Adaptive signal timing',
        'Emergency vehicle priority',
        'Pedestrian safety enhancement',
        'Data-driven insights dashboard',
        'Integration with city infrastructure'
      ],
      icon: '🚦',
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure',
      status: 'Development',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
              Our <span className="gradient-text text-glow">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-highlight max-w-3xl mx-auto">
              Innovative solutions designed to transform industries and improve lives. 
              Each product represents our commitment to engineering impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
                }`}
              >
                {/* Product Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      product.status === 'Live' ? 'bg-primary text-accent' :
                      product.status === 'Prototype' ? 'bg-tertiary text-primary' :
                      'bg-secondary text-accent'
                    }`}>
                      {product.status}
                    </span>
                    <span className="ml-3 text-sm text-secondary">{product.category}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    {product.name}
                  </h2>
                  
                  <p className="text-xl text-primary font-semibold mb-6">
                    {product.tagline}
                  </p>
                  
                  <p className="text-lg text-secondary mb-8">
                    {product.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-primary mb-4">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-secondary">
                          <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-premium-dark text-accent px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                      Learn More
                    </button>
                    <button className="border-2 border-primary text-primary hover:glass-black hover:text-accent px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                      Request Demo
                    </button>
                  </div>
                </div>

                {/* Product Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="w-full h-80 rounded-2xl bg-primary flex items-center justify-center shadow-white-glow text-accent">
                      <div className="text-8xl opacity-80">
                        {product.icon}
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 glass-white rounded-full flex items-center justify-center shadow-white-glow">
                      <div className="text-2xl text-primary">{product.icon}</div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
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
              Built with <span className="gradient-text text-glow">Cutting-Edge Technology</span>
            </h2>
            <p className="text-xl text-highlight max-w-3xl mx-auto">
              Our products leverage the latest technologies to deliver exceptional performance, 
              scalability, and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Python', icon: '🐍' },
              { name: 'AI/ML', icon: '🤖' },
              { name: 'Cloud', icon: '☁️' },
              { name: 'Mobile', icon: '📱' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="text-center p-6 glass-black rounded-lg hover:glass-white hover:text-primary transition-all duration-200"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="text-sm font-medium">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Interested in Our Solutions?
            </h2>
            <p className="text-xl text-secondary mb-8">
              Get in touch to learn more about how our products can benefit your organization 
              or to discuss potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium-dark text-accent px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Schedule a Demo
              </button>
              <button className="border-2 border-primary text-primary hover:glass-black hover:text-accent px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
