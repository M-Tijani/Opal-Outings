/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DFFBFC",
        secondary: "#EE6B4D",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/Hero_Background.jpg')",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
