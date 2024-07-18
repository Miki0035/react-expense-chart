/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{tsx,jsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(10, 79%, 65%)",
        cyan: "hsl(186, 34%, 60%)",
        arkBrown: "hsl(25, 47%, 15%)",
        mediumBrown: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        veryPaleOrange: "hsl(33, 100%, 98%)",
      },
      fontFamily: {
        dmBold: ["DMBold", "DMRegular", "sans-serif"],
        dmRegular: ["DMRegular", "sans-serif"],
        sans: ["DMRegular", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
