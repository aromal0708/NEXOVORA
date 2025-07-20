import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Products", path: "/products" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 bg-black backdrop-blur-md shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center">
            <motion.img
              src="NEXOVORAwhitelogo.png"
              alt="Nexovora Logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-semibold text-lg transition-colors duration-200 cursor-pointer px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primary/80 ${
                  location.pathname === item.path
                    ? "text-white bg-black shadow-white-glow"
                    : "text-white hover:text-gray-400 hover:bg-gray-200 hover:shadow-lg"
                }`}
                aria-current={
                  location.pathname === item.path ? "page" : undefined
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-accent hover:text-highlight focus:outline-none focus:text-highlight transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-black rounded-lg mt-2 border border-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primary/80 ${
                    location.pathname === item.path
                      ? "text-primary bg-white shadow-white-glow"
                      : "text-white hover:text-primary hover:bg-white/80 hover:shadow-lg"
                  }`}
                  aria-current={
                    location.pathname === item.path ? "page" : undefined
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
