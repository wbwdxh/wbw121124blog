// tailwind.config.js
export default {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx,md}',
		'./components/**/*.{vue,js,ts,jsx,tsx,md}',
		'./layouts/**/*.{vue,js,ts,jsx,tsx,md}'
	],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {
			colors: {
			},
			fontFamily: {
				sans: ['Lato', 'PingFang SC', 'Microsoft YaHei', 'sans-serif']
			}
		}
	},
	plugins: []
}