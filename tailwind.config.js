const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'Roboto', 'Arial', '-system-ui'],
			},
			colors: {
				zinc: colors.zinc,
			},
		},
	},
}
