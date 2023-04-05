/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#0077ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#fff',
      'black': '#000',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/img/großglockner.jpg')",
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      maxWidth: {
        '1/2': '50%',
      },
      fontFamily: {
        heading: ['OpenSansExtraBold', 'sans-serif'],
        SansRegular: ['OpenSansRegular', 'sans-serif'],

      },
    },
  },
  plugins: [],
}

