/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      skew: {
        '45': '45deg',
      },
      transitionDuration: {
        '250': '250ms',
      },
      height: {
        'screen2x' : '120vh',
      },

    },
  },
  plugins: [],
}

