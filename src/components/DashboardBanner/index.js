import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import HandShake from "../../assets/HandShake.png";
const DashboardBanner = () => {
	return (
		<>
			<div className="w-full xl px-4 py-10 flex flex-col items-center justify-center text-center border-2 border-blue-100  rounded-3xl md:flex-row md:text-left md:py-6 md:justify-between lg:justify-center lg:items-center">
				<motion.img
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 1 }}
					src={HandShake}
					width="250"
					alt="hero-banner"
					className="hidden md:block"
				/>
				<div className="flex flex-col items-center justify-center md:items-start md:ml-6 lg:ml-10">
					<h1 className="text-3xl text-gray-800 font-bold">
						Got an idea?
						<br />
						Find people to work with you!
					</h1>
					<Button
						type="primary"
						children="Create a Collab Post 📝"
						size="medium"
						className="mt-6"
					/>
				</div>
			</div>
		</>
	);
};

export default DashboardBanner;
