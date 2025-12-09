/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#22c55e",
          dark: "#16a34a",
        },
        dark: {
          DEFAULT: "#050816",
          soft: "#0b1020",
        },
      },
    },
  },
  plugins: [],
};
