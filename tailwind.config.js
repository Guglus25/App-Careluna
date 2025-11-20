/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A6EA5",
        secundary: "#7DA0CA",
        "neutro-claro": "#F5F7FA",
        "neutro-medio": "#C0CCD9",
        success: "#4CAF50",
        danger: "#E57373",
        warning: "#FBC02D",
      },
    },
  },
  plugins: [],
};
