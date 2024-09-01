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
        dark: "#222831",
        grey: "#3F4959",
        dark_grey: "#34373E",
        white: "#eef7ff",
        highlight: "#ffe872",
        turquoise: "#40e0d0",
        electron: "#5fbdff",
        teal: "#00dfa2",
      },
      willChange: {
        filter: "filter",
      },
      backgroundImage: {
        "custom-radial-gradient": `radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent),
                                   radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent),
                                   radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent),
                                   radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316)`,
      },
      boxShadow: {
        "neu-morphic": "1px 1px 3px 2px #29303B, -1px -1px 3px 2px #29303B",
        "neu-morphic-hover":
          "0.5px 0.5px 2px 0.5px #ffe872, -0.5px -0.5px 2px 0.5px #ffe872",
      },
    },
  },
  plugins: [addVariablesForColors],
};
