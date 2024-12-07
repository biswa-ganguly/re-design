/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        architects: ['Architects Daughter', 'sans-serif'],
      },

      keyframes: {
        stretchMove: {
          '0%': { transform: 'translateX(5%) scaleX(1)' },
          '50%': { transform: 'translateX(75%) scaleX(1.5)' }, 
          '100%': { transform: 'translateX(125%) scaleX(1)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        stretchMove: 'stretchMove 1s ease-out forwards', 
        swing: 'swing 5s ease-in-out infinite', 
      },
    },
  },
  plugins: [],
}
