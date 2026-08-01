/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extends: {
      colors: {
        brand: {
          primary: '#4f46e5',
          secondary: '#06b6d4',
        }
      },
      spacing: {
        128: '32rem',
      }
    },
  },
  plugins: [],
}
