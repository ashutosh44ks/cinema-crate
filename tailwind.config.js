/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblack: "#0C0C0C",
        darkblack2: "#0f0f0f",
        dark: "#1A1A1A",
        dark2: "#121212",
        black: "#333",
        white: "#FAFAFA",
        pink: "#e91e63",
        pink2: "#ff0057",
        lightgrey: "#ebebeb",
        lightgrey2: "#c4c4c4",
        lightgrey3: "#D4D4D4",
        yellow: "#FDEE30",
        yellow2: "#FFD700",
      },
      screens: {
        "2xs": "375px",
        xs: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
