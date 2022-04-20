module.exports = {
	content: [
		"./app/index.html",
		"./app/**/*.{vue,js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				lightcyan: "hsl(193, 38%, 86%)",
				neongreen: "hsl(150, 100%, 66%)",
				grayishblue: "hsl(217, 19%, 38%)",
				darkgrayishblue: "hsl(217, 19%, 24%)",
				darkblue: "hsl(218, 23%, 16%)"

			},
			boxShadow: {
				glow: "0 0 20px #0000"
			},
			screens: {
				desktop: "375px"
			}
		}
	},
	plugins: []
};
