/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#387ADF",
        secondary: "#2961CC",
        tertiary: "#FAA916",
        quaternary: "#F7F5FB",
        tertiaryS: "#f48c0c",
      },
    },
  },
  plugins: [],
};
