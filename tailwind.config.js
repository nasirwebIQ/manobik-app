/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '760px': '760px', // 674px width
      },
      height: {
        '994px': '994px', // 836px height
      },
    },
  },
  plugins: [],
}

