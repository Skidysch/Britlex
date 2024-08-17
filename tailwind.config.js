/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		colors: {
			black: '#000',
			white: '#fff',
			'snow-gray': '#f5f5f5',
			'light-gray': '#eee',
			'gunmetal-gray': '#263238',
			'steel-gray': '#546269',
			gray: '#8F95A5',
		},
		extend: {},
	},
	plugins: [],
}
