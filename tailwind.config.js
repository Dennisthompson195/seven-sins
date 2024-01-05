const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

{/*'tab': '700px',
        
        'air':  '850px',
        ...defaultTheme.screens,*/}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)']
      },
      screens: {
        'xs': '339px',
        // => @media (min-width: 640px) { ... }
    

        
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop':  '1280px',
        // => @media (min-width: 1280px) { ... }
      },
  
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 90s linear infinite',
        blink: 'blink 1.4s both infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
