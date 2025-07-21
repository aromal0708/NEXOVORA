import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";

const team = [
  {
    name: "Binosh T Mathew",
    role: "CEO & Founder",
    img: "/CEO.jpg",
    bio: "Visionary leader with a passion for innovation and growth.",
    socials: {
      linkedin: "https://www.linkedin.com/in/binoshtmathew/",
      github: "https://github.com/Binosh-mathew",
      instagram: "https://www.instagram.com/_binosh__?igsh=MXZleWRnMW9pdGlweQ==",
      email: "mailto:binoshmathew2004@gmail.com",
    },
  },
  {
    name: "Aromal Sunil",
    role: "CTO",
    img: "/Sunil.jpg",
    bio: "Tech enthusiast and architect of scalable solutions.",
    socials: {
      linkedin: "https://www.linkedin.com/in/aromal-sunil/",
      github: "https://github.com/aromal0708",
      instagram: "https://www.instagram.com/_mr_spartan___?igsh=MTJvMHZlOW8zM3dudA==",
      website: "https://aromal.tech",
      email: "mailto:aromalsunil711@gmail.com",
    },
  },
  {
    name: "Aaromal K J",
    role: "Designer",
    img: "/KJ 2.jpg",
    bio: "Crafting beautiful and intuitive user experiences.",
    socials: {
      linkedin: "https://linkedin.com/in/aaromalkj",
      github: "https://github.com/aaromalkj",
      instagram: "https://www.instagram.com/unloosed_chunk",
      email: "mailto:aaromal@example.com",
    },
  },
  {
    name: "Evan Punnen Jaocb",
    role: "COO",
    img: "/Evan.jpg",
    bio: "Ensuring smooth operations and team synergy.",
    socials: {
      linkedin: "https://www.linkedin.com/in/evanpunnenjacob/",
      github: "https://github.com/evanjacob",
      instagram: "https://www.instagram.com/__evanjacob?igsh=MWZiMzUxajliMWY3Zg==",
      website: "https://evanpunnenjacob.tech",
      email: "mailto:evanpunnenjacob@gmail.com",
    },
  },
  {
    name: "Amal Xavier",
    role: "Content Creator",
    img: "/IMG_2190.JPG",
    bio: "Storyteller and creative content strategist.",
    socials: {
      linkedin: "https://linkedin.com/in/amalxavier41134@gmail.com",
      github: "https://github.com/Amal-Xavier",
      instagram: "https://www.instagram.com/amalxavier____111",
      email: "mailto:amalxavier@example.com",
    },
  },
  {
    name: "Dan Eldho Anil",
    role: "CFO",
    img: "/Dan.png",
    bio: "Master of numbers and financial planning.",
    socials: {
      linkedin: "https://www.linkedin.com/in/daneldhoanil?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/_ohh.dan?igsh=MW4weHE3cGhlcmRoNQ%3D%3D&utm_source=qr",
      email: "mailto:daneldhoa@gmail.com",
    },
  },
  {
    name: "Amal George Mathew",
    role: "Media",
    img: "/amal.png",
    bio: "Capturing moments and building brand presence.",
    socials: {
      linkedin: "https://www.linkedin.com/in/amal-george-mathew-2a790026a/",
      instagram: "https://www.instagram.com/amal_georgemathew?igsh=Z2hwMWF6MWE5ZWRh",
      email: "mailto:amalgm03@gmail.com",
    },
  },
  {
    name: "Devanarayanan H",
    role: "CMO",
    img: "/WhatsApp Image 2025-07-08 at 22.38.09_48817f55.jpg",
    bio: "Driving growth through creative marketing.",
    socials: {
      linkedin: "https://www.linkedin.com/in/devanarayananh/",
      github: "https://github.com/devanh",
      email: "mailto:narayanan011010@gmail.com",
    },
  },
];

// Social icon components using React Icons
const socialIcons = {
  linkedin: <FaLinkedin className="w-5 h-5" />,
  github: <FaGithub className="w-5 h-5" />,
  instagram: <FaInstagram className="w-5 h-5" />,
  website: <FaGlobe className="w-5 h-5" />,
  email: <FaEnvelope className="w-5 h-5" />,
};

function Team() {
  const [selected, setSelected] = useState<null | (typeof team)[0]>(null);
  return (
    <div className="min-h-screen pt-16 bg-neutral-900 text-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white drop-shadow-lg tracking-tight">
            Meet Our <span className="text-gray-400">Team</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                className="relative group cursor-pointer rounded-2xl p-6 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-300 h-96 min-w-0 bg-neutral-800 border border-gray-700 overflow-hidden justify-between"
                style={{
                  border: "1.5px solid #333",
                  boxShadow:
                    "0 8px 32px 0 rgba(0,0,0,0.10), 0 1.5px 8px 0 #00000022",
                }}
                whileHover={{ scale: 1.04, y: -6 }}
                onClick={() => setSelected(member)}
                tabIndex={0}
                aria-label={`Show details for ${member.name}`}
              >
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-white mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-base md:text-lg mb-5 opacity-90 min-h-[48px]">
                  {member.bio}
                </p>
                <div className="flex gap-2 mt-auto w-full justify-center flex-wrap">
                  {Object.entries(member.socials).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gray-800 hover:bg-gray-600 transition-colors w-7 h-7 flex items-center justify-center shadow-lg border border-gray-700"
                      aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                    >
                      <span className="text-gray-300 w-3.5 h-3.5 flex items-center justify-center">
                        {socialIcons[key as keyof typeof socialIcons]}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup for Team Member Details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            aria-modal="true"
            // role="dialog" // Removed to address accessibility lint warning; dialog element is not used here
          >
            <motion.div
              className="relative bg-neutral-900 text-white rounded-3xl p-10 max-w-md w-full shadow-2xl border border-gray-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selected.img}
                alt={selected.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-white mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-white mb-1 text-center">
                {selected.name}
              </h3>
              <p className="text-gray-400 font-semibold mb-2 text-center">
                {selected.role}
              </p>
              <p className="text-gray-300 text-base mb-4 text-center opacity-90">
                {selected.bio}
              </p>
              <div className="flex gap-2 justify-center mt-4">
                {Object.entries(selected.socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-800 hover:bg-gray-600 transition-colors w-7 h-7 flex items-center justify-center shadow-lg border border-gray-700"
                    aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                  >
                    <span className="text-gray-300 w-3.5 h-3.5 flex items-center justify-center">
                      {socialIcons[key as keyof typeof socialIcons]}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Team;
