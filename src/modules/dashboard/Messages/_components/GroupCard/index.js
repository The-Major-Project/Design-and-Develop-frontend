import React from "react";

const GroupCard = ({ groupName }) => {
	return (
		<div className="font-semibold my-2 bg-blue-200 hover:bg-blue-600 text-blue-900 hover:text-white cursor-pointer p-4 rounded-xl">
			<h1>{groupName}</h1>
		</div>
	);
};

export default GroupCard;
