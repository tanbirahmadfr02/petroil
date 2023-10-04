/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'container': '1144px',
      },
      colors: {
        'yellow': '#FFB800',
        'white': '#ffffff',
        'primary': '#F40404',
        'blackRgb': 'rgba(0, 0, 0, 0.75)',
      },
      backgroundImage: {
        'banner': "url('assets/banner.jpg')"
      }
    },
  },
  plugins: [],
}