/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "rgb(39, 56, 70)",
        mist: {
          50: "rgb(245, 249, 250)",
          100: "rgb(235, 242, 244)",
          200: "rgb(208, 226, 231)",
          300: "rgb(184, 212, 219)",
          400: "rgb(121, 174, 185)",
          500: "rgb(86, 147, 159)",
          600: "rgb(67, 119, 132)",
          700: "rgb(55, 98, 109)",
          800: "rgb(48, 81, 90)",
          900: "rgb(45, 70, 77)",
        },
        wood: {
          50: "rgb(255, 255, 255)",
          100: "rgb(254, 253, 251)",
          200: "rgb(252, 250, 247)",
          300: "rgb(252, 250, 247)",
          400: "rgb(251, 248, 244)",
          500: "rgb(250, 246, 240)",
          600: "rgb(226, 202, 167)",
          700: "rgb(201, 159, 94)",
          800: "rgb(145, 107, 48)",
          900: "rgb(73, 53, 24)",
        },
        salmon:{
          500: "rgb(249 162 125)",
          600: "rgb(246 112 55)"
        }
      }
    },
    fontFamily:{
      serif: "Gilda Display, serif"
    }
  },
  plugins: [],
};
