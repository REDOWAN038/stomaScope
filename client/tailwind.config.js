/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sgreen: {
          50: '#E6EFEB',
          100: '#3E6553',
          200: '#365949'
        }

      },
      height: {
      },
      width: {
        small: '640px',
        medium: '768px',
        large: '1024px',
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
}

