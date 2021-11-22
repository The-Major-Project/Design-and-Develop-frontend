import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import GroupWrapper from "./_components/GroupWrapper";
import MessageWrapper from "./_components/MessageWrapper";
import axios from "./../../../api/api";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { stateContext } from "../../../context/DNDContext";
import { useParams } from "react-router";

const Messages = () => {
	const { currentUser, setMessages, messages } = useContext(stateContext);
	const params = useParams();
	const [groups, setGroups] = useState([]);
	const [loading, setLoading] = useState(true);
	const [msgBody, setMsgBody] = useState({
		body: "",
	});

	const sendMessage = async () => {
		console.log(msgBody);
		try {
			const res = await axios.post("/api/chat/message", {
				message: msgBody.body,
				senderName: currentUser.name,
				senderPhoto: currentUser.profileimage,
				groupId: params.id,
			});
			console.log(res);
			// setMessages({
			// 	...messages,

			// });
			setMsgBody({
				body: "",
			});
		} catch (err) {
			console.log(err);
		}
	};

	// GET Groups
	useEffect(() => {
		const getGroups = async () => {
			try {
				const res = await axios.get(
					`/api/chat/group/${localStorage.getItem("userId")}`
				);
				console.log(res);
				setGroups(res.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		getGroups();
	}, []);
	return (
		<>
			<Layout
				sider={<SideMenu />}
				main={
					<>
						<div className="w-full h-110 flex mx-auto">
							<GroupWrapper loading={loading} groupList={groups} />
							<div>
								<MessageWrapper />
								{window.location.pathname.includes("/group") ? (
									<div className="flex items-center justify-center mt-5">
										<Input
											className="w-110 mr-4"
											inputType="input"
											type="text"
											placeholder="Type your message here..."
											name="body"
											value={msgBody.body}
											state={msgBody}
											setState={setMsgBody}
										/>
										<Button type="primary" size="medium" onClick={sendMessage}>
											Send 🚀
										</Button>
									</div>
								) : null}
							</div>
						</div>
					</>
				}
			/>
		</>
	);
};

export default Messages;
