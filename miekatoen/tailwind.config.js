module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      roze:{
        DEFAULT: '#e3afbc'
      },
      cream:{
        DEFAULT:'#e3e2df'
      },
      bordeau:{
        DEFAULT:'#5d001e'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
