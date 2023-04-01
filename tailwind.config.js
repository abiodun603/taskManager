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
				kblack2: '#1F1E1F',
				kgray: '#808080',
				kprimary: '#990099',
			},
		},
	},
	plugins: [],
};
