

/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7FC7D9",
        "primary-dark": "#005BB5",
        secondary: "#FF851B",
        "secondary-dark": "#E66F00",
        primaryText:"#068FFF"
      },
      keyframes: {
        fade: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
      },
      animation: {
        fade: "fade .4s ease-in-out forwards",
      },
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
