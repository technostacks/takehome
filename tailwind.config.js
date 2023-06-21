/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}","./src/**/*.{js,ts,jsx,tsx}","./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      twineLightGreen: "#a3b932",
      twineDarkGreen: "#5c720d",
      twineLightPurple: "#9e9fea",
      twineDarkPurple: "#4546ab",
      twineBlack: "#0d0603",
    },
  },
  plugins: [],
};
