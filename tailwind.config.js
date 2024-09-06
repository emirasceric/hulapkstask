/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brandonSSs: ['Brandon Grotesque', 'sans-serif'],
        brandonn: ['Brandon Grotesque', 'regular'],
        chronicleee: ['Chronicle Display', 'serif'], 


        brandonSS: ['"Cabin"', 'sans-serif'],
        brandon: ['"Cabin"', 'regular'],
        chronicle: ['Lora', 'serif'],
      },
      fontSize: {
        custom: ['15px', '22px', 'bold'], // 15px font size with 22px line-height
      },
      letterSpacing: {
        wide: '1.5px',
        wider: '1.8px'
      },
      colors: {
        'custom-gold': '#DDA74A',
        'get-started': ' #004A4C',
        'meet_biom': '#002D33',
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
        '1': '1',
        '2': '2',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(-100%)' },  // Start off-screen to the left
          '100%': { transform: 'translateX(0)' },    // End at the original position
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite', // Adjust the duration as needed
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  
  ],
}
