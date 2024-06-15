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
        maingreen: '#85BDA6'
      },
      height: {
        'custom-profbox': '35rem',
        'custom-75vh': '75vh',
      },
      width: {
        'custom-pic': '420px',
        'custom-pic-mobile': '270px',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
