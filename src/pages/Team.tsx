import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const team = [
  {
    name: "Binosh T Mathew",
    role: "CEO & Founder",
    img: "/CEO.jpg",
    bio: "Visionary leader with a passion for innovation and growth.",
    socials: {
      linkedin: "https://linkedin.com/in/binosh-t-mathew",
      github: "https://github.com/binoshmathew",
      instagram: "https://instagram.com/binoshmathew",
      website: "https://binoshmathew.com",
      email: "mailto:binosh@example.com",
    },
  },
  {
    name: "Aromal Sunil",
    role: "CTO",
    img: "/Sunil.jpg",
    bio: "Tech enthusiast and architect of scalable solutions.",
    socials: {
      linkedin: "https://linkedin.com/in/aromalsunil",
      github: "https://github.com/aromalsunil",
      instagram: "https://www.instagram.com/aromalsunil/",
      website: "https://aromalsunil.com",
      email: "mailto:aromal@example.com",
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
      website: "https://aaromalkj.com",
      email: "mailto:aaromal@example.com",
    },
  },
  {
    name: "Evan Punnen Jaocb",
    role: "COO",
    img: "/Evan.jpg",
    bio: "Ensuring smooth operations and team synergy.",
    socials: {
      linkedin: "https://linkedin.com/in/evanjacob",
      github: "https://github.com/evanjacob",
      instagram: "https://www.instagram.com/__evanjacob/",
      website: "https://evanjacob.com",
      email: "mailto:evan@example.com",
    },
  },
  {
    name: "Amal Xavier",
    role: "Content Creator",
    img: "/IMG_2190.JPG",
    bio: "Storyteller and creative content strategist.",
    socials: {
      linkedin: "https://linkedin.com/in/amalxavier",
      github: "https://github.com/amalxavier",
      instagram: "https://www.instagram.com/amalxavier____111",
      website: "https://amalxavier.com",
      email: "mailto:amalxavier@example.com",
    },
  },
  {
    name: "Dan Eldho Anil",
    role: "CFO",
    img: "/Dan.png",
    bio: "Master of numbers and financial planning.",
    socials: {
      linkedin: "https://linkedin.com/in/daneldhoanil",
      github: "https://github.com/daneldhoanil",
      instagram: "https://www.instagram.com/_ohh.dan",
      website: "https://daneldhoanil.com",
      email: "mailto:dan@example.com",
    },
  },
  {
    name: "Amal George Mathew",
    role: "Media",
    img: "/amal.png",
    bio: "Capturing moments and building brand presence.",
    socials: {
      linkedin: "https://linkedin.com/in/amalgmathew",
      github: "https://github.com/amalgmathew",
      instagram: "https://instagram.com/amalgmathew",
      website: "https://amalgmathew.com",
      email: "mailto:amalgm@example.com",
    },
  },
  {
    name: "Devanarayanan H",
    role: "CMO",
    img: "/WhatsApp Image 2025-07-08 at 22.38.09_48817f55.jpg",
    bio: "Driving growth through creative marketing.",
    socials: {
      linkedin: "https://linkedin.com/in/devan-h",
      github: "https://github.com/devanh",
      instagram: "https://instagram.com/devanh",
      website: "https://devanh.com",
      email: "mailto:devan@example.com",
    },
  },
];

// Social icon SVGs
const socialIcons = {
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),
  website: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c1.657 0 3.156.672 4.242 1.758A5.978 5.978 0 0120 12a5.978 5.978 0 01-3.758 4.242A7.963 7.963 0 0112 20a7.963 7.963 0 01-4.242-1.758A5.978 5.978 0 014 12a5.978 5.978 0 013.758-4.242A7.963 7.963 0 0112 4zm0 2a6 6 0 100 12A6 6 0 0012 6zm0 2a4 4 0 110 8 4 4 0 010-8z" />
    </svg>
  ),
  email: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.243l-7.071 7.071a2 2 0 01-2.828 0L4 6.243V20h16V6.243z" />
    </svg>
  ),
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
