/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Softblue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        VeryDarkBlueMainBG: "hsl(217, 54%, 11%)",
        VeryDarkBlueCardBG: "hsl(216, 50%, 16%)",
        VeryDarkBlueLine: "hsl(215, 32%, 27%)",
        Hite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
