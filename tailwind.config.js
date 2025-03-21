/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        GameOfSquids: ["GameOfSquids", "sans-serif"],
      },
    },
  },
  plugins: [],
};