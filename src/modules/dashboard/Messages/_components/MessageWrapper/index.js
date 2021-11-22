import React, { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { stateContext } from "../../../../../context/DNDContext";
import MessageBox from "../MessageBox";
import axios from "./../../../../../api/api";

const MessageWrapper = () => {
	const {
		messages,
		messageLoading,
		setMessages,
		setMessageLoading,
		selectedGroupName,
	} = useContext(stateContext);
	// const params = useParams();
	// const messagesEndRef = useRef();

	// const scrollToBottom = () => {
	// 	messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	// };

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
	// 	scrollToBottom();
	// }, []);

	return (
		<div className="bg-blue-100 w-120 rounded-2xl h-110 overflow-y-scroll">
			<h1
				style={{ borderRadius: "15px 15px 0px 0px" }}
				className="text-2xl p-4 bg-blue-200 border-gray-50 text-blue-800 font-semibold"
			>
				{selectedGroupName}
			</h1>
			<div className="p-8">
				{messageLoading
					? "Select a group to view chats"
					: messages.length === 0
					? "Select a group to view chats"
					: messages.map((msg) => (
							<MessageBox
								key={msg._id}
								photoUrl={msg.senderPhoto}
								name={msg.senderName}
								time={msg.createdAt.substring(11, 16)}
								date={msg.createdAt.substring(0, 10)}
								body={msg.message}
							/>
					  ))}
				{/* <div ref={messagesEndRef} /> */}
			</div>
		</div>
	);
};

export default MessageWrapper;
