/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        merge: "merge 7s infinite",
      },
    },
    fontFamily: {
      para: ["Comfortaa", "sans-serif"],
      head: ["Ubuntu", "sans-serif"],
      main: ["Allerta Stencil", "sans-serif"],
    },
    screens: {
      mp: "374px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },

  plugins: [],
};
