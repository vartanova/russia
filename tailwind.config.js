module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      "xxs": "320px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
