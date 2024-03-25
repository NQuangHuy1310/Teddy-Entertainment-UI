/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      base: ['16px', '24px'],
      lg: ['18px', '27px'],
      xl: ['20px', '28px'],
      '2xl': ['40px', '48px'],
      '3xl': ['48px', '57px'],
      '4xl': ['56px', '68px']
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        primary: '#06aafe',
        error: '#FF6370',
        warning: '#ffc107',
        success: '#58C27D',
        secondary1: '#3C72A0',
        secondary2: '#D6F4FF',
        secondary3: '#6D3B00',

        darkPrimary: '#191a24',
        errorPriamry: '#FFB7A4'
      },
      backgroundColor: {
        bgBase: '#fff',
        bgDark: '#121212'
      },
      textColor: {
        black: '#333'
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1440px'
      }
    }
  },
  plugins: []
}
