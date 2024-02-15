/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {
      spacing: {
        '128': '40rem',
      },
      backgroundColor:{
        'bluecolor':'#4ba9e9 0,#4ba9e9 50%,#fff 50%,#fff 100%',
        'color':'#4ba9e9'
      },
      rotate: {
        '35': '35deg',
      }
    },
  },
  plugins: [],
}

