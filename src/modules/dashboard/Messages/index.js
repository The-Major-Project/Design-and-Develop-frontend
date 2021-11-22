import React from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";
import GroupWrapper from "./_components/GroupWrapper";
import MessageWrapper from "./_components/MessageWrapper";

const Messages = () => {
	return (
		<>
			<Layout
				sider={<SideMenu />}
				main={
					<div className="w-full h-110 flex mx-auto">
						<GroupWrapper />
						<MessageWrapper />
					</div>
				}
			/>
		</>
	);
};

export default Messages;
