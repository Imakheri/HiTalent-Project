

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      dark: "#2F5D62",
      semidark: "#5E8B7E",
      semilight: "#A7C4BC",
      light: "#DFEEEA"
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
}
