/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				plex: ['IBM Plex Mono', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'light-100': '#f5e6e8',
				'primary-100': '#01172f',
				'secondary-100': '#fe5d9f',
				'secondary-200': '#725ac1',
			},
		},
		plugins: [],
	},
};
