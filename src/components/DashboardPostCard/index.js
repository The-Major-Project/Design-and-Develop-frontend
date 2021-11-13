import React, { useState } from "react";
import { toast } from "react-toastify";
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
	const [btnText, setBtnText] = useState("Let's collab 🤝");
	const [isReadMore, setIsReadMore] = useState(true);
	const [disabled, setDisabled] = useState(false);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	const sendCollabReq = () => {
		console.log("req send");
		setDisabled(true);
		setBtnText("Collab req sent 🛩️");
		toast.success("Your collaboration request was sent successfully 💯", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<>
			<div className="border-2 border-blue-100 rounded-3xl p-8 w-full md:w-80 lg:w-85 mx-auto flex flex-col">
				<div className="flex items-center">
					<div className="w-20">
						<img
							className="w-full object-cover object-center"
							src={icon}
							alt="icondashboard"
						/>
					</div>
					<h1 className="text-xl text-blue-600 pl-2">{heading}</h1>
				</div>
				<p className="text-gray-600 mt-4 flex-grow">
					{isReadMore ? description.slice(0, 200) : description}
					{description.length < 200 ? null : (
						<span
							onClick={toggleReadMore}
							className="text-blue-600 font-semibold cursor-pointer"
						>
							{isReadMore ? " ...Read more" : " Show less"}
						</span>
					)}
				</p>
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
				<Button
					type="primary"
					size="full"
					children={btnText}
					onClick={sendCollabReq}
					disabled={disabled}
				/>
			</div>
		</>
	);
};

export default DashboardPostCard;
