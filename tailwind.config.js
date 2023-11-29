/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        beige: "#FFE2B4",
        black: "#212322",
        blue: "#619B8A",
      },

      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        inknut: "'Inknut Antiqua', serif",
        monteCarlo: "'MonteCarlo', cursive",
      },
    },
  },
  plugins: [],
};
