import React from "react";

const Footer = () => {
	return (
		<footer className="py-12 px-6 bg-gray-900 text-white">
			<div className="flex flex-col items-center md:flex-row md:justify-between max-w-7xl mx-auto">
				<h2 className="text-2xl font-semibold mb-5 md:mb-0">
					Design <span className="text-blue-700">&</span> Develop
				</h2>
				<p className="text-sm">2020 © Designed & Developed by M3Y</p>
			</div>
		</footer>
	);
};

export default Footer;
