/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {
    animation: {
      'gradient-xy': 'gradient-xy 12s ease infinite',
    },
    keyframes: {
      'gradient-xy': {
        '0%, 100%': { backgroundPosition: '0% 0%' },
        '50%': { backgroundPosition: '100% 100%' },
      },
    },
    backgroundSize: {
      '400': '400% 400%',
    },
  },
},

}