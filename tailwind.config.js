/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b7a9f',
        'secondary': '#ddeaf1',
      },
      fontFamily: {
        Rufina: ['Rufina', 'serif'],
        PT: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [],
};
