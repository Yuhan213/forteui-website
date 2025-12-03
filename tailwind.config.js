/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				dark: '#153935',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				light: '#9fb4b2',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			surface: {
  				DEFAULT: '#f8fcfc',
  				light: '#e2eae9',
  				dark: '#1a4742',
  				tertiary: '#e0e0e0'
  			},
  			text: {
  				primary: '#000000',
  				secondary: '#1f1f1f',
  				light: '#ffffff'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Plus Jakarta Sans',
  				'sans-serif'
  			],
  			'plus-jakarta': [
  				'Plus Jakarta Sans',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			lato: [
  				'Lato',
  				'sans-serif'
  			],
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'display-1': [
  				'64px',
  				{
  					lineHeight: 'normal',
  					letterSpacing: '0.01em'
  				}
  			],
  			'display-2': [
  				'40px',
  				{
  					lineHeight: '1.2',
  					fontWeight: '700'
  				}
  			],
  			'heading-1': [
  				'43.585px',
  				{
  					lineHeight: '1.5',
  					letterSpacing: '-0.03em'
  				}
  			],
  			'heading-2': [
  				'24px',
  				{
  					lineHeight: '1.2',
  					fontWeight: '700'
  				}
  			],
  			'heading-4': [
  				'16px',
  				{
  					lineHeight: '1',
  					fontWeight: '700'
  				}
  			],
  			'paragraph-lg': [
  				'18px',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			'paragraph-md': [
  				'16px',
  				{
  					lineHeight: '1'
  				}
  			],
  			'paragraph-sm': [
  				'14px',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			'body-text': [
  				'24px',
  				{
  					lineHeight: '32px'
  				}
  			],
  			button: [
  				'22px',
  				{
  					lineHeight: '18px'
  				}
  			]
  		},
  		boxShadow: {
  			'elevation-low': '0px 0px 1px 0px rgba(20, 20, 20, 0.12), 0px 1px 8px 0px rgba(20, 20, 20, 0.08)'
  		},
  		borderRadius: {
  			full: '9999px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
