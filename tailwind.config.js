module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html'],
    },
    
 
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
      },
      
    

    extend: {
      fontFamily: {
        headline: ['Oswald']
        },
        
      colors:{
        mainColor:'#212149'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
