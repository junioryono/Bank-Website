const { fontFamily } = require("tailwindcss/defaultTheme");
const { colors } = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx}"],
   theme: {
      container: {
         center: true,
      },
      extend: {
         fontFamily: {
            sans: ["Opens Sans", ...fontFamily.sans],
         },
         colors: {
            ...colors,
            primary: "#FF6363",
         },
      },
   },
   plugins: [
      "tailwindcss-animate",
      "@tailwindcss/typography",
      plugin(function ({ addUtilities }) {
         addUtilities({
            ".border-b-1": {
               "border-bottom-width": "1px",
            },
            ".border-t-1": {
               "border-top-width": "1px",
            },
            ".border-l-1": {
               "border-left-width": "1px",
            },
            ".border-r-1": {
               "border-right-width": "1px",
            },
         });
      }),
   ],
};
