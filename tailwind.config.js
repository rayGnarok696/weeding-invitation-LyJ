/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#f9f3e9',
          100: '#f5ede4',
          200: '#e8dfd8',
          300: '#d4c9b8',
        },
        'sage': '#87A96B',
        'sage-dark': '#6B8E4E',
        'sage-light': '#C1D8A9',
        'cream': '#F5F5DC',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
