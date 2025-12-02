/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color - dark teal
        primary: {
          DEFAULT: '#1a4742',
          dark: '#153935',
        },
        // Secondary/accent colors
        secondary: {
          DEFAULT: '#b5c6c4',
          light: '#9fb4b2',
        },
        // Surface/background colors
        surface: {
          DEFAULT: '#f8fcfc',
          light: '#e2eae9',
          dark: '#1a4742',
          tertiary: '#e0e0e0',
        },
        // Text colors
        text: {
          primary: '#000000',
          secondary: '#1f1f1f',
          light: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['64px', { lineHeight: 'normal', letterSpacing: '0.01em' }],
        'display-2': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-1': ['43.585px', { lineHeight: '1.5', letterSpacing: '-0.03em' }],
        'heading-2': ['24px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-4': ['16px', { lineHeight: '1', fontWeight: '700' }],
        'paragraph-lg': ['18px', { lineHeight: '1.5' }],
        'paragraph-md': ['16px', { lineHeight: '1' }],
        'paragraph-sm': ['14px', { lineHeight: '1.5' }],
        'body-text': ['24px', { lineHeight: '32px' }],
        'button': ['22px', { lineHeight: '18px' }],
      },
      boxShadow: {
        'elevation-low': '0px 0px 1px 0px rgba(20, 20, 20, 0.12), 0px 1px 8px 0px rgba(20, 20, 20, 0.08)',
      },
      borderRadius: {
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
