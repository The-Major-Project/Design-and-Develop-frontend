import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import NotificationBar from "../../../components/NotificationBar";
import { stateContext } from "../../../context/DNDContext";
import axios from "../../../api/api";

const Notifications = () => {
	// notifications
	// const { currentUser } = useContext(stateContext);
	const [currentUser, setCurrentUser] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getUser = async () => {
			try {
				// setLoading(true);
				const res = await axios.get(
					`/api/user/${localStorage.getItem("userId")}`,
					{
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*",
							accessToken: localStorage.getItem("accessToken"),
						},
					}
				);
				setCurrentUser(res.data.data);
				setLoading(false);
				console.log(res);
			} catch (err) {}
		};
		getUser();
	}, []);

	return (
		<>
			<Layout
				sider={<SideMenu />}
				main={
					<>
						<div>
							<h1 className="text-2xl font-semibold text-center">
								Notifications
							</h1>

							{loading
								? "Loading..."
								: currentUser.notifications.map((notification) => {
										return (
											<NotificationBar
												key={notification._id}
												reqType={notification.notifType}
												senderUserId={notification.userId}
												postId={notification.postId}
												notifId={notification._id}
											/>
										);
								  })}
						</div>
					</>
				}
			/>
		</>
	);
};

export default Notifications;
