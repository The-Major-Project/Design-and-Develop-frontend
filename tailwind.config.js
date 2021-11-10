module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			boxShadow: {
				btnShadow: "15px 15px 37px 0 rgba(0, 92, 230, 0.35)",
				tabShadow: "0px 0px 20px 0 rgba(0, 92, 230, 0.35)",
				tabShadows: "0px 0px 20px 0 rgba(0, 92, 230, 0.14)",
				siderShadow: "15px 15px 15px 0 rgba(0, 92, 230, 0.04)",
			},
			spacing: {
				85: "23rem",
				68: "16.5rem",
				100: "30rem",
				110: "35rem",
			},
			backgroundColor: {
				modalBG: "rgba(0, 0, 0, 0.4)",
			},
		},
		zIndex: {
			'0': 0,
		   '10': 10,
		   '20': 20,
		   '30': 30,
		   '40': 40,
		   '50': 50,
		   '25': 25,
		   '75': 75,
		   '100': 100,
			'auto': 'auto',
		  },
		  minHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
			'500':"500px"
		   }
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
