import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import NotificationBar from "../../../components/NotificationBar";
import axios from "../../../api/api";

const Notifications = () => {
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
			} catch (err) {
				console.log(err);
			}
		};
		getUser();
		// setInterval(() => getUser(), 2000);
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

							{loading ? (
								"Loading..."
							) : currentUser.notifications.length === 0 ? (
								<div className="flex items-center justify-center mt-8">
									<h1 className="text-base font-semibold text-gray-400 text-center">
										No Notifications to show
									</h1>
									<span>😢</span>
								</div>
							) : (
								currentUser.notifications.map((notification) => {
									return (
										<NotificationBar
											key={notification._id}
											reqType={notification.notifType}
											senderUserId={notification.userId}
											postId={notification.postId}
											notifId={notification._id}
											setCurrentUser={setCurrentUser}
										/>
									);
								})
							)}
						</div>
					</>
				}
			/>
		</>
	);
};

export default Notifications;
