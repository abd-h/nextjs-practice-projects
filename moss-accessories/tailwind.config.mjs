/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      keyframes: {
        underline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        underline: "underline 0.5s ease-out forwards",
      },
      // wordSpacing: {
      //   tight: '0.125rem',
      //   normal: '0.25rem',
      //   wide: '0.5rem'
      // }
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".ws-tight": {
          wordSpacing: "0.125rem",
        },
        ".ws-normal": {
          wordSpacing: "0.25rem",
        },
        ".ws-wide": {
          wordSpacing: "0.5rem",
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};
