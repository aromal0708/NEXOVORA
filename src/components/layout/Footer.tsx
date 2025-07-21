import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Team", path: "/team" },
      { name: "Products", path: "/products" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Cookie Policy", path: "#" },
    ],
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2 flex flex-col items-start"
          >
            <div className="flex items-center mb-4">
              <motion.img
                src="NEXOVORAwhitelogo.png"
                alt="Nexovora Logo"
                className="h-11 w-auto rounded mr-4 cursor-pointer"
                whileHover={{
                  scale: 1.12,
                  rotateY: 18,
                  rotateX: 6,
                  z: 20,
                }}
                animate={{
                  rotateY: [0, 6, 0, -6, 0],
                  rotateX: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              />
              <h3 className="text-2xl font-extrabold text-white">Nexovora</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-xl text-base">
              A next-gen tech company incubated in college, building impactful
              digital solutions in education, mobility, and infrastructure.
              Engineering Impact. Building the Future.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/company/nexovora"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.13 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              {/* Email */}
              <motion.a
                href="mailto:info@nexovora.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.13 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              {/* Facebook */}
              <motion.a
                href="https://facebook.com/nexovora"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.13 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              {/* Instagram */}
              <motion.a
                href="https://instagram.com/nexovora"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.13 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              {/* Twitter */}
              <motion.a
                href="https://twitter.com/nexovora"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.13 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              {/* GitHub */}
              <motion.a
                href="https://github.com/nexovora"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.13 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
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
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 my-6"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Nexovora. All rights reserved. Incubated with
            passion, built with purpose.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
