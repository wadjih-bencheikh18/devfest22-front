/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        blue: "#5E5B70",
        clear: "#FEFEFE",
        candy: "#ECE0E5",
      },
    },
  },
  plugins: [],
};
