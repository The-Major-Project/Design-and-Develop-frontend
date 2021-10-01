import React from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import NotificationBar from "../../../components/NotificationBar";

const Notifications = () => {
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
							<NotificationBar userName="Manvi Jain" reqType="collabReq" />
							<NotificationBar userName="Mihir Verma" reqType="collabRes" />
							<NotificationBar
								userName="Meemansha Jain"
								reqType="startedFollowing"
							/>
							<NotificationBar userName="Mihir Verma" reqType="collabRes" />
							<NotificationBar
								userName="Meemansha Jain"
								reqType="startedFollowing"
							/>
							<NotificationBar userName="Mihir Verma" reqType="collabRes" />
							<NotificationBar
								userName="Meemansha Jain"
								reqType="startedFollowing"
							/>
						</div>
					</>
				}
			/>
		</>
	);
};

export default Notifications;
