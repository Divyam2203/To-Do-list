/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f2d2c4",
        macbook: '#afa49c',
      },
      backgroundImage: {
        bgimg:  "url('./src/assets/jess-bailey-unsplash.jpg')",
      },
    },
  },
  plugins: [],
}

