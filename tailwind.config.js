/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html'],
  theme: {
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif']
    },
    screens: {
      'mobile': {'min':'200px','max':'475px'},
      'tablet': {'min':'427px','max':'782px'},
      'laptop': {'min':'782.1px'}
    },

    extend: {
      boxShadow: {
        'green': '0 10px 30px 30px rgba(83, 255, 170, 0.5), 0 2px 4px -1px rgba(83, 255, 170, 0.5)',
      },
    },
  },
  plugins: [],
}

