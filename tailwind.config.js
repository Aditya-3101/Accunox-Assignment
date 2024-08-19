/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poopins: ["Poppins", "sans-serif"],
      },
      gridTemplateRows: {
        16: "10% 15% 68% 6%",
      },
    },
  },
  plugins: [],
};
