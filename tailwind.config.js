/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',           // Pure black
        secondary: '#111111',         // Rich dark
        tertiary: '#1a1a1a',         // Charcoal
        accent: '#ffffff',            // Pure white
        highlight: '#f5f5f5',         // Off white
        premium: '#e5e5e5',           // Light gray
        surface: '#0a0a0a',           // Deep black
        border: '#333333',            // Dark border
        muted: '#666666',             // Medium gray
        subtle: '#999999',            // Light gray text
        glass: 'rgba(255, 255, 255, 0.05)', // Glass morphism
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-black': 'rgba(0, 0, 0, 0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        'white-gradient': 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)',
        'monochrome-gradient': 'linear-gradient(135deg, #000000 0%, #333333 50%, #666666 100%)',
        'inverse-gradient': 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 50%, #cccccc 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        'luxury': '0 20px 40px -12px rgba(255, 255, 255, 0.1)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'white-glow': '0 0 30px rgba(255, 255, 255, 0.2)',
        'black-glow': '0 0 30px rgba(0, 0, 0, 0.8)',
        'inset-glass': 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      }
    },
  },
  plugins: [],
}
