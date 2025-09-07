/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#111827',      // Gray 900 - Lebih pekat
        'soft-bg': '#1F2937',      // Gray 800
        'heading': '#F3F4F6',       // Gray 200
        'paragraph': '#9CA3AF',      // Gray 400
        'accent': '#34D399',        // Emerald 400
        'accent-hover': '#6EE7B7',  // Emerald 300
        'accent-dark': '#059669',   // Emerald 600
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'glowing-orb': 'glowing-orb 10s infinite',
      },
      keyframes: {
        'glowing-orb': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '25%': { transform: 'translate(40px, -60px) scale(1.2)', opacity: '0.3' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.8)', opacity: '0.6' },
          '75%': { transform: 'translate(-50px, -30px) scale(1.1)', opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}