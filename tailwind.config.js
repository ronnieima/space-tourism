/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0B0D17",
        primary: "#D0D6F9",
      },
      backgroundImage: {
        "home-mobile": "url('../src/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('../src/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('../src/assets/home/background-home-desktop.jpg')",

        "destination-desktop":
          "url('../src/assets/destination/background-destination-desktop.jpg')",
      },

      fontFamily: {
        barlow_condensed: ["Barlow Condensed"],
        bellefair: ["Bellefair"],
      },
    },
  },
  plugins: [],
};
