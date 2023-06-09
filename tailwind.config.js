const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/illustrations/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "830px",
      lg: '1120px',
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)", ...fontFamily.sans],
      },
      colors: {
        "custom-lilac": "#C19FEF",
        "custom-orange": "#FDA135",
        "custom-black": "#161413",
        "custom-base": "#EEEDE9",
        "custom-dark-base": "#18171A",
        "custom-dark-orange": "#FFC890",
        "custom-dark-white": "#FFF9F3"
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        slide: 'slide 24s linear infinite',
      }
      
    },
  },
  plugins: [
     require('tailwind-scrollbar')
  ],
};
