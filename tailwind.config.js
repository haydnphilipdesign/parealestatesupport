/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Deep blue color
        secondary: '#F3F4F6', // Light gray color
      },
    },
  },
  plugins: [],
};