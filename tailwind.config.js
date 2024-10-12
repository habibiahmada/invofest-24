/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "blue-pallet-950": "#14273D",
        "blue-pallet-900": "#1E3C5B",
        "blue-pallet-800": "#1E466E",
        "blue-pallet-700": "#205284",
        "blue-pallet-600": "#2766A2",
        "blue-pallet-500": "#3782C0",
        "blue-pallet-400": "#4892CF",
        "blue-pallet-300": "#95C0E4",
        "blue-pallet-200": "#C6DCF1",
        "blue-pallet-100": "#E7F1F7",
        "blue-pallet-50": "#F4F8FB",
      },
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
