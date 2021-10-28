module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			boxShadow: {
				btnShadow: "15px 15px 37px 0 rgba(0, 92, 230, 0.35)",
				tabShadow: "5px 10px 20px 0 rgba(0, 92, 230, 0.15)",
				siderShadow: "15px 15px 15px 0 rgba(0, 92, 230, 0.04)",
			},
			spacing: {
				85: "23rem",
				68: "16.5rem",
				100: "30rem",
			},
			backgroundColor: {
				modalBG: "rgba(0, 0, 0, 0.4)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
