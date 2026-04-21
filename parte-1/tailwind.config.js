/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#191a23',
          green: '#b9ff66',
          gray: '#f3f3f3',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.8125rem',
      },
    },
  },
  plugins: [],
}

