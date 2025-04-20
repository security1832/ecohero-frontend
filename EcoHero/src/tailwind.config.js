/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ecoBlue: "#1E90FF",
        ecoPurple: "#8B5CF6",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};