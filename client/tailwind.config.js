module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        pfGreen: {
          light: "#5E8B7E",
          DEFAULT: "#2F5D62",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
