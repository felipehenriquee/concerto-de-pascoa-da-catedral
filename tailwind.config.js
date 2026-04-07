/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#fff0f3',
          200: '#ffd9e2',
          300: '#FFC4D1',
          400: '#ffaabf',
        },
        brown: {
          300: '#a76f61',
          700: '#6A3E37',
          800: '#4e2d27',
          900: '#3a1f1a',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
}
