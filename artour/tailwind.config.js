/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
<<<<<<< HEAD
    extend: {  
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
  }
=======
    extend: {
      colors: {
        white: "#FFFCF9",
        black: "#1E1E1E",
        blue: "#4F759B",
      },
    },
    colors: {
      white: "#FFFCF9",
      orange: "#EC9134",
      black: "#1E1E1E",
      blue: "#4F759B",
      bluegray: "#D3DAE1",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
>>>>>>> f014c46d4b76c582e5295c0347ae58e9d446a33d
  },
  plugins: [],
};
