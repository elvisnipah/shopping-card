/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        "montserrat": ["Montserrat", "sans-serif"] 
      },
    },
  },
  plugins: [],
}
