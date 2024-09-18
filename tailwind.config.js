/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#efefef",
      primary: "#f38083",
      secondary: "#e4bedc",
      highlight: "#f63a43",
      heading: "#343434",
      // primary: "#f63a43",
    },
    backgroundColor: (theme) => ({
      default: theme("colors.background"),
    }),
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
