/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F044C", // Deep navy
        secondary: "#141E61", // Dark blue
        accent: "#787A91", // Muted gray-blue
        background: "#EEEEEE", // Light background
        surface: "#FFFFFF", // Card/Surface
        border: "#141E61", // Use secondary for border
        muted: "#787A91", // Muted text
        subtle: "#B0B3C6", // Subtle text
        highlight: "#EEEEEE", // Highlight
        glass: "rgba(20, 30, 97, 0.05)",
        "glass-white": "rgba(238, 238, 238, 0.1)",
        "glass-black": "rgba(15, 4, 76, 0.8)",
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        "premium-gradient":
          "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
        "white-gradient":
          "linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)",
        "monochrome-gradient":
          "linear-gradient(135deg, #000000 0%, #333333 50%, #666666 100%)",
        "inverse-gradient":
          "linear-gradient(135deg, #ffffff 0%, #e5e5e5 50%, #cccccc 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      },
      boxShadow: {
        premium: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
        luxury: "0 20px 40px -12px rgba(255, 255, 255, 0.1)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "white-glow": "0 0 30px rgba(255, 255, 255, 0.2)",
        "black-glow": "0 0 30px rgba(0, 0, 0, 0.8)",
        "inset-glass": "inset 0 1px 1px rgba(255, 255, 255, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [],
};
