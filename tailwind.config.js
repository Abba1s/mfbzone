/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#2F2F2F",
        secondaryColor: "#FF7518",
        navbarColor: "#E1E3E5",
        gradColor: "rgba(217, 217, 217, 0)",
        footerColor:"#1B1B1B"
      },
    },
  },
  plugins: [],
}