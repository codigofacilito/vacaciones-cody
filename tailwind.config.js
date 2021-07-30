module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'dmsans' : ['DM Sans', 'sans-serif'],
      'roboto' : ['Roboto Slab', 'serif']
    },
    extend: {
      colors: {
        summer: {
          100 : '#C400FF',
          200 : '#FF67E7',
          300 : '#FFF338',
          400 : '#0CECDD'
        },
        cian: {
          100 : '#1E5F74',
          200 : '#133B5C',
          300 : '#1D2D51'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
