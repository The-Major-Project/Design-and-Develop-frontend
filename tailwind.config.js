module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			boxShadow: {
				btnShadow: "15px 15px 37px 0 rgba(0, 92, 230, 0.35)",
				siderShadow: "15px 15px 15px 0 rgba(0, 92, 230, 0.04)",
			},
			spacing: {
				85: "23rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
