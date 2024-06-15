/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: '#F3F4F6',
        primary: '#273E47',
        hover: '#00824C',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
