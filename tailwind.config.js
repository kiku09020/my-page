/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
//tailwind.config.js
//FreeBSD-licensed CSS animation by Animista
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      animation: {
        "jello-vertical": "jello-vertical 0.4s cubic-bezier(0.165, 0.840, 0.440, 1.000)    both",
        "vibrate-3": "vibrate-3 .5s linear  infinite  ",
      },
      keyframes: {
        "jello-vertical": {
          "0%,to": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(.75, 1.25, 1)",
          },
          "40%": {
            transform: "scale3d(1.25, .75, 1)",
          },
          "50%": {
            transform: "scale3d(.85, 1.15, 1)",
          },
          "65%": {
            transform: "scale3d(1.05, .95, 1)",
          },
          "75%": {
            transform: "scale3d(.95, 1.05, 1)",
          },
        },

        "vibrate-3": {
          "0%,to": {
            transform: "translate(0)",
          },
          "10%,50%,80%": {
            transform: "translate(-2px, -2px)",
          },
          "20%,60%,90%": {
            transform: "translate(2px, -2px)",
          },
          "30%,70%": {
            transform: "translate(-2px, 2px)",
          },
          "40%": {
            transform: "translate(2px, 2px)",
          },
        },
      },
    },
  },
};
