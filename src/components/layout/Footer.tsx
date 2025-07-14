import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Products', path: '/products' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
    ],
    social: [
      { name: 'LinkedIn', url: 'https://linkedin.com/company/nexovora' },
      { name: 'Twitter', url: 'https://twitter.com/nexovora' },
      { name: 'GitHub', url: 'https://github.com/nexovora' },
      { name: 'Instagram', url: 'https://instagram.com/nexovora' },
    ],
  };

  return (
    <footer className="bg-primary text-accent border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <motion.img 
                src="/nexovora-logo.jpg" 
                alt="Nexovora Logo" 
                className="h-8 w-auto rounded mr-3 shadow-white-glow cursor-pointer"
                whileHover={{ 
                  scale: 1.2,
                  rotateY: 25,
                  rotateX: 10,
                  z: 30
                }}
                animate={{ 
                  rotateY: [0, 6, 0, -6, 0],
                  rotateX: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 12px 20px rgba(255, 255, 255, 0.12)) drop-shadow(0 4px 8px rgba(255, 255, 255, 0.08))"
                }}
              />
              <h3 className="text-2xl font-bold gradient-text text-glow">Nexovora</h3>
            </div>
            <p className="text-highlight mb-6 max-w-md">
              A next-gen tech company incubated in college, building impactful digital solutions 
              in education, mobility, and infrastructure. Engineering Impact. Building the Future.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 glass-white rounded-full flex items-center justify-center text-primary hover:glass-black hover:text-accent transition-all duration-300 shadow-white-glow"
                >
                  <span className="sr-only">{item.name}</span>
                  {/* You can replace these with actual social media icons */}
                  <div className="w-5 h-5 bg-current rounded"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-accent">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-highlight hover:text-accent transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-highlight hover:text-accent transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 my-8"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-highlight">
            © {currentYear} Nexovora. All rights reserved. Incubated with passion, built with purpose.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
