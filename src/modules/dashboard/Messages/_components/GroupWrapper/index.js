import React from "react";
import GroupCard from "../GroupCard";

const GroupWrapper = () => {
	return (
		<div className="bg-blue-50 w-72 rounded-2xl mr-6">
			<h1
				style={{ borderRadius: "15px 15px 0px 0px" }}
				className="text-2xl bg-blue-200 border-gray-300 p-4"
			>
				<span className="font-semibold">My Groups</span> 🤝
			</h1>
			<div className="p-4">
				<GroupCard groupName="React Boilerplate" />
				<GroupCard groupName="Python" />
				<GroupCard groupName="React Major" />
			</div>
		</div>
	);
};

export default GroupWrapper;
