/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFCF9",
        black: "#1E1E1E",
        blue: "#4F759B",
      },
    },
  },
  plugins: [],
};
