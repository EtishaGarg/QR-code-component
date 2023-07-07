/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    theme: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
    },
    extend: {},
  },
  plugins: [],
}