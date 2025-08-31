/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ← must be 'class'
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
  keyframes: {
    fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
  },
  animation: {
    'fade-in': 'fadeIn 0.8s ease forwards',
  },
}

};
