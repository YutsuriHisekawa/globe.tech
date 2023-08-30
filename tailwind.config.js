  module.exports = {
    content:  
    {
      files: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      transform: (content) => content.replace(/taos:/g, ''),
    },
    

    

  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-blue': 'linear-gradient(to right, ' + theme('colors.blue.700') + ', ' + theme('colors.blue.400') + ', ' + theme('colors.blue.500') + ')'
      }),
      fontFamily: {
        'logo': ['Ubuntu'],
        'mukta' : ['Mukta'],
      }
    }
  },
    plugins: [
             require('taos/plugin'),
    require('tailwindcss-animated'),  
    ],

    safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  }