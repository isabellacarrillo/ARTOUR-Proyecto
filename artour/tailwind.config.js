/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
    colors:{
      "white":"#FFFCF9",
      "orange":"#EC9134",
      "black":"#1E1E1E",
      "blue":"#4F759B",
      "bluegray":"#D3DAE1"
    },
    fontFamily:{
      "sans": ["Lato", "sans-serif"],

    }
  },
  plugins: [],
}

