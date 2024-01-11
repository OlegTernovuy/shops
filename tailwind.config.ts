import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'bgDark': '#262626',
        'DeWiseBlack': '#262626',
        'redPrice': '#FE0202',
        'gray': '#ffffffde',
        'tifany': '#04C2C2',
        'tifanyHover': '#04c2c21a',
        'lightGray': '#ffffff3b',
        'deWiseBlackSecondary': '#26262680'
      },
    },
    screens: {
      'xs': '270px',
      'sm': '545px',
      // 'sm': '577px',

      // 'md': '880px',
      'md': '762px',
      // 'lg': '832px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1306px',
    },
    fontSize: {
      xs: ['0.75rem', {
        lineHeight: '150%',
        letterSpacing: '0.15px',
        fontWeight: '400',
      }],
      sm: ['0.875rem', {
        lineHeight: '150%',
        letterSpacing: '0.15px',
        fontWeight: '400',
      }],
      base: ['1rem', {
        lineHeight: '150%',
        letterSpacing: '0.15px',
        fontWeight: '400',
      }],
      xl: '1.25rem',
      'Headline5': ['1.5rem', 
      {
        lineHeight: '1.334',
        letterSpacing: '0em',
        fontWeight: '400',
      }],
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}
export default config
