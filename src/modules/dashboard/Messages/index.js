import React from "react";
import Layout from "../../../components/Layout";
import SideMenu from "../../../components/SideMenu";

const Messages = () => {
	return (
		<>
			<Layout sider={<SideMenu />} main={<div className="flex items-center justify-center">
				<h1 className="text-xl text-gray-400 font-semibold">Coming soon...</h1><span className="text-xl">⏰</span>
			</div>} />
		</>
	);
};

export default Messages;
