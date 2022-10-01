/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    typography: theme => ({}),
    extend: {
      colors: {
        textGray: "#4a5568",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
