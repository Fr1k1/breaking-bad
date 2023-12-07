/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-dark": "#A56E17",
        "white-custom": "#FFFBF5",
        "grey-custom": "#424242",
        "white-light": "#F8F8F8",
        "grey-middle": "#BEBEBE",
        "yellow-light": "#EA9D2D",
      },
    },
  },
  plugins: [],
};
