/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        merge: "merge 7s infinite",
      },
      keyframes: {
        merge: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px,-50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px,20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
      },
    },
    fontFamily: {
      para: ["Comfortaa", "sans-serif"],
      head: ["Ubuntu", "sans-serif"],
      main: ["Allerta Stencil", "sans-serif"],
    },
  },
  plugins: [],
};
