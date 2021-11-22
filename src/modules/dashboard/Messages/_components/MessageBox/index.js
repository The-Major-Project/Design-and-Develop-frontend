import React from "react";

const MessageBox = ({ photoUrl, name, time, date, body }) => {
	return (
		<div className="flex items-center my-4">
			<img
				className="h-11 w-11 mr-2 object-cover object-center rounded-full"
				src={photoUrl}
				alt={name}
			/>
			<div
				style={{ borderRadius: "15px 15px 15px 0px" }}
				className="pl-4 pr-5 py-3 bg-white"
			>
				<h1 className="font-semibold text-sm text-blue-500">
					{name} | {time} {date}
				</h1>
				<div className=" text-sm">{body}</div>
			</div>
		</div>
	);
};

export default MessageBox;
