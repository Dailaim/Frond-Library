/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b7a9f",
          light: "#6a9fc6",
          dark: "#1e526d",
          "100": "#c9e2ec",
          "200": "#a1c9db",
          "300": "#79b0c9",
          "400": "#5197b8",
          "500": "#3b7a9f",
          "600": "#2d5e7a",
          "700": "#1f4255",
          "800": "#11262f",
          "900": "#01080c",
        },
        secondary: {
          DEFAULT: "#ddeaf1",
          light: "#f5f9fa",
          dark: "#c5d9e1",
          "100": "#f0f6f8",
          "200": "#ddeaf1",
          "300": "#c9dee9",
          "400": "#b5d2e2",
          "500": "#a1c6da",
          "600": "#8daad0",
          "700": "#7890bb",
          "800": "#5d6e95",
          "900": "#475873",
        },
      },
      fontFamily: {
        Rufina: ['Rufina', 'serif'],
        PT: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [],
};
