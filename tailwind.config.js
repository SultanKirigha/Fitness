/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#22c55e", // accent (green)
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
