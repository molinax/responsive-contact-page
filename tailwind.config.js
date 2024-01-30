/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'be-vietnam-pro': ['Be Vietnam Pro', 'sans-serif']
      },
      colors: {
        blue: '#4036A9',
        dark: '#111729',
        'light-gray': '#CDD5E0',
        'semi-white': '#F8FAFC'
      }
    }
  },
  plugins: []
}
