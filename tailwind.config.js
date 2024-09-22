/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
          colors: {
            primary: '#1DD100',
            primarytwo:'#7d8085',
            cuponone:'#ffbf0f',
            cupontwo:'#F78C9C',
          },
          fontFamily:{
            Raleway:'Ralway',
            Inter:'inter',
          }
        }
  },
  plugins: [],
}