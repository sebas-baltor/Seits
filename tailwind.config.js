/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black_primary': '#000000',
        'purple_init': '#561DC2',
        'pink_init': '#C958C8',
        'yellow_init': '#F29F62',
        'transparent' : "#ffffff00"
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