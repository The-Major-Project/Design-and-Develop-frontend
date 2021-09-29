import React from "react";
import Search from "../Search";

const DashboardHeader = () => {
	return (
		<div className="w-full flex items-center justify-evenly">
			<h1 className="text-2xl font-semibold text-gray-800">
				Welcome Back, <span className="text-blue-600">Jessica!</span>
			</h1>
			<Search />
		</div>
	);
};

export default DashboardHeader;
