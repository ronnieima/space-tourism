/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: "#0B0D17",
        primary: "#D0D6F9",
      },
      backgroundImage: {
        "home-mobile": "url('../src/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('../src/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('../src/assets/home/background-home-desktop.jpg')",

        "destination-mobile":
          "url('../src/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('../src/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('../src/assets/destination/background-destination-desktop.jpg')",

        "crew-mobile": "url('../src/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('../src/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('../src/assets/crew/background-crew-desktop.jpg')",

        "technology-mobile":
          "url('../src/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('../src/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('../src/assets/technology/background-technology-desktop.jpg')",
      },

      fontFamily: {
        barlow_condensed: ["Barlow Condensed"],
        bellefair: ["Bellefair"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: ["tailwindcss-animate"],
};
