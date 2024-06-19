/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html'],
  theme: {
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif']
    },
    screen:{
      screens: {
        'mobile': {'min':'200px','max':'475px'},
        'tablet': {'min':'427px','max':'782px'},
        'laptop': {'min':'782.1px'}
      }
    },
    extend: {

    },
  },
  plugins: [],
}

