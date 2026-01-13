/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        'huff-slate': '#6c7c85',
        'huff-beige': '#efece1',
        'huff-brown': '#8b735b',
        'huff-dark-brown': '#4b3b2f',
        'huff-sage': '#8f9e8b',
      }
    },
  },
  plugins: [],
}
