/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#16a34a",
        secondary: "#a3e635",
      }),
      textColor: (theme) => ({
        ...theme("colors"),
        primary: "#16a34a",
        secondary: "#a3e635",
      }),
    },
  },
};
