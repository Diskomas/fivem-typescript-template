/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: '#3D4552',
          primary: '#e5074d',
        },
      },
    },
  },
  plugins: [],
}

