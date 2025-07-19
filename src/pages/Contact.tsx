import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "hello@nexovora.com",
      icon: "📧",
      link: "mailto:hello@nexovora.com",
    },
    {
      title: "Phone",
      value: "+91 7510782581",
      icon: "📞",
      link: "tel:+15551234567",
    },
    {
      title: "Location",
      value: "Kottayam ,Kerala, India",
      icon: "📍",
      link: "#",
    },
    {
      title: "Business Hours",
      value: "Mon-Fri: 9:00 AM - 6:00 PM",
      icon: "🕐",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/nexovora",
      icon: "💼",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nexovora",
      icon: "🐦",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      url: "https://github.com/nexovora",
      icon: "💻",
      color: "hover:text-gray-800",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/nexovora",
      icon: "📷",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-white text-[#0F0F23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text text-glow">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#0F0F23] max-w-3xl mx-auto">
              Have questions about our products? Want to explore partnership
              opportunities? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-primary text-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-10"
            >
              <h2 className="text-3xl font-bold text-accent mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-tertiary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white text-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-tertiary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white text-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-tertiary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white text-primary"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-tertiary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white text-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="career">Career Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="media">Media/Press</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-tertiary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical bg-white text-primary"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-premium-dark text-accent py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  Send Message
                </motion.button>
              </form>

              <p className="text-sm text-secondary mt-4">
                * Required fields. We'll get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-10 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-accent mb-6">
                  Contact Information
                </h2>
                <p className="text-accent/80 mb-8">
                  We're here to help and answer any questions you might have.
                  Reach out through any of the following channels.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center p-4 glass-white rounded-lg hover:shadow-white-glow transition-all duration-200"
                    >
                      <div className="text-2xl mr-4">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-accent">
                          {info.title}
                        </h3>
                        {info.link !== "#" ? (
                          <a
                            href={info.link}
                            className="text-accent/90 hover:text-accent font-medium transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-accent/90 font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-accent mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl text-primary hover:bg-white hover:text-accent border-2 border-accent transition-all duration-200"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-white p-6 rounded-lg text-accent">
                <h3 className="text-xl font-bold mb-3">Office Hours</h3>
                <div className="space-y-2 text-primary">
                  <p>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>Saturday:</strong> 10:00 AM - 2:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location/Map Section */}
      <section className="py-20 bg-white text-[#0F0F23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visit Our{" "}
              <span className="gradient-text text-glow">Incubator</span>
            </h2>
            <p className="text-xl text-[#0F0F23] max-w-3xl mx-auto">
              Located in the heart of innovation at our university's tech
              incubator, where ideas come to life and the future is built.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#0F0F23]">
                Our Location
              </h3>
              <div className="space-y-4 text-[#0F0F23]">
                <p>
                  <strong className="text-primary">Address:</strong>
                  <br />
                  Tech Innovation Center
                  <br />
                  University Campus, Building A<br />
                  123 Innovation Drive
                  <br />
                  Tech City, TC 12345
                </p>
                <p>
                  <strong className="text-primary">Getting Here:</strong>
                  <br />
                  • Public transportation: Metro Line 2, Tech Station
                  <br />
                  • Parking available on campus
                  <br />
                  • Visitor parking in lots B and C<br />• Bike racks available
                  at building entrance
                </p>
                <p>
                  <strong className="text-primary">Accessibility:</strong>
                  <br />
                  Our facility is fully accessible with elevator access to all
                  floors, accessible parking, and barrier-free entrances.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Placeholder for map - replace with actual map integration */}
              <div className="aspect-video glass-black rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-lg text-primary">Interactive Map</p>
                  <p className="text-sm text-[#0F0F23] mt-2">
                    Click to view on Google Maps
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary text-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-accent/90">
              Quick answers to common questions about Nexovora and our services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What types of partnerships does Nexovora explore?",
                answer:
                  "We're interested in strategic partnerships with educational institutions, technology companies, government agencies, and organizations that share our vision for impactful innovation.",
              },
              {
                question: "How can I schedule a demo of your products?",
                answer:
                  "You can request a demo by filling out our contact form above, selecting 'Product Information' as the subject, and mentioning which product you're interested in seeing.",
              },
              {
                question: "Do you offer internship programs?",
                answer:
                  "Yes! We regularly offer internships across engineering, design, product management, and research roles. Check our Careers page for current openings.",
              },
              {
                question: "Can I visit your office?",
                answer:
                  "Absolutely! We welcome visitors to our incubator space. Please reach out in advance to schedule a visit and we'll be happy to show you around.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-white rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-accent/90 font-medium">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
