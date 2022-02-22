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
    },
    backgroundImage: {
      'j3': "url('./components/img/li.jpg')",
      '34': "url('./components/img/bo.jpg')",
      '4plus': "url('./components/img/renee.jpg')",
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
