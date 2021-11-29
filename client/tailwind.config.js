

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
    colors: {
      dark: "#2F5D62",
      semidark: "#5E8B7E",
      semilight: "#A7C4BC",
      light: "#DFEEEA",
      white: "#FFF",
      black: "#000000"
    },
    extend: {
      backgroundImage: {
        'landingImg': "url('assets/image-landing.jpg')",
        'landingImg2': "url('assets/landing-img.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
