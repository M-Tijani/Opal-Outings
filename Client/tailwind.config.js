/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DFFBFC",
        secondary: "#EE6B4D",
        tertiary: "#293241",
        tertiaryHover: "#344258",
        tertiaryInput: "#414F65",
        sidecolor: "#6C9BC5",
        btncolor: "#9BC0D9",
        inputcolor: "#EFEFEF",
      },
      backgroundImage: {
        // "hero-pattern": "url('./src/assets/useble_image.jpg')",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
