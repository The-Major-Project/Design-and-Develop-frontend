import React from "react";
import icon from "../../assets/NotificationIcons/icon.jpg";
import Button from "../Button";

const NotificationBar = ({ userImg, userName, reqType }) => {
	return (
		<div className="flex flex-col px-6 py-8 md:py-4 my-6 mx-auto items-center border-2 border-blue-100 rounded-3xl w-full md:flex-row max-w-5xl">
			<img
				className="w-16 h-16 object-cover object-center md:h-12 md:w-12 rounded-full"
				src={icon}
				alt={userName}
			/>
			<h1 className="text-blue-600 font-bold text-base md:ml-6 md:mr-2">
				{userName}
			</h1>

			{reqType === "collabReq" ? (
				<>
					<p className="text-gray-400 mb-5 md:mb-0">
						sent you a collaboration request 🤝
					</p>
					<div className="flex justify-evenly w-full md:w-auto md:ml-auto">
						<Button
							className="md:mx-8 "
							size="small"
							type="secondary"
							children="View Post"
						/>
						<Button size="small" type="primary" children="Accept" />
					</div>
				</>
			) : reqType === "collabRes" ? (
				<>
					<p className="text-gray-400 mb-5 md:mb-0">
						accepted your collab request 🎉
					</p>
					<Button
						className="md:ml-auto"
						size="small"
						type="success"
						children="View Group"
					/>
				</>
			) : reqType === "startedFollowing" ? (
				<>
					<p className="text-gray-400 mb-5 md:mb-0">started following you 🔥</p>
					<Button
						className="md:ml-auto"
						size="small"
						type="primary"
						children="Follow back"
					/>
				</>
			) : null}
		</div>
	);
};

export default NotificationBar;
