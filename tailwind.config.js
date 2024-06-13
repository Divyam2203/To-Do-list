/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgimg:  "url('./src/assets/jess-bailey-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}

