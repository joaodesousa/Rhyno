module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redpost: 'rgba(255, 0, 0, 0.6)'
      },
      fontFamily: {
        menu: ["AlternateGothic", "sans-serif"],
      },
    },
  },
  plugins: [],
}