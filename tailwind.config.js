module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container:{
      center:true,
      // padding:'16px'
      padding: {
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary:'#64748b',
        dark:'#0f172a',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
