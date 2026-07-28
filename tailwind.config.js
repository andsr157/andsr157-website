/** @type {import('tailwindcss').Config} */

// const { colors: defaultColors } = require("tailwindcss/defaultTheme")
// const colors = {
//   ...defaultColors,
//   ...{
//     "new-gray": "#6d6d6d",
//   },
// }

export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],

  theme: {
    extend: {
      fontFamily: {
        NeueHaas: [
          "Neue Haas Grotesk Display Pro",
          "Arial",
          "Helvetica",
          "sans-serif",
          { "font-weight": 500 },
        ],
      },
    },
    // colors: colors,
  },
  plugins: [],
}
