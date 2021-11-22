import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { stateContext } from "../../../../../context/DNDContext";
import axios from "../../../../../api/api";
import { useParams } from "react-router-dom";

const GroupCard = ({ groupName, groupId }) => {
	const history = useHistory();
	const { setMessages, setMessageLoading, setSelectedGroupName } =
		useContext(stateContext);

	// const params = useParams();

	// useEffect(() => {
	// 	const repeatChat = async () => {
	// 		try {
	// 			const res = await axios.get(`/api/chat/message/${params.id}`);
	// 			console.log(res);
	// 			setMessages(res.data);
	// 			setMessageLoading(false);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};
	// 	repeatChat();
	// }, []);

	const getMessages = async () => {
		try {
			const res = await axios.get(`/api/chat/message/${groupId}`);
			console.log(res);
			setMessages(res.data);
			setMessageLoading(false);
		} catch (err) {
			console.log(err);
		}
		setSelectedGroupName(groupName);
		history.push(`/messages/group/${groupId}`);
	};
	return (
		<div
			onClick={getMessages}
			className="font-semibold my-2 bg-blue-200 hover:bg-blue-600 text-blue-900 hover:text-white cursor-pointer p-4 rounded-xl"
		>
			<h1>{groupName}</h1>
		</div>
	);
};

export default GroupCard;
