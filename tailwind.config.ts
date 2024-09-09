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
        "card-bg": "#20263B",
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
        "button-gradient": `radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent),
        radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent),
        radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent),
        radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316)`,
      },
      boxShadow: {
        "neu-morphic":
          "0.1px 0.1px 0.2px 0.1px #ffe872 inset, -0.1px -0.1px 0.2px 0.1px #ffe872 inset",
      },
      dropShadow: {
        "text-shadow": "0 0.5px 0.5px rgb(255, 232, 114)",
        card: "0 2px 2px #ffe872",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "vader-animation": "vader 2s linear infinite alternate",
        "dotted-line": "dash 2s linear infinite",
        beep: "appear 6.5s ease-in",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },

        vader: {
          to: {
            strokeDashoffset: "0",
          },
        },
        dash: {
          from: {
            strokeDashoffset: "0",
          },
          to: {
            strokeDashoffset: "6.3",
          },
        },
        appear: {
          "0%": { opacity: "0", visibility: "hidden" },
          "10%": { opacity: "0", visibility: "hidden" },
          "20%": { opacity: "0", visibility: "hidden" },
          "30%": { opacity: "1", visibility: "visible" },
          "70%": { opacity: "1", visibility: "visible" },
          "100%": { opacity: "1", visibility: "visible" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
