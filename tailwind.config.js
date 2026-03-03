/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'zolasixx': ['zolasixx', 'sans-serif']
      },
      colors: {
        ...colors,
        primary: colors.purple,
        secondary: colors.pink
      },
      animation: {
        blob: 'blob 7s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(160px, -120px) scale(1.1)' },
          '50%': { transform: 'translate(-100px, 100px) scale(0.92)' },
          '75%': { transform: 'translate(120px, 160px) scale(1.08)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }
    },
  },
  plugins: [],
};
