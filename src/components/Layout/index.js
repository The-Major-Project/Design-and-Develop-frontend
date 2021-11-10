import React, { useState } from "react";
import Ham from "../../assets/Ham.svg";
import { motion } from "framer-motion";
import Search from "../Search";

const Layout = ({ sider, main }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const asideStyles = isSidebarOpen ? "translate-x-0 " : "-translate-x-full";
	const backDropStyles = isSidebarOpen ? "fixed " : "hidden";

	return (
		<>
			<div className="flex box-border">
				<aside
					className={`transform top-0 left-0 w-64 z-50 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300  ${asideStyles} lg:translate-x-0 lg:z-50 lg:w-80 lg:h-screen lg:sticky lg:overflow-y-hidden  lg:shadow-siderShadow `}
				>
					{sider}
				</aside>

				<div
					className={`w-full h-hull top-0 left-0 right-0 bottom-0 bg-gray-500 opacity-30 cursor-pointer filter z-30 ${backDropStyles} lg:hidden`}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				></div>

				<div className="w-full flex flex-col min-h-screen">
					<header className="z-30 flex w-full justify-evenly items-center bg-white px-6 py-3 sticky top-0 lg:z-20">
						<h1 className="hidden md:block text-2xl font-semibold text-gray-800">
							Welcome Back, <span className="text-blue-600">Jessica!</span>
						</h1>
						<Search />
						<div
							className="border-blue-500 px-2 py-1 flex flex-col justify-evenly h-8  rounded-md lg:hidden"
							onClick={() => setIsSidebarOpen(!isSidebarOpen)}
						>
							<motion.img
								animate={{
									scale: [1, 1.1, 1.1, 1, 1],
									rotate: [0, 0, 270, 270, 0],
								}}
								transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
								className="h-auto cursor-pointer"
								src={Ham}
								alt="pos"
							/>
						</div>
					</header>
					<section
						onClick={() => setIsSidebarOpen(false)}
						className="p-6 lg:p-10"
					>
						{main}
					</section>
				</div>
			</div>
		</>
	);
};

export default Layout;
