const colors = require('tailwindcss/colors')

module.exports = {
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
