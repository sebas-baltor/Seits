/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#000000',
        'purple-init': '#561DC2',
        'pink-init': '#C958C8',
        'yellow-init': '#F29F62',
        'transparent' : "#ffffff00"
      },
      fontFamily:{
        poppins: ["Poppins","sans-serif"],
        raleway: ["Raleway", "Poppins", "sans-serif"]
      },
      keyframes: {
        rotation: {
          '0%': { transform: 'rotate(0deg)' },
          '50%':{transform: 'rotate(180deg)'},
          '100%': { transform: 'rotate(360deg)'},
        }
      },
      animation: {
        ratation: 'rotation 5s linear infinite',
      }
    },
  },
  variants: {
    extend: {
      opacity: ['responsive'],
    }
  },
  plugins: [],
}