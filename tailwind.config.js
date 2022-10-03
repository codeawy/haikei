/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    typography: theme => ({}),
    extend: {
      colors: {
        textGray: "#303030",
        darkGray: "#171717",
        lightGray: "#282828",
        grayText: "#6b6b6b",
        blob: "#ff0066",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
