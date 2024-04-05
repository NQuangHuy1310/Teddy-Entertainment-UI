/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: ['0.875rem', '1.3125rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.6875rem'],
      md: ['1.8rem', '2.3rem'],
      xl: ['2rem', '2.6rem'],
      '1xl': ['2.5rem', '3rem'],
      '2xl': ['40px', '48px'],
      '3xl': ['3rem', '3.6rem'],
      '4xl': ['3.5rem', '4.2rem']
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
        errorPriamry: '#FFB7A4',

        // custom
        Gray1: '#23262F',
        Gray2: '#777E90',
        Gray5: '#E6E8EC',
        Gray6: '#F4F5F6'
      },
      backgroundColor: {
        White: '#fff',
        Black: '#000',

        LightBase: '#F4F4F4',
        Light: '#FCFCFC',

        DarkBase: '#111315',
        Dark: '#1A1D1F'
      },
      textColor: {
        White: '#fff',
        Black: '#000',

        // light
        LightPrimary: '#11142D',
        LightSecondary: '#808191',
        LightWhite: '#FCFCFC',

        //dark
        DarkPrimary: '#EFEFEF',
        DarkSecondary: '#6F767E'
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        container: '1440px'
      }
    }
  },
  plugins: []
}
