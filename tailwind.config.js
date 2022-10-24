const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			gray: {
				400: '#53565c',
				500: '#151718',
				600: '#2a2b31',
				700: '#0e0e10'
			},
			navbar: {
				DEFAULT: '#1f2125'
			},
			pink: {
				DEFAULT: '#e3229e'
			},
			green: {
				DEFAULT: '#0ee874'
			},
			red: {
				DEFAULT: '#FF0000'
			}
		},
		extend: {
			transitionDuration: {
				DEFAULT: '300ms'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				scale: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scale: 'scale .45s ease-in-out'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0, 0, 0, 0.4)'
				},
				'.image-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none'
				}
			})
		})
	]
}
