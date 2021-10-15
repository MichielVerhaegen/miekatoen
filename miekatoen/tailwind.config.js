module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    roze:{
      DEFAULT: '#e3afbc'
    },
    cream:{
      DEFAULT:'#e3e2df'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
