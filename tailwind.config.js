/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "blue-pallet-950": "#182C39",
        "blue-pallet-900": "#244356",
        "blue-pallet-800": "#264F66",
        "blue-pallet-700": "#295D7B",
        "blue-pallet-600": "#327497",
        "blue-pallet-500": "#4390B4",
        "blue-pallet-400": "#55A0C3",
        "blue-pallet-300": "#9CC7DD",
        "blue-pallet-200": "#CAE1ED",
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
