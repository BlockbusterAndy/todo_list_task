/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBG: {
          light: '#FBFDFC',
          dark: '#242424',
        },
        secondaryBG: {
          light: '#EEF6EF',
          dark: '#2C2C2C',
        }
      },
    },

  },
  plugins: [],
}