import React from "react";
import GroupCard from "../GroupCard";

const GroupWrapper = ({ groupList, loading, getMsgs }) => {
	return (
		<div className="bg-blue-50 w-72 rounded-2xl mr-6">
			<h1
				style={{ borderRadius: "15px 15px 0px 0px" }}
				className="text-2xl bg-blue-200 border-gray-300 p-4"
			>
				<span className="font-semibold">My Groups</span> 🤝
			</h1>
			<div className="p-4">
				{groupList.length === 0 ? (
					<h1 className="text-lg text-center">No Groups to show 😢</h1>
				) : (
					groupList.map((group) => (
						<GroupCard
							key={group.groupId}
							groupName={group.groupName}
							groupId={group.groupId}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default GroupWrapper;
