/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {backgroundImage: {
      'gradient-45': 'linear-gradient(45deg, #0e1111, #1c1f1f)',
    },},
  },
  plugins: [],
}

