import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import icon from "../../assets/DashboardIcons/icon.png";
import Button from "../Button";

const DashboardPostCard = ({
	avatar,
	heading,
	description,
	requireddeveloper,
	requiredDesigner,
	user,
	date,
	id,
	userId,
}) => {
	const icon =
		"https://cdn.dribbble.com/users/281679/screenshots/14892777/media/dda7cef00b08512ac10faec0cd7c630d.png?compress=1&resize=1600x1200";
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
			<div className="border-2 border-blue-100 rounded-3xl p-8 w-full md:w-80 lg:w-85 mx-auto min-h-card flex flex-col">
				<div className="flex items-center">
					<div className="w-12 h-12">
						<img
							className="rounded-full w-full h-full object-cover object-center z-0"
							src={avatar || icon}
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
						<div className="text-blue-600">
							By: <Link to={`/profile/user/${userId}`}>{user}</Link>
						</div>
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
