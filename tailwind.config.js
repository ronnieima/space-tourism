/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url('../src/assets/home/background-home-desktop.jpg')",
      },
      fontFamily: {
        barlow_condensed: ["Barlow Condensed"],
        bellefair: ["Bellefair"],
      },
    },
  },
  plugins: [],
};
