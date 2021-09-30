import React from "react";
import icon from "../../assets/DashboardIcons/icon.png";
import Button from "../Button";

const DashboardPostCard = ({
	avatar,
	heading,
	description,
	requireddeveloper,
	requiredDesigner,
	user,
	date,
}) => {
	return (
		<>
			<div className="border-2 border-blue-100 rounded-3xl p-8 w-full md:w-80 lg:w-85 mx-auto">
				<div className="flex items-center">
					<div className="w-20">
						<img className="w-full" src={icon} alt="icondashboard" />
					</div>
					<h1 className="text-xl text-blue-600 pl-2">{heading}</h1>
				</div>
				<p className="text-gray-600 mt-4">{description}</p>
				<hr className="bg-blue-400 my-3" />

				<div>
					<div className="text-blue-600">
						Required: {requireddeveloper}
						{requireddeveloper > 1 ? " Developers, " : " Developer, "}
						{requiredDesigner}
						{requiredDesigner > 1 ? " Designers" : " Designer"}
					</div>
					<div className="flex justify-between pt-2 pb-4">
						<div className="text-blue-600">By: {user}</div>
						<div className="text-gray-500 text-sm mb-5">{date}</div>
					</div>
				</div>
				<Button type="primary" size="full" children="Let's collab 🤝" />
			</div>
		</>
	);
};

export default DashboardPostCard;
