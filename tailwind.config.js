module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "2d2d2d",
      white: "ffffff",
      blue: {
        hero: "#CBE7FD",
        primary: "#005CE6",
        light: "#EFF5FF",
        border: "#BDD8FF",
      },
      grey: {
        light: "#9E9E9E",
        dark: "#5B5B5B",
      },
      pink: {
        light: "#FEE7F3",
        dark: "#FF014E",
      },
      gold: {
        light: "#FFF7E4",
        dark: "#FFB400",
      },
      shadow: {
        light: "#D8E7FF",
        dark: "#7CB0FF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
