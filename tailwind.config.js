/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#36a5f7',
          500: '#0c87eb',
          600: '#026bc9',
          700: '#0355a2',
          800: '#074885',
          900: '#0c3d6e',
          950: '#082749',
        },
        navy: {
          800: '#0f172a',
          900: '#0a0f1d',
          950: '#05070e',
        },
        gold: {
          400: '#f6ca56',
          500: '#e5b02a',
          600: '#c59118',
        }
      }
    },
  },
  plugins: [],
}
