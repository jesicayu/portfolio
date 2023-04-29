const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)", ...fontFamily.sans],
      },
      colors: {
        "custom-lilac": "#C19FEF",
        "custom-orange": "#FDA135",
        "custom-black": "#161413",
      },
    },
  },
  plugins: [],
};
