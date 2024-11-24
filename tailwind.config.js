/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tiffany: {
          50: '#E8F5F4',
          100: '#D1EBE9',
          200: '#A3D6D4',
          300: '#75C1BF',
          400: '#47ADA9',
          500: '#1A9894',
          600: '#157A76',
          700: '#105B58',
          800: '#0B3C3B',
          900: '#071D1D',
        },
      },
    },
  },
  plugins: [],
};
