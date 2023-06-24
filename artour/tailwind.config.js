/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFCF9",
        black: "#1E1E1E",
        blue: "#4F759B",
        fbblue: "#4267B2",
        twblue: "#1DA1F2",
        red: "#AA4A44",
        lightorange: "#FAE1C8",
      },
      dropShadow: {
        "4xl": "5px 7px 10px 4px rgba(0, 0, 0, 0.25)",
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
  },
  plugins: [],
};
