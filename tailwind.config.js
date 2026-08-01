/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4f46e5',
          secondary: '#06b6d4',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}
