/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      spacing: {
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '68': '17rem',
        '72': '18rem',
        '76': '19rem',
        '80': '20rem'
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
});

