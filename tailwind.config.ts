/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        JetMono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // dark: "#144351",
        dark: "#222831",
        white: "#eef7ff",
        highlight: "#ffe872",
        turquoise: "#40e0d0",
        electron: "#5fbdff",
        teal: "#00dfa2",
      },
    },
  },
  plugins: [addVariablesForColors],
};
