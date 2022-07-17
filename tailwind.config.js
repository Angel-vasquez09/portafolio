/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b1120',
        secondary: '#38bdf8'
      },
      animation: {
        'circle': 'spin 35s linear infinite',
        'circle-reverse': 'spin 30s linear reverse infinite',
      }
    }
  },
  plugins: [],
}
