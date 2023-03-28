/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				kgray: '#808080',
			},
		},
	},
	plugins: [],
};
