import React from "react";
import MessageBox from "../MessageBox";

const MessageWrapper = () => {
	return (
		<div className="bg-blue-100 w-120 rounded-2xl">
			<h1
				style={{ borderRadius: "15px 15px 0px 0px" }}
				className="text-2xl p-4 bg-blue-200 border-gray-50 text-blue-800 font-semibold"
			>
				React Boilerplate
			</h1>
			<div className="p-8">
				<MessageBox />
				<MessageBox />
				<MessageBox />
				<MessageBox />
			</div>
		</div>
	);
};

export default MessageWrapper;
