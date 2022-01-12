const { colors } = require(`tailwindcss/defaultTheme`)

console.log(colors)

module.exports = {
  purge: [
    "./src/components/**/*.js",
    "./src/pages/**/*.js",
    "./src/templates/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Rock Salt"', "cursive"],
        body: ['"Roboto Condensed"', "sans-serif"],
      },
      colors: {
        primary: colors.purple,
        matrix: "#00FF41",
        silver: "c8cccf",
        white: "#ffffff",
        black: "#161717",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
